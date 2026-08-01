import {
  Amiri,
  Cormorant_Garamond,
  IBM_Plex_Sans_Arabic,
  Manrope,
  Noto_Nastaliq_Urdu,
  Noto_Sans_Devanagari,
} from "next/font/google";

/** Premium Arabic UI — complete glyphs, sharp, professional */
export const fontArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: true,
});

/** Literary Arabic wordmark */
export const fontBrandAr = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-brand-ar",
  display: "swap",
  preload: true,
});

export const fontLatin = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-latin",
  display: "swap",
});

export const fontDisplayLatin = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display-latin",
  display: "swap",
});

export const fontHindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
  preload: false,
});

export const fontUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-nastaliq",
  display: "swap",
  preload: false,
});

export const fontVariables = [
  fontArabic.variable,
  fontBrandAr.variable,
  fontLatin.variable,
  fontDisplayLatin.variable,
  fontHindi.variable,
  fontUrdu.variable,
].join(" ");
