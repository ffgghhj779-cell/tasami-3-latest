import type { Metadata } from "next";
import {
  COMPANY_LEGAL,
  getTikTokUrl,
  getPhoneNumber,
  getWhatsAppNumber,
  getWhatsAppUrl,
} from "@/lib/site";
import { ID_ALTERNATE_BY_PATH } from "@/lib/id-landing";
import { BN_ALTERNATE_BY_PATH } from "@/lib/bn-landing";

/** Canonical production domain (Cloudflare + www). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.tasamiservices.com";

export const SITE_NAME = "تسامي";
export const SITE_NAME_EN = "Tasami";
export const SITE_DOMAIN = "tasamiservices.com";

/** Open Graph share image — Tasami only (new filename busts WhatsApp/FB cache). */
export const OG_IMAGE_PATH = "/og-tasami-white.jpg";
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

const SERVICE_TITLE: Record<string, (t: string) => string> = {
  ar: (t) => `${t} في السعودية`,
  en: (t) => `${t} in Saudi Arabia`,
  ur: (t) => `سعودی عرب میں ${t}`,
  hi: (t) => `सऊदी अरब में ${t}`,
};

/** Service page title per the SEO template: "{service} in Saudi Arabia". */
export function serviceTitle(title: string, locale: string): string {
  return (SERVICE_TITLE[locale] || SERVICE_TITLE.ar)(title);
}

const META_TAIL: Record<string, string> = {
  ar: "نتابعها لك عبر المنصات الرسمية ونحدّثك على واتساب. لسنا جهة حكومية.",
  en: "We handle it through the official platforms and update you on WhatsApp. Not a government entity.",
  ur: "ہم سرکاری پلیٹ فارمز کے ذریعے کام مکمل کرتے ہیں اور واٹس ایپ پر آگاہ رکھتے ہیں۔ ہم سرکاری ادارہ نہیں۔",
  hi: "हम आधिकारिक प्लेटफ़ॉर्म से काम पूरा करते हैं और व्हाट्सऐप पर अपडेट देते हैं। हम सरकारी संस्था नहीं हैं।",
};

const META_TAIL_TECH: Record<string, string> = {
  ar: "تصميم وتنفيذ احترافي بفريق سعودي، واستشارة مجانية عبر واتساب.",
  en: "Professional design and build by a Saudi team, with a free WhatsApp consultation.",
  ur: "سعودی ٹیم کی پیشہ ورانہ ڈیزائن و تیاری، واٹس ایپ پر مفت مشورہ۔",
  hi: "सऊदी टीम द्वारा पेशेवर डिज़ाइन और निर्माण, व्हाट्सऐप पर मुफ़्त परामर्श।",
};

/** Extend a short service blurb into a full meta description (≈140–160 chars). */
export function serviceDescription(desc: string, locale: string, kind: "gov" | "tech" = "gov"): string {
  const base = desc.trim().replace(/[.。۔।]?$/, "");
  const end = locale === "ur" ? "۔" : locale === "hi" ? "।" : ".";
  const tails = kind === "tech" ? META_TAIL_TECH : META_TAIL;
  return `${base}${end} ${tails[locale] || tails.ar}`;
}

/** Office coordinates (Al Awali, Makkah) — must match Google Business Profile. */
export const GEO = { latitude: 21.3622838, longitude: 39.8904982 };

const OG_LOCALE: Record<string, string> = {
  ar: "ar_SA",
  en: "en_US",
  ur: "ur_PK",
  hi: "hi_IN",
};

export function buildPageMetadata({
  title,
  absoluteTitle,
  description,
  path = "",
  locale = "ar",
  index = true,
}: {
  title: string;
  /** Use as-is instead of appending the brand suffix. */
  absoluteTitle?: string;
  description?: string;
  path?: string;
  locale?: string;
  index?: boolean;
  /** Ignored: Google does not use meta keywords. Kept so older call sites compile. */
  keywords?: string[];
}): Metadata {
  const cleanPath = path.startsWith("/") || path === "" ? path : `/${path}`;
  const url = `${SITE_URL}/${locale}${cleanPath}`;
  const fullTitle = absoluteTitle || formatPageTitle(title, locale);
  const desc =
    description ||
    (locale === "en" ? DEFAULT_DESCRIPTION_EN : DEFAULT_DESCRIPTION_AR);

  const googleVerify = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  const bingVerify = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();

  return {
    title: { absolute: fullTitle },
    description: desc,
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
        ...(ID_ALTERNATE_BY_PATH[cleanPath]
          ? { id: `${SITE_URL}${ID_ALTERNATE_BY_PATH[cleanPath]}` }
          : {}),
        ...(BN_ALTERNATE_BY_PATH[cleanPath]
          ? { bn: `${SITE_URL}${BN_ALTERNATE_BY_PATH[cleanPath]}` }
          : {}),
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
    legalName: COMPANY_LEGAL.nameAr,
    vatID: COMPANY_LEGAL.vat,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Commercial Registration",
      value: COMPANY_LEGAL.cr,
    },
    foundingDate: String(COMPANY_LEGAL.foundedYear),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
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
    address: POSTAL_ADDRESS,
  };
}

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Sheikh Muhammad Street, Al Naseem, Al Awali",
  addressLocality: "Makkah",
  addressRegion: "Makkah Province",
  postalCode: "24251",
  addressCountry: "SA",
};

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
    telephone: `+${getPhoneNumber()}`,
    address: POSTAL_ADDRESS,
    geo: { "@type": "GeoCoordinates", ...GEO },
    hasMap: `https://www.google.com/maps?q=${GEO.latitude},${GEO.longitude}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Commercial Registration",
      value: COMPANY_LEGAL.cr,
    },
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

export function breadcrumbJsonLd(
  locale: string,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}/${locale}${item.path}`,
    })),
  };
}

export function articleJsonLd(args: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    inLanguage: "ar",
    datePublished: args.publishedAt,
    dateModified: args.publishedAt,
    mainEntityOfPage: `${SITE_URL}/ar${args.path}`,
    image: args.image ? `${SITE_URL}${args.image}` : OG_IMAGE_URL,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
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
