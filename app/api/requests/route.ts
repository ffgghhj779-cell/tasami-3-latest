import { NextRequest, NextResponse } from "next/server";
import {
  Channel,
  Language,
  Sender,
  ServiceCategory,
  TaskStatus,
} from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getSession, normalizePhone } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 30;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const row = hits.get(ip);
  if (!row || now > row.reset) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (row.count >= RATE_MAX) return false;
  row.count += 1;
  return true;
}

const LOCALE_TO_LANG: Record<string, Language> = {
  ar: Language.AR,
  en: Language.EN,
  ur: Language.UR,
  hi: Language.HI,
};

type CreateBody = {
  name?: string;
  phone?: string;
  email?: string;
  notes?: string;
  fields?: Record<string, string>;
  locale?: string;
  serviceSlug?: string;
  serviceNameAr?: string;
  serviceNameEn?: string;
  category?: "government" | "tech" | "sector";
  subcategory?: string;
};

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: CreateBody;
  try {
    body = (await req.json()) as CreateBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const phone = body.phone ? normalizePhone(body.phone) : "";
  const serviceSlug = body.serviceSlug?.trim();
  const serviceNameAr = body.serviceNameAr?.trim();
  const serviceNameEn = body.serviceNameEn?.trim() || serviceNameAr;

  if (!name || !phone || !serviceSlug || !serviceNameAr) {
    return NextResponse.json(
      { error: "name, phone, serviceSlug, and serviceNameAr are required" },
      { status: 400 }
    );
  }

  if (phone.length < 8) {
    return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
  }

  const locale = (body.locale || "ar").toLowerCase();
  const language = LOCALE_TO_LANG[locale] ?? Language.AR;
  const categoryMap: Record<string, ServiceCategory> = {
    government: ServiceCategory.GOVERNMENT,
    tech: ServiceCategory.TECH,
    sector: ServiceCategory.SECTOR,
  };
  const category =
    categoryMap[body.category || "government"] ?? ServiceCategory.GOVERNMENT;

  try {
    const session = await getSession();

    const customer = await prisma.customer.upsert({
      where: { phone },
      create: {
        name,
        phone,
        email: body.email?.trim() || null,
        language,
        status: "LEAD",
        notes: "Created via website service request",
        last_interaction: new Date(),
      },
      update: {
        name,
        email: body.email?.trim() || undefined,
        language,
        last_interaction: new Date(),
      },
    });

    if (session?.id) {
      await prisma.user.updateMany({
        where: { id: session.id, customer_id: null },
        data: { customer_id: customer.id },
      });
    }

    const service = await prisma.service.upsert({
      where: { slug: serviceSlug },
      create: {
        name_ar: serviceNameAr,
        name_en: serviceNameEn || serviceNameAr,
        category,
        subcategory: body.subcategory || null,
        description: serviceNameAr,
        slug: serviceSlug,
      },
      update: {
        name_ar: serviceNameAr,
        name_en: serviceNameEn || serviceNameAr,
        subcategory: body.subcategory || undefined,
      },
    });

    const fieldsBlock =
      body.fields && Object.keys(body.fields).length > 0
        ? `\n---\nتفاصيل النموذج:\n${JSON.stringify(body.fields, null, 2)}`
        : "";

    const notesParts = [
      `طلب خدمة من الموقع`,
      `الخدمة: ${serviceNameAr}`,
      body.subcategory ? `التصنيف: ${body.subcategory}` : null,
      body.notes?.trim() ? `\n${body.notes.trim()}` : null,
      fieldsBlock || null,
    ].filter(Boolean);

    const task = await prisma.task.create({
      data: {
        customer_id: customer.id,
        service_id: service.id,
        status: TaskStatus.PENDING,
        assigned_to: "secretary",
        notes: notesParts.join("\n"),
      },
      include: {
        service: true,
        customer: { select: { id: true, name: true, phone: true } },
      },
    });

    await prisma.conversation.create({
      data: {
        customer_id: customer.id,
        channel: Channel.SITE,
        message: `طلب خدمة جديد: ${serviceNameAr}${
          body.notes?.trim() ? ` — ${body.notes.trim().slice(0, 200)}` : ""
        }`,
        sender: Sender.CUSTOMER,
        intent: "service_request",
      },
    });

    return NextResponse.json({
      ok: true,
      requestId: task.id,
      customerId: customer.id,
      status: task.status,
      service: {
        slug: service.slug,
        name_ar: service.name_ar,
        name_en: service.name_en,
      },
    });
  } catch (err) {
    console.error("[requests] create failed:", err);
    return NextResponse.json(
      { error: "Could not create request. Check database connection." },
      { status: 500 }
    );
  }
}

/** List requests — admin (all) or client (by phone) */
export async function GET(req: NextRequest) {
  const phone = req.nextUrl.searchParams.get("phone");
  const admin = req.nextUrl.searchParams.get("admin") === "1";

  try {
    if (admin) {
      const tasks = await prisma.task.findMany({
        take: 200,
        orderBy: { created_at: "desc" },
        include: {
          customer: {
            select: { id: true, name: true, phone: true, language: true },
          },
          service: {
            select: { id: true, name_ar: true, name_en: true, slug: true, category: true },
          },
        },
      });
      return NextResponse.json({ requests: tasks });
    }

    if (!phone) {
      return NextResponse.json(
        { error: "phone or admin=1 required" },
        { status: 400 }
      );
    }

    const normalized = normalizePhone(phone);
    const customer = await prisma.customer.findUnique({
      where: { phone: normalized },
    });
    if (!customer) {
      return NextResponse.json({ requests: [] });
    }

    const tasks = await prisma.task.findMany({
      where: { customer_id: customer.id },
      orderBy: { created_at: "desc" },
      include: {
        service: {
          select: { name_ar: true, name_en: true, slug: true, category: true },
        },
      },
    });

    return NextResponse.json({
      customer: { id: customer.id, name: customer.name, phone: customer.phone },
      requests: tasks,
    });
  } catch (err) {
    console.error("[requests] list failed:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

type PatchBody = {
  requestId?: string;
  status?: TaskStatus;
  assigned_to?: string;
  notes?: string;
};

export async function PATCH(req: NextRequest) {
  let body: PatchBody;
  try {
    body = (await req.json()) as PatchBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.requestId || !body.status) {
    return NextResponse.json(
      { error: "requestId and status are required" },
      { status: 400 }
    );
  }

  try {
    const task = await prisma.task.update({
      where: { id: body.requestId },
      data: {
        status: body.status,
        assigned_to: body.assigned_to,
        notes: body.notes,
      },
    });
    return NextResponse.json({ ok: true, request: task });
  } catch (err) {
    console.error("[requests] patch failed:", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
