import type { ReactNode } from "react";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { buildPageMetadata } from "@/lib/seo";
import { fontVariables } from "@/lib/fonts";

export const metadata = {
  ...buildPageMetadata({
    title: "خدمات حكومية وتقنية بسيطة وسريعة",
    path: "",
    locale: "ar",
  }),
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#007AFF",
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
