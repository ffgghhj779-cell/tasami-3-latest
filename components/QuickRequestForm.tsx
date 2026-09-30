"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle, WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "@/navigation";
import { whatsappDirectUrl, whatsappUrl } from "@/lib/site";
import { buildWhatsAppMessage } from "@/lib/whatsapp-templates";
import { trackFormLead } from "@/lib/analytics";
import type { RequestLine } from "@/lib/orders";

export type QuickOption = {
  id: string;
  line: RequestLine;
  serviceSlug: string;
  label: string;
  labelAr: string;
  labelEn: string;
};

type Props = {
  options: QuickOption[];
  initialLine: RequestLine;
  initialService?: string;
};

const OTHER = "other";

export default function QuickRequestForm({
  options,
  initialLine,
  initialService,
}: Props) {
  const t = useTranslations("requestForm");
  const locale = useLocale();
  const [line, setLine] = useState<RequestLine>(initialLine);
  const [clientType, setClientType] = useState<"individual" | "company">(
    "individual"
  );
  const [serviceId, setServiceId] = useState(
    options.some((o) => o.id === initialService && o.line === initialLine)
      ? (initialService as string)
      : ""
  );
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderNo, setOrderNo] = useState<string | null>(null);

  const lineOptions = useMemo(
    () => options.filter((o) => o.line === line),
    [options, line]
  );
  const selected = lineOptions.find((o) => o.id === serviceId);
  const serviceLabel = selected?.label ?? (serviceId === OTHER ? t("other") : "");

  const waHref = useMemo(() => {
    if (!orderNo) return "#";
    const message = buildWhatsAppMessage(line === "tech" ? "tech" : "taqeeb", locale, {
      orderNo: `#${orderNo}`,
      clientType: clientType === "company" ? t("company") : t("individual"),
      service: serviceLabel,
      city,
    });
    return line === "tech" ? whatsappUrl(message) : whatsappDirectUrl(message);
  }, [orderNo, line, locale, clientType, serviceLabel, city, t]);

  function switchLine(next: RequestLine) {
    setLine(next);
    setServiceId("");
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!serviceId) return;
    setSending(true);
    setError(null);
    const category = line === "tech" ? "tech" : "government";
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quick: true,
          phone: phone.trim() || undefined,
          clientType,
          city: city.trim(),
          locale,
          category,
          serviceSlug: selected?.serviceSlug ?? `${line}-other`,
          serviceNameAr: selected?.labelAr ?? (line === "tech" ? "خدمة تقنية أخرى" : "معاملة حكومية أخرى"),
          serviceNameEn: selected?.labelEn ?? (line === "tech" ? "Other tech service" : "Other government service"),
          subcategory: selected?.id,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        orderNo?: string;
      } | null;
      if (!res.ok || !data?.orderNo) {
        setError(t("error"));
        return;
      }
      localStorage.setItem("tasami_last_order", data.orderNo);
      if (phone.trim()) localStorage.setItem("tasami_last_phone", phone.trim());
      trackFormLead({ category, service: selected?.labelAr ?? serviceId });
      setOrderNo(data.orderNo);
    } catch {
      setError(t("error"));
    } finally {
      setSending(false);
    }
  }

  if (orderNo) {
    return (
      <div className="rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-6 text-center sm:p-8">
        <CheckCircle weight="fill" className="mx-auto h-14 w-14 text-[#0F7A40]" />
        <h2 className="mt-4 text-xl font-bold text-tasami-dark">
          {t("successTitle", { orderNo })}
        </h2>
        <p
          className="mx-auto mt-3 w-fit rounded-xl bg-tasami-offwhite px-5 py-3 text-2xl font-bold tracking-widest text-tasami-dark"
          dir="ltr"
        >
          #{orderNo}
        </p>
        <p className="mt-3 leading-relaxed text-tasami-gray">{t("successBody")}</p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          data-wa-location="request_form_success"
          className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button bg-[#0F7A40] px-4 text-base font-bold text-white active:opacity-90"
        >
          <WhatsappLogo weight="fill" className="h-5 w-5" />
          {t("sendWhatsapp")}
        </a>
        <p className="mt-2 text-sm text-tasami-gray">{t("sendWhatsappHint")}</p>
        <Link
          href={`/my-requests?order=${orderNo}`}
          className="mt-5 inline-flex min-h-[48px] items-center justify-center font-bold text-[#006BDE]"
        >
          {t("trackLink")}
        </Link>
      </div>
    );
  }

  const chip = (active: boolean) =>
    `flex min-h-[48px] flex-1 items-center justify-center rounded-button border px-4 text-base font-bold transition-colors ${
      active
        ? "border-[#006BDE] bg-[#006BDE] text-white"
        : "border-[rgba(26,53,80,0.18)] bg-white text-tasami-dark hover:border-[#006BDE]"
    }`;

  return (
    <form
      onSubmit={submit}
      className="space-y-6 rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-8"
    >
      <fieldset>
        <legend className="mb-2 font-bold text-tasami-dark">{t("lineLabel")}</legend>
        <div className="flex gap-3">
          <button type="button" className={chip(line === "gov")} aria-pressed={line === "gov"} onClick={() => switchLine("gov")}>
            {t("lineGov")}
          </button>
          <button type="button" className={chip(line === "tech")} aria-pressed={line === "tech"} onClick={() => switchLine("tech")}>
            {t("lineTech")}
          </button>
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 font-bold text-tasami-dark">{t("clientTypeLabel")}</legend>
        <div className="flex gap-3">
          <button type="button" className={chip(clientType === "individual")} aria-pressed={clientType === "individual"} onClick={() => setClientType("individual")}>
            {t("individual")}
          </button>
          <button type="button" className={chip(clientType === "company")} aria-pressed={clientType === "company"} onClick={() => setClientType("company")}>
            {t("company")}
          </button>
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block font-bold text-tasami-dark">{t("serviceLabel")}</span>
        <select
          required
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
          className="input-soft min-h-[48px] text-base"
        >
          <option value="">{t("servicePlaceholder")}</option>
          {lineOptions.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
          <option value={OTHER}>{t("other")}</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block font-bold text-tasami-dark">{t("cityLabel")}</span>
        <input
          required
          list="sa-cities"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-soft min-h-[48px] text-base"
          placeholder={t("cityPlaceholder")}
          autoComplete="address-level2"
        />
        <datalist id="sa-cities">
          {(t.raw("cities") as string[]).map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
      </label>

      <label className="block">
        <span className="mb-2 block font-bold text-tasami-dark">
          {t("phoneLabel")}{" "}
          <span className="font-normal text-tasami-gray">{t("optional")}</span>
        </span>
        <input
          type="tel"
          dir="ltr"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input-soft min-h-[48px] text-base"
          placeholder="05xxxxxxxx"
          autoComplete="tel"
        />
        <span className="mt-1 block text-sm text-tasami-gray">{t("phoneHint")}</span>
      </label>

      {error ? (
        <p role="alert" className="font-bold text-[#b42318]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={sending || !serviceId}
        className="flex min-h-[48px] w-full items-center justify-center rounded-button bg-[#006BDE] px-4 text-base font-bold text-white transition-opacity active:opacity-90 disabled:opacity-50"
      >
        {sending ? t("sending") : t("submit")}
      </button>
      <p className="text-center text-sm text-tasami-gray">
        {t("privacyNote")}{" "}
        <Link href="/privacy" className="font-bold text-[#006BDE]">
          {t("privacyLink")}
        </Link>
      </p>
    </form>
  );
}
