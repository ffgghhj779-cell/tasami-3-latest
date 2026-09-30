import { unstable_cache } from "next/cache";
import { TaskStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type CompletedStats = {
  total: number;
  thisMonth: number;
  updatedAt: string;
};

const DONE_STATUSES = [TaskStatus.COMPLETED, TaskStatus.DONE];

/**
 * Documented count of transactions completed before requests were tracked in
 * the database. Set by the team in COMPLETED_TRANSACTIONS_BASELINE.
 */
function baseline(): number {
  const n = Number.parseInt(
    process.env.COMPLETED_TRANSACTIONS_BASELINE || "148",
    10
  );
  return Number.isFinite(n) && n > 0 ? n : 0;
}

async function readCompletedStats(): Promise<CompletedStats> {
  const base = baseline();
  const now = new Date();
  const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));

  try {
    const [done, doneThisMonth] = await Promise.all([
      prisma.task.count({ where: { status: { in: DONE_STATUSES } } }),
      prisma.task.count({
        where: {
          status: { in: DONE_STATUSES },
          updated_at: { gte: monthStart },
        },
      }),
    ]);
    return {
      total: base + done,
      thisMonth: doneThisMonth,
      updatedAt: now.toISOString(),
    };
  } catch {
    return { total: base, thisMonth: 0, updatedAt: now.toISOString() };
  }
}

/** Real completed-transactions count: team baseline + requests marked done in the admin panel. */
export const getCompletedStats = unstable_cache(
  readCompletedStats,
  ["completed-transactions"],
  { revalidate: 1800, tags: ["completed-transactions"] }
);
