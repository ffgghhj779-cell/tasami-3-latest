"use client";

import { useEffect } from "react";

let scrollLockCount = 0;
let hideFabsCount = 0;

type Options = {
  /** Hide floating chat/WhatsApp buttons (for page sheets/menus). Default true. */
  hideFabs?: boolean;
};

/** Locks document scroll while a mobile sheet/menu is open — unlocks cleanly on unmount. */
export function useBodyScrollLock(locked: boolean, options: Options = {}) {
  const hideFabs = options.hideFabs !== false;

  useEffect(() => {
    if (!locked) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    scrollLockCount += 1;
    html.dataset.sheetOpen = "true";

    if (hideFabs) {
      hideFabsCount += 1;
      html.dataset.hideFabs = "true";
    }

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    const prevTouchAction = body.style.touchAction;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.touchAction = "none";

    return () => {
      scrollLockCount = Math.max(0, scrollLockCount - 1);
      if (scrollLockCount === 0) {
        delete html.dataset.sheetOpen;
      }

      if (hideFabs) {
        hideFabsCount = Math.max(0, hideFabsCount - 1);
        if (hideFabsCount === 0) {
          delete html.dataset.hideFabs;
        }
      }

      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      body.style.touchAction = prevTouchAction;
      window.scrollTo(0, scrollY);
    };
  }, [locked, hideFabs]);
}
