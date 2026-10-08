import type { ReactNode } from "react";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import GtmRouteEvents from "@/components/GtmRouteEvents";
import { buildPageMetadata } from "@/lib/seo";
import { fontVariables } from "@/lib/fonts";

export const metadata = {
  ...buildPageMetadata({
    title: "تسامي — تعقيب حكومي وحلول تقنية في السعودية",
    absoluteTitle: "تسامي — تعقيب حكومي وحلول تقنية في السعودية",
    description:
      "ننجز معاملاتك الحكومية (إقامات، سجل تجاري، زكاة، تأمينات) ونبني موقعك أو تطبيقك. اطلب عبر واتساب. لسنا جهة حكومية.",
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
        <GoogleTagManager />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <GoogleTagManagerNoScript />
        {children}
        <GtmRouteEvents />
        <Analytics />
      </body>
    </html>
  );
}
