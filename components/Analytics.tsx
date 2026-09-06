"use client";

import { Suspense, useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import {
  getGaId,
  isAnalyticsEnabled,
  resolveWaLineFromHref,
  trackPageView,
  trackWhatsAppClick,
} from "@/lib/analytics";

function AnalyticsPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;
    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    trackPageView(path);
  }, [pathname, searchParams]);

  return null;
}

function WhatsAppClickTracker() {
  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest) return;

      const anchor = target.closest(
        'a[href*="wa.me"], a[href*="api.whatsapp.com"]'
      ) as HTMLAnchorElement | null;
      if (!anchor?.href) return;

      const location =
        anchor.getAttribute("data-wa-location") ||
        anchor.closest("[data-wa-location]")?.getAttribute("data-wa-location") ||
        "link";

      const { line, number } = resolveWaLineFromHref(anchor.href);
      trackWhatsAppClick({ line, location, number });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

/** Google Analytics 4 — loads only when NEXT_PUBLIC_GA_ID is set */
export default function Analytics() {
  const id = getGaId();
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true, send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsPageViews />
      </Suspense>
      <WhatsAppClickTracker />
    </>
  );
}
