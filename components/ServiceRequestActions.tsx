"use client";

import { useLocale, useTranslations } from "next-intl";
import { WhatsappLogo, ChatCircleDots, ClipboardText } from "@phosphor-icons/react";
import { Link } from "@/navigation";
import { getServiceForm } from "@/lib/service-forms";
import { whatsappForService } from "@/lib/site";
import { whatsappPrefillFor } from "@/lib/whatsapp-templates";

type Props = {
  serviceSlug: string;
  serviceNameAr: string;
  serviceNameEn: string;
  /** Title in the current page language, used in the WhatsApp message. */
  serviceName?: string;
  category?: "government" | "tech" | "sector";
  subcategory?: string;
};

export default function ServiceRequestActions({
  serviceNameAr,
  serviceNameEn,
  serviceName,
  category = "government",
  subcategory,
}: Props) {
  const t = useTranslations("request");
  const locale = useLocale();
  const formDef = getServiceForm(subcategory);
  const name =
    serviceName || (locale === "ar" ? serviceNameAr : serviceNameEn);

  const waUrl = whatsappForService(
    category,
    whatsappPrefillFor(category === "tech" ? "tech" : "government", name, locale)
  );
  const kind = category === "tech" ? "tech" : "gov";
  const formHref = subcategory
    ? `/request?kind=${kind}&service=${encodeURIComponent(subcategory)}`
    : `/request?kind=${kind}`;

  return (
    <>
      {formDef.docs.length > 0 && (
        <div className="mt-5">
          <p className="font-bold text-tasami-dark">{t("requiredDocs")}</p>
          <ul className="mt-2 list-inside list-disc text-tasami-gray">
            {formDef.docs.map((doc) => (
              <li key={doc}>{t(`docs.${doc}`)}</li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-wa-location="service_page"
        className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-button bg-[#0F7A40] px-4 py-3 text-base font-bold text-white transition-opacity hover:opacity-95 active:opacity-90"
      >
        <WhatsappLogo weight="fill" className="h-5 w-5" />
        {category === "tech" ? t("ctaWhatsappTech") : t("ctaWhatsapp")}
      </a>
      <Link
        href={formHref as "/request"}
        className="mt-2 flex min-h-[44px] items-center justify-center gap-1.5 text-center text-sm font-bold text-[#006BDE]"
      >
        <ClipboardText weight="regular" className="h-4 w-4 shrink-0" />
        {t("formLink")}
      </Link>
    </>
  );
}

export function MonjezHint() {
  const t = useTranslations("request");
  return (
    <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-tasami-gray sm:justify-start">
      <ChatCircleDots weight="regular" className="h-4 w-4 text-tasami-heritage" />
      {t("monjezHint")}
    </p>
  );
}
