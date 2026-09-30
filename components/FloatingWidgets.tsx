"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { WhatsappLogo } from "@phosphor-icons/react";
import ChatWidget from "@/components/ChatWidget";
import { useWaChooser } from "@/components/WaChooser";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { usePathname } from "@/navigation";

export default function FloatingWidgets() {
  const t = useTranslations("widgets");
  const pathname = usePathname();
  const { openWhatsApp } = useWaChooser();
  const [chatOpen, setChatOpen] = useState(false);

  const showChatFab = pathname.includes("/services/tech");

  useBodyScrollLock(chatOpen, { hideFabs: false });

  const onChatOpenChange = useCallback((open: boolean) => {
    setChatOpen(open);
  }, []);

  return (
    <>
      {showChatFab ? <ChatWidget onOpenChange={onChatOpenChange} /> : null}

      <div className="fab-shell pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] end-3 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:end-6">
        <button
          type="button"
          aria-label={t("openWhatsapp")}
          onClick={() => openWhatsApp("floating_fab")}
          className={`pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0F7A40] text-white shadow-soft transition-transform active:scale-95 ${
            chatOpen ? "max-sm:hidden" : ""
          }`}
        >
          <WhatsappLogo weight="fill" className="h-7 w-7" />
        </button>
      </div>
    </>
  );
}
