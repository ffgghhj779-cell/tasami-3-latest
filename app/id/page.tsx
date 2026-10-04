import Link from "next/link";
import Image from "next/image";
import { ID_BLOG_BASE, ID_BLOG_POSTS, idBlogCover } from "@/lib/id-blog";
import { ArrowRight, CheckCircle, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import ServiceFaq, { faqJsonLd } from "@/components/ServiceFaq";
import { SITE_URL } from "@/lib/seo";
import { whatsappDirectUrl } from "@/lib/site";
import { buildIdMetadata } from "@/lib/id-metadata";
import {
  ID_BASE,
  ID_COMMON_FAQS,
  ID_HUB,
  ID_SERVICES,
  ID_SERVICES_BASE,
  ID_WHATSAPP_TEXT,
} from "@/lib/id-landing";

export const metadata = buildIdMetadata({
  title: ID_HUB.title,
  description: ID_HUB.metaDescription,
  path: ID_BASE,
  equivalentPath: "",
});

export default function IndonesianHubPage() {
  const structured = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE_URL}${ID_BASE}` }],
    },
    faqJsonLd(ID_COMMON_FAQS),
  ];

  return (
    <div>
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      <section className="bg-gradient-to-b from-[#EAF3FF] to-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
          <p className="text-sm font-medium text-[#0057B8]">Untuk warga Indonesia di Arab Saudi</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-tasami-dark sm:text-4xl">
            {ID_HUB.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-tasami-gray">{ID_HUB.intro[0]}</p>
          <a
            href={whatsappDirectUrl(ID_WHATSAPP_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white shadow-soft"
          >
            <WhatsappLogo size={20} weight="fill" />
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <h2 className="text-xl font-semibold text-tasami-dark">Layanan kami</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ID_SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`${ID_SERVICES_BASE}/${s.slug}`}
              className="group rounded-2xl border border-tasami-purple/10 bg-white p-5 shadow-soft transition hover:-translate-y-0.5"
            >
              <p className="font-semibold text-tasami-dark">{s.title}</p>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-tasami-gray">{s.metaDescription}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0057B8]">
                Selengkapnya <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 text-[1.02rem] leading-relaxed text-tasami-gray lg:col-span-7">
            <h2 className="text-xl font-semibold text-tasami-dark">Bagaimana Tasami membantu Anda</h2>
            {ID_HUB.intro.slice(1).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-xl font-semibold text-tasami-dark">Mengapa memilih Tasami</h2>
            <ul className="mt-4 space-y-3">
              {ID_HUB.why.map((w) => (
                <li key={w} className="flex gap-2 text-tasami-gray">
                  <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-[#0057B8]" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold text-tasami-dark">Panduan: cara, syarat dan biaya</h2>
            <Link href={ID_BLOG_BASE} className="inline-flex items-center gap-1 text-sm font-medium text-[#0057B8]">
              Semua panduan <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ID_BLOG_POSTS.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                href={`${ID_BLOG_BASE}/${p.slug}`}
                className="group overflow-hidden rounded-2xl border border-tasami-purple/10 bg-white shadow-soft transition hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/9]">
                  <Image src={idBlogCover(p.slug)} alt="" fill sizes="(max-width: 640px) 100vw, 280px" className="object-cover" />
                </div>
                <p className="p-4 text-sm font-semibold leading-snug text-tasami-dark group-hover:text-[#0057B8]">{p.title}</p>
              </Link>
            ))}
          </div>
        </section>

        <ServiceFaq title="Pertanyaan yang sering diajukan" items={ID_COMMON_FAQS} />
      </div>
    </div>
  );
}
