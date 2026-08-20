import { getTranslations, setRequestLocale } from "next-intl/server";
import type { TaskStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { Link } from "@/navigation";
import {
  StatusBadge,
  taskStatusClass,
  formatDate,
} from "@/components/admin/StatusBadge";

type Props = { params: { locale: string } };

type TaskRow = {
  id: string;
  status: TaskStatus;
  assigned_to: string | null;
  due_date: Date | null;
  notes: string | null;
  customer: { id: string; name: string };
};

export default async function AdminTasksPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("admin");

  let tasks: TaskRow[] = [];
  let dbOk = true;

  try {
    tasks = await prisma.task.findMany({
      take: 150,
      orderBy: [{ due_date: "asc" }, { updated_at: "desc" }],
      include: { customer: { select: { id: true, name: true } } },
    });
  } catch {
    dbOk = false;
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-display text-2xl text-tasami-dark sm:text-3xl">
          {t("tasks.title")}
        </h1>
        <p className="mt-2 text-sm text-tasami-gray">{t("tasks.subtitle")}</p>
        {!dbOk && (
          <p className="mt-4 rounded-card bg-tasami-gold/20 px-4 py-3 text-sm text-tasami-purple shadow-soft">
            {t("dashboard.dbHint")}
          </p>
        )}
      </header>

      <div className="card-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-start text-sm">
            <thead>
              <tr className="border-b border-tasami-purple/5 text-[11px] uppercase tracking-wide text-tasami-gray">
                <th className="px-5 py-3.5 font-medium">{t("tasks.customer")}</th>
                <th className="px-5 py-3.5 font-medium">{t("tasks.status")}</th>
                <th className="px-5 py-3.5 font-medium">{t("tasks.assigned")}</th>
                <th className="px-5 py-3.5 font-medium">{t("tasks.due")}</th>
                <th className="px-5 py-3.5 font-medium">{t("tasks.notes")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tasami-purple/5">
              {tasks.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-14 text-center text-tasami-gray"
                  >
                    {t("tasks.empty")}
                  </td>
                </tr>
              ) : (
                tasks.map((task) => (
                  <tr key={task.id} className="hover:bg-white">
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/customers/${task.customer.id}`}
                        className="font-medium text-tasami-purple hover:text-tasami-pink"
                      >
                        {task.customer.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge
                        label={t(`status.${task.status}`)}
                        tone={taskStatusClass(task.status)}
                      />
                    </td>
                    <td className="px-5 py-4 text-tasami-gray">
                      {task.assigned_to || "—"}
                    </td>
                    <td className="px-5 py-4 text-xs text-tasami-gray">
                      {formatDate(task.due_date, locale)}
                    </td>
                    <td className="max-w-sm px-5 py-4">
                      <p className="line-clamp-2 text-tasami-dark">
                        {task.notes || "—"}
                      </p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
