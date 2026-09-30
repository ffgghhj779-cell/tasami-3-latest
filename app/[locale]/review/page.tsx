import { getTranslations, setRequestLocale } from "next-intl/server";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import ReviewForm from "@/components/ReviewForm";
import WaLink from "@/components/WaLink";
import { buildPageMetadata } from "@/lib/seo";
import { reviewExists, verifyInviteToken } from "@/lib/reviews";

export const dynamic = "force-dynamic";

type Props = {
  params: { locale: string };
  searchParams: { t?: string };
};

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "reviews.invite" });
  return buildPageMetadata({
    title: t("title"),
    path: "/review",
    locale: params.locale,
    index: false,
  });
}

export default async function ReviewInvitePage({ params, searchParams }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("reviews.invite");

  const token = typeof searchParams.t === "string" ? searchParams.t : "";
  let check: ReturnType<typeof verifyInviteToken> = { ok: false, reason: "invalid" };
  try {
    if (token) check = verifyInviteToken(token);
  } catch (err) {
    console.error("[review] invite verification unavailable:", err);
  }
  const already = check.ok ? await reviewExists(`invite:${check.nonce}`).catch(() => false) : false;

  return (
    <div className="min-h-screen bg-[#f6f9fc]">
      <div className="mx-auto max-w-xl px-5 py-14 sm:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b1a2a] px-3 py-1 text-xs font-bold text-white">
            <ShieldCheck weight="fill" className="h-4 w-4 text-[#c8a84b]" />
            {t("badge")}
          </span>
          <h1 className="mt-4 font-display text-2xl text-tasami-dark sm:text-3xl">{t("title")}</h1>
          <p className="mt-2 text-tasami-gray">{t("subtitle")}</p>
        </div>

        {check.ok ? (
          <div className="rounded-2xl bg-white p-1 shadow-[0_18px_50px_-30px_rgba(11,26,42,0.45)] sm:p-2">
            <ReviewForm invite={token} alreadyReviewed={already} />
          </div>
        ) : (
          <div role="alert" className="mt-8 rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-6 text-center">
            <p className="font-bold text-tasami-dark">
              {check.reason === "expired" ? t("expiredTitle") : t("invalidTitle")}
            </p>
            <p className="mt-2 text-sm text-tasami-gray">{t("invalidBody")}</p>
            <WaLink
              line="taqeeb"
              location="review_invite_invalid"
              className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-button bg-[#128C7E] px-6 font-bold text-white"
            >
              {t("contactWa")}
            </WaLink>
          </div>
        )}
      </div>
    </div>
  );
}
