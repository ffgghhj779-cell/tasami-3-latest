import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Lightbulb, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import ServiceFaq, { faqJsonLd, serviceJsonLd } from "@/components/ServiceFaq";
import { SITE_URL } from "@/lib/seo";
import { whatsappDirectUrl } from "@/lib/site";
import { buildBnMetadata } from "@/lib/bn-metadata";
import { BN_BASE, BN_COMMON_FAQS, BN_SERVICES, BN_SERVICES_BASE, findBnService } from "@/lib/bn-landing";
import { BN_SERVICE_ICONS } from "../../../icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return BN_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = findBnService(params.slug);
  if (!s) return {};
  return buildBnMetadata({
    title: s.title,
    description: s.metaDescription,
    path: `${BN_SERVICES_BASE}/${s.slug}`,
    equivalentPath: s.equivalentPath,
  });
}

export default function BengaliServicePage({ params }: { params: { slug: string } }) {
  const s = findBnService(params.slug);
  if (!s) notFound();

  const url = `${SITE_URL}${BN_SERVICES_BASE}/${s.slug}`;
  const faqs = [...s.faqs, ...BN_COMMON_FAQS];
  const others = BN_SERVICES.filter((o) => o.slug !== s.slug);
  const wa = whatsappDirectUrl(`Hello Tasami (Bangla page), I need help with: ${s.waLabel}`);
  const Icon = BN_SERVICE_ICONS[s.slug];

  const structured = [
    serviceJsonLd({ name: s.title, description: s.intro, url }),
    faqJsonLd(faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "হোম", item: `${SITE_URL}${BN_BASE}` },
        { "@type": "ListItem", position: 2, name: s.title, item: url },
      ],
    },
  ];

  return (
    <div>
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A33] via-[#10264A] to-[#16325C] text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#C9A54C]/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-white/65">
            <Link href={BN_BASE} className="hover:text-white">
              হোম
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{s.primaryKeyword}</span>
          </nav>
          <div className="mt-6 flex items-start gap-4">
            {Icon ? (
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#E9CF8A] ring-1 ring-[#C9A54C]/40 sm:flex">
                <Icon size={28} weight="duotone" />
              </span>
            ) : null}
            <h1 className="max-w-3xl text-[1.9rem] font-bold leading-[1.35] text-white sm:text-[2.6rem]">{s.title}</h1>
          </div>
          <p className="mt-5 max-w-3xl text-[1.05rem] leading-[1.9] text-white/80">{s.metaDescription}</p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-105"
          >
            <WhatsappLogo size={20} weight="fill" />
            হোয়াটসঅ্যাপে জিজ্ঞাসা করুন
          </a>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <p className="rounded-3xl border border-tasami-purple/10 border-l-4 border-l-[#C9A54C] bg-white p-6 text-[1.05rem] leading-[1.95] text-tasami-dark shadow-soft">
            {s.intro}
          </p>

          <h2 className="mt-12 flex items-center gap-3 text-2xl font-bold text-tasami-dark">
            <span aria-hidden className="h-6 w-1.5 rounded-full bg-[#C9A54C]" />
            এই সেবা কাদের জন্য?
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {s.who.map((w) => (
              <li key={w} className="flex gap-3 rounded-2xl border border-[#0057B8]/10 bg-[#F4F8FF] p-4 text-tasami-dark">
                <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-[#0057B8]" />
                <span className="leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 flex items-center gap-3 text-2xl font-bold text-tasami-dark">
            <span aria-hidden className="h-6 w-1.5 rounded-full bg-[#C9A54C]" />
            তাসামির সাথে কাজের ধাপ
          </h2>
          <ol className="relative mt-6 space-y-5 border-l-2 border-dashed border-[#0057B8]/20 pl-8">
            {s.steps.map((step, i) => (
              <li key={step} className="relative">
                <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#10264A] to-[#16325C] text-sm font-bold text-[#E9CF8A] ring-4 ring-white">
                  {i + 1}
                </span>
                <p className="rounded-2xl border border-tasami-purple/10 bg-white p-4 leading-relaxed text-tasami-dark shadow-soft">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-3xl border border-[#C9A54C]/35 bg-gradient-to-br from-[#FFF9EC] to-white p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-tasami-dark">
              <Lightbulb size={24} weight="duotone" className="text-[#9A7A26]" />
              শুরু করার আগে কিছু পরামর্শ
            </h2>
            <ul className="mt-4 space-y-2.5">
              {s.tips.map((tip) => (
                <li key={tip} className="flex gap-2.5 leading-relaxed text-tasami-dark">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9A7A26]" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 flex gap-2.5 leading-[1.9] text-tasami-gray">
            <MapPin size={22} weight="duotone" className="mt-1 shrink-0 text-[#0057B8]" />
            আমরা মক্কা, জেদ্দা, রিয়াদ, দাম্মাম, মদিনাসহ সৌদি আরবের সব শহরের গ্রাহকদের সেবা দিই। প্রায় সব প্রক্রিয়া
            হোয়াটসঅ্যাপে দূর থেকেই অনুসরণ করা যায়।
          </p>

          <ServiceFaq title="সচরাচর জিজ্ঞাসা" items={faqs} />

          <p className="mt-8 text-xs leading-relaxed text-tasami-gray">
            তাসামি একটি বেসরকারি কাগজপত্র প্রক্রিয়াকরণ অফিস, সরকারি প্রতিষ্ঠান নয়। এই পাতার তথ্য সাধারণ নির্দেশনা;
            শর্ত ও সরকারি ফি সংশ্লিষ্ট কর্তৃপক্ষ নির্ধারণ করে এবং তা পরিবর্তন হতে পারে।
          </p>
        </article>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1A33] via-[#10264A] to-[#16325C] p-6 text-white shadow-xl">
              <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#C9A54C]/20 blur-2xl" />
              <p className="relative text-lg font-bold">এখনই শুরু করুন</p>
              <p className="relative mt-2 text-sm leading-relaxed text-white/80">
                আপনার প্রয়োজন সংক্ষেপে লিখে পাঠান। আমরা অনুমোদনের প্রতিশ্রুতি দিই না; সরকারি ফি সরাসরি অফিসিয়াল মাধ্যমে
                পরিশোধ হয়।
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white"
              >
                <WhatsappLogo size={18} weight="fill" />
                হোয়াটসঅ্যাপ
              </a>
            </div>
            <div className="rounded-3xl border border-tasami-purple/10 bg-white p-6 shadow-soft">
              <p className="font-bold text-tasami-dark">অন্যান্য সেবা</p>
              <ul className="mt-3 space-y-1">
                {others.map((o) => {
                  const OIcon = BN_SERVICE_ICONS[o.slug];
                  return (
                    <li key={o.slug}>
                      <Link
                        href={`${BN_SERVICES_BASE}/${o.slug}`}
                        className="group flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm text-tasami-dark transition hover:bg-[#F4F8FF]"
                      >
                        {OIcon ? <OIcon size={18} weight="duotone" className="shrink-0 text-[#0057B8]" /> : null}
                        <span className="flex-1">{o.primaryKeyword}</span>
                        <ArrowRight size={14} className="text-tasami-gray transition group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
