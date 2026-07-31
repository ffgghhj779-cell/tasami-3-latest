import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E1A47",
          50: "#F5F2F8",
          100: "#E8E0EF",
          200: "#D1C2DF",
          300: "#A994BF",
          400: "#6B4D8C",
          500: "#2E1A47",
          600: "#27163C",
          700: "#1F1231",
          800: "#180D26",
          900: "#10091A",
        },
        secondary: {
          DEFAULT: "#F4A261",
          50: "#FEF7F0",
          100: "#FDEFE1",
          200: "#FBDFC3",
          300: "#F8C895",
          400: "#F4A261",
          500: "#F08C3A",
          600: "#E07120",
          700: "#B85A1A",
          800: "#934816",
          900: "#6E3611",
        },
        accent: {
          DEFAULT: "#E9C46A",
          50: "#FDF9F0",
          100: "#FBF3E1",
          200: "#F7E7C3",
          300: "#F0D595",
          400: "#E9C46A",
          500: "#E0B040",
          600: "#C4942A",
          700: "#9A7421",
          800: "#755919",
          900: "#504012",
        },
        background: {
          DEFAULT: "#F8F9FA",
          soft: "#F8F9FA",
          card: "#FFFFFF",
        },
        foreground: {
          DEFAULT: "#212529",
          muted: "#6C757D",
        },
        /* Explicit aliases for design-system clarity */
        tasami: {
          purple: "#2E1A47",
          pink: "#F4A261",
          gold: "#E9C46A",
          offwhite: "#F8F9FA",
          dark: "#212529",
          gray: "#6C757D",
        },
      },
      fontFamily: {
        tajawal: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        hindi: ["var(--font-noto-devanagari)", "Noto Sans Devanagari", "sans-serif"],
        urdu: ["var(--font-noto-nastaliq)", "Noto Nastaliq Urdu", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        button: "8px",
        soft: "12px",
      },
      boxShadow: {
        /* Soft shadow only — brand rule */
        soft: "0 2px 8px rgba(46, 26, 71, 0.08)",
        none: "none",
      },
      spacing: {
        18: "4.5rem",
      },
      keyframes: {
        "scroll-left": {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.65" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 55s linear infinite",
        "scroll-left-slow": "scroll-left 70s linear infinite",
        "fade-in": "fade-in 0.55s ease-out forwards",
        "fade-in-up": "fade-in-up 0.65s ease-out forwards",
        "pulse-soft": "pulseSoft 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
