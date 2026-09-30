"use client";

import { useLocale, useTranslations } from "next-intl";
import { MapPin, NavigationArrow } from "@phosphor-icons/react";
import {
  getOfficeDirectionsUrl,
  getOfficeMapsEmbedUrl,
} from "@/lib/site";

/** Set NEXT_PUBLIC_SHOW_MAP_EMBED=1 once Google approves the business profile. */
const SHOW_EMBED = process.env.NEXT_PUBLIC_SHOW_MAP_EMBED === "1";

export default function LocationMap() {
  const t = useTranslations("location");
  const locale = useLocale();
  const directionsUrl = getOfficeDirectionsUrl();

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="scroll-mt-28 border-t border-[rgba(26,53,80,0.1)] bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#006BDE]/10 text-[#006BDE]">
              <MapPin weight="regular" className="h-5 w-5" />
            </span>
            <div>
              <h2
                id="location-heading"
                className="text-lg font-bold leading-snug text-[#1a1a1a] sm:text-xl"
              >
                {t("servingNote")}
              </h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5f6672]">
                {t("address")}
              </p>
            </div>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-button bg-[#006BDE] px-6 text-base font-bold text-white transition-colors hover:bg-[#0066d6] active:bg-[#0058b8]"
          >
            <NavigationArrow weight="fill" className="h-5 w-5" />
            {t("directions")}
          </a>
        </div>

        {SHOW_EMBED ? (
          <div className="mt-8 overflow-hidden rounded-card border border-[rgba(26,53,80,0.1)]">
            <iframe
              title={t("mapTitle")}
              src={getOfficeMapsEmbedUrl(locale)}
              className="block h-[min(60vh,380px)] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
