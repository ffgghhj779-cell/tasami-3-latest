import { getTranslations, setRequestLocale } from "next-intl/server";
import { prisma } from "@/lib/prisma";
import { Link } from "@/navigation";
import { formatDate } from "@/components/admin/StatusBadge";

type Props = { params: { locale: string } };

export default async function AdminConversationsPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("admin");

  let rows: Array<{
    id: string;
    message: string;
    channel: string;
    sender: string;
    created_at: Date;
    customer: { id: string; name: string };
  }> = [];
  let dbOk = true;

  try {
    rows = await prisma.conversation.findMany({
      take: 150,
      orderBy: { created_at: "desc" },
      include: { customer: { select: { id: true, name: true } } },
    });
  } catch {
    dbOk = false;
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-display text-2xl text-tasami-purple sm:text-3xl">
          {t("conversations.title")}
        </h1>
        <p className="mt-2 text-sm text-tasami-gray">
          {t("conversations.subtitle")}
        </p>
        {!dbOk && (
          <p className="mt-4 rounded-card bg-tasami-gold/20 px-4 py-3 text-sm text-tasami-purple shadow-soft">
            {t("dashboard.dbHint")}
          </p>
        )}
      </header>

      <div className="card-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-start text-sm">
            <thead>
              <tr className="border-b border-tasami-purple/5 text-[11px] uppercase tracking-wide text-tasami-gray">
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.customer")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.channel")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.sender")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.message")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.time")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tasami-purple/5">
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-14 text-center text-tasami-gray"
                  >
                    {t("conversations.empty")}
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className="hover:bg-white">
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/customers/${row.customer.id}`}
                        className="font-medium text-tasami-purple hover:text-tasami-pink"
                      >
                        {row.customer.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-xs text-tasami-gray">
                      {row.channel}
                    </td>
                    <td className="px-5 py-4 text-xs text-tasami-gray">
                      {t(`sender.${row.sender}`)}
                    </td>
                    <td className="max-w-md px-5 py-4">
                      <p className="line-clamp-2 text-tasami-dark">{row.message}</p>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-xs text-tasami-gray">
                      {formatDate(row.created_at, locale)}
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
