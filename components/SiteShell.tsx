"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { usePathname } from "@/navigation";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";

/** Defer chat/WhatsApp widgets — keeps first paint lighter on mobile */
const FloatingWidgets = dynamic(() => import("@/components/FloatingWidgets"), {
  ssr: false,
});

/** Hides public chrome on /admin routes so the secretary panel is full-bleed. */
export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const t = useTranslations("a11y");
  const isAdmin = pathname.includes("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <SkipToContent label={t("skip")} />
      <Navbar />
      <TrustBar />
      <main id="main-content" className="min-h-[50vh] min-h-[50dvh]">
        {children}
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
