"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function ResetPasswordForm({ token }: { token: string }) {
  const t = useTranslations("auth");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError(t("resetInvalidToken"));
      return;
    }
    if (password.length < 6) {
      setError(t("resetPasswordShort"));
      return;
    }
    if (password !== confirm) {
      setError(t("resetMismatch"));
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setError(
          data?.error === "Invalid or expired token"
            ? t("resetInvalidToken")
            : t("error")
        );
        return;
      }
      setDone(true);
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="surface-dotted min-h-screen">
      <div className="mx-auto flex max-w-md flex-col px-5 py-14 sm:px-8 lg:py-20">
        <Link
          href="/login"
          className="mb-8 text-sm font-medium text-tasami-gray hover:text-tasami-pink"
        >
          ← {t("loginLink")}
        </Link>

        <header className="mb-8">
          <h1 className="font-display text-2xl text-tasami-purple sm:text-3xl">
            {t("resetTitle")}
          </h1>
          <span className="highlight-line" />
          <p className="mt-4 text-sm leading-relaxed text-tasami-gray">
            {t("resetSubtitle")}
          </p>
        </header>

        {!token ? (
          <div className="card-premium space-y-4 p-6 text-center">
            <p className="text-sm text-tasami-purple">
              {t("resetInvalidToken")}
            </p>
            <Link
              href="/forgot-password"
              className="btn-secondary inline-flex text-sm"
            >
              {t("forgotCta")}
            </Link>
          </div>
        ) : done ? (
          <div className="card-premium space-y-4 p-6 text-center">
            <p className="text-sm leading-relaxed text-tasami-gray">
              {t("resetSuccess")}
            </p>
            <Link href="/login" className="btn-primary inline-flex text-sm">
              {t("loginCta")}
            </Link>
          </div>
        ) : (
          <form onSubmit={submit} className="card-premium space-y-3.5 p-6">
            <label className="block text-xs font-medium text-tasami-purple">
              {t("password")}
              <input
                required
                type="password"
                dir="ltr"
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-soft mt-1.5"
                placeholder={t("passwordPh")}
              />
            </label>

            <label className="block text-xs font-medium text-tasami-purple">
              {t("resetConfirmPassword")}
              <input
                required
                type="password"
                dir="ltr"
                minLength={6}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="input-soft mt-1.5"
                placeholder={t("passwordPh")}
              />
            </label>

            {error && <p className="text-sm text-tasami-purple">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-secondary w-full text-sm disabled:opacity-50"
            >
              {loading ? t("loading") : t("resetCta")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
