/** Arabic / multilingual query normalization for search matching */

const DIACRITICS =
  /[\u064B-\u065F\u0670\u06D6-\u06ED\u0610-\u061A\u06DF-\u06E8\u06EA-\u06ED]/g;

const TATWEEL = /\u0640/g;

/** Common Arabizi / spoken Saudi shortcuts → Arabic roots */
const ARABIZI: Record<string, string> = {
  kafala: "كفالة",
  kafalah: "كفالة",
  naql: "نقل",
  iqama: "اقامة",
  iqamah: "اقامة",
  visa: "تاشيرة",
  absher: "ابشر",
  qiwa: "قوى",
  muqeem: "مقيم",
  mudad: "مدد",
  ajeer: "اجير",
  najiz: "ناجز",
  balady: "بلدي",
  cr: "سجل",
  gosi: "تامينات",
  sponsorship: "كفالة",
  transfer: "نقل",
  renew: "تجديد",
  renewal: "تجديد",
  worker: "عامل",
  exit: "خروج",
  final: "نهائي",
};

/** Spoken / typo variants folded into canonical tokens after normalize */
const VARIANT_FOLD: Record<string, string> = {
  كفاله: "كفالة",
  الكفاله: "كفالة",
  الكفالة: "كفالة",
  اقامه: "اقامة",
  الاقامه: "اقامة",
  الاقامة: "اقامة",
  تاشيره: "تاشيرة",
  التاشيره: "تاشيرة",
  التاشيرة: "تاشيرة",
  سجلتجاري: "سجل",
  السجل: "سجل",
  عامله: "عامل",
  العماله: "عامل",
  العمالة: "عامل",
  وافد: "عامل",
  مقيم: "عامل",
  كفيل: "كفالة",
  نقلخدمات: "نقل",
  نقلخدمه: "نقل",
  ابشر: "ابشر",
  ابشرأعمال: "ابشر",
  قوه: "قوى",
  قوي: "قوى",
  ابغى: "ابغى",
  ابي: "ابغى",
  عايز: "ابغى",
  عاوز: "ابغى",
  كيف: "كيف",
  وين: "وين",
  كم: "كم",
};

export function stripDiacritics(input: string): string {
  return input.replace(DIACRITICS, "").replace(TATWEEL, "");
}

/** Unify Alef forms, Ya/Alef Maqsura, Ta Marbuta → Ha for matching */
export function unifyArabicLetters(input: string): string {
  return input
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه");
}

export function normalizeQuery(raw: string): string {
  let s = raw.trim().toLowerCase();
  s = stripDiacritics(s);
  s = unifyArabicLetters(s);
  s = s.replace(/[^a-zA-Z0-9\u0600-\u06FF\u0900-\u097F\s]/g, " ");
  s = s.replace(/\s+/g, " ").trim();
  return s;
}

export function tokenize(normalized: string): string[] {
  if (!normalized) return [];
  return normalized
    .split(" ")
    .map((t) => {
      const folded = VARIANT_FOLD[t] || ARABIZI[t] || t;
      return unifyArabicLetters(stripDiacritics(folded.toLowerCase()));
    })
    .filter((t) => t.length > 1);
}

export function detectLanguage(
  raw: string
): "ar" | "en" | "ur" | "hi" | "mixed" | "unknown" {
  const hasArabic = /[\u0600-\u06FF]/.test(raw);
  const hasLatin = /[a-zA-Z]/.test(raw);
  const hasDevanagari = /[\u0900-\u097F]/.test(raw);
  // Urdu shares Arabic script — treat Arabic-script as ar unless Urdu-specific letters
  const hasUrduMarks = /[\u0679\u0688\u0691\u06BA\u06BE\u06C1\u06D2]/.test(raw);

  if (hasDevanagari) return "hi";
  if (hasUrduMarks && hasArabic) return "ur";
  if (hasArabic && hasLatin) return "mixed";
  if (hasArabic) return "ar";
  if (hasLatin) return "en";
  return "unknown";
}

/** Phrase containment after normalize */
export function includesNormalized(haystack: string, needle: string): boolean {
  const h = normalizeQuery(haystack);
  const n = normalizeQuery(needle);
  if (!n) return false;
  return h.includes(n);
}

export function tokenOverlap(queryTokens: string[], phrase: string): number {
  const phraseTokens = tokenize(normalizeQuery(phrase));
  if (!phraseTokens.length || !queryTokens.length) return 0;
  let hits = 0;
  for (const pt of phraseTokens) {
    if (queryTokens.some((qt) => qt === pt || qt.includes(pt) || pt.includes(qt))) {
      hits += 1;
    }
  }
  return hits / phraseTokens.length;
}
