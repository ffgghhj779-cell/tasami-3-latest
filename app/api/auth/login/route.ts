import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  createSessionCookie,
  normalizePhone,
  verifyPassword,
} from "@/lib/auth";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!rateLimit(`login:${ip}`, { max: 10, windowMs: 60_000 })) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: { phone?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const phone = body.phone ? normalizePhone(body.phone) : "";
  const password = body.password || "";

  if (!phone || !password) {
    return NextResponse.json(
      { error: "phone and password required" },
      { status: 400 }
    );
  }

  try {
    let user = await prisma.user.findUnique({ where: { phone } });
    if (!user || !(await verifyPassword(password, user.password_hash))) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const adminPhone = process.env.ADMIN_PHONE
      ? normalizePhone(process.env.ADMIN_PHONE)
      : "";
    if (adminPhone && phone === adminPhone && user.role !== "ADMIN") {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { role: "ADMIN" },
      });
    }

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
    console.error("[auth/login]", err);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
