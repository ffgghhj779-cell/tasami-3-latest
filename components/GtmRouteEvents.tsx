"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function RouteEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstView = useRef(true);

  useEffect(() => {
    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    // The GTM snippet already records the first load.
    if (firstView.current) {
      firstView.current = false;
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtual_page_view",
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

/** Tells GTM about in-app page changes so ads tags can fire after navigation. */
export default function GtmRouteEvents() {
  return (
    <Suspense fallback={null}>
      <RouteEvents />
    </Suspense>
  );
}
