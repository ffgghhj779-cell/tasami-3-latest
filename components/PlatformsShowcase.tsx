import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PLATFORMS } from "@/lib/platforms";

export default async function PlatformsShowcase() {
  const t = await getTranslations("platformsShowcase");

  return (
    <section
      aria-labelledby="platforms-heading"
      className="relative border-y border-tasami-purple/5 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #2E1A47 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="section-heading mb-12 max-w-2xl sm:mb-16 sm:mx-auto sm:text-center">
          <p className="text-sm font-medium text-tasami-pink">{t("eyebrow")}</p>
          <h2 id="platforms-heading" className="mt-2">
            {t("title")}
          </h2>
          <span className="highlight-line sm:mx-auto" />
          <p className="mt-5 text-sm leading-relaxed text-tasami-gray sm:text-base">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PLATFORMS.map((platform) => (
            <a
              key={platform.key}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-[1.25rem] border border-tasami-purple/[0.06] bg-[#FCFCFD] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-tasami-gold/35 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(46,26,71,0.45)] sm:p-6"
            >
              <div className="mb-5 flex h-[4.5rem] items-center justify-center rounded-2xl bg-white px-4 ring-1 ring-tasami-purple/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={platform.logo}
                  alt={t(`items.${platform.key}.title`)}
                  width={220}
                  height={120}
                  className="h-14 w-auto max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-medium text-tasami-purple sm:text-lg">
                  {t(`items.${platform.key}.title`)}
                </h3>
                <ArrowUpRight
                  weight="bold"
                  className="mt-1 h-4 w-4 shrink-0 text-tasami-gold opacity-0 transition group-hover:opacity-100"
                  aria-hidden
                />
              </div>

              <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
                {t(`items.${platform.key}.desc`)}
              </p>

              <p className="mt-4 border-t border-tasami-purple/5 pt-3 text-xs font-medium leading-relaxed text-tasami-purple/80">
                {t(`items.${platform.key}.use`)}
              </p>
            </a>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[11px] leading-relaxed text-tasami-gray sm:text-xs">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
