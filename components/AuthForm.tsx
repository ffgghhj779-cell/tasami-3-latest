"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, useRouter } from "@/navigation";
import BrandLogo from "@/components/BrandLogo";

type Mode = "login" | "register";

export default function AuthForm({ mode }: { mode: Mode }) {
  const t = useTranslations("auth");
  const locale = useLocale();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(
        mode === "login" ? "/api/auth/login" : "/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            locale,
          }),
        }
      );
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        const code = data?.error as string | undefined;
        if (code === "Phone already registered") setError(t("phoneTaken"));
        else if (code === "Email already registered") setError(t("emailTaken"));
        else if (code === "Invalid credentials") setError(t("invalidCreds"));
        else if (code === "Too many requests") setError(t("tooMany"));
        else if (code === "Database not ready") setError(t("dbNotReady"));
        else setError(t("error"));
        return;
      }
      router.push(data?.user?.role === "ADMIN" ? "/admin" : "/my-requests");
      router.refresh();
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-md flex-col px-5 py-14 sm:px-8 lg:py-20">
        <Link href="/" className="mb-8 inline-flex self-center" aria-label={t("backHome")}>
          <BrandLogo lockupSize="md" priority wordmark="تَسَامِي" />
        </Link>

        <header className="mb-8">
          <h1 className="font-display text-2xl text-tasami-dark sm:text-3xl">
            {mode === "login" ? t("loginTitle") : t("registerTitle")}
          </h1>
          <span className="highlight-line" />
          <p className="mt-4 text-sm leading-relaxed text-tasami-gray">
            {mode === "login" ? t("loginSubtitle") : t("registerSubtitle")}
          </p>
        </header>

        <form onSubmit={submit} className="card-premium space-y-3.5 p-6">
          {mode === "register" && (
            <label className="block text-xs font-medium text-tasami-dark">
              {t("name")}
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="input-soft mt-1.5"
                placeholder={t("namePh")}
              />
            </label>
          )}

          <label className="block text-xs font-medium text-tasami-dark">
            {t("phone")}
            <input
              required
              type="tel"
              dir="ltr"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="input-soft mt-1.5"
              placeholder="05xxxxxxxx"
            />
          </label>

          {mode === "register" && (
            <label className="block text-xs font-medium text-tasami-dark">
              {t("email")}
              <input
                type="email"
                dir="ltr"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="input-soft mt-1.5"
                placeholder="optional@email.com"
              />
            </label>
          )}

          <label className="block text-xs font-medium text-tasami-dark">
            {t("password")}
            <input
              required
              type="password"
              dir="ltr"
              minLength={6}
              value={form.password}
              onChange={(e) =>
                setForm((f) => ({ ...f, password: e.target.value }))
              }
              className="input-soft mt-1.5"
              placeholder={t("passwordPh")}
            />
          </label>

          {error && <p className="text-sm text-tasami-dark">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full text-sm disabled:opacity-50"
          >
            {loading
              ? t("loading")
              : mode === "login"
                ? t("loginCta")
                : t("registerCta")}
          </button>

          {mode === "login" && (
            <Link
              href="/forgot-password"
              className="block text-center text-xs font-medium text-tasami-gray hover:text-tasami-pink"
            >
              {t("forgotLink")}
            </Link>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-tasami-gray">
          {mode === "login" ? t("noAccount") : t("hasAccount")}{" "}
          <Link
            href={mode === "login" ? "/register" : "/login"}
            className="font-medium text-tasami-purple hover:underline"
          >
            {mode === "login" ? t("registerLink") : t("loginLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}
