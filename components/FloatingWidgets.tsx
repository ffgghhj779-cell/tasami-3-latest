"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { WhatsappLogo, X } from "@phosphor-icons/react";
import ChatWidget from "@/components/ChatWidget";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { whatsappDirectUrl, whatsappUrl } from "@/lib/site";
import {
  taqeebWhatsAppMessage,
  techWhatsAppMessage,
} from "@/lib/whatsapp-templates";
import { usePathname } from "@/navigation";

const spring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
  mass: 0.75,
};

export default function FloatingWidgets() {
  const t = useTranslations("widgets");
  const pathname = usePathname();
  const [waOpen, setWaOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [coarse, setCoarse] = useState(false);

  const onTechPath = pathname.includes("/services/tech");
  const showChatFab = onTechPath; // reduce clash with WhatsApp on gov paths

  const waTaqeeb = whatsappDirectUrl(
    taqeebWhatsAppMessage("استفسار من الموقع")
  );
  const waTech = whatsappUrl(techWhatsAppMessage("استفسار من الموقع"));

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px), (pointer: coarse)");
    const sync = () => setCoarse(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setWaOpen(false);
    setChatOpen(false);
  }, [pathname]);

  useBodyScrollLock(chatOpen, { hideFabs: false });

  const onChatOpenChange = useCallback((open: boolean) => {
    setChatOpen(open);
    if (open) setWaOpen(false);
  }, []);

  const openWhatsAppMenu = () => {
    if (onTechPath) {
      setWaOpen((v) => !v);
      setChatOpen(false);
      return;
    }
    // Government / default: open Ibrahim (taqeeb) directly — less friction
    window.open(waTaqeeb, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {showChatFab ? (
        <ChatWidget forceClose={waOpen} onOpenChange={onChatOpenChange} />
      ) : null}

      <div className="fab-shell pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] end-3 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:end-6">
        {waOpen && onTechPath ? (
          <div
            className="pointer-events-auto mb-1 w-[min(300px,calc(100vw-5rem))] overflow-hidden rounded-card bg-white shadow-soft"
            role="dialog"
            aria-label={t("waTitle")}
          >
            <div className="flex items-center justify-between bg-[#128C4A] px-4 py-3.5">
              <div className="flex items-center gap-2">
                <WhatsappLogo weight="fill" className="h-6 w-6 text-white" />
                <p className="text-sm font-medium text-white">{t("waTitle")}</p>
              </div>
              <button
                type="button"
                aria-label={t("close")}
                onClick={() => setWaOpen(false)}
                className="touch-target flex items-center justify-center rounded-button p-2 text-white/90 hover:bg-white/20"
              >
                <X weight="bold" className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 p-5">
              <p className="text-sm leading-relaxed text-tasami-gray">
                {t("waIntro")}
              </p>
              <a
                href={waTech}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button bg-[#128C4A] px-4 py-3 text-sm font-semibold text-white active:opacity-90"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("waSecretary")}
              </a>
              <a
                href={waTaqeeb}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button border border-[#128C4A]/30 bg-[#128C4A]/10 px-4 py-3 text-sm font-semibold text-[#0B6B38] active:opacity-90"
              >
                <WhatsappLogo weight="regular" className="h-5 w-5" />
                {t("waDirect")}
              </a>
            </div>
          </div>
        ) : null}

        {coarse ? (
          <button
            type="button"
            aria-label={t("openWhatsapp")}
            onClick={openWhatsAppMenu}
            className={`pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#128C4A] text-white shadow-soft active:scale-95 ${
              chatOpen ? "max-sm:hidden" : ""
            }`}
          >
            {waOpen ? (
              <X weight="bold" className="h-6 w-6" />
            ) : (
              <WhatsappLogo weight="fill" className="h-7 w-7" />
            )}
          </button>
        ) : (
          <motion.button
            type="button"
            aria-label={t("openWhatsapp")}
            onClick={openWhatsAppMenu}
            whileTap={{ scale: 0.94 }}
            transition={spring}
            className={`pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#128C4A] text-white shadow-soft ${
              chatOpen ? "max-sm:hidden" : ""
            }`}
          >
            {waOpen ? (
              <X weight="bold" className="h-6 w-6" />
            ) : (
              <WhatsappLogo weight="fill" className="h-7 w-7" />
            )}
          </motion.button>
        )}
      </div>
    </>
  );
}
