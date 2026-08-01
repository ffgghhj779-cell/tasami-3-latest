import { NextRequest, NextResponse } from "next/server";
import { Channel, Sender } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ReplyBody = {
  customerId?: string;
  message?: string;
};

/** Secretary reply — creates a Conversation entry from the admin panel */
export async function POST(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: ReplyBody;
  try {
    body = (await req.json()) as ReplyBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const customerId = body.customerId?.trim();
  const message = body.message?.trim();

  if (!customerId || !message) {
    return NextResponse.json(
      { error: "customerId and message are required" },
      { status: 400 }
    );
  }

  try {
    const customer = await prisma.customer.findUnique({
      where: { id: customerId },
    });
    if (!customer) {
      return NextResponse.json({ error: "Customer not found" }, { status: 404 });
    }

    const conversation = await prisma.conversation.create({
      data: {
        customer_id: customerId,
        channel: Channel.SITE,
        message,
        sender: Sender.SECRETARY,
      },
    });

    await prisma.customer.update({
      where: { id: customerId },
      data: { last_interaction: new Date() },
    });

    return NextResponse.json({ ok: true, conversation });
  } catch (err) {
    console.error("[admin/conversations] reply failed:", err);
    return NextResponse.json({ error: "Could not send reply" }, { status: 500 });
  }
}
