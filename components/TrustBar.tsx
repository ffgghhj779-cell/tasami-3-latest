"use client";

import { useTranslations } from "next-intl";
import { SealCheck } from "@phosphor-icons/react";
import { Link } from "@/navigation";
import { PLATFORMS } from "@/lib/platforms";

export default function TrustBar() {
  const t = useTranslations("trust");
  const tPlat = useTranslations("platformsShowcase.items");

  return (
    <section
      aria-label={t("aria")}
      className="trust-bar relative border-b border-tasami-purple/8"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2.5 sm:gap-5 sm:px-8 sm:py-3.5 lg:px-10">
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-tasami-green/10 px-3 py-1.5 text-xs font-semibold text-tasami-green sm:inline-flex">
          <SealCheck weight="fill" className="h-3.5 w-3.5" />
          {t("message")}
        </span>

        <div className="scroll-touch flex min-w-0 flex-1 items-center gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:gap-4 [&::-webkit-scrollbar]:hidden">
          {PLATFORMS.map((platform) => (
            <span key={platform.key} className="trust-logo-chip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={platform.logo}
                alt={tPlat(`${platform.key}.title`)}
                width={120}
                height={40}
                decoding="async"
                className="h-8 w-auto max-w-[7.5rem] object-contain object-center sm:h-10 sm:max-w-[8.5rem]"
              />
            </span>
          ))}
        </div>

        <Link
          href={{ pathname: "/", hash: "platforms" }}
          className="trust-view-all"
        >
          {t("viewAll")}
        </Link>
      </div>

      <p className="border-t border-tasami-purple/5 px-5 py-2 text-center text-xs font-medium text-tasami-gray sm:hidden">
        {t("message")}
      </p>
    </section>
  );
}
