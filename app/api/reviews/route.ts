import { NextRequest, NextResponse } from "next/server";
import { Channel, Sender, TaskStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { clientIp, rateLimitAsync } from "@/lib/rate-limit";
import { ORDER_NO_LENGTH, normalizeOrderNo } from "@/lib/orders";
import { notifyNewReview } from "@/lib/notify";
import {
  INVITE_CUSTOMER_PHONE,
  REVIEW_CITY_MAX,
  REVIEW_INTENT,
  REVIEW_NAME_MAX,
  REVIEW_TEXT_MAX,
  REVIEW_TEXT_MIN,
  cleanText,
  reviewExists,
  sentimentForRating,
  verifyInviteToken,
  type ReviewPayload,
} from "@/lib/reviews";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  order?: string;
  invite?: string;
  rating?: number;
  text?: string;
  name?: string;
  city?: string;
  /** Honeypot — real users never fill it. */
  website?: string;
};

const DONE: TaskStatus[] = [TaskStatus.DONE, TaskStatus.COMPLETED];

/** Customer submits a review for a completed order or through a team invite link. */
export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!(await rateLimitAsync(`review:${ip}`, { windowMs: 60 * 60_000, max: 6 }))) {
    return NextResponse.json({ error: "too_many" }, { status: 429 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const rating = Number(body.rating);
  const text = cleanText(body.text, REVIEW_TEXT_MAX);
  const name = cleanText(body.name, REVIEW_NAME_MAX);
  const city = cleanText(body.city, REVIEW_CITY_MAX);

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "rating" }, { status: 400 });
  }
  if (text.length < REVIEW_TEXT_MIN) {
    return NextResponse.json({ error: "text" }, { status: 400 });
  }

  try {
    let ref: string;
    let customerId: string;
    let service: string | undefined;
    let orderLabel: string;

    if (body.order) {
      const code = normalizeOrderNo(body.order);
      if (code.length !== ORDER_NO_LENGTH) {
        return NextResponse.json({ error: "not_found" }, { status: 404 });
      }
      const task = await prisma.task.findFirst({
        where: { id: { endsWith: code } },
        select: {
          id: true,
          status: true,
          customer_id: true,
          service: { select: { name_ar: true } },
        },
      });
      if (!task) return NextResponse.json({ error: "not_found" }, { status: 404 });
      if (!DONE.includes(task.status)) {
        return NextResponse.json({ error: "not_done" }, { status: 409 });
      }
      ref = `task:${task.id}`;
      customerId = task.customer_id;
      service = task.service?.name_ar;
      orderLabel = `#${code}`;
    } else if (body.invite) {
      const check = verifyInviteToken(body.invite);
      if (!check.ok) {
        return NextResponse.json({ error: check.reason }, { status: 400 });
      }
      ref = `invite:${check.nonce}`;
      const owner = await prisma.customer.upsert({
        where: { phone: INVITE_CUSTOMER_PHONE },
        create: {
          phone: INVITE_CUSTOMER_PHONE,
          name: "تقييمات عبر رابط الدعوة",
          notes: "حساب داخلي تُربط به التقييمات المرسلة عبر روابط الدعوة.",
        },
        update: {},
        select: { id: true },
      });
      customerId = owner.id;
      orderLabel = "رابط دعوة";
    } else {
      return NextResponse.json({ error: "invalid" }, { status: 400 });
    }

    if (await reviewExists(ref)) {
      return NextResponse.json({ error: "already" }, { status: 409 });
    }

    const payload: ReviewPayload = { v: 1, ref, rating, text, name, city, service };
    await prisma.conversation.create({
      data: {
        customer_id: customerId,
        channel: Channel.SITE,
        sender: Sender.CUSTOMER,
        intent: REVIEW_INTENT.pending,
        sentiment: sentimentForRating(rating),
        message: JSON.stringify(payload),
      },
    });

    await notifyNewReview({ rating, text, name, orderLabel }).catch(() => undefined);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[reviews] submit failed:", err);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
