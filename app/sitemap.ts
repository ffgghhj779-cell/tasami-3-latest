import type { MetadataRoute } from "next";
import { locales } from "@/i18n";
import { GOV_SLUGS, TECH_SLUGS } from "@/lib/content-keys";
import { GOV_OFFERINGS } from "@/lib/gov-offerings";
import { SITE_URL } from "@/lib/seo";

const STATIC = [
  "",
  "/services/government",
  "/services/tech",
  "/sectors",
  "/login",
  "/register",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of STATIC) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
    for (const slug of Object.values(GOV_SLUGS)) {
      entries.push({
        url: `${SITE_URL}/${locale}/services/government/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
    for (const offering of GOV_OFFERINGS) {
      const catSlug = GOV_SLUGS[offering.category];
      entries.push({
        url: `${SITE_URL}/${locale}/services/government/${catSlug}/${offering.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.55,
      });
    }
    for (const slug of Object.values(TECH_SLUGS)) {
      entries.push({
        url: `${SITE_URL}/${locale}/services/tech/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
