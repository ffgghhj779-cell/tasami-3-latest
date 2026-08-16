import { randomBytes, createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { normalizePhone } from "@/lib/auth";
import { clientIp, rateLimitAsync } from "@/lib/rate-limit";
import { getContactEmail } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

type Body = {
  email?: string;
  phone?: string;
  locale?: string;
};

function hashToken(raw: string) {
  return createHash("sha256").update(raw).digest("hex");
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!(await rateLimitAsync(`forgot-password:${ip}`, { max: 8, windowMs: 60_000 }))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase() || "";
  const phone = body.phone ? normalizePhone(body.phone) : "";
  const locale = (body.locale || "ar").toLowerCase();

  // Always respond the same way — don't leak whether the account exists.
  if (!email && !phone) {
    return NextResponse.json({ ok: true });
  }

  try {
    const user = await prisma.user.findFirst({
      where: email ? { email } : { phone },
    });

    if (user) {
      const rawToken = randomBytes(32).toString("hex");
      const token_hash = hashToken(rawToken);
      const expires_at = new Date(Date.now() + TOKEN_TTL_MS);

      await prisma.passwordResetToken.create({
        data: {
          user_id: user.id,
          token_hash,
          expires_at,
        },
      });

      const apiKey = process.env.RESEND_API_KEY?.trim();
      if (apiKey && user.email) {
        const siteUrl =
          process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://tasami.sa";
        const resetLink = `${siteUrl}/${locale}/reset-password?token=${rawToken}`;
        const from =
          process.env.RESEND_FROM_EMAIL?.trim() ||
          `Khalsana <${getContactEmail()}>`;

        try {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from,
              to: [user.email],
              subject: "إعادة تعيين كلمة المرور — خلصانة",
              html: `
                <div dir="rtl" style="font-family:Tahoma,sans-serif;line-height:1.7;color:#212529">
                  <h2 style="color:#6B53FF">خَلْصَانَة</h2>
                  <p>مرحباً ${escapeHtml(user.name)}،</p>
                  <p>وصلنا طلب لإعادة تعيين كلمة المرور الخاصة بحسابك. اضغط على الرابط أدناه لإنشاء كلمة مرور جديدة (صالح لمدة ساعة واحدة):</p>
                  <p><a href="${resetLink}" style="color:#6B53FF">إعادة تعيين كلمة المرور</a></p>
                  <p style="color:#6C757D;font-size:13px">إن لم تطلب ذلك، يمكنك تجاهل هذه الرسالة بأمان.</p>
                </div>
              `,
            }),
          });
        } catch (err) {
          console.error("[forgot-password] email error", err);
        }
      }
    }
  } catch (err) {
    console.error("[forgot-password] failed", err);
  }

  // Always return ok — never reveal whether the account exists.
  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
