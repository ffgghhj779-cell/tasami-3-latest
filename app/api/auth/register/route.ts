import { NextRequest, NextResponse } from "next/server";
import { Language } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  createSessionCookie,
  hashPassword,
  normalizePhone,
} from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
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
        role: "CLIENT",
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
