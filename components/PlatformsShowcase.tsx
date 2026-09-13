import { getTranslations } from "next-intl/server";
import { WhatsappLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PLATFORMS } from "@/lib/platforms";
import { whatsappDirectUrl } from "@/lib/site";
import { taqeebWhatsAppMessage } from "@/lib/whatsapp-templates";
import { Link } from "@/navigation";
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
          {PLATFORMS.map((platform, i) => {
            const title = t(`items.${platform.key}.title`);
            const waUrl = whatsappDirectUrl(
              taqeebWhatsAppMessage(`منصة ${title}`)
            );
            const moreHref = platform.govSlug
              ? (`/services/government/${platform.govSlug}` as const)
              : platform.sectorKey
                ? ("/sectors" as const)
                : null;

            return (
              <Reveal key={platform.key} index={i} className="h-full">
                <article className="platform-card h-full">
                  <div className="platform-card-visual" aria-hidden>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={platform.logo}
                      alt=""
                      width={88}
                      height={88}
                      className="platform-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-3.5 py-3.5 sm:px-6 sm:pb-5 sm:pt-4">
                    <h3 className="text-base font-semibold leading-snug text-tasami-dark sm:text-lg">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
                      {t(`items.${platform.key}.desc`)}
                    </p>
                    <p className="mt-3 border-t border-[rgba(0,122,255,0.12)] pt-3 text-xs font-medium leading-relaxed text-tasami-gray">
                      {t(`items.${platform.key}.use`)}
                    </p>

                    <div className="mt-auto flex flex-col gap-2 pt-4">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-wa-location={`platform_${platform.key}`}
                        className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-button bg-[#128C4A] px-3 text-sm font-semibold text-white transition-opacity hover:opacity-95"
                      >
                        <WhatsappLogo weight="fill" className="h-4 w-4" />
                        {t("ctaWhatsapp")}
                      </a>
                      {moreHref ? (
                        <Link
                          href={moreHref}
                          className="inline-flex min-h-[40px] items-center justify-center gap-1.5 text-sm font-medium text-[#007AFF] hover:underline"
                        >
                          {t("ctaMore")}
                          <ArrowRight
                            weight="bold"
                            className="h-3.5 w-3.5 rtl:rotate-180"
                          />
                        </Link>
                      ) : (
                        <a
                          href={platform.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center justify-center gap-1.5 text-sm font-medium text-[#007AFF] hover:underline"
                        >
                          {t("ctaPortal")}
                          <ArrowRight
                            weight="bold"
                            className="h-3.5 w-3.5 rtl:rotate-180"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-relaxed text-tasami-gray sm:mt-10 sm:text-xs">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
