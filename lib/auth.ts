import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import type { UserRole } from "@prisma/client";

const COOKIE = "tasami_session";
const MAX_AGE = 60 * 60 * 24 * 14; // 14 days

/** Soft fallback so auth keeps working if AUTH_SECRET is missing on Vercel */
const DEV_FALLBACK = "tasami-fallback-secret-change-me-please-32b";

export type SessionUser = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  role: UserRole;
  customerId: string | null;
};

function secretKey() {
  const secret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET;
  if (!secret) {
    console.error(
      "[auth] AUTH_SECRET is missing — using fallback. Set AUTH_SECRET in Vercel (min 32 chars)."
    );
    return new TextEncoder().encode(DEV_FALLBACK);
  }
  return new TextEncoder().encode(secret);
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function normalizePhone(raw: string): string {
  return raw.replace(/[\s\-()]/g, "").trim();
}

export async function createSessionCookie(user: SessionUser) {
  const token = await new SignJWT({
    name: user.name,
    phone: user.phone,
    email: user.email,
    role: user.role,
    customerId: user.customerId,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(secretKey());

  cookies().set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearSessionCookie() {
  cookies().set(COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function getSession(): Promise<SessionUser | null> {
  const token = cookies().get(COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, secretKey());
    const id = typeof payload.sub === "string" ? payload.sub : null;
    if (!id) return null;

    return {
      id,
      name: String(payload.name || ""),
      phone: String(payload.phone || ""),
      email: payload.email ? String(payload.email) : null,
      role: (payload.role as UserRole) || "CLIENT",
      customerId: payload.customerId ? String(payload.customerId) : null,
    };
  } catch {
    return null;
  }
}

export async function requireAdmin(): Promise<SessionUser | null> {
  const session = await getSession();
  if (!session || session.role !== "ADMIN") return null;
  return session;
}

export { COOKIE as SESSION_COOKIE };
