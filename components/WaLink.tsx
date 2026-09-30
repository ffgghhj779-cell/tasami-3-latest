"use client";

import type { ReactNode } from "react";
import { useLocale } from "next-intl";
import { whatsappDirectUrl, whatsappUrl } from "@/lib/site";
import { buildWhatsAppMessage, type WaLine } from "@/lib/whatsapp-templates";
import { waHrefFor } from "@/components/WaChooser";

type Props = {
  line: WaLine;
  location: string;
  className?: string;
  children: ReactNode;
};

/** WhatsApp anchor whose «الخدمة» line is filled with the current page name at click time. */
export default function WaLink({ line, location, className, children }: Props) {
  const locale = useLocale();
  const fallback = buildWhatsAppMessage(line, locale);
  const href = line === "tech" ? whatsappUrl(fallback) : whatsappDirectUrl(fallback);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-wa-location={location}
      onClick={(e) => {
        e.currentTarget.href = waHrefFor(line, locale);
      }}
      className={className}
    >
      {children}
    </a>
  );
}
