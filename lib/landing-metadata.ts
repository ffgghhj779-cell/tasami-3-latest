import type { Metadata } from "next";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/seo";
import { ID_ALTERNATE_BY_PATH } from "@/lib/id-landing";
import { BN_ALTERNATE_BY_PATH } from "@/lib/bn-landing";

const LANDING_ALTERNATES: Record<string, Record<string, string>> = {
  id: ID_ALTERNATE_BY_PATH,
  bn: BN_ALTERNATE_BY_PATH,
};

export type LandingMetadataInput = {
  title: string;
  description: string;
  path: string;
  equivalentPath?: string;
  image?: string;
  publishedTime?: string;
};

/** Metadata for the standalone language landings (/id, /bn) that live outside next-intl. */
export function buildLandingMetadata(
  lang: "id" | "bn",
  ogLocale: string,
  { title, description, path, equivalentPath, image, publishedTime }: LandingMetadataInput
): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} — Tasami`;
  const languages: Record<string, string> = { [lang]: url };
  if (equivalentPath !== undefined) {
    for (const l of ["ar", "en", "ur", "hi"]) languages[l] = `${SITE_URL}/${l}${equivalentPath}`;
    for (const [other, map] of Object.entries(LANDING_ALTERNATES)) {
      if (other !== lang && map[equivalentPath]) languages[other] = `${SITE_URL}${map[equivalentPath]}`;
    }
    languages["x-default"] = `${SITE_URL}/ar${equivalentPath}`;
  }
  const og = image
    ? { url: `${SITE_URL}${image}`, width: 1200, height: 675, alt: title }
    : { url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Tasami" };

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url, languages },
    openGraph: {
      ...(publishedTime ? { type: "article" as const, publishedTime } : { type: "website" as const }),
      locale: ogLocale,
      url,
      siteName: "Tasami",
      title: fullTitle,
      description,
      images: [og],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [og.url] },
    robots: { index: true, follow: true },
  };
}
