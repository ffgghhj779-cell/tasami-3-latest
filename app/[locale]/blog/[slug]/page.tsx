import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import WaLink from "@/components/WaLink";
import CrossSellBox from "@/components/CrossSellBox";
import { BLOG_POSTS, getPost, readingMinutes } from "@/lib/blog";
import { locales } from "@/i18n";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildPageMetadata,
  SITE_URL,
} from "@/lib/seo";

type Props = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    BLOG_POSTS.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) return {};
  const meta = buildPageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
    locale: params.locale,
  });
  // Articles are written in Arabic only — every locale points to the Arabic original.
  return {
    ...meta,
    alternates: { canonical: `${SITE_URL}/ar/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = params;
  setRequestLocale(locale);
  const post = getPost(slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const tBrand = await getTranslations("brand");
  const date = new Intl.DateTimeFormat("ar-SA-u-ca-gregory-nu-latn", {
    dateStyle: "long",
  }).format(new Date(post.publishedAt));

  const structured = [
    articleJsonLd({
      title: post.title,
      description: post.summary,
      path: `/blog/${post.slug}`,
      publishedAt: post.publishedAt,
    }),
    breadcrumbJsonLd(locale, [
      { name: tBrand("name"), path: "" },
      { name: t("title"), path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <div>
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      <article lang="ar" dir="rtl" className="mx-auto max-w-[70ch] px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/blog"
          className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[#006BDE]"
        >
          <ArrowRight weight="bold" className="h-4 w-4" />
          {t("back")}
        </Link>

        <p className="mt-4 text-sm text-tasami-gray">
          <span className="font-bold text-[#006BDE]">{t(post.line)}</span>
          {" · "}
          {t("published", { date })}
          {" · "}
          {t("minutes", { n: readingMinutes(post) })}
        </p>
        <h1 className="mt-3 text-[1.75rem] font-bold leading-[1.3] text-tasami-dark sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-5 rounded-2xl bg-tasami-offwhite p-5 text-[1.0625rem] leading-[1.8] text-tasami-dark">
          {post.summary}
        </p>

        <div className="blog-body mt-8">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "p") return <p key={i}>{block.text}</p>;
            if (block.type === "ul")
              return (
                <ul key={i}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            return (
              <ol key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          })}
        </div>

        <p className="mt-8 text-tasami-gray">
          {t("related")}:{" "}
          <Link href={post.relatedHref as "/"} className="font-bold text-[#006BDE]">
            {post.relatedLabel}
          </Link>
        </p>

        <aside className="mt-8 rounded-2xl border border-[#0F7A40]/25 bg-[#0F7A40]/[0.05] p-5 sm:p-6">
          <h2 className="text-lg font-bold text-tasami-dark">{t("ctaTitle")}</h2>
          <p className="mt-2 leading-[1.8] text-tasami-gray">{t("ctaBody")}</p>
          <WaLink
            line={post.line === "tech" ? "tech" : "taqeeb"}
            location="blog_post"
            className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button bg-[#0F7A40] px-5 text-base font-bold text-white sm:inline-flex sm:w-auto"
          >
            <WhatsappLogo weight="fill" className="h-5 w-5" />
            {post.line === "tech" ? t("ctaTech") : t("ctaGov")}
          </WaLink>
        </aside>

        <CrossSellBox from={post.line} locale={locale} />
      </article>
    </div>
  );
}
