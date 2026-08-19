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
          DEFAULT: "#6B53FF",
          50: "#F5F2FF",
          100: "#EBE3FE",
          200: "#D4C8FD",
          300: "#C6A5FF",
          400: "#8D49F7",
          500: "#6B53FF",
          600: "#5318EB",
          700: "#280F62",
          800: "#1A0845",
          900: "#0C021C",
        },
        secondary: {
          DEFAULT: "#C6A5FF",
          50: "#F7F2FF",
          100: "#EBE3FE",
          200: "#D4C8FD",
          300: "#C6A5FF",
          400: "#A97BFF",
          500: "#8D49F7",
          600: "#6B53FF",
          700: "#5318EB",
          800: "#280F62",
          900: "#0C021C",
        },
        accent: {
          DEFAULT: "#C6A5FF",
          50: "#F7F2FF",
          100: "#EBE3FE",
          200: "#D4C8FD",
          300: "#C6A5FF",
          400: "#A97BFF",
          500: "#8D49F7",
          600: "#6B53FF",
          700: "#5318EB",
          800: "#280F62",
          900: "#0C021C",
        },
        background: {
          DEFAULT: "#FAFAFC",
          soft: "#FFFFFF",
          card: "#FFFFFF",
        },
        foreground: {
          DEFAULT: "#0C021C",
          muted: "#5C5E6B",
        },
        tasami: {
          purple: "#4A35C8",
          pink: "#6B53FF",
          gold: "#C67B3A",
          lilac: "#C6A5FF",
          green: "#006C35",
          offwhite: "#FAFAFC",
          dark: "#0C021C",
          gray: "#5C5E6B",
        },
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "IBM Plex Sans Arabic", "Tahoma", "sans-serif"],
        latin: ["var(--font-latin)", "Plus Jakarta Sans", "sans-serif"],
        display: ["var(--font-arabic)", "IBM Plex Sans Arabic", "Tahoma", "sans-serif"],
        brand: ["var(--font-arabic)", "IBM Plex Sans Arabic", "Tahoma", "sans-serif"],
        hindi: ["var(--font-noto-devanagari)", "Noto Sans Devanagari", "sans-serif"],
        urdu: ["var(--font-noto-nastaliq)", "Noto Nastaliq Urdu", "serif"],
        sans: ["var(--font-arabic)", "IBM Plex Sans Arabic", "var(--font-latin)", "Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        button: "9999px",
        soft: "16px",
      },
      boxShadow: {
        soft: "0 8px 28px rgba(12, 2, 28, 0.08)",
        lift: "0 22px 50px rgba(40, 15, 98, 0.18)",
        glow: "0 0 80px rgba(107, 83, 255, 0.45)",
        none: "none",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse at 50% 35%, rgba(107,83,255,0.55), transparent 52%), radial-gradient(ellipse at 18% 80%, rgba(198,165,255,0.35), transparent 46%), radial-gradient(ellipse at 82% 18%, rgba(83,24,235,0.42), transparent 44%)",
        "dot-soft":
          "radial-gradient(rgba(107, 83, 255, 0.07) 1px, transparent 1px)",
        "grid-soft":
          "linear-gradient(rgba(107,83,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(107,83,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        dot: "22px 22px",
        grid: "48px 48px",
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
        "float-soft": {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
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
        "float-soft": "float-soft 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
