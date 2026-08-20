"use client";

import { useEffect, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import type { CampaignStatus, CampaignType } from "@prisma/client";
import {
  StatusBadge,
  campaignStatusClass,
  formatDate,
} from "@/components/admin/StatusBadge";

type CampaignRow = {
  id: string;
  name: string;
  type: CampaignType;
  target_segment: string | null;
  message_template: string;
  scheduled_at: string | null;
  status: CampaignStatus;
  created_at: string;
};

const TYPES: CampaignType[] = [
  "WELCOME",
  "REMINDER",
  "OFFER",
  "NATIONAL_DAY",
  "WHATSAPP",
  "SMS",
  "EMAIL",
  "PUSH",
];

const STATUSES: CampaignStatus[] = [
  "DRAFT",
  "SCHEDULED",
  "RUNNING",
  "PAUSED",
  "COMPLETED",
  "CANCELLED",
];

const emptyForm = {
  name: "",
  type: "OFFER" as CampaignType,
  target_segment: "",
  message_template: "",
  scheduled_at: "",
};

export default function AdminCampaignsClient({ locale }: { locale: string }) {
  const t = useTranslations("admin");
  const [rows, setRows] = useState<CampaignRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [pending, startTransition] = useTransition();
  const [saving, setSaving] = useState(false);

  function load() {
    startTransition(async () => {
      try {
        const res = await fetch("/api/admin/campaigns");
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Error");
          return;
        }
        setRows(data.campaigns || []);
        setError(null);
      } catch {
        setError(t("campaigns.error"));
      }
    });
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createCampaign(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.message_template.trim()) {
      setFormError(t("campaigns.formRequired"));
      return;
    }
    setSaving(true);
    setFormError(null);
    try {
      const res = await fetch("/api/admin/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          type: form.type,
          target_segment: form.target_segment.trim() || undefined,
          message_template: form.message_template.trim(),
          scheduled_at: form.scheduled_at || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error || t("campaigns.error"));
        return;
      }
      setForm(emptyForm);
      load();
    } catch {
      setFormError(t("campaigns.error"));
    } finally {
      setSaving(false);
    }
  }

  async function updateStatus(id: string, status: CampaignStatus) {
    const res = await fetch(`/api/admin/campaigns/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) load();
  }

  async function removeCampaign(id: string) {
    if (!confirm(t("campaigns.confirmDelete"))) return;
    const res = await fetch(`/api/admin/campaigns/${id}`, { method: "DELETE" });
    if (res.ok) load();
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl text-tasami-dark sm:text-3xl">
            {t("campaigns.title")}
          </h1>
          <p className="mt-2 text-sm text-tasami-gray">{t("campaigns.subtitle")}</p>
        </div>
        <button
          type="button"
          onClick={load}
          disabled={pending}
          className="rounded-full bg-tasami-pink px-4 py-2.5 text-sm font-medium text-white shadow-soft disabled:opacity-50"
        >
          {t("campaigns.refresh")}
        </button>
      </header>

      {error && (
        <p className="rounded-card bg-tasami-gold/20 px-4 py-3 text-sm text-tasami-purple">
          {error}
        </p>
      )}

      <form
        onSubmit={createCampaign}
        className="card-soft grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 sm:p-8"
      >
        <h2 className="col-span-full text-sm font-medium text-tasami-purple">
          {t("campaigns.createTitle")}
        </h2>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("campaigns.name")}
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/40"
            placeholder={t("campaigns.namePh")}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("campaigns.type")}
          </label>
          <select
            value={form.type}
            onChange={(e) =>
              setForm((f) => ({ ...f, type: e.target.value as CampaignType }))
            }
            className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft"
          >
            {TYPES.map((tp) => (
              <option key={tp} value={tp}>
                {t(`campaignType.${tp}`)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("campaigns.targetSegment")}
          </label>
          <input
            type="text"
            value={form.target_segment}
            onChange={(e) =>
              setForm((f) => ({ ...f, target_segment: e.target.value }))
            }
            className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/40"
            placeholder={t("campaigns.targetSegmentPh")}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("campaigns.scheduledAt")}
          </label>
          <input
            type="datetime-local"
            value={form.scheduled_at}
            onChange={(e) =>
              setForm((f) => ({ ...f, scheduled_at: e.target.value }))
            }
            className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/40"
          />
        </div>

        <div className="col-span-full flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("campaigns.messageTemplate")}
          </label>
          <textarea
            value={form.message_template}
            onChange={(e) =>
              setForm((f) => ({ ...f, message_template: e.target.value }))
            }
            rows={3}
            className="rounded-soft border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/40"
            placeholder={t("campaigns.messageTemplatePh")}
          />
        </div>

        {formError && (
          <p className="col-span-full text-sm text-tasami-pink">{formError}</p>
        )}

        <div className="col-span-full">
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-tasami-pink px-5 py-2.5 text-sm font-medium text-white shadow-soft disabled:opacity-50"
          >
            {saving ? t("campaigns.saving") : t("campaigns.create")}
          </button>
        </div>
      </form>

      <div className="card-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-start text-sm">
            <thead>
              <tr className="border-b border-tasami-purple/5 text-[11px] uppercase tracking-wide text-tasami-gray">
                <th className="px-5 py-3.5 font-medium">{t("campaigns.name")}</th>
                <th className="px-5 py-3.5 font-medium">{t("campaigns.type")}</th>
                <th className="px-5 py-3.5 font-medium">
                  {t("campaigns.targetSegment")}
                </th>
                <th className="px-5 py-3.5 font-medium">{t("campaigns.status")}</th>
                <th className="px-5 py-3.5 font-medium">
                  {t("campaigns.scheduledAt")}
                </th>
                <th className="px-5 py-3.5 font-medium text-end">
                  {t("campaigns.actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tasami-purple/5">
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-14 text-center text-tasami-gray">
                    {t("campaigns.empty")}
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className="hover:bg-white">
                    <td className="px-5 py-4 font-medium text-tasami-purple">
                      {row.name}
                    </td>
                    <td className="px-5 py-4 text-xs text-tasami-gray">
                      {t(`campaignType.${row.type}`)}
                    </td>
                    <td className="px-5 py-4 text-xs text-tasami-gray">
                      {row.target_segment || "—"}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-2">
                        <StatusBadge
                          label={t(`campaignStatus.${row.status}`)}
                          tone={campaignStatusClass(row.status)}
                        />
                        <select
                          className="rounded-button border-0 bg-tasami-offwhite px-2 py-1.5 text-xs text-tasami-purple shadow-soft"
                          value={row.status}
                          onChange={(e) =>
                            updateStatus(row.id, e.target.value as CampaignStatus)
                          }
                        >
                          {STATUSES.map((s) => (
                            <option key={s} value={s}>
                              {t(`campaignStatus.${s}`)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-xs text-tasami-gray">
                      {formatDate(row.scheduled_at, locale)}
                    </td>
                    <td className="px-5 py-4 text-end">
                      <button
                        type="button"
                        onClick={() => removeCampaign(row.id)}
                        className="rounded-button px-3 py-1.5 text-xs font-medium text-tasami-pink transition-colors hover:bg-tasami-pink/10 hover:text-tasami-purple"
                      >
                        {t("campaigns.delete")}
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
