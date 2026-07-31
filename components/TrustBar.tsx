"use client";

import { useTranslations } from "next-intl";
import { SealCheck } from "@phosphor-icons/react";
import { TRUST_PLATFORM_KEYS } from "@/lib/content-keys";

function TrustItem({ name }: { name: string }) {
  return (
    <span className="mx-3.5 inline-flex shrink-0 items-center gap-2 rounded-button bg-tasami-offwhite px-5 py-2.5 text-sm font-medium text-tasami-purple sm:mx-5">
      <SealCheck weight="regular" className="h-4 w-4 shrink-0 text-tasami-gold" />
      {name}
    </span>
  );
}

export default function TrustBar() {
  const t = useTranslations("trust");
  const platforms = TRUST_PLATFORM_KEYS.map((key) => t(`platforms.${key}`));
  // Exact duplicate for seamless -50% loop (no jerky reset)
  const strip = [...platforms, ...platforms];

  return (
    <section
      aria-label={t("aria")}
      className="trust-bar relative border-b border-tasami-purple/5 bg-white"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center bg-gradient-to-r from-white via-white to-transparent pe-10 ps-5 sm:ps-8 rtl:left-auto rtl:right-0 rtl:bg-gradient-to-l">
        <span className="hidden items-center gap-1.5 rounded-button bg-tasami-purple px-3.5 py-2 text-xs font-medium text-white shadow-soft sm:inline-flex">
          <SealCheck weight="fill" className="h-3.5 w-3.5 text-tasami-gold" />
          {t("message")}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-20 bg-gradient-to-r from-white to-transparent sm:w-52 rtl:left-auto rtl:right-0 rtl:bg-gradient-to-l" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] w-16 bg-gradient-to-l from-white to-transparent sm:w-24 rtl:right-auto rtl:left-0 rtl:bg-gradient-to-r" />

      <div className="overflow-hidden py-3.5">
        <div className="trust-bar-track">
          {strip.map((name, i) => (
            <TrustItem key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      <p className="border-t border-tasami-purple/5 px-5 py-2.5 text-center text-xs font-medium text-tasami-gray sm:hidden">
        {t("message")}
      </p>
    </section>
  );
}
