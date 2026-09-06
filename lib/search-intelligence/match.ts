import { HUB_DISAMBIGUATION, SEARCH_CATALOG, getNodeById } from "./catalog";
import {
  detectLanguage,
  includesNormalized,
  normalizeQuery,
  tokenize,
  tokenOverlap,
} from "./normalize";
import type {
  MatchHit,
  RelationStrength,
  SearchIntent,
  SearchNode,
  SearchResult,
} from "./types";

const STRENGTH_FROM_SCORE = (score: number): RelationStrength => {
  if (score >= 88) return "direct";
  if (score >= 72) return "strong";
  if (score >= 55) return "medium";
  if (score >= 40) return "weak";
  return "contextual";
};

function scoreNode(query: string, tokens: string[], node: SearchNode): MatchHit | null {
  const matchedOn: string[] = [];
  const reasons: string[] = [];
  let bestAlias = 0;

  for (const alias of node.aliases) {
    const overlap = tokenOverlap(tokens, alias);
    const contains =
      includesNormalized(query, alias) || includesNormalized(alias, query);
    let aliasScore = overlap * 100;
    if (contains) aliasScore = Math.max(aliasScore, 95);
    if (normalizeQuery(alias) === normalizeQuery(query)) aliasScore = 100;
    if (aliasScore > bestAlias) {
      bestAlias = aliasScore;
      if (aliasScore >= 40) {
        matchedOn.push(alias);
        reasons.push(`alias:${alias}`);
      }
    }
  }

  let hubHits = 0;
  for (const hub of node.hubs) {
    const h = normalizeQuery(hub);
    if (tokens.some((t) => t === h || t.includes(h) || h.includes(t))) {
      hubHits += 1;
      matchedOn.push(hub);
      reasons.push(`hub:${hub}`);
    }
  }
  const hubScore = node.hubs.length
    ? (hubHits / node.hubs.length) * 70 + hubHits * 8
    : 0;

  let score = Math.max(bestAlias, hubScore * 0.85);
  if (bestAlias >= 70 && hubHits > 0) score = Math.min(100, bestAlias + hubHits * 4);

  // Priority / tier boost for commercial conversion pages
  const tierBoost =
    node.tier === "S" ? 6 : node.tier === "A" ? 3 : node.tier === "B" ? 1 : 0;
  const kindBoost =
    node.kind === "offering" ? 4 : node.kind === "category" ? 2 : 0;

  if (score < 32) return null;

  score = Math.min(100, score + tierBoost + kindBoost + (node.priority || 0) * 0.02);

  return {
    node,
    score: Math.round(score * 10) / 10,
    strength: STRENGTH_FROM_SCORE(score),
    matchedOn: Array.from(new Set(matchedOn)).slice(0, 6),
    reasons: Array.from(new Set(reasons)).slice(0, 6),
  };
}

function detectHubs(tokens: string[]): string[] {
  const known = new Set(
    SEARCH_CATALOG.flatMap((n) => n.hubs.map((h) => normalizeQuery(h)))
  );
  return tokens.filter((t) => known.has(t));
}

function inferIntents(tokens: string[], hits: MatchHit[]): SearchIntent[] {
  const intents = new Set<SearchIntent>();
  for (const h of hits) {
    h.node.intents?.forEach((i) => intents.add(i));
  }
  const joined = tokens.join(" ");
  if (/كيف|شروط|اوراق|مستند|requirements|how|what/.test(joined)) {
    intents.add("requirements");
    intents.add("informational");
  }
  if (/كم|سعر|تكلفة|price|cost/.test(joined)) intents.add("cost");
  if (/متابعة|حالة|status|tracking/.test(joined)) intents.add("status");
  if (/عاجل|ضروري|انتهت|منتهي|urgent|expired/.test(joined)) intents.add("urgent");
  if (/ابغى|ابي|عايز|اطلب|انجز|مكتب|معقب|want|need/.test(joined)) {
    intents.add("transactional");
    intents.add("commercial");
  }
  if (!intents.size) intents.add("commercial");
  return Array.from(intents);
}

function expandRelated(primary: MatchHit[]): MatchHit[] {
  const seen = new Set(primary.map((p) => p.node.id));
  const related: MatchHit[] = [];

  for (const hit of primary.slice(0, 5)) {
    for (const rel of hit.node.related || []) {
      if (seen.has(rel.id)) continue;
      const node = getNodeById(rel.id);
      if (!node) continue;
      seen.add(rel.id);
      const strengthScore =
        rel.strength === "direct"
          ? 78
          : rel.strength === "strong"
            ? 68
            : rel.strength === "medium"
              ? 55
              : rel.strength === "weak"
                ? 42
                : 36;
      related.push({
        node,
        score: Math.min(hit.score - 8, strengthScore),
        strength: rel.strength,
        matchedOn: [`related:${hit.node.id}`],
        reasons: [`related_from:${hit.node.i18nKey}`],
      });
    }
  }

  return related.sort((a, b) => b.score - a.score).slice(0, 8);
}

/**
 * Core Search Router:
 * QUERY → normalize → hubs/entities → intent → match → related → clarify
 */
export function routeSearch(rawQuery: string, limit = 8): SearchResult {
  const query = rawQuery.trim();
  const normalized = normalizeQuery(query);
  const tokens = tokenize(normalized);
  const language = detectLanguage(query);
  const detectedHubs = detectHubs(tokens);

  if (!normalized || tokens.length === 0) {
    return {
      query,
      normalized,
      language,
      primary: [],
      related: [],
      ambiguityScore: 0,
      needsClarification: false,
      detectedHubs: [],
      intents: [],
    };
  }

  const scored: MatchHit[] = [];
  for (const node of SEARCH_CATALOG) {
    const hit = scoreNode(normalized, tokens, node);
    if (hit) scored.push(hit);
  }

  scored.sort((a, b) => b.score - a.score || (b.node.priority || 0) - (a.node.priority || 0));

  const primary = scored.filter((h) => h.score >= 45).slice(0, limit);
  const related = expandRelated(primary).filter(
    (r) => !primary.some((p) => p.node.id === r.node.id)
  );

  const top = primary[0];
  const second = primary[1];
  let ambiguityScore = 0;
  if (top && second) {
    ambiguityScore = Math.max(
      0,
      Math.min(100, 100 - (top.score - second.score) * 4)
    );
    // Same kind competing hubs bump ambiguity
    if (top.node.kind === second.node.kind && top.score - second.score < 12) {
      ambiguityScore = Math.max(ambiguityScore, 70);
    }
  }

  // Single ambiguous hub word like "نقل" alone
  const loneHub =
    tokens.length <= 2 &&
    detectedHubs.length === 1 &&
    HUB_DISAMBIGUATION[detectedHubs[0]];

  const needsClarification =
    Boolean(loneHub) ||
    (ambiguityScore >= 72 && primary.length >= 2 && (top?.score || 0) < 92);

  const disambiguation = loneHub
    ? HUB_DISAMBIGUATION[detectedHubs[0]]
    : undefined;

  let clarifyingQuestion: string | undefined;
  if (needsClarification) {
    if (detectedHubs.includes("نقل")) {
      clarifyingQuestion =
        "تقصد نقل كفالة عامل، ولا نقل ملكية سجل، ولا نقل ترخيص؟";
    } else if (detectedHubs.includes("كفالة")) {
      clarifyingQuestion = "هل تبحث عن نقل كفالة أم خدمات عمالة عامة؟";
    } else if (detectedHubs.includes("عامل")) {
      clarifyingQuestion =
        "هل تحتاج نقل خدمات، تجديد إقامة، خروج وعودة، أم تعديل مهنة؟";
    } else {
      clarifyingQuestion = "وضح طلبك بجملة قصيرة لنوجّهك لأدق خدمة.";
    }
  }

  return {
    query,
    normalized,
    language,
    primary,
    related,
    ambiguityScore: Math.round(ambiguityScore),
    needsClarification,
    clarifyingQuestion,
    disambiguation,
    detectedHubs,
    intents: inferIntents(tokens, primary),
  };
}

export function suggestQueries(seed = ""): string[] {
  const defaults = [
    "نقل كفالة",
    "تجديد إقامة عامل",
    "خروج وعودة",
    "فتح سجل تجاري",
    "رخصة بلدية",
    "تعديل مهنة",
    "تأشيرة زيارة عائلية",
    "رفع ملف مدد",
  ];
  if (!seed.trim()) return defaults;
  const result = routeSearch(seed, 5);
  const fromHits = result.primary
    .map((h) => h.matchedOn[0])
    .filter(Boolean) as string[];
  return Array.from(new Set([...fromHits, ...defaults])).slice(0, 8);
}
