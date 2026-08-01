import { NextRequest, NextResponse } from "next/server";
import { CampaignStatus, CampaignType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PatchBody = {
  name?: string;
  type?: CampaignType;
  target_segment?: string | null;
  message_template?: string;
  scheduled_at?: string | null;
  status?: CampaignStatus;
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

  if (body.type && !(body.type in CampaignType)) {
    return NextResponse.json({ error: "Invalid campaign type" }, { status: 400 });
  }
  if (body.status && !(body.status in CampaignStatus)) {
    return NextResponse.json({ error: "Invalid campaign status" }, { status: 400 });
  }

  try {
    const campaign = await prisma.campaign.update({
      where: { id: params.id },
      data: {
        name: body.name?.trim(),
        type: body.type,
        target_segment:
          body.target_segment === undefined
            ? undefined
            : body.target_segment?.trim() || null,
        message_template: body.message_template?.trim(),
        scheduled_at:
          body.scheduled_at === undefined
            ? undefined
            : body.scheduled_at
              ? new Date(body.scheduled_at)
              : null,
        status: body.status,
      },
    });
    return NextResponse.json({ ok: true, campaign });
  } catch (err) {
    console.error("[admin/campaigns] update failed:", err);
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
    await prisma.campaign.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin/campaigns] delete failed:", err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
