import { getTranslations, setRequestLocale } from "next-intl/server";
import { prisma } from "@/lib/prisma";
import AdminConversationsClient from "./AdminConversationsClient";

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
    customer: { id: string; name: string; phone: string };
  }> = [];
  let customers: Array<{ id: string; name: string; phone: string }> = [];
  let dbOk = true;

  try {
    [rows, customers] = await Promise.all([
      prisma.conversation.findMany({
        take: 150,
        orderBy: { created_at: "desc" },
        include: { customer: { select: { id: true, name: true, phone: true } } },
      }),
      prisma.customer.findMany({
        select: { id: true, name: true, phone: true },
        orderBy: { name: "asc" },
        take: 500,
      }),
    ]);
  } catch {
    dbOk = false;
  }

  return (
    <AdminConversationsClient
      locale={locale}
      initialRows={rows.map((r) => ({
        ...r,
        created_at: r.created_at.toISOString(),
      }))}
      customers={customers}
      dbOk={dbOk}
      dbHint={t("dashboard.dbHint")}
    />
  );
}
