"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { usePathname } from "@/navigation";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import ScrollProgress from "@/components/ScrollProgress";
import { forceUnlockBody, isBodyScrollLocked } from "@/lib/useBodyScrollLock";

/** Defer chat/WhatsApp widgets — keeps first paint lighter on mobile */
const FloatingWidgets = dynamic(() => import("@/components/FloatingWidgets"), {
  ssr: false,
});

/** Clears any stuck body lock after navigation / bfcache restore. */
function BodyLockSafety() {
  const pathname = usePathname();

  useEffect(() => {
    // After route children unmount/clean up, hard-clear any leftover lock styles
    const id = window.setTimeout(() => forceUnlockBody(), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) forceUnlockBody();
    };
    const onVisible = () => {
      if (document.visibilityState !== "visible") return;
      // Don't clear while a sheet/menu still owns the lock
      if (isBodyScrollLocked()) return;
      const body = document.body;
      if (
        body.style.position === "fixed" ||
        body.style.touchAction === "none"
      ) {
        forceUnlockBody();
      }
    };

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return null;
}

/** Hides public chrome on /admin routes so the secretary panel is full-bleed. */
export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const t = useTranslations("a11y");
  const isAdmin = pathname.includes("/admin");
  const isHome = pathname === "/";

  if (isAdmin) {
    return (
      <>
        <BodyLockSafety />
        {children}
      </>
    );
  }

  return (
    <>
      <BodyLockSafety />
      <SkipToContent label={t("skip")} />
      <ScrollProgress />
      <Navbar />
      {!isHome ? <TrustBar /> : null}
      <main id="main-content" className="min-h-[50vh] min-h-[50dvh]">
        {children}
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
