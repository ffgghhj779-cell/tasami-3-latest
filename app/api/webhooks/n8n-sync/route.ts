import { NextRequest, NextResponse } from "next/server";
import { Channel, CustomerStatus, Sender } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SyncBody = {
  type?: string;
  secret?: string;
  phone?: string;
  name?: string;
  customerMessage?: string;
  botReply?: string;
  agent?: string;
  routeSource?: string;
  channel?: string;
};

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("966")) return digits;
  if (digits.startsWith("0")) return `966${digits.slice(1)}`;
  if (digits.length === 9 && digits.startsWith("5")) return `966${digits}`;
  return digits;
}

/** Ingest WhatsApp conversation turns from n8n (fire-and-forget sync). */
export async function POST(req: NextRequest) {
  const expectedSecret = process.env.N8N_SYNC_SECRET?.trim();
  if (!expectedSecret) {
    return NextResponse.json({ error: "Sync not configured" }, { status: 503 });
  }

  let body: SyncBody;
  try {
    body = (await req.json()) as SyncBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.secret !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const phoneRaw = body.phone?.trim();
  if (!phoneRaw) {
    return NextResponse.json({ error: "phone required" }, { status: 400 });
  }

  const phone = normalizePhone(phoneRaw);
  const name = body.name?.trim() || "عميل واتساب";
  const customerMsg = body.customerMessage?.trim();
  const botReply = body.botReply?.trim();

  try {
    let customer = await prisma.customer.findUnique({ where: { phone } });
    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name,
          phone,
          status: CustomerStatus.ACTIVE,
          notes: body.agent ? `WhatsApp agent: ${body.agent}` : undefined,
        },
      });
    } else if (name && name !== "عميل واتساب" && customer.name === "عميل واتساب") {
      await prisma.customer.update({ where: { id: customer.id }, data: { name } });
    }

    const rows: { message: string; sender: Sender; intent?: string }[] = [];
    if (customerMsg) {
      rows.push({ message: customerMsg, sender: Sender.CUSTOMER, intent: body.routeSource || undefined });
    }
    if (botReply) {
      rows.push({
        message: botReply,
        sender: Sender.BOT,
        intent: body.agent ? `agent:${body.agent}` : undefined,
      });
    }

    if (rows.length) {
      await prisma.$transaction([
        ...rows.map((row) =>
          prisma.conversation.create({
            data: {
              customer_id: customer!.id,
              channel: Channel.WHATSAPP,
              message: row.message,
              sender: row.sender,
              intent: row.intent,
            },
          })
        ),
        prisma.customer.update({
          where: { id: customer.id },
          data: { last_interaction: new Date() },
        }),
      ]);
    }

    return NextResponse.json({ ok: true, customerId: customer.id, synced: rows.length });
  } catch (err) {
    console.error("[n8n-sync] failed:", err);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
