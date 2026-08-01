import { NextRequest, NextResponse } from "next/server";
import {
  Channel,
  Language,
  Sender,
  ServiceCategory,
  TaskStatus,
} from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getSession, normalizePhone, requireAdmin } from "@/lib/auth";
import { clientIp, rateLimitAsync } from "@/lib/rate-limit";
import { notifyNewRequest, notifyRequestStatusChange } from "@/lib/notify";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LOCALE_TO_LANG: Record<string, Language> = {
  ar: Language.AR,
  en: Language.EN,
  ur: Language.UR,
  hi: Language.HI,
};

type AttachmentIn = {
  name?: string;
  mime?: string;
  size?: number;
  dataBase64?: string;
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
  attachments?: AttachmentIn[];
  priceFrom?: number;
};

const MAX_FILES = 3;
const MAX_FILE_BYTES = 450_000; // ~450KB decoded

function sanitizeAttachments(raw: AttachmentIn[] | undefined) {
  if (!raw?.length) return null;
  const out = [];
  for (const file of raw.slice(0, MAX_FILES)) {
    const name = String(file.name || "file").slice(0, 120);
    const mime = String(file.mime || "application/octet-stream").slice(0, 80);
    const dataBase64 = String(file.dataBase64 || "");
    const size = Number(file.size) || Math.floor((dataBase64.length * 3) / 4);
    if (!dataBase64 || size > MAX_FILE_BYTES) continue;
    if (!/^(image\/(jpeg|png|webp)|application\/pdf)$/.test(mime)) continue;
    out.push({ name, mime, size, dataBase64 });
  }
  return out.length ? out : null;
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!(await rateLimitAsync(`requests:${ip}`, { max: 30 }))) {
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

  const attachments = sanitizeAttachments(body.attachments);

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
        price_from: body.priceFrom ?? null,
      },
      update: {
        name_ar: serviceNameAr,
        name_en: serviceNameEn || serviceNameAr,
        subcategory: body.subcategory || undefined,
        price_from: body.priceFrom ?? undefined,
      },
    });

    const fieldsBlock =
      body.fields && Object.keys(body.fields).length > 0
        ? `\n---\nتفاصيل النموذج:\n${JSON.stringify(body.fields, null, 2)}`
        : "";

    const attachNote = attachments?.length
      ? `\nمرفقات: ${attachments.map((a) => a.name).join(", ")}`
      : "";

    const notesParts = [
      `طلب خدمة من الموقع`,
      `الخدمة: ${serviceNameAr}`,
      body.subcategory ? `التصنيف: ${body.subcategory}` : null,
      body.notes?.trim() ? `\n${body.notes.trim()}` : null,
      fieldsBlock || null,
      attachNote || null,
    ].filter(Boolean);

    const task = await prisma.task.create({
      data: {
        customer_id: customer.id,
        service_id: service.id,
        status: TaskStatus.PENDING,
        assigned_to: "secretary",
        notes: notesParts.join("\n"),
        attachments: attachments ?? undefined,
      },
      include: {
        service: true,
        customer: { select: { id: true, name: true, phone: true, email: true } },
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

    void notifyNewRequest({
      customerName: customer.name,
      customerPhone: customer.phone,
      customerEmail: customer.email,
      serviceName: serviceNameAr,
      requestId: task.id,
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

/** List requests — admin (all) or logged-in client (own phone only) */
export async function GET(req: NextRequest) {
  const phone = req.nextUrl.searchParams.get("phone");
  const admin = req.nextUrl.searchParams.get("admin") === "1";

  try {
    if (admin) {
      const session = await requireAdmin();
      if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const tasks = await prisma.task.findMany({
        take: 200,
        orderBy: { created_at: "desc" },
        include: {
          customer: {
            select: { id: true, name: true, phone: true, language: true, email: true },
          },
          service: {
            select: {
              id: true,
              name_ar: true,
              name_en: true,
              slug: true,
              category: true,
              price_from: true,
            },
          },
        },
      });
      return NextResponse.json({ requests: tasks });
    }

    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Login required" }, { status: 401 });
    }

    const requested = phone ? normalizePhone(phone) : session.phone;
    if (normalizePhone(requested) !== normalizePhone(session.phone)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const customer = await prisma.customer.findUnique({
      where: { phone: normalizePhone(session.phone) },
    });
    if (!customer) {
      return NextResponse.json({
        customer: {
          id: null,
          name: session.name,
          phone: session.phone,
        },
        requests: [],
      });
    }

    const tasks = await prisma.task.findMany({
      where: { customer_id: customer.id },
      orderBy: { created_at: "desc" },
      include: {
        service: {
          select: {
            name_ar: true,
            name_en: true,
            slug: true,
            category: true,
            price_from: true,
          },
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

  if (!body.requestId || !body.status) {
    return NextResponse.json(
      { error: "requestId and status are required" },
      { status: 400 }
    );
  }

  try {
    const prev = await prisma.task.findUnique({
      where: { id: body.requestId },
      include: {
        customer: true,
        service: true,
      },
    });
    if (!prev) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const task = await prisma.task.update({
      where: { id: body.requestId },
      data: {
        status: body.status,
        assigned_to: body.assigned_to,
        notes: body.notes,
      },
      include: {
        customer: true,
        service: true,
      },
    });

    if (prev.status !== body.status) {
      const notify = await notifyRequestStatusChange({
        customerName: task.customer.name,
        customerPhone: task.customer.phone,
        customerEmail: task.customer.email,
        serviceName: task.service?.name_ar || "خدمة",
        status: task.status,
        requestId: task.id,
      });

      await prisma.conversation.create({
        data: {
          customer_id: task.customer_id,
          channel: Channel.SITE,
          message: `تحديث حالة الطلب إلى ${task.status}${
            notify.whatsappLink && notify.whatsappLink !== "#"
              ? ` — واتساب: ${notify.whatsappLink}`
              : ""
          }`,
          sender: Sender.SYSTEM,
          intent: "status_update",
        },
      });
    }

    return NextResponse.json({ ok: true, request: task });
  } catch (err) {
    console.error("[requests] patch failed:", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
