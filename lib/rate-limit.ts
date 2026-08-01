/** Simple in-memory IP rate limiter (per serverless instance). */

type Bucket = { count: number; reset: number };

const buckets = new Map<string, Bucket>();

export function rateLimit(
  key: string,
  { windowMs = 60_000, max = 20 }: { windowMs?: number; max?: number } = {}
): boolean {
  const now = Date.now();
  const row = buckets.get(key);
  if (!row || now > row.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs });
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
