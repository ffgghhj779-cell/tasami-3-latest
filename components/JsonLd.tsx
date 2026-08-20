import { seoGraphJsonLd } from "@/lib/seo";

/** Injects Organization + WebSite + ProfessionalService Schema Markup. */
export default function JsonLd() {
  const data = seoGraphJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
