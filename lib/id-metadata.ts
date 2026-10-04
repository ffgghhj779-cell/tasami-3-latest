import type { Metadata } from "next";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/seo";

export function buildIdMetadata({
  title,
  description,
  path,
  equivalentPath,
}: {
  title: string;
  description: string;
  path: string;
  equivalentPath?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} — Tasami`;
  const languages: Record<string, string> = { id: url };
  if (equivalentPath !== undefined) {
    for (const l of ["ar", "en", "ur", "hi"]) languages[l] = `${SITE_URL}/${l}${equivalentPath}`;
    languages["x-default"] = `${SITE_URL}/ar${equivalentPath}`;
  }

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url,
      siteName: "Tasami",
      title: fullTitle,
      description,
      images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Tasami" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE_URL] },
    robots: { index: true, follow: true },
  };
}
