import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Buildings,
  Cpu,
  SquaresFour,
  Lightning,
  ShieldCheck,
  Headset,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import { HOME_CORE_KEYS, HOME_WHY_KEYS } from "@/lib/content-keys";
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
} as const;

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const isRtl = rtlLocales.includes(locale as Locale);
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div>
      {/* —— Hero —— */}
      <section className="relative overflow-hidden bg-tasami-purple">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full bg-tasami-gold/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-tasami-pink/12 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <p className="mb-5 text-xs font-medium tracking-[0.14em] text-tasami-gold sm:text-sm">
            {t("eyebrow")}
          </p>
          <h1 className="font-display max-w-3xl text-3xl text-white sm:text-5xl lg:text-[3.5rem]">
            {t("title")}
          </h1>
          <span className="highlight-line mx-auto !bg-tasami-gold" />
          <p className="mt-7 max-w-lg text-base leading-[1.85] text-white/75 sm:text-lg sm:leading-relaxed">
            {t("hero")}
          </p>

          <div className="mt-12 flex w-full max-w-md flex-col items-stretch gap-3.5 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Link href="/services/government" className="btn-secondary">
              {t("ctaGov")}
              <Arrow weight="bold" className="h-4 w-4" />
            </Link>
            <Link href="/services/tech" className="btn-outline-light">
              {t("ctaTech")}
            </Link>
          </div>
        </div>
      </section>

      {/* —— Core Cards —— */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mb-14 text-center">
          <h2 className="font-display text-2xl text-tasami-purple sm:text-3xl">
            {t("offerTitle")}
          </h2>
          <span className="highlight-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {HOME_CORE_KEYS.map((key) => {
            const { href, icon: Icon } = CORE_META[key];
            return (
              <Link
                key={key}
                href={href}
                className="card-soft group flex flex-col p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="icon-gold mb-6">
                  <Icon weight="regular" className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-medium text-tasami-purple">
                  {t(`core.${key}.title`)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-tasami-gray">
                  {t(`core.${key}.desc`)}
                </p>
                <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-tasami-pink transition-colors group-hover:text-tasami-purple">
                  {t(`core.${key}.cta`)}
                  <Arrow weight="bold" className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* —— Why Tasami —— */}
      <section className="border-t border-tasami-purple/5 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mb-14 text-center">
            <h2 className="font-display text-2xl text-tasami-purple sm:text-3xl">
              {t("whyTitle")}
            </h2>
            <span className="highlight-line mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {HOME_WHY_KEYS.map((key) => {
              const Icon = WHY_ICONS[key];
              return (
                <div
                  key={key}
                  className="flex flex-col items-center px-2 text-center"
                >
                  <span className="icon-gold mb-5 !h-14 !w-14">
                    <Icon weight="regular" className="h-7 w-7" />
                  </span>
                  <h3 className="text-base font-medium text-tasami-purple">
                    {t(`why.${key}.title`)}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-tasami-gray">
                    {t(`why.${key}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
