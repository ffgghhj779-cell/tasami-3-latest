import type { MetadataRoute } from "next";
import { locales } from "@/i18n";
import { GOV_SLUGS, TECH_SLUGS } from "@/lib/content-keys";
import { GOV_OFFERINGS } from "@/lib/gov-offerings";
import { SITE_URL } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog";

const STATIC: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/government", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services/tech", priority: 0.9, changeFrequency: "weekly" },
  { path: "/sectors", priority: 0.85, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/our-work", priority: 0.6, changeFrequency: "monthly" },
  { path: "/request", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.3, changeFrequency: "monthly" },
];

function languageAlternates(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
  ) as Record<string, string>;
}

/** Date of the last content release — bump when page content changes. */
const CONTENT_UPDATED = new Date("2026-10-03T00:00:00+03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = CONTENT_UPDATED;
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

  // Articles exist in Arabic only; other locales canonicalise to /ar.
  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${SITE_URL}/ar/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
