"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { PLATFORMS } from "@/lib/platforms";

export default function TrustBar() {
  const t = useTranslations("trust");
  const tPlat = useTranslations("platformsShowcase.items");

  return (
    <section
      aria-label={t("aria")}
      className="trust-bar relative"
    >
      <div className="trust-fade-l" />
      <div className="trust-fade-r" />

      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2 sm:gap-5 sm:px-8 sm:py-2.5 lg:px-10">
        <p className="hidden shrink-0 text-[11px] font-semibold tracking-wide text-tasami-teal sm:block">
          {t("message")}
        </p>

        <div className="scroll-touch flex min-w-0 flex-1 items-center gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:gap-6 [&::-webkit-scrollbar]:hidden">
          {PLATFORMS.map((platform) => (
            <span key={platform.key} className="trust-logo-chip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={platform.logo}
                alt={tPlat(`${platform.key}.title`)}
                width={120}
                height={40}
                decoding="async"
                className="h-7 w-auto max-w-[6.5rem] object-contain object-center sm:h-8 sm:max-w-[7.5rem]"
              />
            </span>
          ))}
        </div>

        <Link href={{ pathname: "/", hash: "platforms" }} className="trust-view-all">
          {t("viewAll")}
        </Link>
      </div>
    </section>
  );
}
