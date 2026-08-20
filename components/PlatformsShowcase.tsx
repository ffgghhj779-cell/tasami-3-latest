import { getTranslations } from "next-intl/server";
import { PLATFORMS } from "@/lib/platforms";
import Reveal from "@/components/Reveal";

export default async function PlatformsShowcase() {
  const t = await getTranslations("platformsShowcase");

  return (
    <section
      id="platforms"
      aria-labelledby="platforms-heading"
      className="relative scroll-mt-28 border-y border-[rgba(0,122,255,0.12)] bg-tasami-cream py-12 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="section-heading mb-10 sm:mb-16">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 id="platforms-heading" className="mt-2">
              {t("title")}
            </h2>
            <span className="highlight-line" />
            <p className="mt-5 text-sm leading-relaxed text-tasami-gray sm:text-base">
              {t("subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="platform-grid">
          {PLATFORMS.map((platform, i) => (
            <Reveal key={platform.key} index={i} className="h-full">
              <article className="platform-card h-full">
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
              <div className="flex flex-1 flex-col px-3.5 py-3.5 sm:px-6 sm:pb-6 sm:pt-4">
                <h3 className="text-base font-semibold leading-snug text-tasami-dark sm:text-lg">
                  {t(`items.${platform.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
                  {t(`items.${platform.key}.desc`)}
                </p>
                <p className="mt-auto border-t border-[rgba(0,122,255,0.12)] pt-3 text-xs font-medium leading-relaxed text-tasami-gray">
                  {t(`items.${platform.key}.use`)}
                </p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-relaxed text-tasami-gray sm:mt-10 sm:text-xs">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
