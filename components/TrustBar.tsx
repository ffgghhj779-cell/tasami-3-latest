"use client";

import { useTranslations } from "next-intl";
import { SealCheck } from "@phosphor-icons/react";
import { TRUST_PLATFORM_KEYS } from "@/lib/content-keys";

function TrustItem({ name }: { name: string }) {
  return (
    <span className="mx-3.5 inline-flex shrink-0 items-center gap-2 rounded-button border border-tasami-purple/5 bg-tasami-offwhite px-5 py-2.5 text-sm font-medium text-tasami-purple sm:mx-5">
      <SealCheck weight="regular" className="h-4 w-4 shrink-0 text-tasami-gold" />
      {name}
    </span>
  );
}

export default function TrustBar() {
  const t = useTranslations("trust");
  const platforms = TRUST_PLATFORM_KEYS.map((key) => t(`platforms.${key}`));
  const strip = [...platforms, ...platforms];

  return (
    <section
      aria-label={t("aria")}
      className="trust-bar relative border-b border-tasami-purple/5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[15] hidden items-center ps-5 sm:flex sm:ps-8 rtl:left-auto rtl:right-0 rtl:pe-5 rtl:ps-0 rtl:sm:pe-8">
        <span className="inline-flex items-center gap-1.5 rounded-button bg-tasami-purple px-3.5 py-2 text-xs font-medium text-white shadow-soft">
          <SealCheck weight="fill" className="h-3.5 w-3.5 text-tasami-gold" />
          {t("message")}
        </span>
      </div>

      {/* Mobile: native horizontal scroll — no CSS marquee (smoother) */}
      <div className="scroll-touch overflow-x-auto py-3.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden">
        <div className="inline-flex min-w-full items-center px-4">
          {platforms.map((name) => (
            <TrustItem key={name} name={name} />
          ))}
        </div>
      </div>

      {/* Desktop: infinite marquee */}
      <div className="relative hidden overflow-hidden py-3.5 sm:block">
        <div className="trust-fade-l z-[12]" />
        <div className="trust-fade-r z-[12]" />
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
