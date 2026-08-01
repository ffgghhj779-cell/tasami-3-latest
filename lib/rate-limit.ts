import { prisma } from "@/lib/prisma";

/** In-memory fallback when DB is unavailable */
type Bucket = { count: number; reset: number };
const memory = new Map<string, Bucket>();

/**
 * Rate limit by key. Prefers Postgres so limits work across serverless instances.
 * Falls back to in-memory if the DB table is missing or unreachable.
 */
export async function rateLimitAsync(
  key: string,
  { windowMs = 60_000, max = 20 }: { windowMs?: number; max?: number } = {}
): Promise<boolean> {
  const now = new Date();
  try {
    const existing = await prisma.rateLimit.findUnique({ where: { key } });
    if (!existing || existing.reset_at <= now) {
      await prisma.rateLimit.upsert({
        where: { key },
        create: {
          key,
          count: 1,
          reset_at: new Date(now.getTime() + windowMs),
        },
        update: {
          count: 1,
          reset_at: new Date(now.getTime() + windowMs),
        },
      });
      return true;
    }
    if (existing.count >= max) return false;
    await prisma.rateLimit.update({
      where: { key },
      data: { count: { increment: 1 } },
    });
    return true;
  } catch {
    return rateLimitMemory(key, { windowMs, max });
  }
}

/** Sync memory limiter — keep for hot paths that can't await */
export function rateLimit(
  key: string,
  { windowMs = 60_000, max = 20 }: { windowMs?: number; max?: number } = {}
): boolean {
  return rateLimitMemory(key, { windowMs, max });
}

function rateLimitMemory(
  key: string,
  { windowMs = 60_000, max = 20 }: { windowMs?: number; max?: number }
): boolean {
  const now = Date.now();
  const row = memory.get(key);
  if (!row || now > row.reset) {
    memory.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  if (row.count >= max) return false;
  row.count += 1;
  return true;
}

export function clientIp(req: { headers: Headers }): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}
