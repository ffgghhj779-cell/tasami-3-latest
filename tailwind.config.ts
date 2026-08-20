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
          DEFAULT: "#007AFF",
          50: "#F7FBFF",
          100: "#E8F4FF",
          200: "#C7E8FF",
          300: "#5AC8FA",
          400: "#2B9AEF",
          500: "#007AFF",
          600: "#0066D6",
          700: "#0066D6",
          800: "#0066D6",
          900: "#0066D6",
        },
        secondary: {
          DEFAULT: "#5AC8FA",
          50: "#F7FBFF",
          100: "#E8F4FF",
          200: "#C7E8FF",
          300: "#5AC8FA",
          400: "#2B9AEF",
          500: "#007AFF",
          600: "#0066D6",
          700: "#0066D6",
          800: "#0066D6",
          900: "#0066D6",
        },
        accent: {
          DEFAULT: "#5AC8FA",
          50: "#F7FBFF",
          100: "#E8F4FF",
          200: "#C7E8FF",
          300: "#5AC8FA",
          400: "#2B9AEF",
          500: "#007AFF",
          600: "#0066D6",
          700: "#0066D6",
          800: "#0066D6",
          900: "#0066D6",
        },
        background: {
          DEFAULT: "#F7F8FA",
          soft: "#FFFFFF",
          card: "#FFFFFF",
        },
        foreground: {
          DEFAULT: "#1A3550",
          muted: "#8E8E93",
        },
        tasami: {
          purple: "#007AFF",
          pink: "#007AFF",
          gold: "#007AFF",
          lilac: "#5AC8FA",
          teal: "#2BB8B3",
          coral: "#FF8B73",
          sky: "#5AC8FA",
          cream: "#F4F6F8",
          green: "#006C35",
          offwhite: "#F7F8FA",
          dark: "#1A3550",
          gray: "#8E8E93",
          night: "#1A3550",
          heritage: "#007AFF",
        },
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "Tajawal", "Tahoma", "sans-serif"],
        display: ["var(--font-heading-ar)", "El Messiri", "serif"],
        heading: ["var(--font-heading-ar)", "El Messiri", "serif"],
        naskh: ["var(--font-heading-ar)", "El Messiri", "serif"],
        latin: ["var(--font-latin)", "Montserrat", "sans-serif"],
        serif: ["var(--font-heading-ar)", "El Messiri", "serif"],
        brand: ["var(--font-heading-ar)", "El Messiri", "serif"],
        hindi: ["var(--font-noto-devanagari)", "Noto Sans Devanagari", "sans-serif"],
        urdu: ["var(--font-noto-nastaliq)", "Noto Nastaliq Urdu", "serif"],
        sans: [
          "var(--font-arabic)",
          "Tajawal",
          "var(--font-latin)",
          "Montserrat",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "14px",
        button: "10px",
        soft: "12px",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0, 122, 255, 0.12)",
        lift: "0 24px 60px rgba(0, 122, 255, 0.18)",
        glow: "0 0 60px rgba(90, 200, 250, 0.45)",
        none: "none",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse at 72% 18%, rgba(90,200,250,0.45), transparent 52%)",
        "dot-soft":
          "radial-gradient(rgba(0, 122, 255, 0.08) 1px, transparent 1px)",
        "grid-soft":
          "linear-gradient(rgba(0,122,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,122,255,0.06) 1px, transparent 1px)",
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
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
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
