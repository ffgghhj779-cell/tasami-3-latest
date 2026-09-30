import type { ReactNode } from "react";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { buildPageMetadata } from "@/lib/seo";
import { fontVariables } from "@/lib/fonts";

export const metadata = {
  ...buildPageMetadata({
    title: "خدمات حكومية وتقنية بسيطة وسريعة في السعودية",
    description:
      "تسامي — ننجز أعمالك الحكومية ونبني حضورك الرقمي. سجل تجاري، إقامات، زكاة وضريبة، مواقع وتطبيقات — بأربع لغات وعبر واتساب.",
    path: "",
    locale: "ar",
  }),
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#006BDE",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={fontVariables}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
