import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { clientIp, rateLimitAsync } from "@/lib/rate-limit";
import { ORDER_NO_LENGTH, normalizeOrderNo, orderNoFromId, trackStepFor } from "@/lib/orders";
import { reviewExists } from "@/lib/reviews";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Public order tracking by order number — returns status only, no personal data. */
export async function GET(req: NextRequest) {
  const ip = clientIp(req);
  if (!(await rateLimitAsync(`track:${ip}`, { max: 20 }))) {
    return NextResponse.json({ error: "too_many" }, { status: 429 });
  }

  const code = normalizeOrderNo(req.nextUrl.searchParams.get("order") || "");
  if (code.length !== ORDER_NO_LENGTH) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  try {
    const task = await prisma.task.findFirst({
      where: { id: { endsWith: code } },
      select: {
        id: true,
        status: true,
        created_at: true,
        updated_at: true,
        service: { select: { name_ar: true, name_en: true } },
      },
    });
    if (!task) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }
    const step = trackStepFor(task.status);
    const reviewed = step === "done" ? await reviewExists(`task:${task.id}`) : false;
    return NextResponse.json({
      orderNo: orderNoFromId(task.id),
      step,
      createdAt: task.created_at,
      updatedAt: task.updated_at,
      service: task.service,
      reviewed,
    });
  } catch (err) {
    console.error("[track] lookup failed:", err);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
