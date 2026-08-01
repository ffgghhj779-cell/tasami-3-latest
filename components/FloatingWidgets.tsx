"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsappLogo, X } from "@phosphor-icons/react";
import ChatWidget from "@/components/ChatWidget";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";

const WHATSAPP_URL =
  "https://wa.me/966500000000?text=" +
  encodeURIComponent("مرحباً، أرغب بالتواصل مع سكرتير تسامي");

const spring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
  mass: 0.75,
};

export default function FloatingWidgets() {
  const t = useTranslations("widgets");
  const [waOpen, setWaOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useBodyScrollLock(waOpen || chatOpen);

  return (
    <>
      <ChatWidget
        forceClose={waOpen}
        onOpenChange={(open) => {
          setChatOpen(open);
          if (open) setWaOpen(false);
        }}
      />

      {/* pointer-events-none on shell so empty space never blocks scroll */}
      <div className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] end-3 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:end-6">
        <AnimatePresence>
          {waOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={spring}
              className="pointer-events-auto mb-1 w-[min(300px,calc(100vw-5rem))] overflow-hidden rounded-card bg-white shadow-soft"
              role="dialog"
              aria-label={t("waTitle")}
            >
              <div className="flex items-center justify-between bg-[#25D366] px-4 py-3.5">
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
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button bg-tasami-pink px-4 py-3 text-sm font-medium text-white shadow-soft active:opacity-90"
                >
                  <WhatsappLogo weight="fill" className="h-5 w-5" />
                  {t("waSecretary")}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button bg-tasami-purple px-4 py-3 text-sm font-medium text-white shadow-soft active:opacity-90"
                >
                  <WhatsappLogo weight="regular" className="h-5 w-5" />
                  {t("waDirect")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-label={t("openWhatsapp")}
          onClick={() => {
            setWaOpen((v) => !v);
            setChatOpen(false);
          }}
          whileTap={{ scale: 0.94 }}
          transition={spring}
          className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft"
        >
          {waOpen ? (
            <X weight="bold" className="h-6 w-6" />
          ) : (
            <WhatsappLogo weight="fill" className="h-7 w-7" />
          )}
        </motion.button>
      </div>
    </>
  );
}
