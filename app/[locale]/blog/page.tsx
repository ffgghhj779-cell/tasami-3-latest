import { getTranslations, setRequestLocale } from "next-intl/server";
import SimpleHeader from "@/components/SimpleHeader";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "@/lib/blog";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "blog" });
  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/blog",
    locale: params.locale,
  });
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const tBrand = await getTranslations("brand");

  const breadcrumb = breadcrumbJsonLd(locale, [
    { name: tBrand("name"), path: "" },
    { name: t("title"), path: "/blog" },
  ]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SimpleHeader title={t("title")} subtitle={t("subtitle")}>
        {t("arabicOnly") ? (
          <p className="mt-3 text-sm text-tasami-gray">{t("arabicOnly")}</p>
        ) : null}
      </SimpleHeader>
      <div className="mx-auto grid max-w-5xl gap-4 px-5 py-12 sm:grid-cols-2 sm:px-8 sm:py-16 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <BlogCard
            key={post.slug}
            post={post}
            headingLevel="h2"
            labels={{
              line: t(post.line),
              minutes: t.raw("minutes") as string,
              readMore: t("readMore"),
            }}
          />
        ))}
      </div>
    </div>
  );
}
