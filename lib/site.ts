/**
 * Site-wide contact/company config.
 *
 * Only reads NEXT_PUBLIC_* env vars so this file works identically in
 * server components, client components, and route handlers.
 */

/** Official Khalsana WhatsApp / phone — used across the site. */
export const OFFICIAL_PHONE_E164 = "966559962847";
export const OFFICIAL_PHONE_DISPLAY = "+966 55 996 2847";

/** Official Khalsana TikTok profile. */
export const TIKTOK_URL = "https://vt.tiktok.com/ZSVNHcDfP/";

const PLACEHOLDER_NUMBERS = new Set(["", "966500000000"]);

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

function resolveWhatsAppNumber(): string {
  const fromEnv = digitsOnly(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "");
  if (fromEnv && !PLACEHOLDER_NUMBERS.has(fromEnv)) return fromEnv;
  return OFFICIAL_PHONE_E164;
}

export const WHATSAPP_NUMBER = resolveWhatsAppNumber();

export function getWhatsAppNumber(): string {
  return resolveWhatsAppNumber();
}

export function getPhoneDisplay(): string {
  return OFFICIAL_PHONE_DISPLAY;
}

export function telUrl(): string {
  return `tel:+${getWhatsAppNumber()}`;
}

export function whatsappUrl(text?: string): string {
  const number = getWhatsAppNumber();
  if (!number) return "#";
  const query = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${number}${query}`;
}

/** Alias of {@link whatsappUrl} kept for readability at call sites. */
export function getWhatsAppUrl(prefill?: string): string {
  return whatsappUrl(prefill);
}

const PLACEHOLDER_EMAILS = new Set(["", "hello@tasami.sa"]);
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
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@tasami.sa";
}

/** Public email when the real Gmail (or other) address is configured. */
export function getPublicContactEmail(): string | null {
  return publicValue(process.env.NEXT_PUBLIC_CONTACT_EMAIL, PLACEHOLDER_EMAILS);
}

export function getTikTokUrl(): string {
  return TIKTOK_URL;
}

export function getCompanyInfo() {
  return {
    cr: publicValue(process.env.NEXT_PUBLIC_COMPANY_CR, PLACEHOLDER_CR),
    vat: publicValue(process.env.NEXT_PUBLIC_COMPANY_VAT, PLACEHOLDER_VAT),
    address:
      process.env.NEXT_PUBLIC_COMPANY_ADDRESS?.trim() ||
      "Riyadh, Kingdom of Saudi Arabia",
  };
}
