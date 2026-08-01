import type { Metadata } from "next";
import { getWhatsAppUrl } from "@/lib/site";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://tasami.sa";

export const SITE_NAME = "تسامي";
export const SITE_NAME_EN = "Tasami";

const DEFAULT_DESCRIPTION_AR =
  "تسامي — منصة سعودية للخدمات الحكومية والتقنية. بسيطة. سريعة. بأربع لغات. دعم عبر واتساب ومُنجز على مدار الساعة.";

const DEFAULT_KEYWORDS = [
  "تسامي",
  "خدمات حكومية سعودية",
  "تجديد إقامة",
  "سجل تجاري",
  "ناجز",
  "أبشر",
  "خدمات تقنية",
  "تصميم مواقع",
  "تطبيقات جوال",
  "Tasami",
  "Saudi government services",
];

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION_AR,
  path = "",
  locale = "ar",
}: {
  title: string;
  description?: string;
  path?: string;
  locale?: string;
}): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: DEFAULT_KEYWORDS,
    authors: [{ name: SITE_NAME }],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        ar: `${SITE_URL}/ar${path}`,
        en: `${SITE_URL}/en${path}`,
        ur: `${SITE_URL}/ur${path}`,
        hi: `${SITE_URL}/hi${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : locale,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function organizationJsonLd() {
  const waUrl = getWhatsAppUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: SITE_NAME_EN,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: DEFAULT_DESCRIPTION_AR,
    sameAs: waUrl === "#" ? [] : [waUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["ar", "en", "ur", "hi"],
        url: waUrl,
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  };
}
