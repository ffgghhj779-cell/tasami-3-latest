import {
  Manrope,
  Noto_Nastaliq_Urdu,
  Noto_Sans_Arabic,
  Noto_Sans_Devanagari,
} from "next/font/google";

/** Highest-quality Arabic webfont — full glyphs, sharp on mobile */
export const fontArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-arabic",
  display: "swap",
  preload: true,
});

export const fontLatin = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-latin",
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
  fontLatin.variable,
  fontHindi.variable,
  fontUrdu.variable,
].join(" ");
