import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Users,
  CheckSquare,
  ChatCircleDots,
  UserPlus,
  WhatsappLogo,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { prisma } from "@/lib/prisma";
import { getWhatsAppStats } from "@/lib/whatsapp-admin";
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
  const waStats = await getWhatsAppStats();

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
        <h1 className="font-display text-2xl text-tasami-dark sm:text-3xl">
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

      <Link
        href="/admin/whatsapp"
        className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-[#075E54] via-[#128C7E] to-[#25D366] p-6 text-white shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <div className="absolute -end-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <WhatsappLogo weight="fill" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="font-display text-lg sm:text-xl">{t("dashboard.whatsappCard")}</h2>
              <p className="mt-1 text-sm text-white/80">{t("dashboard.whatsappCardDesc")}</p>
              {waStats.ok && (
                <p className="mt-2 text-xs text-white/70">
                  {t("dashboard.whatsappOrdersToday")}:{" "}
                  <span className="font-semibold text-white">{waStats.ordersToday}</span>
                </p>
              )}
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            {t("dashboard.openWhatsApp")}
            <ArrowRight weight="bold" className="h-4 w-4 rtl:rotate-180" />
          </span>
        </div>
      </Link>

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
              <p className="mt-1 text-3xl font-semibold text-tasami-purple tabular-nums">
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
