import type { Metadata } from "next";
import { getTikTokUrl, getPhoneNumber, getWhatsAppNumber, getWhatsAppUrl } from "@/lib/site";

/** Canonical production domain (Cloudflare + www). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.tasamiservices.com";

export const SITE_NAME = "تَسَامِي";
export const SITE_NAME_EN = "Tasami";
export const SITE_DOMAIN = "tasamiservices.com";

/** Open Graph share image — Tasami only (new filename busts WhatsApp/FB cache). */
export const OG_IMAGE_PATH = "/og-tasami.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

const DEFAULT_DESCRIPTION_AR =
  "تسامي — ننجز معاملاتك ببساطة. تعقيب حكومي وحلول تقنية عبر المنصات الرسمية. لسنا جهة حكومية — ابدأ من واتساب.";

const DEFAULT_DESCRIPTION_EN =
  "Tasami — we finish your transactions simply. Government follow-up and tech solutions via official platforms. Not a government entity — start on WhatsApp.";

/** Share / browser title without pipe (client request). */
export function formatPageTitle(title: string, locale = "ar"): string {
  const brand = locale === "ar" ? SITE_NAME : SITE_NAME_EN;
  if (!title || title === brand || title === SITE_NAME_EN) {
    return locale === "ar"
      ? "تسامي — تعقيب حكومي وحلول تقنية"
      : "Tasami — Government follow-up & tech solutions";
  }
  return `${title} — ${brand}`;
}

const DEFAULT_KEYWORDS = [
  "تسامي",
  "تَسَامِي",
  "Tasami",
  "tasamiservices",
  "خدمات حكومية سعودية",
  "إنجاز معاملات حكومية",
  "تجديد إقامة",
  "سجل تجاري",
  "ناجز",
  "أبشر",
  "قوى",
  "مقيم",
  "زكاة وضريبة",
  "خدمات تقنية",
  "تصميم مواقع السعودية",
  "تطبيقات جوال",
  "أتمتة أعمال",
  "Saudi government services",
  "Saudi business services Riyadh",
  "iqama renewal service",
  "commercial registration Saudi Arabia",
];

const OG_LOCALE: Record<string, string> = {
  ar: "ar_SA",
  en: "en_US",
  ur: "ur_PK",
  hi: "hi_IN",
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  locale = "ar",
  index = true,
  keywords = DEFAULT_KEYWORDS,
}: {
  title: string;
  description?: string;
  path?: string;
  locale?: string;
  index?: boolean;
  keywords?: string[];
}): Metadata {
  const cleanPath = path.startsWith("/") || path === "" ? path : `/${path}`;
  const url = `${SITE_URL}/${locale}${cleanPath}`;
  const fullTitle = formatPageTitle(title, locale);
  const desc =
    description ||
    (locale === "en" ? DEFAULT_DESCRIPTION_EN : DEFAULT_DESCRIPTION_AR);

  const googleVerify = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  const bingVerify = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();

  return {
    title: fullTitle,
    description: desc,
    keywords,
    authors: [{ name: SITE_NAME_EN, url: SITE_URL }],
    creator: SITE_NAME_EN,
    publisher: SITE_NAME_EN,
    applicationName: SITE_NAME_EN,
    category: "Business Services",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        ar: `${SITE_URL}/ar${cleanPath}`,
        en: `${SITE_URL}/en${cleanPath}`,
        ur: `${SITE_URL}/ur${cleanPath}`,
        hi: `${SITE_URL}/hi${cleanPath}`,
        "x-default": `${SITE_URL}/ar${cleanPath}`,
      },
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale] || "ar_SA",
      alternateLocale: ["ar_SA", "en_US", "ur_PK", "hi_IN"].filter(
        (l) => l !== (OG_LOCALE[locale] || "ar_SA")
      ),
      url,
      siteName: SITE_NAME_EN,
      title: fullTitle,
      description: desc,
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME_EN} — ${SITE_NAME} | Government & Tech Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [OG_IMAGE_URL],
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: false,
          nocache: true,
        },
    ...(googleVerify || bingVerify
      ? {
          verification: {
            ...(googleVerify ? { google: googleVerify } : {}),
            ...(bingVerify
              ? { other: { "msvalidate.01": bingVerify } }
              : {}),
          },
        }
      : {}),
  };
}

export function organizationJsonLd() {
  const waUrl = getWhatsAppUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_EN, "Tasami Services"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 266,
      height: 340,
    },
    image: OG_IMAGE_URL,
    description: DEFAULT_DESCRIPTION_AR,
    slogan: "انجز خدماتك",
    sameAs: [getTikTokUrl(), ...(waUrl === "#" ? [] : [waUrl])],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${getPhoneNumber()}`,
        availableLanguage: ["ar", "en", "ur", "hi"],
        areaServed: "SA",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${getWhatsAppNumber()}`,
        availableLanguage: ["ar", "en", "ur", "hi"],
        areaServed: "SA",
        url: waUrl === "#" ? SITE_URL : waUrl,
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME_EN,
    alternateName: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["ar", "en", "ur", "hi"],
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/ar/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "CommunicateAction",
        target: getWhatsAppUrl("مرحباً، أريد الاستفسار عن خدمات تسامي"),
      },
    ],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: `${SITE_NAME_EN} Services`,
    alternateName: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE_URL,
    description: DEFAULT_DESCRIPTION_EN,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    serviceType: [
      "Government services facilitation",
      "Web design",
      "Mobile app development",
      "Business automation",
      "Digital marketing",
    ],
    availableLanguage: ["ar", "en", "ur", "hi"],
  };
}

export function seoGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      websiteJsonLd(),
      professionalServiceJsonLd(),
    ],
  };
}
