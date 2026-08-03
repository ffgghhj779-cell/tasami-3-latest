/** Shared price formatters (SAR) */

export const GOV_PRICE_FROM: Record<string, number> = {
  passports: 150,
  labor: 220,
  commerce: 250,
  zakat: 350,
  municipal: 180,
  civilDefense: 500,
  gosi: 180,
  civilStatus: 120,
  najiz: 120,
  traffic: 100,
  health: 900,
  ejar: 200,
  investment: 800,
};

export const TECH_PRICE_FROM: Record<string, number> = {
  websites: 2500,
  mobile: 8000,
  maps: 900,
  marketing: 1500,
  automation: 2000,
  support: 800,
  ai: 3500,
  data: 2800,
  cloud: 1800,
};

export const SECTOR_PRICE_FROM: Record<string, number> = {
  restaurants: 499,
  clinics: 699,
  factories: 999,
  shops: 399,
  salons: 349,
  contracting: 799,
  realEstate: 599,
  institutes: 549,
  law: 899,
  hotels: 999,
  education: 549,
  logistics: 699,
  agriculture: 449,
  nonprofit: 299,
  startups: 799,
};

function formatSar(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-SA", {
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPriceFrom(amount: number, locale: string): string {
  const formatted = formatSar(amount, locale);
  if (locale === "ar") return `من ${formatted} ر.س`;
  return `From ${formatted} SAR`;
}

/** Transparent range when both ends exist; otherwise falls back to “from”. */
export function formatOfferingPrice(
  priceFrom: number,
  priceTo: number | undefined,
  locale: string
): string {
  if (priceTo && priceTo > priceFrom) {
    const a = formatSar(priceFrom, locale);
    const b = formatSar(priceTo, locale);
    if (locale === "ar") return `${a} – ${b} ر.س`;
    return `${a} – ${b} SAR`;
  }
  return formatPriceFrom(priceFrom, locale);
}
