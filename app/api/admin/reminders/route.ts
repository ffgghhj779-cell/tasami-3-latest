import { NextRequest, NextResponse } from "next/server";
import { Prisma, ReminderType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { normalizePhone, requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** List reminders — admin only, includes customer name/phone */
export async function GET() {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const reminders = await prisma.reminder.findMany({
      take: 200,
      orderBy: [{ sent: "asc" }, { reminder_date: "asc" }],
      include: {
        customer: { select: { id: true, name: true, phone: true } },
      },
    });
    return NextResponse.json({ reminders });
  } catch (err) {
    console.error("[admin/reminders] list failed:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

type CreateBody = {
  customerId?: string;
  phone?: string;
  type?: ReminderType;
  reminder_date?: string;
  sent?: boolean;
};

export async function POST(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: CreateBody;
  try {
    body = (await req.json()) as CreateBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const type = body.type;
  if (!type || !(type in ReminderType)) {
    return NextResponse.json({ error: "Valid type is required" }, { status: 400 });
  }
  if (!body.reminder_date) {
    return NextResponse.json({ error: "reminder_date is required" }, { status: 400 });
  }
  if (!body.customerId && !body.phone) {
    return NextResponse.json(
      { error: "customerId or phone is required" },
      { status: 400 }
    );
  }

  try {
    let customerId = body.customerId?.trim();

    if (!customerId && body.phone) {
      const phone = normalizePhone(body.phone);
      const customer = await prisma.customer.findUnique({ where: { phone } });
      if (!customer) {
        return NextResponse.json(
          { error: "No customer found with that phone number" },
          { status: 404 }
        );
      }
      customerId = customer.id;
    }

    const reminder = await prisma.reminder.create({
      data: {
        customer_id: customerId!,
        type,
        reminder_date: new Date(body.reminder_date),
        sent: body.sent ?? false,
      },
      include: {
        customer: { select: { id: true, name: true, phone: true } },
      },
    });
    return NextResponse.json({ ok: true, reminder });
  } catch (err) {
    console.error("[admin/reminders] create failed:", err);
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2003") {
        return NextResponse.json({ error: "Customer not found" }, { status: 404 });
      }
      if (err.code === "P2021" || err.code === "P2010") {
        return NextResponse.json({ error: "Database not ready" }, { status: 503 });
      }
    }
    return NextResponse.json({ error: "Could not create reminder" }, { status: 500 });
  }
}
