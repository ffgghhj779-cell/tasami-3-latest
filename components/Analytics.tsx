"use client";

import { Suspense, useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import {
  getGaId,
  getGtmId,
  getMetaPixelId,
  getTikTokPixelId,
  isAnalyticsEnabled,
  isAnyTrackingEnabled,
  resolveWaLineFromHref,
  trackPageView,
  trackWhatsAppClick,
} from "@/lib/analytics";

function AnalyticsPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstView = useRef(true);

  useEffect(() => {
    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    if (isAnalyticsEnabled()) trackPageView(path);

    // Pixel base code already sends the first PageView; only track client-side navigations.
    if (firstView.current) {
      firstView.current = false;
      return;
    }
    if (getMetaPixelId() && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
    if (getTikTokPixelId() && window.ttq) window.ttq.page();
  }, [pathname, searchParams]);

  return null;
}

function WhatsAppClickTracker() {
  useEffect(() => {
    if (!isAnyTrackingEnabled()) return;

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

/**
 * GA4, Meta Pixel and TikTok Pixel — each loads only when its env ID is set:
 * NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_META_PIXEL_ID, NEXT_PUBLIC_TIKTOK_PIXEL_ID.
 */
export default function Analytics() {
  const gaId = getGaId();
  const metaId = getMetaPixelId();
  const tiktokId = getTikTokPixelId();
  const gtmId = getGtmId();
  if (!gaId && !metaId && !tiktokId && !gtmId) return null;

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true, send_page_view: false });
            `}
          </Script>
        </>
      ) : null}

      {metaId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}

      {tiktokId ? (
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=d.createElement("script");o.type="text/javascript",o.async=!0,o.src=r+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
              ttq.load('${tiktokId}');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      ) : null}

      <Suspense fallback={null}>
        <AnalyticsPageViews />
      </Suspense>
      <WhatsAppClickTracker />
    </>
  );
}
