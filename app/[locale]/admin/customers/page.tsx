import { getTranslations, setRequestLocale } from "next-intl/server";
import { Eye } from "@phosphor-icons/react/dist/ssr";
import { prisma } from "@/lib/prisma";
import { Link } from "@/navigation";
import {
  StatusBadge,
  customerStatusClass,
  formatDate,
} from "@/components/admin/StatusBadge";

type Props = { params: { locale: string } };

export default async function AdminCustomersPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("admin");

  let customers: Awaited<ReturnType<typeof prisma.customer.findMany>> = [];
  let dbOk = true;

  try {
    customers = await prisma.customer.findMany({
      orderBy: [{ last_interaction: "desc" }, { created_at: "desc" }],
      take: 200,
    });
  } catch {
    dbOk = false;
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-display text-2xl text-tasami-purple sm:text-3xl">
          {t("customers.title")}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
          {t("customers.subtitle")}
        </p>
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
              <tr className="border-b border-tasami-purple/5 bg-white text-[11px] uppercase tracking-wide text-tasami-gray">
                <th className="px-5 py-3.5 font-medium">{t("customers.name")}</th>
                <th className="px-5 py-3.5 font-medium">{t("customers.phone")}</th>
                <th className="px-5 py-3.5 font-medium">
                  {t("customers.language")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("customers.sector")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("customers.status")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("customers.lastInteraction")}
                </th>
                <th className="px-5 py-3.5 font-medium text-end">
                  {t("customers.actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tasami-purple/5">
              {customers.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-14 text-center text-tasami-gray"
                  >
                    {t("customers.empty")}
                  </td>
                </tr>
              ) : (
                customers.map((c) => (
                  <tr
                    key={c.id}
                    className="bg-white/60 transition-colors hover:bg-white"
                  >
                    <td className="px-5 py-4 font-medium text-tasami-purple">
                      {c.name}
                    </td>
                    <td className="px-5 py-4 tabular-nums text-tasami-dark" dir="ltr">
                      {c.phone.startsWith("webchat:") ? "Web Chat" : c.phone}
                    </td>
                    <td className="px-5 py-4 text-tasami-gray">{c.language}</td>
                    <td className="px-5 py-4 text-tasami-gray">
                      {c.sector || "—"}
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge
                        label={t(`status.${c.status}`)}
                        tone={customerStatusClass(c.status)}
                      />
                    </td>
                    <td className="px-5 py-4 text-xs text-tasami-gray">
                      {formatDate(c.last_interaction, locale)}
                    </td>
                    <td className="px-5 py-4 text-end">
                      <Link
                        href={`/admin/customers/${c.id}`}
                        className="inline-flex min-h-[36px] items-center gap-1.5 rounded-button px-3 py-1.5 text-xs font-medium text-tasami-pink transition-colors hover:bg-tasami-pink/10 hover:text-tasami-purple"
                      >
                        <Eye weight="regular" className="h-4 w-4" />
                        {t("customers.view")}
                      </Link>
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
