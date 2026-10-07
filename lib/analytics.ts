import {
  getWhatsAppDirectNumber,
  getWhatsAppNumber,
} from "@/lib/site";

export type WaLine = "taqeeb" | "tech" | "unknown";

export type WhatsAppClickParams = {
  /** Ibrahim (gov) vs Mustafa (tech) */
  line: WaLine;
  /** Where the click happened: hero, footer, floating, service, search… */
  location: string;
  number?: string;
  pagePath?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: {
      track: (event: string, params?: Record<string, unknown>) => void;
      page: () => void;
    };
  }
}

export function getGaId(): string {
  return (process.env.NEXT_PUBLIC_GA_ID || "").trim();
}

export function getMetaPixelId(): string {
  return (process.env.NEXT_PUBLIC_META_PIXEL_ID || "").trim();
}

export function getTikTokPixelId(): string {
  return (process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "").trim();
}

export function isAnalyticsEnabled(): boolean {
  return Boolean(getGaId());
}

export function isAnyTrackingEnabled(): boolean {
  return Boolean(getGaId() || getMetaPixelId() || getTikTokPixelId());
}

function trackAdEvent(
  meta: string,
  tiktok: string,
  params: Record<string, string>
): void {
  if (typeof window === "undefined") return;
  if (getMetaPixelId() && typeof window.fbq === "function") {
    window.fbq("track", meta, params);
  }
  if (getTikTokPixelId() && window.ttq) {
    window.ttq.track(tiktok, params);
  }
}

/** Fire a GA4 event when gtag is available. No-op if GA is off. */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === "undefined" || !isAnalyticsEnabled()) return;
  if (typeof window.gtag !== "function") return;

  const cleaned: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) cleaned[key] = value;
    }
  }
  window.gtag("event", name, cleaned);
}

export function trackPageView(path: string): void {
  const id = getGaId();
  if (typeof window === "undefined" || !id || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("config", id, {
    page_path: path,
    anonymize_ip: true,
  });
}

export function resolveWaLineFromHref(href: string): {
  line: WaLine;
  number: string;
} {
  const match = href.match(/(?:wa\.me|api\.whatsapp\.com\/send\/?\?phone=)\/?(\d+)/i);
  const number = match?.[1] || "";
  const direct = getWhatsAppDirectNumber();
  const secretary = getWhatsAppNumber();

  if (number && direct && number === direct) {
    return { line: "taqeeb", number };
  }
  if (number && secretary && number === secretary) {
    return { line: "tech", number };
  }
  if (number.includes("534360467")) return { line: "taqeeb", number };
  if (number.includes("559962847")) return { line: "tech", number };
  return { line: "unknown", number };
}

/**
 * Primary conversion signal for ads:
 * - Event name: whatsapp_click
 * - Also sends generate_lead (GA4 recommended) for Ads linking
 */
export function trackWhatsAppClick(params: WhatsAppClickParams): void {
  const pagePath =
    params.pagePath ||
    (typeof window !== "undefined"
      ? `${window.location.pathname}${window.location.search}`
      : undefined);

  const payload = {
    wa_line: params.line,
    wa_location: params.location,
    wa_number: params.number || "",
    page_path: pagePath || "",
  };

  trackEvent("whatsapp_click", payload);
  trackEvent("generate_lead", {
    ...payload,
    method: "whatsapp",
  });
  trackAdEvent("Contact", "Contact", {
    content_name: params.line,
    content_category: params.location,
  });
}

/** Site request form submitted successfully. */
export function trackFormLead(params: { category: string; service: string }): void {
  trackEvent("generate_lead", {
    method: "form",
    service_category: params.category,
    service_name: params.service,
  });
  trackAdEvent("Lead", "SubmitForm", {
    content_name: params.service,
    content_category: params.category,
  });
}
