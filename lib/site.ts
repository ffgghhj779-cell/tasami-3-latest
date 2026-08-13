/**
 * Site-wide contact/company config.
 *
 * Only reads NEXT_PUBLIC_* env vars so this file works identically in
 * server components, client components, and route handlers.
 */

/** Official Tasami WhatsApp / phone — used across the site. */
export const OFFICIAL_PHONE_E164 = "966559962847";
export const OFFICIAL_PHONE_DISPLAY = "+966 55 996 2847";

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

export function getContactEmail(): string {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@tasami.sa";
}

export function getCompanyInfo() {
  return {
    cr: process.env.NEXT_PUBLIC_COMPANY_CR || "CR 0000000000",
    vat: process.env.NEXT_PUBLIC_COMPANY_VAT || "VAT 000000000000003",
    address:
      process.env.NEXT_PUBLIC_COMPANY_ADDRESS ||
      "Riyadh, Kingdom of Saudi Arabia",
  };
}
