"use client";

import { useEffect, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import type { ReminderType } from "@prisma/client";
import { StatusBadge, reminderToneClass, formatDate } from "@/components/admin/StatusBadge";
import { Link } from "@/navigation";

type ReminderRow = {
  id: string;
  type: ReminderType;
  reminder_date: string;
  sent: boolean;
  customer: { id: string; name: string; phone: string };
};

const TYPES: ReminderType[] = [
  "IQAMA_EXPIRY",
  "CR_EXPIRY",
  "FOLLOW_UP",
  "PAYMENT",
  "DOCUMENT",
  "APPOINTMENT",
  "RENEWAL",
  "CUSTOM",
];

const emptyForm = {
  phone: "",
  type: "FOLLOW_UP" as ReminderType,
  reminder_date: "",
};

export default function AdminRemindersClient({ locale }: { locale: string }) {
  const t = useTranslations("admin");
  const [rows, setRows] = useState<ReminderRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [pending, startTransition] = useTransition();
  const [saving, setSaving] = useState(false);

  function load() {
    startTransition(async () => {
      try {
        const res = await fetch("/api/admin/reminders");
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Error");
          return;
        }
        setRows(data.reminders || []);
        setError(null);
      } catch {
        setError(t("reminders.error"));
      }
    });
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createReminder(e: React.FormEvent) {
    e.preventDefault();
    if (!form.phone.trim() || !form.reminder_date) {
      setFormError(t("reminders.formRequired"));
      return;
    }
    setSaving(true);
    setFormError(null);
    try {
      const res = await fetch("/api/admin/reminders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: form.phone.trim(),
          type: form.type,
          reminder_date: form.reminder_date,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error || t("reminders.error"));
        return;
      }
      setForm(emptyForm);
      load();
    } catch {
      setFormError(t("reminders.error"));
    } finally {
      setSaving(false);
    }
  }

  async function toggleSent(id: string, sent: boolean) {
    const res = await fetch(`/api/admin/reminders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sent }),
    });
    if (res.ok) load();
  }

  async function removeReminder(id: string) {
    if (!confirm(t("reminders.confirmDelete"))) return;
    const res = await fetch(`/api/admin/reminders/${id}`, { method: "DELETE" });
    if (res.ok) load();
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl text-tasami-purple sm:text-3xl">
            {t("reminders.title")}
          </h1>
          <p className="mt-2 text-sm text-tasami-gray">{t("reminders.subtitle")}</p>
        </div>
        <button
          type="button"
          onClick={load}
          disabled={pending}
          className="rounded-button bg-tasami-purple px-4 py-2.5 text-sm font-medium text-white shadow-soft disabled:opacity-50"
        >
          {t("reminders.refresh")}
        </button>
      </header>

      {error && (
        <p className="rounded-card bg-tasami-gold/20 px-4 py-3 text-sm text-tasami-purple">
          {error}
        </p>
      )}

      <form
        onSubmit={createReminder}
        className="card-soft grid grid-cols-1 gap-4 p-6 sm:grid-cols-3 sm:p-8"
      >
        <h2 className="col-span-full text-sm font-medium text-tasami-purple">
          {t("reminders.createTitle")}
        </h2>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("reminders.customerPhone")}
          </label>
          <input
            type="text"
            dir="ltr"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/40"
            placeholder={t("reminders.customerPhonePh")}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("reminders.type")}
          </label>
          <select
            value={form.type}
            onChange={(e) =>
              setForm((f) => ({ ...f, type: e.target.value as ReminderType }))
            }
            className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft"
          >
            {TYPES.map((tp) => (
              <option key={tp} value={tp}>
                {t(`reminderType.${tp}`)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("reminders.date")}
          </label>
          <input
            type="datetime-local"
            value={form.reminder_date}
            onChange={(e) =>
              setForm((f) => ({ ...f, reminder_date: e.target.value }))
            }
            className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/40"
          />
        </div>

        {formError && (
          <p className="col-span-full text-sm text-tasami-pink">{formError}</p>
        )}

        <div className="col-span-full">
          <button
            type="submit"
            disabled={saving}
            className="rounded-button bg-tasami-purple px-5 py-2.5 text-sm font-medium text-white shadow-soft disabled:opacity-50"
          >
            {saving ? t("reminders.saving") : t("reminders.create")}
          </button>
        </div>
      </form>

      <div className="card-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-start text-sm">
            <thead>
              <tr className="border-b border-tasami-purple/5 text-[11px] uppercase tracking-wide text-tasami-gray">
                <th className="px-5 py-3.5 font-medium">{t("reminders.customer")}</th>
                <th className="px-5 py-3.5 font-medium">{t("reminders.phone")}</th>
                <th className="px-5 py-3.5 font-medium">{t("reminders.type")}</th>
                <th className="px-5 py-3.5 font-medium">{t("reminders.date")}</th>
                <th className="px-5 py-3.5 font-medium">{t("reminders.sentStatus")}</th>
                <th className="px-5 py-3.5 font-medium text-end">
                  {t("reminders.actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tasami-purple/5">
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-14 text-center text-tasami-gray">
                    {t("reminders.empty")}
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className="hover:bg-white">
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/customers/${row.customer.id}`}
                        className="font-medium text-tasami-purple hover:text-tasami-pink"
                      >
                        {row.customer.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 tabular-nums text-tasami-dark" dir="ltr">
                      {row.customer.phone}
                    </td>
                    <td className="px-5 py-4 text-xs text-tasami-gray">
                      {t(`reminderType.${row.type}`)}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-xs text-tasami-gray">
                      {formatDate(row.reminder_date, locale)}
                    </td>
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        onClick={() => toggleSent(row.id, !row.sent)}
                      >
                        <StatusBadge
                          label={t(row.sent ? "reminders.sent" : "reminders.pending")}
                          tone={reminderToneClass(row.sent)}
                        />
                      </button>
                    </td>
                    <td className="px-5 py-4 text-end">
                      <button
                        type="button"
                        onClick={() => removeReminder(row.id)}
                        className="rounded-button px-3 py-1.5 text-xs font-medium text-tasami-pink transition-colors hover:bg-tasami-pink/10 hover:text-tasami-purple"
                      >
                        {t("reminders.delete")}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
