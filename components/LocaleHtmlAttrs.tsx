"use client";

import { useEffect } from "react";

/** Syncs <html> lang/dir with the active locale (root layout owns the tags). */
export function LocaleHtmlAttrs({
  locale,
  dir,
}: {
  locale: string;
  dir: "rtl" | "ltr";
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return null;
}
