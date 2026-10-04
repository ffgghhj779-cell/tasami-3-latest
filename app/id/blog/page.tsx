import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenText, Clock, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { SITE_URL } from "@/lib/seo";
import { whatsappDirectUrl } from "@/lib/site";
import { buildIdMetadata } from "@/lib/id-metadata";
import { ID_BASE, ID_WHATSAPP_TEXT } from "@/lib/id-landing";
import { ID_BLOG_BASE, ID_BLOG_POSTS, idBlogCover, idReadingMinutes } from "@/lib/id-blog";

const TITLE = "Panduan Dokumen dan Iqamah di Arab Saudi";
const DESCRIPTION =
  "Panduan lengkap dalam bahasa Indonesia: cara, syarat dan biaya perpanjang iqamah, pindah sponsor, exit re-entry, final exit, Musaned, Absher dan buka usaha di Arab Saudi.";

export const metadata = buildIdMetadata({ title: TITLE, description: DESCRIPTION, path: ID_BLOG_BASE });

export default function IndonesianBlogIndex() {
  const [featured, ...rest] = ID_BLOG_POSTS;

  const structured = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE_URL}${ID_BASE}` },
        { "@type": "ListItem", position: 2, name: "Panduan", item: `${SITE_URL}${ID_BLOG_BASE}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: ID_BLOG_POSTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}${ID_BLOG_BASE}/${p.slug}`,
        name: p.title,
      })),
    },
  ];

  return (
    <div className="bg-[#FBFCFE]">
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A33] via-[#10264A] to-[#16325C] py-16 text-white sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#E6C878_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#C9A54C]/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href={ID_BASE} className="hover:text-white">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Panduan</span>
          </nav>
          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-[#E6C878]/40 bg-[#E6C878]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E6C878]">
            <BookOpenText size={14} weight="fill" />
            Panduan Tasami
          </span>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-bold leading-[1.15] text-white sm:text-5xl">{TITLE}</h1>
          <p className="mt-5 max-w-2xl text-[1.08rem] leading-relaxed text-white/75">{DESCRIPTION}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Link
          href={`${ID_BLOG_BASE}/${featured.slug}`}
          className="group grid overflow-hidden rounded-3xl border border-tasami-purple/10 bg-white shadow-soft transition hover:shadow-xl lg:grid-cols-[1.15fr_1fr]"
        >
          <div className="flex items-center overflow-hidden bg-[#0B1C38]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={idBlogCover(featured.slug)}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-[#9A7A26]">Panduan unggulan · {featured.category}</p>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-tasami-dark group-hover:text-[#0057B8] sm:text-[1.75rem]">
              {featured.title}
            </h2>
            <p className="mt-4 leading-relaxed text-tasami-gray">{featured.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0057B8]">
              Baca panduan <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`${ID_BLOG_BASE}/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-tasami-purple/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={idBlogCover(p.slug)}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A7A26]">{p.category}</p>
                <h2 className="mt-2 text-lg font-semibold leading-snug text-tasami-dark group-hover:text-[#0057B8]">{p.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-tasami-gray">{p.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm text-tasami-gray">
                  <Clock size={15} />
                  {idReadingMinutes(p)} menit baca
                </span>
              </div>
            </Link>
          ))}
        </div>

        <section className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1A33] to-[#16325C] p-8 text-white sm:p-12">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#C9A54C]/25 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Masih bingung dengan urusan Anda?</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-white/75">
                Ceritakan kondisi Anda lewat WhatsApp. Kami jelaskan langkahnya dan memantau proses lewat platform
                resmi. Komunikasi dalam bahasa Arab atau Inggris.
              </p>
            </div>
            <a
              href={whatsappDirectUrl(ID_WHATSAPP_TEXT)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              <WhatsappLogo size={22} weight="fill" />
              Konsultasi via WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
