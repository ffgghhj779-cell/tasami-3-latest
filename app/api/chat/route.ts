import { NextRequest, NextResponse } from "next/server";
import { Language, Sender, Channel } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatBody = {
  message?: string;
  locale?: string;
  customerId?: string | null;
  guestKey?: string | null;
  name?: string | null;
};

const LOCALE_TO_LANG: Record<string, Language> = {
  ar: Language.AR,
  en: Language.EN,
  ur: Language.UR,
  hi: Language.HI,
};

function hermesUrl(): string {
  return (
    process.env.HERMES_WEBHOOK_URL?.trim() ||
    process.env.NEXT_PUBLIC_HERMES_WEBHOOK_URL?.trim() ||
    ""
  );
}

function extractReply(data: unknown, fallback: string): string {
  if (!data || typeof data !== "object") return fallback;
  const obj = data as Record<string, unknown>;
  const candidates = [obj.reply, obj.output, obj.message, obj.text, obj.response];
  for (const c of candidates) {
    if (typeof c === "string" && c.trim()) return c.trim();
  }
  // n8n sometimes wraps in array
  if (Array.isArray(data) && data[0]) return extractReply(data[0], fallback);
  return fallback;
}

async function resolveCustomer(input: {
  customerId?: string | null;
  guestKey?: string | null;
  locale: string;
  name?: string | null;
}) {
  const language = LOCALE_TO_LANG[input.locale] ?? Language.AR;
  const displayName =
    input.name?.trim() ||
    (language === Language.AR ? "زائر ويب" : "Web Guest");

  if (input.customerId) {
    const existing = await prisma.customer.findUnique({
      where: { id: input.customerId },
    });
    if (existing) {
      return prisma.customer.update({
        where: { id: existing.id },
        data: { last_interaction: new Date(), language },
      });
    }
  }

  // Guest phone is unique & stable across sessions via guestKey
  const key = (input.guestKey || `anon-${Date.now()}`).replace(/\s+/g, "");
  const phone = `webchat:${key}`.slice(0, 64);

  return prisma.customer.upsert({
    where: { phone },
    create: {
      name: displayName,
      phone,
      language,
      status: "LEAD",
      segment: "INDIVIDUAL",
      notes: "Created via Monjez web chat",
      last_interaction: new Date(),
    },
    update: {
      last_interaction: new Date(),
      language,
    },
  });
}

export async function POST(req: NextRequest) {
  let body: ChatBody;
  try {
    body = (await req.json()) as ChatBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const message = body.message?.trim();
  if (!message) {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  const locale = (body.locale || "ar").toLowerCase();
  const fallbackReply =
    locale === "ar"
      ? "شكراً لتواصلك. سيتابع فريق تسامي طلبك قريباً. يمكنك أيضاً التواصل عبر واتساب للرد الفوري."
      : "Thanks for reaching out. The Tasami team will follow up soon. You can also use WhatsApp for a faster reply.";

  let customerId: string | null = body.customerId ?? null;
  let dbAvailable = true;

  // —— Persist customer + user message ——
  try {
    const customer = await resolveCustomer({
      customerId: body.customerId,
      guestKey: body.guestKey,
      locale,
      name: body.name,
    });
    customerId = customer.id;

    await prisma.conversation.create({
      data: {
        customer_id: customer.id,
        channel: Channel.WEB_CHAT,
        message,
        sender: Sender.CUSTOMER,
        intent: "monjez_chat",
      },
    });
  } catch (err) {
    dbAvailable = false;
    console.error("[chat] Prisma persist (user) failed:", err);
  }

  // —— Forward to n8n / Hermes ——
  let reply = fallbackReply;
  let hermesOk = false;

  const webhook = hermesUrl();
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          locale,
          customerId,
          source: "monjez_widget",
          channel: "WEB_CHAT",
          timestamp: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        const raw = await res.text();
        let parsed: unknown = null;
        try {
          parsed = raw ? JSON.parse(raw) : null;
        } catch {
          if (raw.trim()) reply = raw.trim();
        }
        if (parsed !== null) reply = extractReply(parsed, reply);
        hermesOk = true;
      } else {
        console.error("[chat] Hermes webhook status:", res.status);
      }
    } catch (err) {
      console.error("[chat] Hermes webhook error:", err);
    }
  }

  // —— Persist bot reply ——
  if (customerId && dbAvailable) {
    try {
      await prisma.conversation.create({
        data: {
          customer_id: customerId,
          channel: Channel.WEB_CHAT,
          message: reply,
          sender: Sender.BOT,
          intent: hermesOk ? "hermes_reply" : "fallback_reply",
        },
      });

      await prisma.customer.update({
        where: { id: customerId },
        data: { last_interaction: new Date() },
      });
    } catch (err) {
      console.error("[chat] Prisma persist (bot) failed:", err);
    }
  }

  return NextResponse.json({
    reply,
    customerId,
    hermesOk,
  });
}
