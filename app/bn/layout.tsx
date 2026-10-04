import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { LocaleHtmlAttrs } from "@/components/LocaleHtmlAttrs";
import { COMPANY_LEGAL, whatsappDirectUrl, WHATSAPP_DIRECT_DISPLAY } from "@/lib/site";
import { BN_BASE, BN_SERVICES, BN_SERVICES_BASE, BN_WHATSAPP_TEXT } from "@/lib/bn-landing";

export default function BengaliLayout({ children }: { children: ReactNode }) {
  const wa = whatsappDirectUrl(BN_WHATSAPP_TEXT);

  return (
    <div lang="bn" dir="ltr" className="flex min-h-screen flex-col">
      <LocaleHtmlAttrs locale="bn" dir="ltr" />

      <header className="sticky top-0 z-40 border-b border-tasami-purple/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href={BN_BASE} className="flex items-center gap-2">
            <Image src="/logo-mark.png" alt="Tasami" width={36} height={36} priority />
            <span className="text-base font-semibold text-tasami-dark">তাসামি</span>
          </Link>
          <nav className="flex items-center gap-3 text-sm">
            <Link href={`${BN_BASE}#services`} className="hidden font-medium text-tasami-dark hover:text-[#0057B8] sm:inline">
              সেবাসমূহ
            </Link>
            <Link href="/ar" hrefLang="ar" className="text-tasami-gray hover:text-tasami-dark">
              العربية
            </Link>
            <Link href="/en" hrefLang="en" className="text-tasami-gray hover:text-tasami-dark">
              English
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 font-medium text-white shadow-soft sm:inline-flex"
            >
              <WhatsappLogo size={18} weight="fill" />
              হোয়াটসঅ্যাপ
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-tasami-purple/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm sm:grid-cols-2 sm:px-8">
          <div>
            <p className="font-semibold text-tasami-dark">তাসামি — সৌদি আরবে কাগজপত্রের সেবা</p>
            <p className="mt-2 leading-relaxed text-tasami-gray">
              {COMPANY_LEGAL.nameEn} · CR {COMPANY_LEGAL.cr}। মক্কায় অবস্থিত একটি বেসরকারি কাগজপত্র প্রক্রিয়াকরণ
              অফিস, সৌদি আরবের সব শহরে সেবা দেয়। আমরা সরকারি প্রতিষ্ঠান নই; সব লেনদেন অফিসিয়াল প্ল্যাটফর্মে হয় এবং
              সরকারি ফি গ্রাহক সরাসরি পরিশোধ করেন।
            </p>
            <p className="mt-3 text-tasami-gray">
              হোয়াটসঅ্যাপ:{" "}
              <a href={wa} target="_blank" rel="noopener noreferrer" className="font-medium text-tasami-dark" dir="ltr">
                {WHATSAPP_DIRECT_DISPLAY}
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold text-tasami-dark">সেবাসমূহ</p>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {BN_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`${BN_SERVICES_BASE}/${s.slug}`} className="text-tasami-gray hover:text-tasami-dark">
                    {s.primaryKeyword}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="হোয়াটসঅ্যাপে তাসামির সাথে যোগাযোগ করুন"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg sm:hidden"
      >
        <WhatsappLogo size={28} weight="fill" />
      </a>
    </div>
  );
}
