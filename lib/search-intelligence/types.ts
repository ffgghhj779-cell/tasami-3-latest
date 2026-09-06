/** Tasami Search Intelligence — shared types */

export type SearchLocale = "ar" | "en" | "ur" | "hi";

export type ServiceKind = "offering" | "category" | "tech" | "sector" | "pillar";

export type RelationStrength = "direct" | "strong" | "medium" | "weak" | "contextual";

export type SearchIntent =
  | "informational"
  | "navigational"
  | "commercial"
  | "transactional"
  | "local"
  | "problem"
  | "urgent"
  | "status"
  | "requirements"
  | "documents"
  | "cost"
  | "followup";

export type JourneyStage =
  | "problem"
  | "discovery"
  | "identification"
  | "documents"
  | "application"
  | "followup"
  | "completion";

export type SearchNode = {
  id: string;
  kind: ServiceKind;
  /** Stable i18n key under gov/tech/sectors/home when applicable */
  i18nKey: string;
  href: string;
  /** Hub roots this node belongs to */
  hubs: string[];
  /** Match phrases — Arabic + English + Urdu + Roman + typos (normalized at runtime) */
  aliases: string[];
  platforms?: string[];
  related?: { id: string; strength: RelationStrength }[];
  intents?: SearchIntent[];
  priority?: number;
  /** SEO tier for prioritization */
  tier?: "S" | "A" | "B" | "C";
};

export type MatchHit = {
  node: SearchNode;
  score: number;
  strength: RelationStrength;
  matchedOn: string[];
  reasons: string[];
};

export type DisambiguationOption = {
  labelKey: string;
  hint: string;
  hubs: string[];
};

export type SearchResult = {
  query: string;
  normalized: string;
  language: SearchLocale | "mixed" | "unknown";
  primary: MatchHit[];
  related: MatchHit[];
  ambiguityScore: number;
  needsClarification: boolean;
  clarifyingQuestion?: string;
  disambiguation?: DisambiguationOption[];
  detectedHubs: string[];
  intents: SearchIntent[];
};

export type ServiceSeoPack = {
  id: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  semanticKeywords: string[];
  faqs: { q: string; a: string }[];
};
