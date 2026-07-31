import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Users,
  CheckSquare,
  ChatCircleDots,
  UserPlus,
} from "@phosphor-icons/react/dist/ssr";
import { prisma } from "@/lib/prisma";
import { Link } from "@/navigation";
import {
  StatusBadge,
  taskStatusClass,
  formatDate,
} from "@/components/admin/StatusBadge";

type Props = { params: { locale: string } };

async function safeMetrics() {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  try {
    const [
      totalCustomers,
      openLeads,
      activeTasks,
      chatsToday,
      recentConversations,
      recentTasks,
    ] = await Promise.all([
      prisma.customer.count(),
      prisma.customer.count({ where: { status: "LEAD" } }),
      prisma.task.count({
        where: { status: { in: ["PENDING", "IN_PROGRESS", "WAITING"] } },
      }),
      prisma.conversation.count({
        where: { created_at: { gte: startOfDay } },
      }),
      prisma.conversation.findMany({
        take: 6,
        orderBy: { created_at: "desc" },
        include: { customer: { select: { id: true, name: true } } },
      }),
      prisma.task.findMany({
        take: 5,
        orderBy: { updated_at: "desc" },
        include: { customer: { select: { id: true, name: true } } },
      }),
    ]);

    return {
      ok: true as const,
      totalCustomers,
      openLeads,
      activeTasks,
      chatsToday,
      recentConversations,
      recentTasks,
    };
  } catch {
    return {
      ok: false as const,
      totalCustomers: 0,
      openLeads: 0,
      activeTasks: 0,
      chatsToday: 0,
      recentConversations: [],
      recentTasks: [],
    };
  }
}

export default async function AdminDashboardPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("admin");
  const data = await safeMetrics();

  const cards = [
    {
      key: "totalCustomers",
      value: data.totalCustomers,
      icon: Users,
      href: "/admin/customers",
    },
    {
      key: "activeTasks",
      value: data.activeTasks,
      icon: CheckSquare,
      href: "/admin/tasks",
    },
    {
      key: "recentChats",
      value: data.chatsToday,
      icon: ChatCircleDots,
      href: "/admin/conversations",
    },
    {
      key: "openLeads",
      value: data.openLeads,
      icon: UserPlus,
      href: "/admin/customers",
    },
  ] as const;

  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-display text-2xl text-tasami-purple sm:text-3xl">
          {t("dashboard.title")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-tasami-gray">
          {t("dashboard.subtitle")}
        </p>
        {!data.ok && (
          <p className="mt-4 rounded-card bg-tasami-gold/20 px-4 py-3 text-sm text-tasami-purple shadow-soft">
            {t("dashboard.dbHint")}
          </p>
        )}
      </header>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ key, value, icon: Icon, href }) => (
          <Link
            key={key}
            href={href}
            className="card-soft group flex flex-col gap-4 p-6 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="icon-gold">
              <Icon weight="regular" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium tracking-wide text-tasami-gray">
                {t(`dashboard.${key}`)}
              </p>
              <p className="mt-1 text-3xl font-light text-tasami-purple tabular-nums">
                {value}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent conversations */}
        <div className="card-soft overflow-hidden">
          <div className="flex items-center justify-between border-b border-tasami-purple/5 px-6 py-4">
            <h2 className="text-sm font-medium text-tasami-purple">
              {t("dashboard.recentConversations")}
            </h2>
            <Link
              href="/admin/conversations"
              className="text-xs font-medium text-tasami-pink hover:text-tasami-purple"
            >
              {t("dashboard.viewAll")}
            </Link>
          </div>
          <ul className="divide-y divide-tasami-purple/5">
            {data.recentConversations.length === 0 ? (
              <li className="px-6 py-10 text-center text-sm text-tasami-gray">
                {t("dashboard.emptyConversations")}
              </li>
            ) : (
              data.recentConversations.map((c) => (
                <li key={c.id} className="px-6 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        href={`/admin/customers/${c.customer.id}`}
                        className="text-sm font-medium text-tasami-purple hover:text-tasami-pink"
                      >
                        {c.customer.name}
                      </Link>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-tasami-gray">
                        {c.message}
                      </p>
                    </div>
                    <span className="shrink-0 text-[11px] text-tasami-gray">
                      {formatDate(c.created_at, locale)}
                    </span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Recent tasks */}
        <div className="card-soft overflow-hidden">
          <div className="flex items-center justify-between border-b border-tasami-purple/5 px-6 py-4">
            <h2 className="text-sm font-medium text-tasami-purple">
              {t("dashboard.recentTasks")}
            </h2>
            <Link
              href="/admin/tasks"
              className="text-xs font-medium text-tasami-pink hover:text-tasami-purple"
            >
              {t("dashboard.viewAll")}
            </Link>
          </div>
          <ul className="divide-y divide-tasami-purple/5">
            {data.recentTasks.length === 0 ? (
              <li className="px-6 py-10 text-center text-sm text-tasami-gray">
                {t("dashboard.emptyTasks")}
              </li>
            ) : (
              data.recentTasks.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between gap-3 px-6 py-4"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-tasami-purple">
                      {task.customer.name}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-tasami-gray">
                      {task.notes || task.assigned_to || "—"}
                    </p>
                  </div>
                  <StatusBadge
                    label={t(`status.${task.status}`)}
                    tone={taskStatusClass(task.status)}
                  />
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
