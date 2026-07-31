/** Stable keys shared across pages — labels live in messages/*.json */

export const GOV_KEYS = [
  "passports",
  "labor",
  "commerce",
  "zakat",
  "municipal",
  "civilDefense",
  "gosi",
  "civilStatus",
  "najiz",
  "traffic",
  "health",
  "ejar",
  "investment",
] as const;

export const TECH_KEYS = [
  "websites",
  "mobile",
  "maps",
  "marketing",
  "automation",
  "support",
  "ai",
  "data",
  "cloud",
] as const;

export const SECTOR_KEYS = [
  "restaurants",
  "clinics",
  "factories",
  "shops",
  "salons",
  "contracting",
  "realEstate",
  "institutes",
  "law",
  "hotels",
  "education",
  "logistics",
  "agriculture",
  "nonprofit",
  "startups",
] as const;

export const TRUST_PLATFORM_KEYS = [
  "absher",
  "qiwa",
  "commerce",
  "balady",
  "zakat",
  "nafith",
  "absherBusiness",
  "gosi",
  "najiz",
  "sehaty",
  "ejar",
  "mudad",
  "musaned",
  "subul",
  "nusuk",
  "meras",
  "monshaat",
  "misa",
] as const;

export const GOV_SLUGS: Record<(typeof GOV_KEYS)[number], string> = {
  passports: "jawazat",
  labor: "omala",
  commerce: "tijara",
  zakat: "zakat",
  municipal: "baladiya",
  civilDefense: "difaa-madani",
  gosi: "taminat",
  civilStatus: "ahwal",
  najiz: "najiz",
  traffic: "muror",
  health: "sehha",
  ejar: "ejar",
  investment: "istithmar",
};

export const HOME_CORE_KEYS = ["gov", "tech", "sectors"] as const;
export const HOME_WHY_KEYS = [
  "speed",
  "trust",
  "support",
  "clarity",
  "multilang",
  "endtoend",
] as const;

export const HOME_PROCESS_KEYS = ["one", "two", "three"] as const;

export type GovKey = (typeof GOV_KEYS)[number];
export type TechKey = (typeof TECH_KEYS)[number];
export type SectorKey = (typeof SECTOR_KEYS)[number];
