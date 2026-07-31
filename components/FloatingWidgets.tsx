"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import {
  WhatsappLogo,
  ChatCircleDots,
  X,
  PaperPlaneTilt,
  UserCircle,
  Robot,
} from "@phosphor-icons/react";

const WHATSAPP_URL =
  "https://wa.me/966500000000?text=" +
  encodeURIComponent("مرحباً، أرغب بالتواصل مع سكرتير تسامي");

const HERMES_WEBHOOK = process.env.NEXT_PUBLIC_HERMES_WEBHOOK_URL ?? "";

type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

/** Soft, buttery spring — premium feel */
const spring = { type: "spring" as const, stiffness: 260, damping: 24, mass: 0.8 };

export default function FloatingWidgets() {
  const t = useTranslations("widgets");
  const [waOpen, setWaOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const welcomeSeeded = useRef(false);

  useEffect(() => {
    if (!welcomeSeeded.current) {
      welcomeSeeded.current = true;
      setMessages([{ id: "welcome", role: "bot", text: t("monjezWelcome") }]);
    }
  }, [t]);

  useEffect(() => {
    if (chatOpen) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  const openWa = () => {
    setChatOpen(false);
    setWaOpen(true);
  };

  const openChat = () => {
    setWaOpen(false);
    setChatOpen(true);
  };

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    setMessages((m) => [...m, { id: `u-${Date.now()}`, role: "user", text }]);
    setInput("");
    setSending(true);

    try {
      let reply = t("monjezFallback");

      if (HERMES_WEBHOOK) {
        const res = await fetch(HERMES_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            source: "monjez_widget",
            timestamp: new Date().toISOString(),
          }),
        });
        if (res.ok) {
          const data = (await res.json().catch(() => null)) as {
            reply?: string;
            output?: string;
            message?: string;
          } | null;
          reply = data?.reply ?? data?.output ?? data?.message ?? reply;
        }
      }

      setMessages((m) => [
        ...m,
        { id: `b-${Date.now()}`, role: "bot", text: reply },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { id: `b-${Date.now()}`, role: "bot", text: t("monjezError") },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Monjez — bottom start; offset so it never collides with WhatsApp */}
      <div className="fixed bottom-6 start-4 z-50 flex flex-col items-start gap-3 sm:bottom-8 sm:start-6">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={spring}
              className="mb-1 flex h-[min(480px,62vh)] w-[min(340px,calc(100vw-5.5rem))] flex-col overflow-hidden rounded-card bg-white shadow-soft"
              role="dialog"
              aria-label={t("monjezTitle")}
            >
              <div className="flex items-center justify-between bg-tasami-purple px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-button bg-tasami-gold/20">
                    <Robot weight="regular" className="h-5 w-5 text-tasami-gold" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {t("monjezTitle")}
                    </p>
                    <p className="text-xs text-white/65">{t("monjezOnline")}</p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label={t("close")}
                  onClick={() => setChatOpen(false)}
                  className="touch-target flex items-center justify-center rounded-button p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X weight="bold" className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 space-y-3.5 overflow-y-auto bg-tasami-offwhite px-3.5 py-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2 ${
                      msg.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        msg.role === "user"
                          ? "bg-tasami-pink/20 text-tasami-pink"
                          : "bg-tasami-purple/10 text-tasami-purple"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <UserCircle weight="regular" className="h-4 w-4" />
                      ) : (
                        <Robot weight="regular" className="h-4 w-4" />
                      )}
                    </span>
                    <div
                      className={`max-w-[78%] rounded-card px-3.5 py-2.5 text-sm leading-relaxed shadow-soft ${
                        msg.role === "user"
                          ? "rounded-ee-sm bg-tasami-purple text-white"
                          : "rounded-es-sm bg-white text-tasami-dark"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {sending && (
                  <p className="ps-10 text-xs text-tasami-gray animate-pulse-soft">
                    {t("monjezTyping")}
                  </p>
                )}
                <div ref={bottomRef} />
              </div>

              <form
                onSubmit={sendMessage}
                className="flex items-center gap-2 border-t border-tasami-purple/5 bg-white p-3"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("monjezPlaceholder")}
                  className="input-soft flex-1 !min-h-[44px] !py-2.5 text-sm"
                  disabled={sending}
                />
                <button
                  type="submit"
                  disabled={sending || !input.trim()}
                  aria-label={t("send")}
                  className="touch-target flex h-11 w-11 shrink-0 items-center justify-center rounded-button bg-tasami-pink text-white shadow-soft transition-all hover:opacity-90 disabled:opacity-40"
                >
                  <PaperPlaneTilt weight="fill" className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-label={t("openChat")}
          onClick={() => (chatOpen ? setChatOpen(false) : openChat())}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={spring}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-tasami-purple text-white shadow-soft"
        >
          {chatOpen ? (
            <X weight="bold" className="h-6 w-6" />
          ) : (
            <ChatCircleDots weight="regular" className="h-7 w-7 text-tasami-gold" />
          )}
        </motion.button>
      </div>

      {/* WhatsApp — bottom end */}
      <div className="fixed bottom-6 end-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:end-6">
        <AnimatePresence>
          {waOpen && (
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={spring}
              className="mb-1 w-[min(300px,calc(100vw-5.5rem))] overflow-hidden rounded-card bg-white shadow-soft"
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
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button bg-tasami-pink px-4 py-3 text-sm font-medium text-white shadow-soft transition-opacity hover:opacity-90"
                >
                  <WhatsappLogo weight="fill" className="h-5 w-5" />
                  {t("waSecretary")}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button bg-tasami-purple px-4 py-3 text-sm font-medium text-white shadow-soft transition-opacity hover:opacity-90"
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
          onClick={() => (waOpen ? setWaOpen(false) : openWa())}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={spring}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft"
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
