"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
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
import { whatsappUrl } from "@/lib/site";

type Props = {
  serviceSlug: string;
  serviceNameAr: string;
  serviceNameEn: string;
  category?: "government" | "tech" | "sector";
  subcategory?: string;
  priceFrom?: number;
};

const MAX_FILES = 3;
const MAX_FILE_BYTES = 450 * 1024; // ~450KB
const ALLOWED_MIME = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const commaIdx = result.indexOf(",");
      resolve(commaIdx >= 0 ? result.slice(commaIdx + 1) : result);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export default function ServiceRequestActions({
  serviceSlug,
  serviceNameAr,
  serviceNameEn,
  category = "government",
  subcategory,
  priceFrom,
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
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);

  useBodyScrollLock(open);

  const waUrl = whatsappUrl(
    locale === "ar"
      ? `مرحباً، أرغب بطلب خدمة: ${serviceNameAr}`
      : `Hello, I would like to request: ${serviceNameEn}`
  );

  function fieldLabel(id: string) {
    try {
      const label = t(`fields.${id}`);
      return label.startsWith("fields.") ? id : label;
    } catch {
      return id;
    }
  }

  function optionLabel(fieldId: string, option: string) {
    try {
      const label = t(`options.${fieldId}.${option}`);
      return label.startsWith("options.") ? option : label;
    } catch {
      return option;
    }
  }

  function setAnswer(id: string, value: string) {
    setAnswers((a) => ({ ...a, [id]: value }));
  }

  function handleFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files || []);
    e.target.value = "";
    if (!selected.length) return;

    setFileError(null);
    const valid: File[] = [];
    for (const file of selected) {
      if (!ALLOWED_MIME.includes(file.type)) {
        setFileError(t("attachmentsError"));
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        setFileError(t("attachmentsError"));
        continue;
      }
      valid.push(file);
    }

    setFiles((prev) => [...prev, ...valid].slice(0, MAX_FILES));
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
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
      const attachments = files.length
        ? await Promise.all(
            files.map(async (file) => ({
              name: file.name,
              mime: file.type,
              size: file.size,
              dataBase64: await fileToBase64(file),
            }))
          )
        : undefined;

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
          priceFrom,
          attachments,
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
    setFiles([]);
    setFileError(null);
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
        <label key={field.id} className="block text-xs font-medium text-tasami-dark">
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
        <label key={field.id} className="block text-xs font-medium text-tasami-dark">
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
      <label key={field.id} className="block text-xs font-medium text-tasami-dark">
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
          <p className="text-xs font-medium text-tasami-heritage">{t("requiredDocs")}</p>
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

      {open ? (
          <div className="fixed inset-0 z-[80] flex touch-manipulation items-stretch justify-center sm:items-center sm:p-4">
            <button
              type="button"
              aria-label={t("close")}
              className="absolute inset-0 bg-[#007AFF]/40"
              onClick={close}
            />

            <div
              role="dialog"
              aria-modal="true"
              className="sheet-panel relative z-10 flex h-[min(100dvh,100%)] max-h-[100dvh] w-full flex-col overflow-hidden rounded-none bg-white shadow-soft touch-manipulation sm:h-auto sm:max-h-[min(90vh,720px)] sm:rounded-card"
            >
              <div className="flex shrink-0 items-start justify-between gap-3 bg-[#007AFF] px-5 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-tasami-heritage">
                    {t("modalEyebrow")}
                  </p>
                  <h2 className="mt-1 truncate text-lg font-semibold text-white">
                    {locale === "ar" ? serviceNameAr : serviceNameEn}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="touch-target shrink-0 rounded-button p-2 text-white/80 hover:bg-white/10"
                  aria-label={t("close")}
                >
                  <X weight="bold" className="h-4 w-4" />
                </button>
              </div>

              {doneId ? (
                <div className="scroll-touch flex-1 space-y-4 overflow-y-auto p-6 text-center pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                  <CheckCircle
                    weight="fill"
                    className="mx-auto h-12 w-12 text-tasami-heritage"
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
                <form
                  onSubmit={submit}
                  className="flex min-h-0 flex-1 flex-col"
                >
                  <div className="scroll-touch min-h-0 flex-1 space-y-3.5 overflow-y-auto overscroll-contain px-5 py-4">
                    <p className="text-sm leading-relaxed text-tasami-gray">
                      {t("modalIntro")}
                    </p>

                    <label className="block text-xs font-medium text-tasami-dark">
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

                    <label className="block text-xs font-medium text-tasami-dark">
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
                        autoComplete="tel"
                      />
                    </label>

                    <label className="block text-xs font-medium text-tasami-dark">
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
                        autoComplete="email"
                      />
                    </label>

                    <div className="border-t border-tasami-purple/8 pt-3">
                      <p className="mb-3 text-xs font-medium text-tasami-heritage">
                        {t("serviceDetails")}
                      </p>
                      <div className="space-y-3.5">
                        {formDef.fields.map(renderField)}
                      </div>
                    </div>

                    <div className="border-t border-tasami-purple/8 pt-3">
                      <label className="block text-xs font-medium text-tasami-dark">
                        {t("attachments")}
                        <input
                          type="file"
                          multiple
                          accept="application/pdf,image/jpeg,image/png,image/webp"
                          onChange={handleFilesChange}
                          disabled={files.length >= MAX_FILES}
                          className="input-soft mt-1.5 max-w-full cursor-pointer text-xs file:me-3 file:cursor-pointer file:rounded-button file:border-0 file:bg-tasami-purple/10 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-tasami-purple disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </label>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-tasami-gray">
                        {t("attachmentsHint")}
                      </p>

                      {files.length > 0 && (
                        <ul className="mt-2 space-y-1.5">
                          {files.map((file, idx) => (
                            <li
                              key={`${file.name}-${idx}`}
                              className="flex items-center justify-between gap-2 rounded-button bg-tasami-offwhite px-3 py-1.5 text-[11px] text-tasami-purple"
                            >
                              <span className="min-w-0 truncate">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(idx)}
                                className="touch-target shrink-0 rounded-button p-1 text-tasami-gray hover:text-tasami-pink"
                                aria-label={t("close")}
                              >
                                <X weight="bold" className="h-3 w-3" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}

                      {fileError && (
                        <p className="mt-1.5 text-[11px] text-tasami-purple">
                          {fileError}
                        </p>
                      )}
                    </div>

                    {error && (
                      <p className="text-sm text-tasami-purple">{error}</p>
                    )}

                    <p className="text-center text-[11px] text-tasami-gray sm:text-start">
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
                  </div>

                  <div className="shrink-0 border-t border-tasami-purple/8 bg-white px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-secondary w-full text-sm disabled:opacity-50"
                    >
                      {sending ? t("sending") : t("submit")}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
      ) : null}
    </>
  );
}

export function MonjezHint() {
  const t = useTranslations("request");
  return (
    <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-tasami-gray sm:justify-start">
      <ChatCircleDots weight="regular" className="h-3.5 w-3.5 text-tasami-heritage" />
      {t("monjezHint")}
    </p>
  );
}
