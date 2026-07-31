"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { ChatCircleDots, PaperPlaneTilt, X } from "@phosphor-icons/react";

type ChatMessage = {
  id: string;
  sender: "user" | "bot";
  text: string;
};

const spring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 24,
  mass: 0.8,
};

const GUEST_KEY = "tasami_monjez_guest";
const CUSTOMER_KEY = "tasami_monjez_customer";

function getOrCreateGuestKey(): string {
  if (typeof window === "undefined") return "";
  let key = localStorage.getItem(GUEST_KEY);
  if (!key) {
    key =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `g-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(GUEST_KEY, key);
  }
  return key;
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block h-1.5 w-1.5 rounded-full bg-tasami-gray/70"
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
}

type Props = {
  /** When WhatsApp opens, close chat */
  forceClose?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function ChatWidget({ forceClose, onOpenChange }: Props) {
  const t = useTranslations("widgets");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [customerId, setCustomerId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const welcomeSeeded = useRef(false);

  const setOpenSafe = useCallback(
    (next: boolean) => {
      setOpen(next);
      onOpenChange?.(next);
    },
    [onOpenChange]
  );

  useEffect(() => {
    if (forceClose) setOpenSafe(false);
  }, [forceClose, setOpenSafe]);

  useEffect(() => {
    if (!welcomeSeeded.current) {
      welcomeSeeded.current = true;
      setMessages([
        { id: "welcome", sender: "bot", text: t("monjezWelcome") },
      ]);
    }
    const stored = localStorage.getItem(CUSTOMER_KEY);
    if (stored) setCustomerId(stored);
  }, [t]);

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sending, open]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          locale,
          customerId,
          guestKey: getOrCreateGuestKey(),
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        reply?: string;
        customerId?: string;
        error?: string;
      } | null;

      if (data?.customerId) {
        setCustomerId(data.customerId);
        localStorage.setItem(CUSTOMER_KEY, data.customerId);
      }

      const replyText =
        data?.reply?.trim() ||
        (!res.ok ? t("monjezError") : t("monjezFallback"));

      setMessages((m) => [
        ...m,
        { id: `b-${Date.now()}`, sender: "bot", text: replyText },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { id: `b-${Date.now()}`, sender: "bot", text: t("monjezError") },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-6 start-4 z-50 flex flex-col items-start gap-3 sm:bottom-8 sm:start-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={spring}
            className="mb-1 flex h-[min(520px,68vh)] w-[min(360px,calc(100vw-5.5rem))] flex-col overflow-hidden rounded-[20px] bg-white shadow-soft"
            role="dialog"
            aria-label={t("monjezTitle")}
          >
            {/* Header — deep purple + live status */}
            <div className="relative flex items-center justify-between bg-tasami-purple px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tasami-gold/20 text-base font-light text-tasami-gold">
                    م
                  </span>
                  <span
                    className="absolute bottom-0 end-0 h-3 w-3 rounded-full border-2 border-tasami-purple bg-[#22C55E]"
                    title={t("monjezOnline")}
                  />
                </div>
                <div>
                  <p className="text-[15px] font-medium tracking-wide text-white">
                    منجز
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px] text-white/65">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                    {t("monjezOnline")}
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label={t("close")}
                onClick={() => setOpenSafe(false)}
                className="touch-target flex items-center justify-center rounded-button p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X weight="bold" className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={listRef}
              className="flex-1 space-y-3 overflow-y-auto bg-[#F8F9FA] px-3.5 py-4"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={spring}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[82%] px-3.5 py-2.5 text-[14px] leading-[1.55] ${
                        msg.sender === "user"
                          ? "rounded-[18px] rounded-ee-md bg-tasami-pink text-tasami-dark"
                          : "rounded-[18px] rounded-es-md bg-white text-tasami-dark shadow-soft"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {sending && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="rounded-[18px] rounded-es-md bg-white px-4 py-3 shadow-soft">
                    <TypingDots />
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Composer — iOS-style */}
            <form
              onSubmit={sendMessage}
              className="flex items-end gap-2 border-t border-tasami-purple/5 bg-white px-3 py-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("monjezPlaceholder")}
                disabled={sending}
                className="min-h-[44px] flex-1 rounded-full bg-[#F8F9FA] px-4 py-2.5 text-sm text-tasami-dark placeholder:text-tasami-gray shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/30 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                aria-label={t("send")}
                className="touch-target flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tasami-purple text-tasami-gold shadow-soft transition-all hover:opacity-90 disabled:opacity-35"
              >
                <PaperPlaneTilt weight="fill" className="h-[18px] w-[18px]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={t("openChat")}
        onClick={() => setOpenSafe(!open)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={spring}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-tasami-purple text-white shadow-soft"
      >
        {open ? (
          <X weight="bold" className="h-6 w-6" />
        ) : (
          <ChatCircleDots weight="regular" className="h-7 w-7 text-tasami-gold" />
        )}
      </motion.button>
    </div>
  );
}
