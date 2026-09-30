import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import HeroAurora from "@/components/HeroAurora";
import HeroPlate from "@/components/HeroPlate";
import HeroServiceReel from "@/components/HeroServiceReel";
import OfferingTheater from "@/components/OfferingTheater";
import PlatformsShowcase from "@/components/PlatformsShowcase";
import ProcessScene from "@/components/ProcessScene";
import WhyScene from "@/components/WhyScene";
import Reveal from "@/components/Reveal";
import TrustStats from "@/components/TrustStats";
import {
  HOME_CORE_KEYS,
  HOME_WHY_KEYS,
  HOME_PROCESS_KEYS,
} from "@/lib/content-keys";
import { rtlLocales, type Locale } from "@/i18n";
import { getWhatsAppDirectUrl, getWhatsAppUrl } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import {
  taqeebWhatsAppMessage,
  techWhatsAppMessage,
} from "@/lib/whatsapp-templates";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const CORE_HREF = {
  gov: "/services/government",
  tech: "/services/tech",
  sectors: "/sectors",
} as const;

export const revalidate = 1800;

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "home" });
  const tBrand = await getTranslations({ locale, namespace: "brand" });

  return buildPageMetadata({
    title: t("title"),
    description: `${t("hero")} ${tBrand("slogan")}. ${t("trustLine")}`,
    path: "",
    locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tBrand = await getTranslations("brand");
  const isRtl = rtlLocales.includes(locale as Locale);
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const waTaqeeb = getWhatsAppDirectUrl(
    taqeebWhatsAppMessage("استفسار عام — الصفحة الرئيسية")
  );
  const waTech = getWhatsAppUrl(
    techWhatsAppMessage("استفسار عام — حلول تقنية")
  );

  const theaterItems = HOME_CORE_KEYS.map((key) => ({
    key,
    href: CORE_HREF[key],
    title: t(`core.${key}.title`),
    description: t(`core.${key}.desc`),
    cta: t(`core.${key}.cta`),
    meta:
      key === "gov"
        ? t("coreCountGov")
        : key === "tech"
          ? t("coreCountTech")
          : t("coreCountSectors"),
  }));

  return (
    <div>
      <section className="hero-premium hero-premium--split relative flex min-h-0 flex-col lg:min-h-[min(92dvh,920px)]">
        <HeroPlate />
        <HeroAurora />

        <div className="hero-premium-inner relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-7 px-5 pb-12 pt-24 sm:gap-10 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10">
          <div className="hero-reveal flex flex-col items-start text-start">
            <p className="eyebrow text-white/70">{tBrand("name")}</p>
            <p className="mt-1 text-sm font-medium text-white/75 sm:text-base">
              {tBrand("slogan")}
            </p>
            <h1 className="font-display mt-3 max-w-[18ch] text-balance text-[1.9rem] leading-[1.3] text-white sm:text-5xl lg:text-[3.25rem]">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.8] text-white/90 sm:mt-6 sm:text-lg">
              {t("hero")}
            </p>
            <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:mt-10 sm:w-auto sm:grid-cols-2">
              <a
                href={waTaqeeb}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-location="home_hero"
                className="btn-hero inline-flex min-h-[48px] w-full items-center justify-center gap-2 text-base sm:min-w-[220px]"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("ctaWhatsapp")}
              </a>
              <a
                href={waTech}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-location="home_hero"
                className="btn-hero inline-flex min-h-[48px] w-full items-center justify-center gap-2 text-base sm:min-w-[220px]"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("ctaTech")}
              </a>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80">
              {t("trustLine")}
            </p>
          </div>

          <div className="hero-orbit-shell relative min-h-0 max-lg:order-last lg:min-h-[26rem]">
            <HeroServiceReel
              items={[
                { title: t("core.gov.title"), meta: t("coreCountGov") },
                { title: t("core.tech.title"), meta: t("coreCountTech") },
                { title: t("core.sectors.title"), meta: t("coreCountSectors") },
              ]}
            />
          </div>
        </div>
      </section>

      <TrustStats />

      <OfferingTheater
        title={t("offerTitle")}
        subtitle={t("offerSubtitle")}
        items={theaterItems}
        rtl={isRtl}
      />

      <WhyScene
        title={t("whyTitle")}
        subtitle={t("whySubtitle")}
        items={HOME_WHY_KEYS.map((key) => ({
          key,
          title: t(`why.${key}.title`),
          description: t(`why.${key}.desc`),
        }))}
      />

      <ProcessScene
        title={t("processTitle")}
        subtitle={t("processSubtitle")}
        steps={HOME_PROCESS_KEYS.map((key) => ({
          key,
          title: t(`process.${key}.title`),
          description: t(`process.${key}.desc`),
        }))}
      />

      <PlatformsShowcase />

      <section className="cta-band relative py-16 sm:py-24">
        <Reveal y={20}>
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="eyebrow mx-auto">{tBrand("name")}</p>
            <h2 className="font-display mt-4 text-3xl text-white sm:text-4xl">
              {t("ctaBandTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
              {t("ctaBandSubtitle")}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={waTaqeeb}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-location="home_cta_band"
                className="btn-hero inline-flex w-full min-w-0 items-center justify-center gap-2 sm:w-auto sm:min-w-[200px]"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("ctaBandAction")}
              </a>
              <Link
                href="/services/government"
                className="btn-outline-light w-full min-w-0 sm:w-auto sm:min-w-[200px]"
              >
                {t("core.gov.cta")}
                <Arrow weight="regular" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
