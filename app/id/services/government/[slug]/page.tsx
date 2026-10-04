import Link from "next/link";
import Image from "next/image";
import { ID_BLOG_BASE, findIdPost, idBlogCover } from "@/lib/id-blog";
import { notFound } from "next/navigation";
import { CheckCircle, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import ServiceFaq, { faqJsonLd, serviceJsonLd } from "@/components/ServiceFaq";
import { SITE_URL } from "@/lib/seo";
import { whatsappDirectUrl } from "@/lib/site";
import { buildIdMetadata } from "@/lib/id-metadata";
import {
  ID_BASE,
  ID_COMMON_FAQS,
  ID_SERVICES,
  ID_SERVICES_BASE,
  findIdService,
} from "@/lib/id-landing";

export const dynamicParams = false;

export function generateStaticParams() {
  return ID_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = findIdService(params.slug);
  if (!s) return {};
  return buildIdMetadata({
    title: s.title,
    description: s.metaDescription,
    path: `${ID_SERVICES_BASE}/${s.slug}`,
    equivalentPath: s.equivalentPath,
  });
}

export default function IndonesianServicePage({ params }: { params: { slug: string } }) {
  const s = findIdService(params.slug);
  if (!s) notFound();

  const url = `${SITE_URL}${ID_SERVICES_BASE}/${s.slug}`;
  const faqs = [...s.faqs, ...ID_COMMON_FAQS];
  const others = ID_SERVICES.filter((o) => o.slug !== s.slug);
  const guide = findIdPost(s.slug);
  const wa = whatsappDirectUrl(`Halo Tasami, saya butuh bantuan: ${s.title}`);

  const structured = [
    serviceJsonLd({ name: s.title, description: s.intro, url }),
    faqJsonLd(faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE_URL}${ID_BASE}` },
        { "@type": "ListItem", position: 2, name: s.title, item: url },
      ],
    },
  ];

  return (
    <div>
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      <section className="bg-gradient-to-b from-[#EAF3FF] to-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-tasami-gray">
            <Link href={ID_BASE} className="hover:text-tasami-dark">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <span className="text-tasami-dark">{s.title}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-tasami-dark sm:text-4xl">{s.title}</h1>
          <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-tasami-gray">{s.metaDescription}</p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white shadow-soft"
          >
            <WhatsappLogo size={20} weight="fill" />
            Tanya via WhatsApp
          </a>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <p className="rounded-2xl border-l-4 border-[#0057B8] bg-white p-5 text-[1.05rem] leading-[1.85] text-tasami-dark shadow-soft">
            {s.intro}
          </p>

          <h2 className="mt-10 text-xl font-semibold text-tasami-dark">Untuk siapa layanan ini?</h2>
          <ul className="mt-4 space-y-2.5">
            {s.who.map((w) => (
              <li key={w} className="flex gap-2 text-tasami-gray">
                <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-[#0057B8]" />
                {w}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-tasami-dark">Langkah-langkahnya bersama Tasami</h2>
          <ol className="mt-4 space-y-3">
            {s.steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-tasami-gray">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0057B8] text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-10 text-xl font-semibold text-tasami-dark">Tips sebelum mulai</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-tasami-gray">
            {s.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          <p className="mt-8 text-tasami-gray">
            Kami melayani klien di Makkah, Jeddah, Riyadh, Dammam, Madinah dan seluruh kota di Arab Saudi. Hampir
            semua proses bisa dipantau jarak jauh lewat WhatsApp.
          </p>

          {guide && (
            <Link
              href={`${ID_BLOG_BASE}/${guide.slug}`}
              className="group mt-8 flex items-center gap-4 rounded-2xl border border-[#C9A54C]/40 bg-gradient-to-br from-[#FFF9EC] to-white p-4 transition hover:shadow-soft"
            >
              <div className="relative hidden aspect-[16/9] w-36 shrink-0 overflow-hidden rounded-xl sm:block">
                <Image src={idBlogCover(guide.slug)} alt="" fill sizes="144px" className="object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A7A26]">Panduan lengkap</p>
                <p className="mt-1 font-semibold leading-snug text-tasami-dark group-hover:text-[#0057B8]">{guide.title}</p>
              </div>
            </Link>
          )}

          <ServiceFaq title="Pertanyaan yang sering diajukan" items={faqs} />
        </article>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl border border-tasami-purple/10 bg-white p-5 shadow-soft">
              <p className="font-semibold text-tasami-dark">Mulai sekarang</p>
              <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
                Kirim pesan singkat tentang kebutuhan Anda. Kami bukan instansi pemerintah dan tidak menjanjikan
                persetujuan; biaya resmi dibayar langsung melalui kanal resmi.
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-medium text-white"
              >
                <WhatsappLogo size={18} weight="fill" />
                WhatsApp
              </a>
            </div>
            <div className="rounded-2xl border border-tasami-purple/10 bg-white p-5">
              <p className="font-semibold text-tasami-dark">Layanan lainnya</p>
              <ul className="mt-3 space-y-2 text-sm">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`${ID_SERVICES_BASE}/${o.slug}`} className="text-[#0057B8] hover:underline">
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
