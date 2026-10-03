import { breadcrumbJsonLd } from "@/lib/seo";

/** BreadcrumbList JSON-LD matching the visible trail rendered by PageHeader `crumbs`. */
export default function BreadcrumbSchema({
  locale,
  crumbs,
}: {
  locale: string;
  crumbs: { label: string; href: string }[];
}) {
  const data = breadcrumbJsonLd(
    locale,
    crumbs.map((c) => ({ name: c.label, path: c.href === "/" ? "" : c.href }))
  );
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
