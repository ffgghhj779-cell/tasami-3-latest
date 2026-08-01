import { NextRequest, NextResponse } from "next/server";
import { CustomerSegment, CustomerStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PatchBody = {
  segment?: CustomerSegment;
  status?: CustomerStatus;
  notes?: string | null;
  email?: string | null;
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

  if (body.segment && !(body.segment in CustomerSegment)) {
    return NextResponse.json({ error: "Invalid segment" }, { status: 400 });
  }
  if (body.status && !(body.status in CustomerStatus)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  try {
    const customer = await prisma.customer.update({
      where: { id: params.id },
      data: {
        segment: body.segment,
        status: body.status,
        notes: body.notes === undefined ? undefined : body.notes?.trim() || null,
        email: body.email === undefined ? undefined : body.email?.trim() || null,
      },
    });
    return NextResponse.json({ ok: true, customer });
  } catch (err) {
    console.error("[admin/customers] update failed:", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
