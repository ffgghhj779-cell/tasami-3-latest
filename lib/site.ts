/**
 * Site-wide contact/company config.
 *
 * Only reads NEXT_PUBLIC_* env vars so this file works identically in
 * server components, client components, and route handlers.
 */

export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(
  /\D/g,
  ""
);

export function getWhatsAppNumber(): string {
  return (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
}

export function whatsappUrl(text?: string): string {
  const number = WHATSAPP_NUMBER;
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
