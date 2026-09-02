import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { sendWhatsAppViaN8n } from "@/lib/whatsapp-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = { phone?: string; message?: string };

export async function POST(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const phone = body.phone?.replace(/\D/g, "").trim();
  const message = body.message?.trim();
  if (!phone || !message) {
    return NextResponse.json({ error: "phone and message required" }, { status: 400 });
  }

  const result = await sendWhatsAppViaN8n(phone, message);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 502 });
  }
  return NextResponse.json({ ok: true, ...result.data });
}
