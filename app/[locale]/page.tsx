import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  ClipboardText,
  Cpu,
  ShieldCheck,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import HeroAurora from "@/components/HeroAurora";
import HeroPlate from "@/components/HeroPlate";
import HeroServiceReel from "@/components/HeroServiceReel";
import PlatformsShowcase from "@/components/PlatformsShowcase";
import TrustStats from "@/components/TrustStats";
import Reveal from "@/components/Reveal";
import WaLink from "@/components/WaLink";
import WaChooserButton from "@/components/WaChooserButton";
import FaqList, { type FaqEntry } from "@/components/FaqList";
import BlogCard from "@/components/BlogCard";
import CustomerReviews from "@/components/CustomerReviews";
import { rtlLocales, type Locale } from "@/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { HOME_DEPARTMENT_SERVICES, HOME_POPULAR } from "@/lib/orders";
import { latestPosts } from "@/lib/blog";
import { VISUALS } from "@/lib/visuals";

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

const HOW_STEPS = [
  { key: "one", visual: VISUALS.process.one },
  { key: "two", visual: VISUALS.process.two },
  { key: "three", visual: VISUALS.process.three },
] as const;

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
  const numLocale = locale === "ar" ? "ar-SA" : "en-US";

  const faqItems = (tFaq.raw("items") as FaqEntry[]).slice(0, 5);
  const posts = latestPosts(3);

  const departments = [
    { key: "gov" as const, line: "taqeeb" as const, icon: Buildings, href: "/services/government", visual: VISUALS.offerings.gov },
    { key: "tech" as const, line: "tech" as const, icon: Cpu, href: "/services/tech", visual: VISUALS.offerings.tech },
  ];

  return (
    <div>
      <section className="hero-premium hero-premium--split hero-under-nav relative flex min-h-0 flex-col lg:min-h-[min(94dvh,940px)]">
        <HeroPlate />
        <HeroAurora />

        <div className="hero-premium-inner relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-10">
          <div className="hero-reveal flex max-w-2xl flex-col items-start text-start">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white/90 backdrop-blur-sm sm:text-sm">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#e8d49a]" />
              {tBrand("name")} · {tBrand("slogan")}
            </p>
            <h1 className="font-display mt-5 max-w-[18ch] text-balance text-[2rem] font-extrabold leading-[1.25] text-white sm:text-5xl lg:text-[3.6rem]">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.85] text-white/90 sm:mt-6 sm:text-xl">
              {t("hero")}
            </p>
            <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:mt-10 sm:w-auto sm:grid-cols-2">
              <WaLink
                line="taqeeb"
                location="home_hero"
                className="lux-btn-wa min-h-[54px] w-full px-7 text-base sm:min-w-[230px]"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("ctaWhatsapp")}
              </WaLink>
              <WaLink
                line="tech"
                location="home_hero"
                className="lux-btn-glass min-h-[54px] w-full px-7 text-base sm:min-w-[230px]"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("ctaTech")}
              </WaLink>
            </div>
            <Link
              href="/request"
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-[0.95rem] font-bold text-white underline decoration-white/40 underline-offset-[6px] transition-colors hover:decoration-white"
            >
              <ClipboardText weight="bold" className="h-5 w-5" />
              {tReq("formLink")}
            </Link>
            <p className="mt-2 inline-flex items-center gap-2 text-sm leading-relaxed text-white/85">
              <ShieldCheck weight="fill" className="h-4 w-4 shrink-0 text-[#e8d49a]" />
              {t("trustLine")}
            </p>
          </div>

          <div className="hero-orbit-shell hero-orbit-shell--dock relative w-full max-w-3xl max-lg:order-last">
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

      <section className="lux-section lux-section--tint" aria-labelledby="departments-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 id="departments-title" className="lux-title">
            {tS("departments.title")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            {departments.map(({ key, line, icon: Icon, href, visual }, i) => (
              <Reveal key={key} index={i} columns={2}>
                <article className="lux-card group flex h-full flex-col">
                  <div className="lux-dept-media lux-media">
                    <Image
                      src={visual}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="object-cover"
                    />
                    <div className="lux-dept-head">
                      <span className="lux-icon-glass">
                        <Icon weight="regular" className="h-6 w-6" />
                      </span>
                      <h3 className="text-2xl font-extrabold text-white">{tS(`departments.${key}.title`)}</h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="leading-[1.85] text-tasami-gray">{tS(`departments.${key}.body`)}</p>
                    <ul className="mt-4 flex-1 space-y-1">
                      {HOME_DEPARTMENT_SERVICES[key].map((s) => (
                        <li key={s.id}>
                          <Link
                            href={s.href as "/"}
                            className="group/item flex min-h-[48px] items-center justify-between gap-3 border-b border-[rgba(26,53,80,0.08)] py-2 font-medium text-tasami-dark transition-colors hover:text-[#0057B8]"
                          >
                            {tAll(s.labelKey)}
                            <Arrow weight="bold" className="h-4 w-4 shrink-0 text-tasami-gray transition-colors group-hover/item:text-[#0057B8]" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <WaLink
                      line={line}
                      location={`home_department_${key}`}
                      className="lux-btn-wa mt-6 min-h-[52px] px-4 text-base"
                    >
                      <WhatsappLogo weight="fill" className="h-5 w-5" />
                      {tS(`departments.${key}.cta`)}
                    </WaLink>
                    <Link
                      href={href}
                      className="mt-2 inline-flex min-h-[44px] items-center justify-center gap-1.5 text-sm font-bold text-[#0057B8]"
                    >
                      {tS("departments.viewAll")}
                      <Arrow weight="bold" className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="lux-section bg-white" aria-labelledby="how-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 id="how-title" className="lux-title">
            {tS("how.title")}
          </h2>
          <ol className="lux-steps mt-10 grid gap-6 md:grid-cols-3 lg:gap-8">
            {HOW_STEPS.map(({ key, visual }, i) => (
              <li key={key} className="relative z-[1]">
                <Reveal index={i} className="h-full">
                  <div className="lux-card group h-full">
                    <div className="lux-step-media lux-media">
                      <Image
                        src={visual}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative p-6 pt-9">
                      <span className="lux-step-num" aria-hidden>
                        {(i + 1).toLocaleString(numLocale)}
                      </span>
                      <h3 className="text-xl font-extrabold text-tasami-dark">{tS(`how.${key}.title`)}</h3>
                      <p className="mt-2 leading-[1.85] text-tasami-gray">{tS(`how.${key}.body`)}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--tint" aria-labelledby="popular-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 id="popular-title" className="lux-title">
            {tS("popular.title")}
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_POPULAR.map((s, i) => (
              <li key={s.id}>
                <Reveal index={i} className="h-full">
                  <Link
                    href={s.href as "/"}
                    className="lux-card group flex h-full min-h-[84px] items-center justify-between gap-3 px-5 py-4 font-bold text-tasami-dark"
                  >
                    <span className="flex items-center gap-4">
                      <span className={`lux-tile ${s.line === "gov" ? "lux-tile--gov" : "lux-tile--tech"}`}>
                        {s.line === "gov" ? (
                          <Buildings weight="regular" className="h-5 w-5" />
                        ) : (
                          <Cpu weight="regular" className="h-5 w-5" />
                        )}
                      </span>
                      <span className="leading-[1.5]">{tAll(s.labelKey)}</span>
                    </span>
                    <Arrow weight="bold" className="lux-arrow h-5 w-5 shrink-0 text-tasami-gray" />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
          <Link
            href="/services/government"
            className="mt-6 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-[#0057B8]"
          >
            {tS("popular.viewAll")}
            <Arrow weight="bold" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CustomerReviews />

      <PlatformsShowcase />

      <section className="lux-section bg-white" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 id="faq-title" className="lux-title">
            {tS("faq.title")}
          </h2>
          <div className="mt-10">
            <FaqList items={faqItems} />
          </div>
          <Link href="/faq" className="mt-6 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-[#0057B8]">
            {tS("faq.viewAll")}
            <Arrow weight="bold" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="lux-section lux-section--tint" aria-labelledby="blog-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 id="blog-title" className="lux-title">
            {tS("blog.title")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} index={i} className="h-full">
                <BlogCard
                  post={post}
                  labels={{
                    line: tBlog(post.line),
                    minutes: tBlog.raw("minutes") as string,
                    readMore: tBlog("readMore"),
                  }}
                />
              </Reveal>
            ))}
          </div>
          <Link href="/blog" className="mt-6 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-[#0057B8]">
            {tS("blog.viewAll")}
            <Arrow weight="bold" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="lux-dark lux-section" aria-labelledby="final-cta-title">
        <div className="lux-cta-media" aria-hidden>
          <Image src={VISUALS.offerings.sectors} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 id="final-cta-title" className="lux-title lux-title--center lux-title--light">
            {tS("finalCta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-[1.85] text-white/85">{tS("finalCta.body")}</p>
          <WaChooserButton
            location="home_final_cta"
            className="lux-btn-wa mx-auto mt-9 min-h-[58px] w-full max-w-sm px-6 text-lg"
          >
            <WhatsappLogo weight="fill" className="h-6 w-6" />
            {tS("finalCta.cta")}
          </WaChooserButton>
          <Link
            href="/request"
            className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-[0.95rem] font-bold text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white"
          >
            <ClipboardText weight="bold" className="h-5 w-5" />
            {tReq("formLink")}
          </Link>
        </div>
      </section>
    </div>
  );
}
