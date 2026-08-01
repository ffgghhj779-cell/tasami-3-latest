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
import {
  HOME_CORE_KEYS,
  HOME_WHY_KEYS,
  HOME_PROCESS_KEYS,
} from "@/lib/content-keys";
import { rtlLocales, type Locale } from "@/i18n";

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

  return (
    <div>
      {/* —— Hero —— */}
      <section className="hero-premium relative min-h-[min(88vh,820px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-hero-glow opacity-50 sm:opacity-70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-28 hidden h-64 w-64 animate-float-soft rounded-full bg-tasami-gold/12 blur-3xl sm:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-24 hidden h-72 w-72 rounded-full bg-tasami-pink/10 blur-3xl sm:block"
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-14 text-center sm:px-8 sm:pb-32 sm:pt-28 lg:px-10 lg:pb-36 lg:pt-32">
          <BrandLogo
            size={52}
            withWordmark
            wordmark={tBrand("name")}
            slogan={tBrand("slogan")}
            onDark
            className="mb-8 sm:mb-10"
          />

          <h1 className="font-display max-w-4xl text-[1.85rem] leading-[1.25] text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {t("title")}
          </h1>
          <span className="highlight-line mx-auto !w-16 !bg-tasami-gold" />

          <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.85] text-white/75 sm:mt-8 sm:text-lg sm:leading-relaxed">
            {t("hero")}
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-12 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/services/government"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button border-[1.5px] border-tasami-pink bg-transparent px-7 py-3.5 text-sm font-medium text-white transition-all active:bg-tasami-pink/15 sm:w-auto sm:min-w-[200px] hover:bg-tasami-pink/15"
            >
              {t("ctaGov")}
              <Arrow weight="bold" className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto sm:min-w-[200px]"
            >
              {t("ctaWhatsapp")}
            </a>
          </div>
        </div>

        {/* Bottom wave fade into content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-tasami-offwhite/30 to-transparent"
        />
      </section>

      {/* —— Core offerings —— */}
      <section className="surface-dotted relative -mt-10 pb-20 pt-4 sm:pb-24 lg:pb-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="section-heading mb-12 sm:mb-16">
            <h2>{t("offerTitle")}</h2>
            <span className="highlight-line mx-auto" />
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-tasami-gray sm:text-base">
              {t("offerSubtitle")}
            </p>
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
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* —— Why Tasami (6 features) —— */}
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
                <div key={key} className="card-premium p-7 sm:p-8">
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
      <section className="border-y border-tasami-purple/5 bg-white py-16 sm:py-20">
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
                className="inline-flex min-w-[7.5rem] flex-col items-center rounded-card border border-tasami-purple/8 bg-tasami-offwhite px-5 py-4 shadow-soft"
              >
                <span className="text-xs font-medium tracking-wider text-tasami-gold">
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
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            {t("ctaBandTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            {t("ctaBandSubtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-w-[200px]"
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
