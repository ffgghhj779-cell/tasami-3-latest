"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  PaperPlaneTilt,
  WhatsappLogo,
  ChatCircleDots,
  CheckCircle,
} from "@phosphor-icons/react";
import { Link } from "@/navigation";
import {
  formatServiceAnswers,
  getServiceForm,
  type ServiceField,
} from "@/lib/service-forms";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";

const spring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
  mass: 0.75,
};

const WHATSAPP_BASE = "https://wa.me/966500000000?text=";

type Props = {
  serviceSlug: string;
  serviceNameAr: string;
  serviceNameEn: string;
  category?: "government" | "tech" | "sector";
  subcategory?: string;
};

export default function ServiceRequestActions({
  serviceSlug,
  serviceNameAr,
  serviceNameEn,
  category = "government",
  subcategory,
}: Props) {
  const t = useTranslations("request");
  const locale = useLocale();
  const formDef = getServiceForm(subcategory);
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [doneId, setDoneId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useBodyScrollLock(open);

  const waUrl =
    WHATSAPP_BASE +
    encodeURIComponent(
      locale === "ar"
        ? `مرحباً، أرغب بطلب خدمة: ${serviceNameAr}`
        : `Hello, I would like to request: ${serviceNameEn}`
    );

  function fieldLabel(id: string) {
    return t(`fields.${id}`);
  }

  function optionLabel(fieldId: string, option: string) {
    try {
      return t(`options.${fieldId}.${option}`);
    } catch {
      return option;
    }
  }

  function setAnswer(id: string, value: string) {
    setAnswers((a) => ({ ...a, [id]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const structured = formatServiceAnswers(
      formDef.fields,
      answers,
      fieldLabel,
      optionLabel
    );

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contact,
          notes: structured,
          fields: answers,
          locale,
          serviceSlug,
          serviceNameAr,
          serviceNameEn,
          category,
          subcategory,
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        requestId?: string;
        error?: string;
      } | null;

      if (!res.ok || !data?.requestId) {
        setError(data?.error || t("error"));
        return;
      }

      localStorage.setItem("tasami_last_phone", contact.phone.trim());
      localStorage.setItem("tasami_last_request", data.requestId);
      setDoneId(data.requestId);
    } catch {
      setError(t("error"));
    } finally {
      setSending(false);
    }
  }

  function close() {
    setOpen(false);
    setDoneId(null);
    setError(null);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function openModal() {
    const saved = localStorage.getItem("tasami_last_phone");
    if (saved && !contact.phone) {
      setContact((c) => ({ ...c, phone: saved }));
    }
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => {
        if (data?.user) {
          setContact({
            name: data.user.name || "",
            phone: data.user.phone || "",
            email: data.user.email || "",
          });
        }
      })
      .catch(() => undefined);
    setOpen(true);
  }

  function renderField(field: ServiceField) {
    const value = answers[field.id] || "";
    const label = fieldLabel(field.id);

    if (field.type === "select" && field.options) {
      return (
        <label key={field.id} className="block text-xs font-medium text-tasami-purple">
          {label}
          <select
            required={field.required}
            value={value}
            onChange={(e) => setAnswer(field.id, e.target.value)}
            className="input-soft mt-1.5"
          >
            <option value="">{t("selectPlaceholder")}</option>
            {field.options.map((opt) => (
              <option key={opt} value={opt}>
                {optionLabel(field.id, opt)}
              </option>
            ))}
          </select>
        </label>
      );
    }

    if (field.type === "textarea") {
      return (
        <label key={field.id} className="block text-xs font-medium text-tasami-purple">
          {label}
          <textarea
            required={field.required}
            rows={3}
            value={value}
            onChange={(e) => setAnswer(field.id, e.target.value)}
            className="input-soft mt-1.5 resize-none"
            placeholder={t("notesPh")}
          />
        </label>
      );
    }

    return (
      <label key={field.id} className="block text-xs font-medium text-tasami-purple">
        {label}
        <input
          required={field.required}
          type={
            field.type === "number"
              ? "number"
              : field.type === "date"
                ? "date"
                : field.type === "email"
                  ? "email"
                  : field.type === "tel"
                    ? "tel"
                    : "text"
          }
          dir={
            field.type === "number" ||
            field.type === "date" ||
            field.id.toLowerCase().includes("id") ||
            field.id.toLowerCase().includes("number") ||
            field.id === "crNumber" ||
            field.id === "tinNumber" ||
            field.id === "gosiNumber" ||
            field.id === "plateNumber" ||
            field.id === "contractNumber" ||
            field.id === "caseNumber"
              ? "ltr"
              : undefined
          }
          value={value}
          onChange={(e) => setAnswer(field.id, e.target.value)}
          className="input-soft mt-1.5"
        />
      </label>
    );
  }

  return (
    <>
      {formDef.docs.length > 0 && (
        <div className="mt-5">
          <p className="text-xs font-medium text-tasami-gold">{t("requiredDocs")}</p>
          <ul className="mt-2 list-inside list-disc text-sm text-tasami-gray">
            {formDef.docs.map((doc) => (
              <li key={doc}>{t(`docs.${doc}`)}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={openModal}
          className="btn-secondary flex-1 text-sm"
        >
          <PaperPlaneTilt weight="fill" className="h-4 w-4" />
          {t("ctaSite")}
        </button>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-button border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-3 text-sm font-medium text-tasami-purple transition-opacity hover:opacity-90"
        >
          <WhatsappLogo weight="fill" className="h-4 w-4 text-[#25D366]" />
          {t("ctaWhatsapp")}
        </a>
      </div>
      <p className="mt-2 text-center text-[11px] text-tasami-gray sm:text-start">
        {t("hint")}
      </p>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label={t("close")}
              className="absolute inset-0 bg-tasami-purple/45 sm:backdrop-blur-[2px]"
              onClick={close}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={spring}
              className="scroll-touch relative z-10 max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-t-[20px] bg-white shadow-soft sm:max-h-[90vh] sm:rounded-card"
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-3 bg-tasami-purple px-5 py-4">
                <div>
                  <p className="text-xs font-medium text-tasami-gold">
                    {t("modalEyebrow")}
                  </p>
                  <h2 className="mt-1 text-lg font-light text-white">
                    {locale === "ar" ? serviceNameAr : serviceNameEn}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="touch-target rounded-button p-2 text-white/80 hover:bg-white/10"
                  aria-label={t("close")}
                >
                  <X weight="bold" className="h-4 w-4" />
                </button>
              </div>

              {doneId ? (
                <div className="space-y-4 p-6 text-center">
                  <CheckCircle
                    weight="fill"
                    className="mx-auto h-12 w-12 text-tasami-gold"
                  />
                  <h3 className="text-base font-medium text-tasami-purple">
                    {t("successTitle")}
                  </h3>
                  <p className="text-sm leading-relaxed text-tasami-gray">
                    {t("successBody")}
                  </p>
                  <p className="rounded-button bg-tasami-offwhite px-3 py-2 font-mono text-xs text-tasami-purple">
                    {t("refLabel")}: {doneId.slice(0, 10).toUpperCase()}
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    <Link
                      href="/my-requests"
                      className="btn-primary text-sm"
                      onClick={close}
                    >
                      {t("viewMyRequests")}
                    </Link>
                    <button
                      type="button"
                      onClick={close}
                      className="text-sm font-medium text-tasami-gray hover:text-tasami-pink"
                    >
                      {t("close")}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-3.5 p-5">
                  <p className="text-sm leading-relaxed text-tasami-gray">
                    {t("modalIntro")}
                  </p>

                  <label className="block text-xs font-medium text-tasami-purple">
                    {t("name")}
                    <input
                      required
                      value={contact.name}
                      onChange={(e) =>
                        setContact((f) => ({ ...f, name: e.target.value }))
                      }
                      className="input-soft mt-1.5"
                      placeholder={t("namePh")}
                    />
                  </label>

                  <label className="block text-xs font-medium text-tasami-purple">
                    {t("phone")}
                    <input
                      required
                      type="tel"
                      dir="ltr"
                      value={contact.phone}
                      onChange={(e) =>
                        setContact((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="input-soft mt-1.5"
                      placeholder="05xxxxxxxx"
                    />
                  </label>

                  <label className="block text-xs font-medium text-tasami-purple">
                    {t("email")}
                    <input
                      type="email"
                      dir="ltr"
                      value={contact.email}
                      onChange={(e) =>
                        setContact((f) => ({ ...f, email: e.target.value }))
                      }
                      className="input-soft mt-1.5"
                      placeholder="optional@email.com"
                    />
                  </label>

                  <div className="border-t border-tasami-purple/8 pt-3">
                    <p className="mb-3 text-xs font-medium text-tasami-gold">
                      {t("serviceDetails")}
                    </p>
                    <div className="space-y-3.5">
                      {formDef.fields.map(renderField)}
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-tasami-purple">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-secondary w-full text-sm disabled:opacity-50"
                  >
                    {sending ? t("sending") : t("submit")}
                  </button>

                  <p className="text-center text-[11px] text-tasami-gray">
                    {t("accountHint")}{" "}
                    <Link
                      href="/register"
                      className="font-medium text-tasami-pink"
                      onClick={close}
                    >
                      {t("createAccount")}
                    </Link>
                  </p>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] w-full items-center justify-center gap-2 text-sm font-medium text-tasami-gray hover:text-[#25D366]"
                  >
                    <WhatsappLogo weight="fill" className="h-4 w-4" />
                    {t("preferWhatsapp")}
                  </a>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function MonjezHint() {
  const t = useTranslations("request");
  return (
    <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-tasami-gray sm:justify-start">
      <ChatCircleDots weight="regular" className="h-3.5 w-3.5 text-tasami-gold" />
      {t("monjezHint")}
    </p>
  );
}
