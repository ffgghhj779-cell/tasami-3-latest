import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { SITE_URL } from "@/lib/seo";
import {
  REVIEW_INTENT,
  REVIEW_TAG,
  createInviteToken,
  parseReview,
  stateFromIntent,
  type ReviewState,
} from "@/lib/reviews";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LOCALES = new Set(["ar", "en", "ur", "hi"]);

async function findReview(id: unknown) {
  if (typeof id !== "string" || !id) return null;
  return prisma.conversation.findFirst({
    where: { id, intent: { startsWith: "review_" } },
    select: { id: true },
  });
}

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const rows = await prisma.conversation.findMany({
      where: { intent: { startsWith: "review_" } },
      orderBy: { created_at: "desc" },
      take: 300,
      select: {
        id: true,
        intent: true,
        message: true,
        created_at: true,
        customer: { select: { id: true, name: true, phone: true } },
      },
    });
    const reviews = rows.flatMap((r) => {
      const p = parseReview(r.message);
      const state = stateFromIntent(r.intent);
      if (!p || !state) return [];
      return [
        {
          id: r.id,
          state,
          rating: p.rating,
          text: p.text,
          name: p.name,
          city: p.city,
          service: p.service ?? null,
          source: p.ref.startsWith("task:") ? ("order" as const) : ("invite" as const),
          orderNo: p.ref.startsWith("task:") ? p.ref.slice(-8).toUpperCase() : null,
          createdAt: r.created_at.toISOString(),
          customer: p.ref.startsWith("task:") ? r.customer : null,
        },
      ];
    });
    return NextResponse.json({ reviews });
  } catch (err) {
    console.error("[admin/reviews] list failed:", err);
    return NextResponse.json({ error: "Database unavailable" }, { status: 500 });
  }
}

/** Create a single-use invite link the team can send to a customer on WhatsApp. */
export async function POST(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await req.json().catch(() => ({}))) as { locale?: string };
  const locale = body.locale && LOCALES.has(body.locale) ? body.locale : "ar";
  const { token, expiresAt } = createInviteToken();
  return NextResponse.json({
    url: `${SITE_URL}/${locale}/review?t=${token}`,
    expiresAt: expiresAt.toISOString(),
  });
}

export async function PATCH(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await req.json().catch(() => ({}))) as { id?: string; state?: ReviewState };
  const state = body.state;
  if (!state || !(state in REVIEW_INTENT)) {
    return NextResponse.json({ error: "Invalid state" }, { status: 400 });
  }
  try {
    const row = await findReview(body.id);
    if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
    await prisma.conversation.update({
      where: { id: row.id },
      data: { intent: REVIEW_INTENT[state] },
    });
    revalidateTag(REVIEW_TAG);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin/reviews] update failed:", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const row = await findReview(req.nextUrl.searchParams.get("id"));
    if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
    await prisma.conversation.delete({ where: { id: row.id } });
    revalidateTag(REVIEW_TAG);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin/reviews] delete failed:", err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
