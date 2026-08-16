/**
 * Official Saudi platforms Khalsana operates through.
 * Logos live in /public/platforms/{key}.svg
 */
export const PLATFORM_KEYS = [
  "absher",
  "qiwa",
  "muqeem",
  "businessCenter",
  "balady",
  "sehhaty",
  "gosi",
] as const;

export type PlatformKey = (typeof PLATFORM_KEYS)[number];

export type PlatformDef = {
  key: PlatformKey;
  /** Local asset under /public/platforms */
  logo: string;
  /** Official portal */
  href: string;
};

export const PLATFORMS: PlatformDef[] = [
  {
    key: "absher",
    logo: "/platforms/absher.svg",
    href: "https://www.absher.sa",
  },
  {
    key: "qiwa",
    logo: "/platforms/qiwa.svg",
    href: "https://www.qiwa.sa",
  },
  {
    key: "muqeem",
    logo: "/platforms/muqeem.svg",
    href: "https://muqeem.sa",
  },
  {
    key: "businessCenter",
    logo: "/platforms/businessCenter.svg",
    href: "https://business.sa",
  },
  {
    key: "balady",
    logo: "/platforms/balady.svg",
    href: "https://balady.gov.sa",
  },
  {
    key: "sehhaty",
    logo: "/platforms/sehhaty.svg",
    href: "https://www.seha.sa",
  },
  {
    key: "gosi",
    logo: "/platforms/gosi.svg",
    href: "https://www.gosi.gov.sa",
  },
];
