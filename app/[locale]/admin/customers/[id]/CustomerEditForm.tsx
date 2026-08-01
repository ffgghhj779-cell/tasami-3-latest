"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import type { CustomerSegment, CustomerStatus } from "@prisma/client";

const STATUSES: CustomerStatus[] = [
  "LEAD",
  "ACTIVE",
  "SLEEPING",
  "ANGRY",
  "INACTIVE",
  "VIP",
  "ARCHIVED",
];

const SEGMENTS: CustomerSegment[] = [
  "INDIVIDUAL",
  "COMPANY",
  "FAMILY",
  "STARTUP",
  "NONPROFIT",
  "INVESTOR",
  "SME",
  "ENTERPRISE",
  "GOVERNMENT",
];

type Props = {
  customerId: string;
  initialStatus: CustomerStatus;
  initialSegment: CustomerSegment;
  initialNotes: string | null;
  initialEmail: string | null;
};

export default function CustomerEditForm({
  customerId,
  initialStatus,
  initialSegment,
  initialNotes,
  initialEmail,
}: Props) {
  const t = useTranslations("admin");
  const router = useRouter();
  const [status, setStatus] = useState<CustomerStatus>(initialStatus);
  const [segment, setSegment] = useState<CustomerSegment>(initialSegment);
  const [notes, setNotes] = useState(initialNotes || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSaved(false);
    try {
      const res = await fetch(`/api/admin/customers/${customerId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, segment, notes, email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || t("customers.editError"));
        return;
      }
      setSaved(true);
      router.refresh();
    } catch {
      setError(t("customers.editError"));
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={save}
      className="card-soft grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 sm:p-8"
    >
      <h2 className="col-span-full text-sm font-medium text-tasami-purple">
        {t("customers.editTitle")}
      </h2>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-tasami-gray">
          {t("customers.status")}
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as CustomerStatus)}
          className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {t(`status.${s}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-tasami-gray">
          {t("customers.segment")}
        </label>
        <select
          value={segment}
          onChange={(e) => setSegment(e.target.value as CustomerSegment)}
          className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft"
        >
          {SEGMENTS.map((s) => (
            <option key={s} value={s}>
              {t(`segment.${s}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-tasami-gray">
          {t("customers.email")}
        </label>
        <input
          type="email"
          dir="ltr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/40"
          placeholder={t("customers.emailPh")}
        />
      </div>

      <div className="col-span-full flex flex-col gap-1.5">
        <label className="text-xs font-medium text-tasami-gray">
          {t("customers.notes")}
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="rounded-soft border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/40"
        />
      </div>

      {error && <p className="col-span-full text-sm text-tasami-pink">{error}</p>}
      {saved && !error && (
        <p className="col-span-full text-sm text-tasami-purple">
          {t("customers.editSaved")}
        </p>
      )}

      <div className="col-span-full">
        <button
          type="submit"
          disabled={saving}
          className="rounded-button bg-tasami-purple px-5 py-2.5 text-sm font-medium text-white shadow-soft disabled:opacity-50"
        >
          {saving ? t("customers.saving") : t("customers.save")}
        </button>
      </div>
    </form>
  );
}
