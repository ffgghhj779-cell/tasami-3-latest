import { NextRequest, NextResponse } from "next/server";
import { Language } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  createSessionCookie,
  hashPassword,
  normalizePhone,
} from "@/lib/auth";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!rateLimit(`register:${ip}`, { max: 5, windowMs: 60_000 })) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: {
    name?: string;
    phone?: string;
    email?: string;
    password?: string;
    locale?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const phone = body.phone ? normalizePhone(body.phone) : "";
  const password = body.password || "";
  const email = body.email?.trim() || null;

  if (!name || !phone || password.length < 6) {
    return NextResponse.json(
      { error: "name, phone, and password (min 6) required" },
      { status: 400 }
    );
  }

  if (phone.length < 8) {
    return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { phone } });
  if (existing) {
    return NextResponse.json(
      { error: "Phone already registered" },
      { status: 409 }
    );
  }

  if (email) {
    const emailTaken = await prisma.user.findUnique({ where: { email } });
    if (emailTaken) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }
  }

  const locale = (body.locale || "ar").toLowerCase();
  const languageMap: Record<string, Language> = {
    ar: Language.AR,
    en: Language.EN,
    ur: Language.UR,
    hi: Language.HI,
  };

  const adminPhone = process.env.ADMIN_PHONE
    ? normalizePhone(process.env.ADMIN_PHONE)
    : "";
  const role = adminPhone && phone === adminPhone ? "ADMIN" : "CLIENT";

  try {
    const customer = await prisma.customer.upsert({
      where: { phone },
      create: {
        name,
        phone,
        email,
        language: languageMap[locale] ?? Language.AR,
        status: "ACTIVE",
        notes: "Registered via website",
        last_interaction: new Date(),
      },
      update: {
        name,
        email: email || undefined,
        last_interaction: new Date(),
      },
    });

    const password_hash = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        name,
        phone,
        email,
        password_hash,
        role,
        customer_id: customer.id,
      },
    });

    await createSessionCookie({
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      role: user.role,
      customerId: user.customer_id,
    });

    return NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("[auth/register]", err);
    return NextResponse.json(
      { error: "Could not create account" },
      { status: 500 }
    );
  }
}
