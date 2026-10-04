import Link from "next/link";
import {
  ArrowRight,
  ChatCircleText,
  CheckCircle,
  Globe,
  ListChecks,
  Lock,
  ShieldCheck,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import ServiceFaq, { faqJsonLd } from "@/components/ServiceFaq";
import { SITE_URL } from "@/lib/seo";
import { whatsappDirectUrl } from "@/lib/site";
import { buildBnMetadata } from "@/lib/bn-metadata";
import {
  BN_BASE,
  BN_COMMON_FAQS,
  BN_HUB,
  BN_SERVICES,
  BN_SERVICES_BASE,
  BN_WHATSAPP_TEXT,
} from "@/lib/bn-landing";
import { BN_SERVICE_ICONS } from "./icons";

export const metadata = buildBnMetadata({
  title: BN_HUB.title,
  description: BN_HUB.metaDescription,
  path: BN_BASE,
  equivalentPath: "",
});

const PROCESS = [
  { icon: ChatCircleText, title: "বার্তা পাঠান", text: "হোয়াটসঅ্যাপে আপনার প্রয়োজন বা এরর বার্তার স্ক্রিনশট পাঠান।" },
  { icon: ListChecks, title: "যাচাই ও পরিকল্পনা", text: "আমরা আপনার অবস্থা যাচাই করে শর্ত ও ধাপগুলো বুঝিয়ে দিই।" },
  { icon: ShieldCheck, title: "অফিসিয়াল প্রক্রিয়া", text: "সব কাজ অফিসিয়াল প্ল্যাটফর্মে হয়, ফি আপনি সরাসরি পরিশোধ করেন।" },
  { icon: CheckCircle, title: "ফলাফল নিশ্চিত", text: "কাজ শেষ না হওয়া পর্যন্ত অনুসরণ করি এবং ফলাফল জানাই।" },
];

export default function BengaliHubPage() {
  const wa = whatsappDirectUrl(BN_WHATSAPP_TEXT);

  const structured = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "হোম", item: `${SITE_URL}${BN_BASE}` }],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: BN_SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `${SITE_URL}${BN_SERVICES_BASE}/${s.slug}`,
      })),
    },
    faqJsonLd(BN_COMMON_FAQS),
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
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A54C]/40 bg-[#C9A54C]/10 px-3 py-1 text-xs font-semibold text-[#E9CF8A]">
            <Globe size={14} weight="fill" />
            সৌদি আরবে বাংলাদেশি প্রবাসীদের জন্য
          </span>
          <h1 className="mt-5 max-w-3xl text-[2rem] font-bold leading-[1.3] text-white sm:text-5xl sm:leading-[1.25]">
            {BN_HUB.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-[1.9] text-white/80">{BN_HUB.intro[0]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-105"
            >
              <WhatsappLogo size={20} weight="fill" />
              হোয়াটসঅ্যাপে পরামর্শ নিন
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              সেবাসমূহ দেখুন <ArrowRight size={18} />
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
            {["সরকারি প্রতিষ্ঠান নয়", "শুধু অফিসিয়াল প্ল্যাটফর্ম", "হোয়াটসঅ্যাপে দূর থেকে সেবা"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#E9CF8A]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <section id="services" className="scroll-mt-24">
          <p className="text-xs font-bold uppercase tracking-wider text-[#9A7A26]">আমাদের সেবা</p>
          <h2 className="mt-2 text-2xl font-bold text-tasami-dark sm:text-3xl">আপনার কোন কাজে সাহায্য দরকার?</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BN_SERVICES.map((s) => {
              const Icon = BN_SERVICE_ICONS[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`${BN_SERVICES_BASE}/${s.slug}`}
                  className="group flex flex-col rounded-3xl border border-tasami-purple/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#10264A] to-[#16325C] text-[#E9CF8A] ring-1 ring-[#C9A54C]/30">
                    {Icon ? <Icon size={24} weight="duotone" /> : null}
                  </span>
                  <p className="mt-5 text-lg font-bold leading-snug text-tasami-dark group-hover:text-[#0057B8]">{s.title}</p>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-tasami-gray">{s.metaDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0057B8]">
                    বিস্তারিত দেখুন <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 text-[1.02rem] leading-[1.9] text-tasami-gray lg:col-span-7">
            <h2 className="text-2xl font-bold text-tasami-dark">তাসামি কীভাবে সাহায্য করে</h2>
            {BN_HUB.intro.slice(1).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#C9A54C]/30 bg-gradient-to-br from-[#FFF9EC] to-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-tasami-dark">কেন তাসামি</h2>
              <ul className="mt-4 space-y-3.5">
                {BN_HUB.why.map((w, i) => (
                  <li key={w} className="flex gap-3 text-tasami-dark">
                    {i === 3 ? (
                      <Lock size={20} weight="fill" className="mt-1 shrink-0 text-[#9A7A26]" />
                    ) : (
                      <CheckCircle size={20} weight="fill" className="mt-1 shrink-0 text-[#9A7A26]" />
                    )}
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#9A7A26]">কাজের ধাপ</p>
          <h2 className="mt-2 text-2xl font-bold text-tasami-dark sm:text-3xl">চারটি সহজ ধাপে কাজ সম্পন্ন</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="relative rounded-3xl border border-tasami-purple/10 bg-white p-6 shadow-soft">
                <span className="absolute right-5 top-5 text-3xl font-bold text-tasami-purple/10">0{i + 1}</span>
                <p.icon size={28} weight="duotone" className="text-[#0057B8]" />
                <p className="mt-4 font-bold text-tasami-dark">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-tasami-gray">{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mx-auto max-w-3xl">
          <ServiceFaq title="সচরাচর জিজ্ঞাসা" items={BN_COMMON_FAQS} />
        </div>

        <section className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1A33] via-[#10264A] to-[#16325C] p-8 text-white sm:p-12">
          <div aria-hidden className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[#C9A54C]/20 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">আপনার কাজ নিয়ে এখনো চিন্তিত?</h2>
              <p className="mt-3 leading-[1.9] text-white/80">
                হোয়াটসঅ্যাপে আপনার অবস্থা লিখে পাঠান। আমরা ধাপগুলো বুঝিয়ে দিই এবং অফিসিয়াল প্ল্যাটফর্মে প্রক্রিয়া অনুসরণ
                করি। যোগাযোগ আরবি বা ইংরেজিতে।
              </p>
            </div>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20"
            >
              <WhatsappLogo size={20} weight="fill" />
              হোয়াটসঅ্যাপে লিখুন
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
