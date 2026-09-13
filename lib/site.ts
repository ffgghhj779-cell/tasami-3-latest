/**
 * Site-wide contact/company config.
 *
 * Only reads NEXT_PUBLIC_* env vars so this file works identically in
 * server components, client components, and route handlers.
 *
 * WhatsApp routing (product rule):
 * - Government taqeeb (Ibrahim) → +966 54 228 9575
 * - Tech solutions (Mustafa) → +966 55 996 2847
 */

/** Secretary / Mustafa — tech WhatsApp. */
export const WHATSAPP_SECRETARY_E164 = "966559962847";
export const WHATSAPP_SECRETARY_DISPLAY = "+966 55 996 2847";

/** @deprecated Use WHATSAPP_SECRETARY_E164 */
export const WHATSAPP_PHONE_E164 = WHATSAPP_SECRETARY_E164;
/** @deprecated Use WHATSAPP_SECRETARY_DISPLAY */
export const WHATSAPP_PHONE_DISPLAY = WHATSAPP_SECRETARY_DISPLAY;

/** Direct / Ibrahim — government taqeeb WhatsApp (+ main call line). */
export const WHATSAPP_DIRECT_E164 = "966542289575";
export const WHATSAPP_DIRECT_DISPLAY = "+966 54 228 9575";

/** Main public phone number (calls) — same digits as direct WhatsApp. */
export const OFFICIAL_PHONE_E164 = WHATSAPP_DIRECT_E164;
export const OFFICIAL_PHONE_DISPLAY = "054 228 9575";

/** Official Tasami TikTok profile. */
export const TIKTOK_URL = "https://vt.tiktok.com/ZSVNHcDfP/";

/**
 * Makkah office pin (GBP / client Maps link).
 * Swap NEXT_PUBLIC_MAPS_EMBED_URL for the Place embed once the listing is verified.
 */
export const OFFICE_COORDS = {
  lat: 21.3622838,
  lng: 39.8904982,
} as const;

export function getOfficeMapsEmbedUrl(hl: string = "ar"): string {
  const fromEnv = process.env.NEXT_PUBLIC_MAPS_EMBED_URL?.trim();
  if (fromEnv) return fromEnv;
  const { lat, lng } = OFFICE_COORDS;
  const lang = hl.startsWith("ar") ? "ar" : "en";
  // Official Maps embed (pb=) — plain ?output=embed is often blocked in iframes.
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1s${lang}!2ssa!4v1710000000000!5m2!1s${lang}!2ssa`;
}

export function getOfficeMapsUrl(): string {
  const { lat, lng } = OFFICE_COORDS;
  return `https://www.google.com/maps?q=${lat},${lng}&z=16`;
}

export function getOfficeDirectionsUrl(): string {
  const { lat, lng } = OFFICE_COORDS;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export type WhatsAppChannel =
  | "government"
  | "tech"
  | "sector"
  | "secretary"
  | "direct";

const PLACEHOLDER_NUMBERS = new Set(["", "966500000000"]);

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

function resolveSecretaryNumber(): string {
  const fromEnv = digitsOnly(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "");
  if (fromEnv && !PLACEHOLDER_NUMBERS.has(fromEnv)) return fromEnv;
  return WHATSAPP_SECRETARY_E164;
}

function resolveDirectNumber(): string {
  const fromEnv = digitsOnly(
    process.env.NEXT_PUBLIC_WHATSAPP_DIRECT_NUMBER ||
      process.env.NEXT_PUBLIC_PHONE_NUMBER ||
      ""
  );
  if (fromEnv && !PLACEHOLDER_NUMBERS.has(fromEnv)) return fromEnv;
  return WHATSAPP_DIRECT_E164;
}

function resolvePhoneNumber(): string {
  const fromEnv = digitsOnly(process.env.NEXT_PUBLIC_PHONE_NUMBER || "");
  if (fromEnv && !PLACEHOLDER_NUMBERS.has(fromEnv)) return fromEnv;
  return OFFICIAL_PHONE_E164;
}

export const WHATSAPP_NUMBER = resolveSecretaryNumber();

/** Secretary / tech WhatsApp digits. */
export function getWhatsAppNumber(): string {
  return resolveSecretaryNumber();
}

/** Government / direct WhatsApp digits. */
export function getWhatsAppDirectNumber(): string {
  return resolveDirectNumber();
}

export function getPhoneNumber(): string {
  return resolvePhoneNumber();
}

export function getPhoneDisplay(): string {
  return OFFICIAL_PHONE_DISPLAY;
}

export function getWhatsAppDisplay(): string {
  return WHATSAPP_SECRETARY_DISPLAY;
}

export function getWhatsAppDirectDisplay(): string {
  return WHATSAPP_DIRECT_DISPLAY;
}

export function telUrl(): string {
  return `tel:+${getPhoneNumber()}`;
}

function waMeUrl(number: string, text?: string): string {
  if (!number) return "#";
  const query = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${number}${query}`;
}

/**
 * Pick the WhatsApp line from service channel.
 * government + sector → direct (54)
 * tech + secretary → secretary (55)
 */
export function resolveWhatsAppChannel(
  channel?: WhatsAppChannel | null
): "direct" | "secretary" {
  if (channel === "tech" || channel === "secretary") return "secretary";
  if (channel === "government" || channel === "sector" || channel === "direct") {
    return "direct";
  }
  return "direct";
}

/** Secretary WhatsApp (tech / secretary desk). */
export function whatsappUrl(text?: string): string {
  return waMeUrl(getWhatsAppNumber(), text);
}

/** Alias of {@link whatsappUrl}. */
export function getWhatsAppUrl(prefill?: string): string {
  return whatsappUrl(prefill);
}

/** Direct WhatsApp (government transactions). */
export function whatsappDirectUrl(text?: string): string {
  return waMeUrl(getWhatsAppDirectNumber(), text);
}

export function getWhatsAppDirectUrl(prefill?: string): string {
  return whatsappDirectUrl(prefill);
}

/** Channel-aware WhatsApp deep link for service CTAs. */
export function whatsappForService(
  channel: WhatsAppChannel | null | undefined,
  text?: string
): string {
  return resolveWhatsAppChannel(channel) === "secretary"
    ? whatsappUrl(text)
    : whatsappDirectUrl(text);
}

export function getWhatsAppDisplayFor(
  channel: WhatsAppChannel | null | undefined
): string {
  return resolveWhatsAppChannel(channel) === "secretary"
    ? WHATSAPP_SECRETARY_DISPLAY
    : WHATSAPP_DIRECT_DISPLAY;
}

const PLACEHOLDER_EMAILS = new Set([
  "",
  "hello@tasami.sa",
  "hello@tasamiservices.com",
]);
const PLACEHOLDER_CR = new Set(["", "cr 0000000000", "0000000000"]);
const PLACEHOLDER_VAT = new Set([
  "",
  "vat 000000000000003",
  "000000000000003",
]);

function publicValue(
  value: string | undefined,
  placeholders: Set<string>
): string | null {
  const trimmed = (value || "").trim();
  if (!trimmed) return null;
  if (placeholders.has(trimmed.toLowerCase())) return null;
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length >= 4 && /^0+$/.test(digits)) return null;
  return trimmed;
}

/** Fallback for transactional mail only — not shown on the public site. */
export function getContactEmail(): string {
  return (
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@tasamiservices.com"
  );
}

/** Public email when the real Gmail (or other) address is configured. */
export function getPublicContactEmail(): string | null {
  return publicValue(process.env.NEXT_PUBLIC_CONTACT_EMAIL, PLACEHOLDER_EMAILS);
}

export function getTikTokUrl(): string {
  return TIKTOK_URL;
}

export function getCompanyInfo() {
  const address = process.env.NEXT_PUBLIC_COMPANY_ADDRESS?.trim() || "";
  const placeholders = new Set([
    "",
    "Riyadh, Kingdom of Saudi Arabia",
    "الرياض، المملكة العربية السعودية",
  ]);

  return {
    cr: publicValue(process.env.NEXT_PUBLIC_COMPANY_CR, PLACEHOLDER_CR),
    vat: publicValue(process.env.NEXT_PUBLIC_COMPANY_VAT, PLACEHOLDER_VAT),
    address: address && !placeholders.has(address) ? address : null,
  };
}
