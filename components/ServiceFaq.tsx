type FaqItem = { q: string; a: string };

export default function ServiceFaq({
  title,
  items,
}: {
  title: string;
  items: FaqItem[];
}) {
  if (!items.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-sm font-medium text-tasami-dark">{title}</h2>
      <div className="mt-3 space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-card border border-tasami-purple/8 bg-white/80 p-4 open:shadow-soft"
          >
            <summary className="cursor-pointer list-none text-sm font-medium text-tasami-dark marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-3">
                {item.q}
                <span className="mt-0.5 text-tasami-gray transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-tasami-gray">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "تَسَامِي",
      url: "https://www.tasamiservices.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  };
}
