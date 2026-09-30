import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  ClipboardText,
  Cpu,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import HeroAurora from "@/components/HeroAurora";
import HeroPlate from "@/components/HeroPlate";
import HeroServiceReel from "@/components/HeroServiceReel";
import PlatformsShowcase from "@/components/PlatformsShowcase";
import TrustStats from "@/components/TrustStats";
import WaLink from "@/components/WaLink";
import WaChooserButton from "@/components/WaChooserButton";
import FaqList, { type FaqEntry } from "@/components/FaqList";
import BlogCard from "@/components/BlogCard";
import { rtlLocales, type Locale } from "@/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { HOME_DEPARTMENT_SERVICES, HOME_POPULAR } from "@/lib/orders";
import { latestPosts } from "@/lib/blog";

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

const HOW_STEPS = ["one", "two", "three"] as const;

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tBrand = await getTranslations("brand");
  const tS = await getTranslations("homeSections");
  const tReq = await getTranslations("request");
  const tFaq = await getTranslations("faq");
  const tBlog = await getTranslations("blog");
  const tAll = await getTranslations();
  const isRtl = rtlLocales.includes(locale as Locale);
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const faqItems = (tFaq.raw("items") as FaqEntry[]).slice(0, 5);
  const posts = latestPosts(3);

  const departments = [
    { key: "gov" as const, line: "taqeeb" as const, icon: Buildings, href: "/services/government" },
    { key: "tech" as const, line: "tech" as const, icon: Cpu, href: "/services/tech" },
  ];

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
              <WaLink
                line="taqeeb"
                location="home_hero"
                className="btn-hero inline-flex min-h-[48px] w-full items-center justify-center gap-2 text-base sm:min-w-[220px]"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("ctaWhatsapp")}
              </WaLink>
              <WaLink
                line="tech"
                location="home_hero"
                className="btn-hero inline-flex min-h-[48px] w-full items-center justify-center gap-2 text-base sm:min-w-[220px]"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("ctaTech")}
              </WaLink>
            </div>
            <Link
              href="/request"
              className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-white underline-offset-4 hover:underline"
            >
              <ClipboardText weight="regular" className="h-4 w-4" />
              {tReq("formLink")}
            </Link>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">
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

      <section className="bg-tasami-offwhite py-14 sm:py-20" aria-labelledby="departments-title">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 id="departments-title" className="text-2xl font-bold leading-[1.3] text-tasami-dark sm:text-3xl">
            {tS("departments.title")}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {departments.map(({ key, line, icon: Icon, href }) => (
              <article key={key} className="flex flex-col rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#006BDE]/10 text-[#006BDE]">
                  <Icon weight="regular" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-tasami-dark">{tS(`departments.${key}.title`)}</h3>
                <p className="mt-2 leading-[1.8] text-tasami-gray">{tS(`departments.${key}.body`)}</p>
                <ul className="mt-4 flex-1 space-y-1">
                  {HOME_DEPARTMENT_SERVICES[key].map((s) => (
                    <li key={s.id}>
                      <Link
                        href={s.href as "/"}
                        className="flex min-h-[44px] items-center justify-between gap-3 border-b border-[rgba(26,53,80,0.08)] py-2 text-tasami-dark hover:text-[#006BDE]"
                      >
                        {tAll(s.labelKey)}
                        <Arrow weight="bold" className="h-4 w-4 shrink-0 text-tasami-gray" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <WaLink
                  line={line}
                  location={`home_department_${key}`}
                  className="mt-5 flex min-h-[48px] items-center justify-center gap-2 rounded-button bg-[#0F7A40] px-4 text-base font-bold text-white active:opacity-90"
                >
                  <WhatsappLogo weight="fill" className="h-5 w-5" />
                  {tS(`departments.${key}.cta`)}
                </WaLink>
                <Link
                  href={href}
                  className="mt-2 inline-flex min-h-[44px] items-center justify-center text-sm font-bold text-[#006BDE]"
                >
                  {tS("departments.viewAll")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" aria-labelledby="how-title">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 id="how-title" className="text-2xl font-bold leading-[1.3] text-tasami-dark sm:text-3xl">
            {tS("how.title")}
          </h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {HOW_STEPS.map((step, i) => (
              <li key={step} className="flex gap-4 md:flex-col md:gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#006BDE] text-lg font-bold text-white">
                  {(i + 1).toLocaleString(locale === "ar" ? "ar-SA" : "en-US")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-tasami-dark">{tS(`how.${step}.title`)}</h3>
                  <p className="mt-1 leading-[1.8] text-tasami-gray">{tS(`how.${step}.body`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-tasami-offwhite py-14 sm:py-20" aria-labelledby="popular-title">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 id="popular-title" className="text-2xl font-bold leading-[1.3] text-tasami-dark sm:text-3xl">
            {tS("popular.title")}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_POPULAR.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.href as "/"}
                  className="flex min-h-[64px] items-center justify-between gap-3 rounded-xl border border-[rgba(26,53,80,0.1)] bg-white px-4 py-3 font-bold text-tasami-dark transition-colors hover:border-[#006BDE]"
                >
                  <span className="flex items-center gap-3">
                    {s.line === "gov" ? (
                      <Buildings weight="regular" className="h-5 w-5 shrink-0 text-[#006BDE]" />
                    ) : (
                      <Cpu weight="regular" className="h-5 w-5 shrink-0 text-[#006BDE]" />
                    )}
                    {tAll(s.labelKey)}
                  </span>
                  <Arrow weight="bold" className="h-4 w-4 shrink-0 text-tasami-gray" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/services/government"
            className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-[#006BDE]"
          >
            {tS("popular.viewAll")}
            <Arrow weight="bold" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <PlatformsShowcase />

      <section className="bg-tasami-offwhite py-14 sm:py-20" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 id="faq-title" className="text-2xl font-bold leading-[1.3] text-tasami-dark sm:text-3xl">
            {tS("faq.title")}
          </h2>
          <div className="mt-8">
            <FaqList items={faqItems} />
          </div>
          <Link href="/faq" className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-[#006BDE]">
            {tS("faq.viewAll")}
            <Arrow weight="bold" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" aria-labelledby="blog-title">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 id="blog-title" className="text-2xl font-bold leading-[1.3] text-tasami-dark sm:text-3xl">
            {tS("blog.title")}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
                labels={{
                  line: tBlog(post.line),
                  minutes: tBlog.raw("minutes") as string,
                  readMore: tBlog("readMore"),
                }}
              />
            ))}
          </div>
          <Link href="/blog" className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-[#006BDE]">
            {tS("blog.viewAll")}
            <Arrow weight="bold" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-tasami-offwhite py-14 sm:py-20" aria-labelledby="final-cta-title">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 id="final-cta-title" className="text-2xl font-bold leading-[1.3] text-tasami-dark sm:text-3xl">
            {tS("finalCta.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-[1.8] text-tasami-gray">{tS("finalCta.body")}</p>
          <WaChooserButton
            location="home_final_cta"
            className="mx-auto mt-7 flex min-h-[52px] w-full max-w-sm items-center justify-center gap-2 rounded-button bg-[#0F7A40] px-6 text-lg font-bold text-white active:opacity-90"
          >
            <WhatsappLogo weight="fill" className="h-6 w-6" />
            {tS("finalCta.cta")}
          </WaChooserButton>
          <Link
            href="/request"
            className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[#006BDE]"
          >
            <ClipboardText weight="regular" className="h-4 w-4" />
            {tReq("formLink")}
          </Link>
        </div>
      </section>
    </div>
  );
}
