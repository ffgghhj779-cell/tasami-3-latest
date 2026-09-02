import { prisma } from "@/lib/prisma";

export type WhatsAppOrderRow = {
  id: number;
  phone: string;
  customer_name: string | null;
  customer_message: string | null;
  sara_reply: string | null;
  status: string;
  source: string | null;
  created_at: Date;
};

export type BotPauseRow = {
  phone: string;
  pause_until: Date;
  reason: string | null;
};

export type WhatsAppStats = {
  ok: boolean;
  ordersToday: number;
  ordersWeek: number;
  ordersTotal: number;
  botPaused: number;
};

export async function getWhatsAppStats(): Promise<WhatsAppStats> {
  try {
    const [today, week, total, paused] = await Promise.all([
      prisma.$queryRaw<[{ count: bigint }]>`
        SELECT COUNT(*)::bigint AS count FROM tasami_orders
        WHERE created_at >= CURRENT_DATE`,
      prisma.$queryRaw<[{ count: bigint }]>`
        SELECT COUNT(*)::bigint AS count FROM tasami_orders
        WHERE created_at >= NOW() - INTERVAL '7 days'`,
      prisma.$queryRaw<[{ count: bigint }]>`
        SELECT COUNT(*)::bigint AS count FROM tasami_orders`,
      prisma.$queryRaw<[{ count: bigint }]>`
        SELECT COUNT(*)::bigint AS count FROM tasami_bot_pause
        WHERE pause_until > NOW()`,
    ]);
    return {
      ok: true,
      ordersToday: Number(today[0]?.count ?? 0),
      ordersWeek: Number(week[0]?.count ?? 0),
      ordersTotal: Number(total[0]?.count ?? 0),
      botPaused: Number(paused[0]?.count ?? 0),
    };
  } catch {
    return {
      ok: false,
      ordersToday: 0,
      ordersWeek: 0,
      ordersTotal: 0,
      botPaused: 0,
    };
  }
}

export async function listWhatsAppOrders(limit = 40): Promise<WhatsAppOrderRow[]> {
  return prisma.$queryRaw<WhatsAppOrderRow[]>`
    SELECT id, phone, customer_name, customer_message, sara_reply, status, source, created_at
    FROM tasami_orders
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
}

export async function listBotPauses(limit = 20): Promise<BotPauseRow[]> {
  return prisma.$queryRaw<BotPauseRow[]>`
    SELECT phone, pause_until, reason
    FROM tasami_bot_pause
    WHERE pause_until > NOW()
    ORDER BY pause_until DESC
    LIMIT ${limit}
  `;
}

export async function updateOrderStatus(id: number, status: string): Promise<boolean> {
  const allowed = ["received", "processing", "shipped", "delivered", "cancelled"];
  if (!allowed.includes(status)) return false;
  try {
    await prisma.$executeRaw`
      UPDATE tasami_orders SET status = ${status} WHERE id = ${id}
    `;
    return true;
  } catch {
    return false;
  }
}

export function formatSaPhone(phone: string): string {
  const d = phone.replace(/\D/g, "");
  if (d.startsWith("966")) return `+${d}`;
  if (d.startsWith("0")) return `+966${d.slice(1)}`;
  if (d.startsWith("5")) return `+966${d}`;
  return `+${d}`;
}

export async function sendWhatsAppViaN8n(phone: string, message: string) {
  const secret = process.env.SUPERVISOR_WEBHOOK_SECRET?.trim();
  const url =
    process.env.N8N_SUPERVISOR_WEBHOOK_URL?.trim() ||
    "https://n8n.esteemmediaa.com/webhook/tasami-supervisor-reply";
  if (!secret) {
    return { ok: false as const, error: "SUPERVISOR_WEBHOOK_SECRET not configured" };
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      phone: phone.replace(/\D/g, ""),
      message,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    return { ok: false as const, error: text.slice(0, 200) };
  }
  try {
    return { ok: true as const, data: JSON.parse(text) };
  } catch {
    return { ok: true as const, data: { raw: text } };
  }
}
