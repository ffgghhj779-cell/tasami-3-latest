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
import SearchRouter from "@/components/SearchRouter";
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

const LANG_PILLS = [
  { code: "AR", label: "العربية" },
  { code: "EN", label: "English" },
  { code: "UR", label: "اردو" },
  { code: "HI", label: "हिन्दी" },
] as const;

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
  const tSearch = await getTranslations("search");
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
            <h1 className="hero-title-glow font-display mt-3 text-balance text-[2rem] leading-[1.22] text-white sm:text-6xl lg:text-[4rem] lg:leading-[1.08] xl:text-[4.35rem]">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/90 sm:mt-6 sm:text-lg">
              {t("hero")}
            </p>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/70 sm:text-sm">
              {t("trustLine")}
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center lg:justify-start">
              <a
                href={waTaqeeb}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-flex w-full items-center justify-center gap-2 sm:w-auto sm:min-w-[210px]"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("ctaWhatsapp")}
              </a>
              <a
                href={waTech}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light inline-flex w-full items-center justify-center gap-2 sm:w-auto sm:min-w-[210px] max-lg:order-3 lg:order-none"
              >
                <WhatsappLogo weight="regular" className="h-5 w-5" />
                {t("ctaTech")}
              </a>
            </div>
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

      <section className="border-b border-tasami-purple/6 bg-white/70 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow text-[#007AFF]">{tSearch("eyebrow")}</p>
            <h2 className="font-display mt-2 text-2xl text-tasami-dark sm:text-3xl">
              {tSearch("title")}
            </h2>
            <p className="mt-2 text-sm text-tasami-gray sm:text-base">
              {tSearch("subtitle")}
            </p>
          </Reveal>
          <div className="mt-6">
            <SearchRouter compact />
          </div>
          <p className="mt-4 text-center text-xs text-tasami-gray">
            <Link href="/search" className="font-medium text-[#007AFF] hover:underline">
              {tSearch("title")}
            </Link>
          </p>
        </div>
      </section>

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

      <section className="lang-band">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mb-10 max-w-xl">
              <h2 className="font-display text-2xl text-tasami-dark sm:text-3xl">
                {t("langsTitle")}
              </h2>
              <p className="mt-3 text-sm text-tasami-gray">{t("langsSubtitle")}</p>
            </div>
          </Reveal>
          <div className="lang-grid">
            {LANG_PILLS.map((l, i) => (
              <Reveal key={l.code} index={i} columns={4} className="h-full">
                <article className={`lang-tile lang-tile--${i}`}>
                  <span>{l.code}</span>
                  <h3>{l.label}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
