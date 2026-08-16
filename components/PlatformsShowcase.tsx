import { getTranslations } from "next-intl/server";
import { PLATFORMS } from "@/lib/platforms";

export default async function PlatformsShowcase() {
  const t = await getTranslations("platformsShowcase");

  return (
    <section
      aria-labelledby="platforms-heading"
      className="relative border-y border-tasami-purple/8 bg-tasami-offwhite py-16 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="section-heading mb-10 max-w-2xl sm:mb-16 sm:mx-auto sm:text-center">
          <p className="text-sm font-medium text-tasami-pink">{t("eyebrow")}</p>
          <h2 id="platforms-heading" className="mt-2">
            {t("title")}
          </h2>
          <span className="highlight-line sm:mx-auto" />
          <p className="mt-5 text-sm leading-relaxed text-tasami-gray sm:text-base">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PLATFORMS.map((platform) => (
            <article key={platform.key} className="platform-card">
              <div className="platform-card-visual" aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={platform.logo}
                  alt=""
                  width={72}
                  height={72}
                  className="platform-logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <h3 className="text-base font-semibold leading-snug text-tasami-purple sm:text-lg">
                  {t(`items.${platform.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
                  {t(`items.${platform.key}.desc`)}
                </p>
                <p className="mt-auto border-t border-tasami-purple/8 pt-3 text-xs font-medium leading-relaxed text-tasami-purple/80">
                  {t(`items.${platform.key}.use`)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-relaxed text-tasami-gray sm:mt-10 sm:text-xs">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
