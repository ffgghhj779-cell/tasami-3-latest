"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { TaskStatus } from "@prisma/client";
import {
  StatusBadge,
  taskStatusClass,
  formatDate,
} from "@/components/admin/StatusBadge";
import { Link, useRouter } from "@/navigation";

type RequestRow = {
  id: string;
  status: TaskStatus;
  notes: string | null;
  created_at: string;
  service: { name_ar: string; name_en: string; slug: string } | null;
};

type MeUser = {
  id: string;
  name: string;
  phone: string;
} | null;

export default function MyRequestsPage() {
  const t = useTranslations("request");
  const ta = useTranslations("admin");
  const tAuth = useTranslations("auth");
  const locale = useLocale();
  const router = useRouter();
  const [user, setUser] = useState<MeUser>(null);
  const [phone, setPhone] = useState("");
  const [rows, setRows] = useState<RequestRow[]>([]);
  const [name, setName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function loadByPhone(p: string) {
    setLoading(true);
    setError(null);
    setSearched(true);
    try {
      const res = await fetch(
        `/api/requests?phone=${encodeURIComponent(p.trim())}`
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || t("error"));
        setRows([]);
        return;
      }
      setName(data.customer?.name || null);
      setRows(data.requests || []);
      localStorage.setItem("tasami_last_phone", p.trim());
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => {
        if (data?.user) {
          setUser(data.user);
          setPhone(data.user.phone);
          loadByPhone(data.user.phone);
        } else {
          const saved = localStorage.getItem("tasami_last_phone");
          if (saved) setPhone(saved);
        }
      })
      .catch(() => {
        const saved = localStorage.getItem("tasami_last_phone");
        if (saved) setPhone(saved);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function lookup(e: React.FormEvent) {
    e.preventDefault();
    await loadByPhone(phone);
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setRows([]);
    setSearched(false);
    router.refresh();
  }

  return (
    <div className="surface-dotted min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-tasami-gray hover:text-tasami-pink"
          >
            ← {t("backHome")}
          </Link>
          {user ? (
            <button
              type="button"
              onClick={logout}
              className="text-sm font-medium text-tasami-gray hover:text-tasami-pink"
            >
              {tAuth("logout")}
            </button>
          ) : (
            <div className="flex gap-3 text-sm">
              <Link href="/login" className="font-medium text-tasami-pink">
                {tAuth("loginLink")}
              </Link>
              <Link href="/register" className="text-tasami-gray hover:text-tasami-pink">
                {tAuth("registerLink")}
              </Link>
            </div>
          )}
        </div>

        <header className="mb-10">
          <h1 className="font-display text-2xl text-tasami-purple sm:text-3xl">
            {t("myTitle")}
          </h1>
          <span className="highlight-line" />
          <p className="mt-4 text-sm leading-relaxed text-tasami-gray">
            {user ? t("mySubtitleLoggedIn") : t("mySubtitle")}
          </p>
        </header>

        {!user && (
          <form
            onSubmit={lookup}
            className="card-premium mb-8 flex flex-col gap-3 p-6 sm:flex-row sm:items-end"
          >
            <label className="block flex-1 text-xs font-medium text-tasami-purple">
              {t("phone")}
              <input
                required
                type="tel"
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-soft mt-1.5"
                placeholder="05xxxxxxxx"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="btn-secondary min-w-[140px] text-sm disabled:opacity-50"
            >
              {loading ? t("sending") : t("lookup")}
            </button>
          </form>
        )}

        {error && <p className="mb-4 text-sm text-[#8B3A1A]">{error}</p>}

        {searched && !error && (
          <div className="space-y-4">
            {(name || user) && (
              <p className="text-sm text-tasami-gray">
                {t("hello")}{" "}
                <span className="font-medium text-tasami-purple">
                  {name || user?.name}
                </span>
              </p>
            )}
            {rows.length === 0 ? (
              <p className="card-soft px-5 py-10 text-center text-sm text-tasami-gray">
                {t("emptyMy")}
              </p>
            ) : (
              rows.map((row) => (
                <article key={row.id} className="card-premium p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-medium text-tasami-purple">
                        {locale === "ar"
                          ? row.service?.name_ar
                          : row.service?.name_en || row.service?.name_ar}
                      </h2>
                      <p className="mt-1 font-mono text-[11px] text-tasami-gray">
                        {t("refLabel")}: {row.id.slice(0, 10).toUpperCase()}
                      </p>
                    </div>
                    <StatusBadge
                      label={ta(`status.${row.status}`)}
                      tone={taskStatusClass(row.status)}
                    />
                  </div>
                  <p className="mt-3 text-xs text-tasami-gray">
                    {formatDate(row.created_at, locale)}
                  </p>
                  {row.notes && (
                    <p className="mt-2 whitespace-pre-wrap text-sm text-tasami-dark">
                      {row.notes}
                    </p>
                  )}
                </article>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
