/** Indicative starting prices (SAR) — shown as transparent ranges on service cards */

export const GOV_PRICE_FROM: Record<string, number> = {
  passports: 199,
  labor: 249,
  commerce: 299,
  zakat: 199,
  municipal: 179,
  civilDefense: 349,
  gosi: 149,
  civilStatus: 129,
  najiz: 399,
  traffic: 149,
  health: 229,
  ejar: 179,
  investment: 499,
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

export function formatPriceFrom(amount: number, locale: string): string {
  const formatted = new Intl.NumberFormat(
    locale === "ar" ? "ar-SA" : "en-SA",
    { maximumFractionDigits: 0 }
  ).format(amount);
  if (locale === "ar") return `من ${formatted} ر.س`;
  return `From ${formatted} SAR`;
}
