import {
  El_Messiri,
  Montserrat,
  Noto_Nastaliq_Urdu,
  Noto_Sans_Devanagari,
  Tajawal,
} from "next/font/google";

/** Arabic body — clean UI text, buttons, paragraphs. */
export const fontArabic = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: true,
});

/** Arabic headings — elegant display serif for titles & brand. */
export const fontHeadingAr = El_Messiri({
  subsets: ["arabic", "latin"],
  weight: ["600", "700"],
  variable: "--font-heading-ar",
  display: "swap",
  preload: true,
});

/** English — geometric sans like TASAMI / MODERN TECH & SERVICES. */
export const fontLatin = Montserrat({
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
  fontHeadingAr.variable,
  fontLatin.variable,
  fontHindi.variable,
  fontUrdu.variable,
].join(" ");
