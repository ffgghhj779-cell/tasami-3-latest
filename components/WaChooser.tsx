"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocale, useTranslations } from "next-intl";
import { Buildings, Cpu, WhatsappLogo, X } from "@phosphor-icons/react";
import { usePathname } from "@/navigation";
import { whatsappDirectUrl, whatsappUrl } from "@/lib/site";
import {
  buildWhatsAppMessage,
  homePageName,
  pageInquiry,
  type WaLine,
} from "@/lib/whatsapp-templates";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";

type Ctx = {
  /** Opens WhatsApp directly on department pages, otherwise the chooser. */
  openWhatsApp: (location: string) => void;
  pageLine: WaLine | null;
};

const WaChooserContext = createContext<Ctx | null>(null);

export function lineForPath(pathname: string): WaLine | null {
  if (pathname.includes("/services/government")) return "taqeeb";
  if (pathname.includes("/services/tech")) return "tech";
  return null;
}

function currentPageName(locale: string): string {
  if (typeof document === "undefined") return "";
  if (/^\/[a-z]{2}\/?$/.test(window.location.pathname)) return homePageName(locale);
  const h1 = document.querySelector("main h1")?.textContent?.trim();
  const title = document.title.split("|")[0]?.trim();
  return (h1 || title || "").slice(0, 80);
}

export function waHrefFor(line: WaLine, locale: string): string {
  const page = currentPageName(locale);
  const message = buildWhatsAppMessage(line, locale, {
    service: page ? pageInquiry(locale, page) : undefined,
  });
  return line === "tech" ? whatsappUrl(message) : whatsappDirectUrl(message);
}

export function WaChooserProvider({ children }: { children: ReactNode }) {
  const t = useTranslations("waChooser");
  const locale = useLocale();
  const pathname = usePathname();
  const pageLine = lineForPath(pathname);
  const [openAt, setOpenAt] = useState<string | null>(null);
  const [hrefs, setHrefs] = useState<Record<WaLine, string>>({
    taqeeb: "#",
    tech: "#",
  });

  useBodyScrollLock(openAt !== null, { hideFabs: false });

  useEffect(() => setOpenAt(null), [pathname]);

  useEffect(() => {
    if (!openAt) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenAt(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openAt]);

  const openWhatsApp = useCallback(
    (location: string) => {
      if (pageLine) {
        const href = waHrefFor(pageLine, locale);
        trackWhatsAppClick({ line: pageLine, location });
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }
      setHrefs({
        taqeeb: waHrefFor("taqeeb", locale),
        tech: waHrefFor("tech", locale),
      });
      setOpenAt(location);
    },
    [pageLine, locale]
  );

  const value = useMemo(
    () => ({ openWhatsApp, pageLine }),
    [openWhatsApp, pageLine]
  );

  const options = [
    { line: "taqeeb" as const, icon: Buildings, title: t("taqeeb"), desc: t("taqeebDesc") },
    { line: "tech" as const, icon: Cpu, title: t("tech"), desc: t("techDesc") },
  ];

  return (
    <WaChooserContext.Provider value={value}>
      {children}
      {openAt ? (
        <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-4">
          <button
            type="button"
            aria-label={t("close")}
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenAt(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="wa-chooser-title"
            className="relative w-full max-w-md rounded-t-2xl bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-soft sm:rounded-2xl"
          >
            <div className="flex items-center justify-between gap-3">
              <h2
                id="wa-chooser-title"
                className="text-lg font-bold text-tasami-dark"
              >
                {t("title")}
              </h2>
              <button
                type="button"
                onClick={() => setOpenAt(null)}
                aria-label={t("close")}
                className="flex h-11 w-11 items-center justify-center rounded-button text-tasami-gray hover:bg-tasami-offwhite"
              >
                <X weight="bold" className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-tasami-gray">
              {t("subtitle")}
            </p>
            <div className="mt-4 grid gap-3">
              {options.map(({ line, icon: Icon, title, desc }) => (
                <a
                  key={line}
                  href={hrefs[line]}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wa-location={`${openAt}_chooser`}
                  onClick={() => setOpenAt(null)}
                  className="flex min-h-[64px] items-center gap-3 rounded-xl border border-[#0F7A40]/25 bg-[#0F7A40]/[0.06] px-4 py-3 text-start transition-colors hover:bg-[#0F7A40]/10 active:bg-[#0F7A40]/15"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0B6B38]">
                    <Icon weight="regular" className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-bold text-tasami-dark">
                      {title}
                    </span>
                    <span className="block text-sm text-tasami-gray">{desc}</span>
                  </span>
                  <WhatsappLogo weight="fill" className="h-6 w-6 shrink-0 text-[#0F7A40]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </WaChooserContext.Provider>
  );
}

export function useWaChooser(): Ctx {
  const ctx = useContext(WaChooserContext);
  if (!ctx) throw new Error("useWaChooser must be used inside WaChooserProvider");
  return ctx;
}
