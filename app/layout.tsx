import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "تسامي | Tasami",
  description:
    "منصة تسامي للخدمات الحكومية والتقنية — بساطة مطلقة، أربع لغات، ومساعد ذكي ٢٤/٧",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
