import type { MetadataRoute } from "next";
import { locales } from "@/i18n";
import { GOV_SLUGS, TECH_SLUGS } from "@/lib/content-keys";
import { GOV_OFFERINGS } from "@/lib/gov-offerings";
import { SITE_URL } from "@/lib/seo";

const STATIC: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services/government", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services/tech", priority: 0.9, changeFrequency: "weekly" },
  { path: "/sectors", priority: 0.85, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.3, changeFrequency: "monthly" },
];

function languageAlternates(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
  ) as Record<string, string>;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const item of STATIC) {
      entries.push({
        url: `${SITE_URL}/${locale}${item.path}`,
        lastModified: now,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: { languages: languageAlternates(item.path) },
      });
    }

    for (const slug of Object.values(GOV_SLUGS)) {
      const path = `/services/government/${slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: languageAlternates(path) },
      });
    }

    for (const offering of GOV_OFFERINGS) {
      const catSlug = GOV_SLUGS[offering.category];
      const path = `/services/government/${catSlug}/${offering.slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: { languages: languageAlternates(path) },
      });
    }

    for (const slug of Object.values(TECH_SLUGS)) {
      const path = `/services/tech/${slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: languageAlternates(path) },
      });
    }
  }

  return entries;
}
