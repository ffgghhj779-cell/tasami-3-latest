import {
  IBM_Plex_Sans_Arabic,
  Noto_Nastaliq_Urdu,
  Noto_Sans_Devanagari,
  Plus_Jakarta_Sans,
} from "next/font/google";

/** Premium Arabic UI face — IBM Plex, sharp marks, institutional quality */
export const fontArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: true,
});

/** Premium Latin face — Plus Jakarta Sans, high-end geometric */
export const fontLatin = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-latin",
  display: "swap",
  preload: true,
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
