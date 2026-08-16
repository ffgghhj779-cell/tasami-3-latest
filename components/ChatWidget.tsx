"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { ChatCircleDots, PaperPlaneTilt, X } from "@phosphor-icons/react";
import { usePathname } from "@/navigation";

type ChatMessage = {
  id: string;
  sender: "user" | "bot";
  text: string;
};

const spring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
  mass: 0.75,
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
          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
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
  forceClose?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function ChatWidget({ forceClose, onOpenChange }: Props) {
  const t = useTranslations("widgets");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [customerId, setCustomerId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
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

  // Only close on real route changes — not when parent callback identity changes
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    setOpen(false);
    onOpenChange?.(false);
  }, [pathname, onOpenChange]);

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
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
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
    <div className="fab-shell pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] start-3 z-50 flex flex-col items-start gap-3 sm:bottom-8 sm:start-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={spring}
            className="pointer-events-auto mb-1 flex h-[min(560px,calc(100dvh-8.5rem))] w-[min(380px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[20px] bg-white shadow-soft touch-manipulation max-sm:fixed max-sm:inset-x-0 max-sm:bottom-0 max-sm:top-auto max-sm:z-[60] max-sm:mb-0 max-sm:h-[min(88dvh,640px)] max-sm:w-full max-sm:rounded-b-none max-sm:rounded-t-[20px]"
            role="dialog"
            aria-label={t("monjezTitle")}
          >
            <div className="relative flex shrink-0 items-center justify-between bg-[#1A0845] px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tasami-gold text-base font-semibold text-tasami-dark">
                    م
                  </span>
                  <span className="absolute bottom-0 end-0 h-3 w-3 rounded-full border-2 border-[#1A0845] bg-[#6B53FF]" />
                </div>
                <div>
                  <p className="text-[15px] font-medium tracking-wide text-white">
                    {t("monjezTitle")}
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px] text-white/65">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-tasami-gold" />
                    {t("monjezOnline")}
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label={t("close")}
                onClick={() => setOpenSafe(false)}
                className="touch-target flex items-center justify-center rounded-button p-2 text-white/80 active:bg-white/10"
              >
                <X weight="bold" className="h-4 w-4" />
              </button>
            </div>

            <div className="scroll-touch flex-1 space-y-3 overflow-y-auto bg-[#F6F6FB] px-3.5 py-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 text-[14px] leading-[1.55] ${
                      msg.sender === "user"
                        ? "rounded-[18px] rounded-ee-md bg-tasami-pink text-white"
                        : "rounded-[18px] rounded-es-md bg-white text-tasami-dark shadow-soft"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {sending && (
                <div className="flex justify-start">
                  <div className="rounded-[18px] rounded-es-md bg-white px-4 py-3 shadow-soft">
                    <TypingDots />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <form
              onSubmit={sendMessage}
              className="flex shrink-0 items-end gap-2 border-t border-tasami-purple/5 bg-white px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("monjezPlaceholder")}
                disabled={sending}
                enterKeyHint="send"
                className="min-h-[44px] flex-1 rounded-full bg-[#F6F6FB] px-4 py-2.5 text-sm text-tasami-dark placeholder:text-tasami-gray focus:outline-none focus:ring-2 focus:ring-tasami-pink/30 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                aria-label={t("send")}
                className="touch-target flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tasami-pink text-white shadow-soft active:opacity-90 disabled:opacity-35"
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
        whileTap={{ scale: 0.94 }}
        transition={spring}
        className={`pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-tasami-pink text-white shadow-lift ${
          open ? "max-sm:hidden" : ""
        }`}
      >
        {open ? (
          <X weight="bold" className="h-6 w-6" />
        ) : (
          <ChatCircleDots weight="regular" className="h-7 w-7 text-white" />
        )}
      </motion.button>
    </div>
  );
}
