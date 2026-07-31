import { organizationJsonLd } from "@/lib/seo";

/** Injects Organization Schema Markup into the document. */
export default function JsonLd() {
  const data = organizationJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
