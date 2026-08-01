import { NextRequest, NextResponse } from "next/server";
import { ReminderType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PatchBody = {
  sent?: boolean;
  reminder_date?: string;
  type?: ReminderType;
};

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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

  if (body.type && !(body.type in ReminderType)) {
    return NextResponse.json({ error: "Invalid reminder type" }, { status: 400 });
  }

  try {
    const reminder = await prisma.reminder.update({
      where: { id: params.id },
      data: {
        sent: body.sent,
        reminder_date: body.reminder_date ? new Date(body.reminder_date) : undefined,
        type: body.type,
      },
      include: {
        customer: { select: { id: true, name: true, phone: true } },
      },
    });
    return NextResponse.json({ ok: true, reminder });
  } catch (err) {
    console.error("[admin/reminders] update failed:", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.reminder.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin/reminders] delete failed:", err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
