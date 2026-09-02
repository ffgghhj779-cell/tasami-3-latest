import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  listWhatsAppOrders,
  listBotPauses,
  updateOrderStatus,
} from "@/lib/whatsapp-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const [orders, pauses] = await Promise.all([
      listWhatsAppOrders(50),
      listBotPauses(20),
    ]);
    return NextResponse.json({
      orders: orders.map((o) => ({
        ...o,
        created_at: o.created_at.toISOString(),
      })),
      pauses: pauses.map((p) => ({
        ...p,
        pause_until: p.pause_until.toISOString(),
      })),
    });
  } catch (err) {
    console.error("[admin/whatsapp/orders] GET", err);
    return NextResponse.json({ error: "Database error", orders: [], pauses: [] });
  }
}

type PatchBody = { id?: number; status?: string };

export async function PATCH(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: PatchBody;
  try {
    body = (await req.json()) as PatchBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const id = body.id;
  const status = body.status?.trim();
  if (!id || !status) {
    return NextResponse.json({ error: "id and status required" }, { status: 400 });
  }
  const ok = await updateOrderStatus(id, status);
  if (!ok) {
    return NextResponse.json({ error: "Update failed" }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
