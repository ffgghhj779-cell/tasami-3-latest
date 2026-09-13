/**
 * Official / partner platforms Tasami operates through.
 * Logos: /public/platforms/{key}.svg|png
 */
export const PLATFORM_KEYS = [
  "absher",
  "jawazat",
  "qiwa",
  "muqeem",
  "mudad",
  "musaned",
  "commerce",
  "businessCenter",
  "balady",
  "zatca",
  "gosi",
  "sehhaty",
  "nelc",
  "saudiGreen",
  "sabic",
] as const;

export type PlatformKey = (typeof PLATFORM_KEYS)[number];

export type PlatformDef = {
  key: PlatformKey;
  logo: string;
  /** Official portal */
  href: string;
  /** Related government category slug under /services/government/{slug} */
  govSlug?: string;
  /** Related sector key (links to /sectors) */
  sectorKey?: string;
};

export const PLATFORMS: PlatformDef[] = [
  {
    key: "absher",
    logo: "/platforms/absher.png",
    href: "https://www.absher.sa",
    govSlug: "jawazat",
  },
  {
    key: "jawazat",
    logo: "/platforms/jawazat.png",
    href: "https://www.gdp.gov.sa",
    govSlug: "jawazat",
  },
  {
    key: "qiwa",
    logo: "/platforms/qiwa.svg",
    href: "https://www.qiwa.sa",
    govSlug: "omala",
  },
  {
    key: "muqeem",
    logo: "/platforms/muqeem.svg",
    href: "https://muqeem.sa",
    govSlug: "jawazat",
  },
  {
    key: "mudad",
    logo: "/platforms/mudad.png",
    href: "https://mudad.com.sa",
    govSlug: "omala",
  },
  {
    key: "musaned",
    logo: "/platforms/musaned.png",
    href: "https://musaned.com.sa",
    govSlug: "omala",
  },
  {
    key: "commerce",
    logo: "/platforms/commerce.png",
    href: "https://mc.gov.sa",
    govSlug: "tijara",
  },
  {
    key: "businessCenter",
    logo: "/platforms/businessCenter.svg",
    href: "https://business.sa",
    govSlug: "tijara",
  },
  {
    key: "balady",
    logo: "/platforms/balady.svg",
    href: "https://balady.gov.sa",
    govSlug: "baladiya",
  },
  {
    key: "zatca",
    logo: "/platforms/zatca.png",
    href: "https://zatca.gov.sa",
    govSlug: "zakat",
  },
  {
    key: "gosi",
    logo: "/platforms/gosi.png",
    href: "https://www.gosi.gov.sa",
    govSlug: "taminat",
  },
  {
    key: "sehhaty",
    logo: "/platforms/sehhaty.svg",
    href: "https://www.seha.sa",
    govSlug: "sehha",
  },
  {
    key: "nelc",
    logo: "/platforms/nelc.png",
    href: "https://nelc.gov.sa",
    sectorKey: "institutes",
  },
  {
    key: "saudiGreen",
    logo: "/platforms/saudiGreen.png",
    href: "https://www.saudigreeninitiative.org",
    govSlug: "baladiya",
  },
  {
    key: "sabic",
    logo: "/platforms/sabic.png",
    href: "https://www.sabic.com",
    sectorKey: "factories",
  },
];
