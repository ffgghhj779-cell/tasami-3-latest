import { NextRequest, NextResponse } from "next/server";
import { CampaignStatus, CampaignType, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** List campaigns — admin only */
export async function GET() {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const campaigns = await prisma.campaign.findMany({
      take: 200,
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json({ campaigns });
  } catch (err) {
    console.error("[admin/campaigns] list failed:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

type CreateBody = {
  name?: string;
  type?: CampaignType;
  target_segment?: string;
  message_template?: string;
  scheduled_at?: string;
  status?: CampaignStatus;
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

  const name = body.name?.trim();
  const messageTemplate = body.message_template?.trim();
  const type = body.type;

  if (!name || !messageTemplate || !type) {
    return NextResponse.json(
      { error: "name, type, and message_template are required" },
      { status: 400 }
    );
  }

  if (!(type in CampaignType)) {
    return NextResponse.json({ error: "Invalid campaign type" }, { status: 400 });
  }

  if (body.status && !(body.status in CampaignStatus)) {
    return NextResponse.json({ error: "Invalid campaign status" }, { status: 400 });
  }

  try {
    const campaign = await prisma.campaign.create({
      data: {
        name,
        type,
        target_segment: body.target_segment?.trim() || null,
        message_template: messageTemplate,
        scheduled_at: body.scheduled_at ? new Date(body.scheduled_at) : null,
        status: body.status || CampaignStatus.DRAFT,
      },
    });
    return NextResponse.json({ ok: true, campaign });
  } catch (err) {
    console.error("[admin/campaigns] create failed:", err);
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      (err.code === "P2021" || err.code === "P2010")
    ) {
      return NextResponse.json({ error: "Database not ready" }, { status: 503 });
    }
    return NextResponse.json({ error: "Could not create campaign" }, { status: 500 });
  }
}
