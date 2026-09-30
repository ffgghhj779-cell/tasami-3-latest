import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { unstable_cache } from "next/cache";
import { Sentiment, type Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

/**
 * Customer reviews are stored as Conversation rows (channel SITE, sender CUSTOMER)
 * with `intent` carrying the moderation state and `message` holding a JSON payload.
 * Nothing is shown publicly until an admin approves it.
 */
export const REVIEW_INTENT = {
  pending: "review_pending",
  approved: "review_approved",
  rejected: "review_rejected",
} as const;

export type ReviewState = keyof typeof REVIEW_INTENT;

export const REVIEW_TAG = "customer-reviews";
export const INVITE_TTL_DAYS = 30;
export const REVIEW_TEXT_MIN = 10;
export const REVIEW_TEXT_MAX = 600;
export const REVIEW_NAME_MAX = 40;
export const REVIEW_CITY_MAX = 40;

/** Placeholder customer that owns reviews submitted through invite links. */
export const INVITE_CUSTOMER_PHONE = "site-reviews";

export type ReviewPayload = {
  v: 1;
  /** Unique source: `task:<id>` or `invite:<nonce>` — one review per source. */
  ref: string;
  rating: number;
  text: string;
  name: string;
  city: string;
  service?: string;
};

export type PublicReview = {
  id: string;
  rating: number;
  text: string;
  name: string;
  city: string;
  service?: string;
  createdAt: string;
};

/** Rows that are not reviews — used to keep the admin conversation views clean. */
export const NOT_REVIEW_WHERE: Prisma.ConversationWhereInput = {
  OR: [{ intent: null }, { NOT: { intent: { startsWith: "review_" } } }],
};

export function sentimentForRating(rating: number): Sentiment {
  if (rating >= 4) return Sentiment.POSITIVE;
  if (rating === 3) return Sentiment.NEUTRAL;
  return Sentiment.NEGATIVE;
}

export function parseReview(message: string): ReviewPayload | null {
  try {
    const data = JSON.parse(message) as ReviewPayload;
    if (data?.v !== 1 || typeof data.ref !== "string") return null;
    return data;
  } catch {
    return null;
  }
}

export function stateFromIntent(intent: string | null): ReviewState | null {
  if (intent === REVIEW_INTENT.pending) return "pending";
  if (intent === REVIEW_INTENT.approved) return "approved";
  if (intent === REVIEW_INTENT.rejected) return "rejected";
  return null;
}

/** Collapse whitespace and strip control characters / markup brackets. */
export function cleanText(raw: unknown, max: number): string {
  if (typeof raw !== "string") return "";
  return raw
    .replace(/[\u0000-\u001f\u007f<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export async function reviewExists(ref: string): Promise<boolean> {
  const hit = await prisma.conversation.findFirst({
    where: {
      intent: { startsWith: "review_" },
      message: { contains: `"ref":${JSON.stringify(ref)}` },
    },
    select: { id: true },
  });
  return Boolean(hit);
}

/* ---------------------------- Invite links ---------------------------- */

function inviteSecret(): string {
  const secret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET;
  if (secret && secret.length >= 32) return secret;
  if (process.env.NODE_ENV === "production") {
    throw new Error("AUTH_SECRET is required to sign review invites.");
  }
  return "tasami-local-dev-only-secret-min-32-chars!!";
}

function sign(body: string): string {
  return createHmac("sha256", `review-invite:${inviteSecret()}`)
    .update(body)
    .digest("base64url")
    .slice(0, 22);
}

/** Token format: `<nonce>.<expiresEpochSeconds>.<signature>` (URL-safe). */
export function createInviteToken(now = Date.now()): { token: string; expiresAt: Date } {
  const nonce = randomBytes(9).toString("base64url");
  const exp = Math.floor(now / 1000) + INVITE_TTL_DAYS * 86_400;
  const body = `${nonce}.${exp}`;
  return { token: `${body}.${sign(body)}`, expiresAt: new Date(exp * 1000) };
}

export function verifyInviteToken(
  token: string,
  now = Date.now()
): { ok: true; nonce: string } | { ok: false; reason: "invalid" | "expired" } {
  const parts = token.trim().split(".");
  if (parts.length !== 3) return { ok: false, reason: "invalid" };
  const [nonce, expRaw, sig] = parts;
  if (!/^[A-Za-z0-9_-]{8,32}$/.test(nonce) || !/^\d{9,11}$/.test(expRaw)) {
    return { ok: false, reason: "invalid" };
  }
  const expected = Buffer.from(sign(`${nonce}.${expRaw}`));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) {
    return { ok: false, reason: "invalid" };
  }
  if (Number(expRaw) * 1000 < now) return { ok: false, reason: "expired" };
  return { ok: true, nonce };
}

/* --------------------------- Public listing --------------------------- */

async function readApprovedReviews(): Promise<PublicReview[]> {
  try {
    const rows = await prisma.conversation.findMany({
      where: { intent: REVIEW_INTENT.approved },
      orderBy: { created_at: "desc" },
      take: 24,
      select: { id: true, message: true, created_at: true },
    });
    return rows.flatMap((r) => {
      const p = parseReview(r.message);
      if (!p) return [];
      return [
        {
          id: r.id,
          rating: p.rating,
          text: p.text,
          name: p.name,
          city: p.city,
          service: p.service,
          createdAt: r.created_at.toISOString(),
        },
      ];
    });
  } catch {
    return [];
  }
}

export const getApprovedReviews = unstable_cache(readApprovedReviews, ["approved-reviews"], {
  revalidate: 900,
  tags: [REVIEW_TAG],
});
