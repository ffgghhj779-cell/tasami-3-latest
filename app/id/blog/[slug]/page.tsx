import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarBlank,
  CheckCircle,
  Clock,
  Info,
  ListBullets,
  Plus,
  ShieldCheck,
  Sparkle,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { faqJsonLd } from "@/components/ServiceFaq";
import { SITE_URL } from "@/lib/seo";
import { whatsappDirectUrl } from "@/lib/site";
import { buildIdMetadata } from "@/lib/id-metadata";
import { ID_BASE, ID_SERVICES_BASE, findIdService } from "@/lib/id-landing";
import {
  ID_BLOG_BASE,
  ID_BLOG_POSTS,
  findIdPost,
  idBlogCover,
  idHeadingId,
  idReadingMinutes,
  type IdBlogBlock,
} from "@/lib/id-blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return ID_BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = findIdPost(params.slug);
  if (!post) return {};
  return buildIdMetadata({
    title: post.title,
    description: post.description,
    path: `${ID_BLOG_BASE}/${post.slug}`,
    image: idBlogCover(post.slug),
    publishedTime: post.publishedAt,
  });
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(new Date(iso));
}

function Block({ block, index }: { block: IdBlogBlock; index: number }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={idHeadingId(block.text)}
          className="mt-14 scroll-mt-28 text-[1.45rem] font-bold leading-snug text-tasami-dark sm:text-[1.65rem]"
        >
          <span className="mb-3 block h-1 w-10 rounded-full bg-[#C9A54C]" aria-hidden />
          {block.text}
        </h2>
      );
    case "p":
      return <p className="mt-5 text-[1.075rem] leading-[1.9] text-[#3D4656]">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[1.05rem] leading-[1.8] text-[#3D4656]">
              <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[#0057B8]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      );
    case "check":
      return (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-[#0057B8]/10 bg-[#F4F8FF] p-4 text-[0.98rem] leading-relaxed text-tasami-dark"
            >
              <CheckCircle size={22} weight="fill" className="shrink-0 text-[#0057B8]" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="relative mt-7 space-y-5 before:absolute before:bottom-6 before:left-[1.2rem] before:top-6 before:w-px before:bg-gradient-to-b before:from-[#0057B8]/40 before:to-[#C9A54C]/40">
          {block.items.map((step, i) => (
            <li key={step.title} className="relative flex gap-5">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0A1A33] to-[#16325C] text-sm font-bold text-[#E6C878] shadow-md ring-4 ring-white">
                {i + 1}
              </span>
              <div className="flex-1 rounded-2xl border border-tasami-purple/10 bg-white p-4 shadow-soft sm:p-5">
                <p className="font-semibold text-tasami-dark">{step.title}</p>
                <p className="mt-1.5 leading-relaxed text-tasami-gray">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <aside
          key={index}
          className="mt-7 flex gap-4 rounded-2xl border border-[#C9A54C]/40 bg-gradient-to-br from-[#FFF9EC] to-white p-5 sm:p-6"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A54C]/15 text-[#9A7A26]">
            <Info size={22} weight="fill" />
          </span>
          <div>
            <p className="font-semibold text-tasami-dark">{block.title}</p>
            <p className="mt-1.5 leading-relaxed text-[#4A5263]">{block.text}</p>
          </div>
        </aside>
      );
  }
}

export default function IndonesianBlogPostPage({ params }: { params: { slug: string } }) {
  const post = findIdPost(params.slug);
  if (!post) notFound();

  const service = findIdService(post.slug);
  const url = `${SITE_URL}${ID_BLOG_BASE}/${post.slug}`;
  const cover = idBlogCover(post.slug);
  const minutes = idReadingMinutes(post);
  const headings = post.body.filter((b): b is { type: "h2"; text: string } => b.type === "h2");
  const others = ID_BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const wa = whatsappDirectUrl(`Halo Tasami, saya membaca panduan "${post.coverTitle}" dan butuh bantuan.`);

  const structured = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: `${SITE_URL}${cover}`,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      inLanguage: "id-ID",
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Tasami", url: `${SITE_URL}${ID_BASE}` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE_URL}${ID_BASE}` },
        { "@type": "ListItem", position: 2, name: "Panduan", item: `${SITE_URL}${ID_BLOG_BASE}` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    faqJsonLd(post.faqs),
  ];

  return (
    <div className="bg-[#FBFCFE]">
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A33] via-[#10264A] to-[#16325C] pb-28 pt-10 text-white sm:pb-36 sm:pt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#E6C878_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C9A54C]/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            <Link href={ID_BASE} className="hover:text-white">
              Beranda
            </Link>
            <span>/</span>
            <Link href={ID_BLOG_BASE} className="hover:text-white">
              Panduan
            </Link>
          </nav>
          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-[#E6C878]/40 bg-[#E6C878]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E6C878]">
            <Sparkle size={14} weight="fill" />
            {post.category}
          </span>
          <h1 className="mt-4 text-[1.9rem] font-bold leading-[1.2] text-white sm:text-[2.6rem]">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-white/75">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <CalendarBlank size={16} />
              {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={16} />
              {minutes} menit baca
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} />
              Ditinjau tim Tasami
            </span>
          </div>
        </div>
      </section>

      <div className="relative mx-auto -mt-20 max-w-5xl px-5 sm:-mt-28 sm:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-[0_30px_80px_-30px_rgba(10,26,51,0.55)] ring-1 ring-[#C9A54C]/30">
          <Image src={cover} alt={post.title} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-12">
        <article className="min-w-0 lg:col-span-8">
          <details className="mb-8 rounded-2xl border border-tasami-purple/10 bg-white p-4 shadow-soft lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold text-tasami-dark [&::-webkit-details-marker]:hidden">
              <ListBullets size={20} className="text-[#0057B8]" />
              Daftar isi
            </summary>
            <ol className="mt-3 space-y-2 text-sm">
              {headings.map((h, i) => (
                <li key={h.text}>
                  <a href={`#${idHeadingId(h.text)}`} className="text-tasami-gray hover:text-[#0057B8]">
                    {i + 1}. {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          <section className="rounded-3xl border border-[#C9A54C]/30 bg-white p-6 shadow-soft sm:p-7">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#9A7A26]">
              <Sparkle size={16} weight="fill" />
              Ringkasan cepat
            </p>
            <ul className="mt-4 space-y-3">
              {post.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed text-tasami-dark">
                  <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-[#C9A54C]" />
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {post.body.map((block, i) => (
            <Block key={i} block={block} index={i} />
          ))}

          <section className="mt-16" aria-labelledby="faq-title">
            <h2 id="faq-title" className="text-[1.45rem] font-bold text-tasami-dark sm:text-[1.65rem]">
              <span className="mb-3 block h-1 w-10 rounded-full bg-[#C9A54C]" aria-hidden />
              Pertanyaan yang sering diajukan
            </h2>
            <div className="mt-6 space-y-3">
              {post.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-tasami-purple/10 bg-white p-5 shadow-soft transition open:border-[#0057B8]/25"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-tasami-dark [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus size={20} className="mt-0.5 shrink-0 text-[#0057B8] transition group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-tasami-gray">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1A33] to-[#16325C] p-7 text-white sm:p-10">
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-[#C9A54C]/25 blur-3xl" />
            <p className="relative text-sm font-semibold uppercase tracking-wider text-[#E6C878]">Butuh bantuan?</p>
            <h2 className="relative mt-2 text-2xl font-bold text-white sm:text-[1.75rem]">
              {service ? service.title : "Konsultasi dengan Tasami"}
            </h2>
            <p className="relative mt-3 max-w-xl leading-relaxed text-white/75">
              Kami cek kondisi Anda, menjelaskan syarat dan langkahnya, lalu memantau proses lewat platform resmi.
              Komunikasi via WhatsApp dalam bahasa Arab atau Inggris.
            </p>
            <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                <WhatsappLogo size={20} weight="fill" />
                Tanya via WhatsApp
              </a>
              {service && (
                <Link
                  href={`${ID_SERVICES_BASE}/${service.slug}`}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 px-6 font-semibold text-white transition hover:bg-white/10"
                >
                  Lihat layanan
                  <ArrowRight size={18} />
                </Link>
              )}
            </div>
          </section>

          <p className="mt-6 text-sm leading-relaxed text-tasami-gray">
            Tasami adalah kantor jasa pengurusan swasta, bukan instansi pemerintah. Informasi di halaman ini bersifat
            umum; ketentuan dan biaya resmi ditetapkan instansi berwenang dan bisa berubah.
          </p>
        </article>

        <aside className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-24 space-y-6">
            <nav aria-label="Daftar isi" className="rounded-3xl border border-tasami-purple/10 bg-white p-6 shadow-soft">
              <p className="flex items-center gap-2 font-semibold text-tasami-dark">
                <ListBullets size={20} className="text-[#0057B8]" />
                Daftar isi
              </p>
              <ol className="mt-4 space-y-2.5 border-l border-tasami-purple/10 text-sm">
                {headings.map((h, i) => (
                  <li key={h.text}>
                    <a
                      href={`#${idHeadingId(h.text)}`}
                      className="-ml-px block border-l-2 border-transparent pl-4 leading-snug text-tasami-gray transition hover:border-[#0057B8] hover:text-tasami-dark"
                    >
                      <span className="mr-1 text-[#9A7A26]">{String(i + 1).padStart(2, "0")}</span> {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="rounded-3xl bg-gradient-to-br from-[#0A1A33] to-[#16325C] p-6 text-white shadow-soft">
              <p className="font-semibold">Konsultasi gratis via WhatsApp</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Kirim pesan singkat tentang kondisi Anda. Biaya resmi selalu dibayar langsung melalui kanal resmi.
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white"
              >
                <WhatsappLogo size={18} weight="fill" />
                WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </div>

      <section className="border-t border-tasami-purple/10 bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-tasami-dark">Panduan lainnya</h2>
            <Link href={ID_BLOG_BASE} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0057B8]">
              Semua panduan <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`${ID_BLOG_BASE}/${o.slug}`}
                className="group overflow-hidden rounded-3xl border border-tasami-purple/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={idBlogCover(o.slug)}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9A7A26]">{o.category}</p>
                  <p className="mt-2 font-semibold leading-snug text-tasami-dark group-hover:text-[#0057B8]">{o.title}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href={ID_BASE} className="mt-10 inline-flex items-center gap-1.5 text-sm text-tasami-gray hover:text-tasami-dark">
            <ArrowLeft size={16} /> Kembali ke beranda
          </Link>
        </div>
      </section>
    </div>
  );
}
