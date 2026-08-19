import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Buildings,
  Cpu,
  SquaresFour,
  Lightning,
  ShieldCheck,
  Headset,
  Eye,
  Translate,
  ShareNetwork,
  ChatCircleDots,
  ListNumbers,
  SealCheck,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import ServiceCard from "@/components/ServiceCard";
import BrandLogo from "@/components/BrandLogo";
import HeroAurora from "@/components/HeroAurora";
import PlatformsShowcase from "@/components/PlatformsShowcase";
import {
  HOME_CORE_KEYS,
  HOME_WHY_KEYS,
  HOME_PROCESS_KEYS,
} from "@/lib/content-keys";
import { rtlLocales, type Locale } from "@/i18n";
import { getWhatsAppUrl } from "@/lib/site";

const CORE_META = {
  gov: { href: "/services/government", icon: Buildings },
  tech: { href: "/services/tech", icon: Cpu },
  sectors: { href: "/sectors", icon: SquaresFour },
} as const;

const WHY_ICONS = {
  speed: Lightning,
  trust: ShieldCheck,
  support: Headset,
  clarity: Eye,
  multilang: Translate,
  endtoend: ShareNetwork,
} as const;

const PROCESS_ICONS = {
  one: ChatCircleDots,
  two: ListNumbers,
  three: SealCheck,
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

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tBrand = await getTranslations("brand");
  const isRtl = rtlLocales.includes(locale as Locale);
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const waUrl = getWhatsAppUrl();

  return (
    <div>
      {/* —— Hero —— */}
      <section className="hero-premium relative flex min-h-[min(72dvh,700px)] flex-col">
        <HeroAurora />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <BrandLogo
            lockup
            lockupSize="sm"
            priority
            wordmark={tBrand("name")}
            slogan={tBrand("slogan")}
            className="mb-6 inline-flex sm:mb-8"
          />

          <h1 className="hero-title-glow font-display max-w-4xl text-balance text-[2.45rem] leading-[1.22] text-white sm:text-6xl lg:text-[4.35rem] lg:leading-[1.12]">
            {t("title")}
          </h1>

          <Link
            href="/services/government"
            className="btn-primary mt-10 w-full sm:mt-12 sm:w-auto sm:min-w-[200px]"
          >
            {t("ctaGov")}
            <Arrow weight="bold" className="h-4 w-4" />
          </Link>
        </div>

        {/* Bottom wave fade into content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
        />
      </section>

      {/* —— Core offerings —— */}
      <section className="relative -mt-8 bg-white pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-7 text-center sm:mb-10">
            <h2 className="font-display text-xl text-tasami-purple sm:text-2xl">
              {t("offerTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {HOME_CORE_KEYS.map((key) => {
              const { href, icon } = CORE_META[key];
              return (
                <ServiceCard
                  key={key}
                  href={href}
                  icon={icon}
                  title={t(`core.${key}.title`)}
                  description={t(`core.${key}.desc`)}
                  cta={t(`core.${key}.cta`)}
                  meta={
                    key === "gov"
                      ? t("coreCountGov")
                      : key === "tech"
                        ? t("coreCountTech")
                        : t("coreCountSectors")
                  }
                  rtl={isRtl}
                  featured
                />
              );
            })}
          </div>
        </div>
      </section>

      <PlatformsShowcase />

      {/* —— Why Khalsana (6 features) —— */}
      <section className="surface-grid surface-noise relative border-y border-tasami-purple/5 py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="section-heading mb-14 sm:mb-16">
            <h2>{t("whyTitle")}</h2>
            <span className="highlight-line mx-auto" />
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-tasami-gray sm:text-base">
              {t("whySubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {HOME_WHY_KEYS.map((key) => {
              const Icon = WHY_ICONS[key];
              return (
                <div key={key} className="feature-card">
                  <div className="feature-card-accent" aria-hidden />
                  <div className="p-6 sm:p-7">
                    <span className="icon-gold-lg mb-5">
                      <Icon weight="regular" className="h-7 w-7" />
                    </span>
                    <h3 className="text-base font-medium text-tasami-purple sm:text-lg">
                      {t(`why.${key}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-tasami-gray">
                      {t(`why.${key}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* —— Process —— */}
      <section className="surface-dotted py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="section-heading mb-14">
            <h2>{t("processTitle")}</h2>
            <span className="highlight-line mx-auto" />
            <p className="mx-auto mt-5 max-w-xl text-sm text-tasami-gray sm:text-base">
              {t("processSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {HOME_PROCESS_KEYS.map((key, i) => {
              const Icon = PROCESS_ICONS[key];
              return (
                <div
                  key={key}
                  className="card-premium relative overflow-hidden p-8 text-center"
                >
                  <span className="absolute start-4 top-4 text-5xl font-light text-tasami-purple/8">
                    0{i + 1}
                  </span>
                  <span className="icon-gold-lg mx-auto mb-5">
                    <Icon weight="regular" className="h-7 w-7" />
                  </span>
                  <h3 className="text-base font-medium text-tasami-purple">
                    {t(`process.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-tasami-gray">
                    {t(`process.${key}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* —— Languages —— */}
      <section className="border-y border-tasami-purple/8 bg-tasami-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <h2 className="font-display text-2xl text-tasami-purple sm:text-3xl">
            {t("langsTitle")}
          </h2>
          <span className="highlight-line mx-auto" />
          <p className="mx-auto mt-5 max-w-lg text-sm text-tasami-gray">
            {t("langsSubtitle")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {LANG_PILLS.map((l) => (
              <span
                key={l.code}
                className="inline-flex min-w-[7.5rem] flex-col items-center rounded-full border border-tasami-pink/12 bg-[#fbfafe] px-5 py-4 shadow-soft"
              >
                <span className="text-xs font-semibold tracking-wider text-tasami-pink">
                  {l.code}
                </span>
                <span className="mt-1 text-sm font-medium text-tasami-purple">
                  {l.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* —— CTA band —— */}
      <section className="hero-premium relative overflow-hidden py-20 sm:py-24">
        <HeroAurora />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            {t("ctaBandTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            {t("ctaBandSubtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp min-w-[200px]"
            >
              {t("ctaBandAction")}
            </a>
            <Link href="/services/government" className="btn-outline-light min-w-[200px]">
              {t("ctaGov")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
