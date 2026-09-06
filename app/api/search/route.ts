import { NextResponse } from "next/server";
import { routeSearch, suggestQueries } from "@/lib/search-intelligence";

export const runtime = "nodejs";

/** GET /api/search?q=نقل+كفالة */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").slice(0, 200);
  const limit = Math.min(Number(searchParams.get("limit") || 8), 20);

  if (!q.trim()) {
    return NextResponse.json({
      ok: true,
      empty: true,
      suggestions: suggestQueries(),
      result: null,
    });
  }

  const result = routeSearch(q, limit);
  return NextResponse.json({
    ok: true,
    empty: false,
    suggestions: suggestQueries(q),
    result: {
      query: result.query,
      normalized: result.normalized,
      language: result.language,
      ambiguityScore: result.ambiguityScore,
      needsClarification: result.needsClarification,
      clarifyingQuestion: result.clarifyingQuestion,
      detectedHubs: result.detectedHubs,
      intents: result.intents,
      disambiguation: result.disambiguation,
      primary: result.primary.map(serializeHit),
      related: result.related.map(serializeHit),
    },
  });
}

function serializeHit(hit: {
  score: number;
  strength: string;
  matchedOn: string[];
  reasons: string[];
  node: {
    id: string;
    kind: string;
    i18nKey: string;
    href: string;
    hubs: string[];
    platforms?: string[];
    tier?: string;
  };
}) {
  return {
    id: hit.node.id,
    kind: hit.node.kind,
    i18nKey: hit.node.i18nKey,
    href: hit.node.href,
    hubs: hit.node.hubs,
    platforms: hit.node.platforms || [],
    tier: hit.node.tier || null,
    score: hit.score,
    strength: hit.strength,
    matchedOn: hit.matchedOn,
  };
}
