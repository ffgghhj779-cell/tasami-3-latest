"use client";

import { useLocale, useTranslations } from "next-intl";
import { MapPin, NavigationArrow, ArrowSquareOut } from "@phosphor-icons/react";
import {
  getOfficeDirectionsUrl,
  getOfficeMapsEmbedUrl,
  getOfficeMapsUrl,
} from "@/lib/site";

export default function LocationMap() {
  const t = useTranslations("location");
  const locale = useLocale();
  const embedSrc = getOfficeMapsEmbedUrl(locale);
  const mapsUrl = getOfficeMapsUrl();
  const directionsUrl = getOfficeDirectionsUrl();

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative scroll-mt-28 border-t border-[rgba(0,122,255,0.12)] bg-tasami-cream"
    >
      <div className="mx-auto max-w-7xl px-5 pb-4 pt-10 sm:px-8 sm:pt-12 lg:px-10">
        <div className="section-heading mb-6 sm:mb-8">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 id="location-heading" className="mt-2">
            {t("title")}
          </h2>
          <span className="highlight-line" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-tasami-gray sm:text-base">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-14 lg:px-10">
        <div className="relative overflow-hidden rounded-card border border-[rgba(0,122,255,0.14)] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          <iframe
            title={t("mapTitle")}
            src={embedSrc}
            className="block h-[min(68vh,440px)] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 p-3 sm:p-4">
            <div className="pointer-events-auto max-w-[min(100%,22rem)] rounded-xl border border-black/5 bg-white/95 p-3.5 shadow-[0_8px_28px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-4">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#007AFF]/10 text-[#007AFF]">
                  <MapPin weight="fill" className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug text-tasami-dark">
                    {t("placeName")}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-tasami-gray sm:text-[13px]">
                    {t("address")}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 border-t border-black/5 pt-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-button bg-[#1a73e8] px-3 text-xs font-semibold text-white transition-opacity hover:opacity-95 sm:text-sm"
                >
                  <NavigationArrow weight="fill" className="h-4 w-4" />
                  {t("directions")}
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-button border border-black/10 bg-white px-3 text-xs font-medium text-tasami-dark transition-colors hover:bg-black/[0.03] sm:text-sm"
                >
                  <ArrowSquareOut weight="bold" className="h-4 w-4" />
                  {t("enlarge")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
