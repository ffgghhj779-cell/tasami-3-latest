import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";
import { clientIp, rateLimitAsync } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  token?: string;
  password?: string;
};

function hashToken(raw: string) {
  return createHash("sha256").update(raw).digest("hex");
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!(await rateLimitAsync(`reset-password:${ip}`, { max: 10, windowMs: 60_000 }))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const token = body.token?.trim() || "";
  const password = body.password || "";

  if (!token || password.length < 6) {
    return NextResponse.json(
      { error: "token and password (min 6) required" },
      { status: 400 }
    );
  }

  try {
    const token_hash = hashToken(token);
    const record = await prisma.passwordResetToken.findUnique({
      where: { token_hash },
    });

    if (
      !record ||
      record.used ||
      record.expires_at.getTime() < Date.now()
    ) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    const password_hash = await hashPassword(password);

    await prisma.$transaction([
      prisma.user.update({
        where: { id: record.user_id },
        data: { password_hash },
      }),
      prisma.passwordResetToken.update({
        where: { id: record.id },
        data: { used: true },
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[reset-password] failed", err);
    return NextResponse.json(
      { error: "Could not reset password" },
      { status: 500 }
    );
  }
}
