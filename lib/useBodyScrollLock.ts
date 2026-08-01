"use client";

import { useEffect } from "react";

/**
 * Reference-counted body scroll lock.
 *
 * Critical mobile rules:
 * - Never set `touch-action: none` on <body> (freezes taps/scroll after reopen).
 * - Only apply/clear styles when the refcount crosses 0↔1 (nested locks safe).
 * - Always clear fully on forceUnlock (route changes / bfcache).
 */

let lockCount = 0;
let hideFabsCount = 0;
let savedScrollY = 0;

type Options = {
  /** Hide floating chat/WhatsApp buttons. Default true. */
  hideFabs?: boolean;
};

function applyLock() {
  const html = document.documentElement;
  const body = document.body;
  savedScrollY = window.scrollY || window.pageYOffset || 0;

  html.dataset.sheetOpen = "true";
  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${savedScrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
  // Do NOT set touch-action on body — it freezes mobile after lock/unlock cycles.
}

function clearLock() {
  const html = document.documentElement;
  const body = document.body;
  const y = savedScrollY;

  delete html.dataset.sheetOpen;
  html.style.removeProperty("overflow");
  body.style.removeProperty("overflow");
  body.style.removeProperty("position");
  body.style.removeProperty("top");
  body.style.removeProperty("left");
  body.style.removeProperty("right");
  body.style.removeProperty("width");
  body.style.removeProperty("touch-action");

  window.scrollTo(0, y);
  savedScrollY = 0;
}

function syncHideFabs() {
  const html = document.documentElement;
  if (hideFabsCount > 0) {
    html.dataset.hideFabs = "true";
  } else {
    delete html.dataset.hideFabs;
  }
}

/** Hard reset — call on route change / pageshow so a stuck lock never freezes the app. */
export function forceUnlockBody() {
  lockCount = 0;
  hideFabsCount = 0;
  clearLock();
  syncHideFabs();
}

export function useBodyScrollLock(locked: boolean, options: Options = {}) {
  const hideFabs = options.hideFabs !== false;

  useEffect(() => {
    if (!locked) return;

    const wasUnlocked = lockCount === 0;
    lockCount += 1;
    if (wasUnlocked) {
      applyLock();
    }

    if (hideFabs) {
      hideFabsCount += 1;
      syncHideFabs();
    }

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        clearLock();
      }

      if (hideFabs) {
        hideFabsCount = Math.max(0, hideFabsCount - 1);
        syncHideFabs();
      }
    };
  }, [locked, hideFabs]);
}
