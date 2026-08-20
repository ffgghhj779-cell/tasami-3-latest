import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { prisma } from "@/lib/prisma";
import { Link } from "@/navigation";
import {
  StatusBadge,
  customerStatusClass,
  formatDate,
  senderBubbleClass,
} from "@/components/admin/StatusBadge";
import CustomerEditForm from "./CustomerEditForm";

type Props = { params: { locale: string; id: string } };

export default async function AdminCustomerDetailPage({ params }: Props) {
  const { locale, id } = params;
  setRequestLocale(locale);
  const t = await getTranslations("admin");

  let customer = null as Awaited<ReturnType<typeof loadCustomer>>;

  try {
    customer = await loadCustomer(id);
  } catch {
    customer = null;
  }

  if (!customer) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Link
        href="/admin/customers"
        className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-tasami-gray transition-colors hover:text-tasami-pink"
      >
        <ArrowLeft weight="bold" className="h-4 w-4 rtl:rotate-180" />
        {t("customers.back")}
      </Link>

      <header className="card-soft p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-tasami-pink">
              {t("customers.detailTitle")}
            </p>
            <h1 className="font-display mt-2 text-2xl text-tasami-dark sm:text-3xl">
              {customer.name}
            </h1>
            <p className="mt-2 text-sm tabular-nums text-tasami-gray" dir="ltr">
              {customer.phone.startsWith("webchat:")
                ? "Web Chat Guest"
                : customer.phone}
            </p>
          </div>
          <StatusBadge
            label={t(`status.${customer.status}`)}
            tone={customerStatusClass(customer.status)}
          />
        </div>

        <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <dt className="text-[11px] uppercase tracking-wide text-tasami-gray">
              {t("customers.language")}
            </dt>
            <dd className="mt-1 text-sm text-tasami-purple">{customer.language}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wide text-tasami-gray">
              {t("customers.sector")}
            </dt>
            <dd className="mt-1 text-sm text-tasami-purple">
              {customer.sector || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wide text-tasami-gray">
              {t("customers.segment")}
            </dt>
            <dd className="mt-1 text-sm text-tasami-purple">{customer.segment}</dd>
          </div>
        </dl>

        {customer.notes && (
          <div className="mt-6 border-t border-tasami-purple/5 pt-5">
            <p className="text-[11px] uppercase tracking-wide text-tasami-gray">
              {t("customers.notes")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-tasami-dark">
              {customer.notes}
            </p>
          </div>
        )}
      </header>

      <CustomerEditForm
        customerId={customer.id}
        initialStatus={customer.status}
        initialSegment={customer.segment}
        initialNotes={customer.notes}
        initialEmail={customer.email}
      />

      <section className="card-soft overflow-hidden">
        <div className="border-b border-tasami-purple/5 px-6 py-4">
          <h2 className="text-sm font-medium text-tasami-purple">
            {t("customers.conversations")}
          </h2>
        </div>

        <div className="space-y-3 bg-tasami-offwhite px-4 py-5 sm:px-6">
          {customer.conversations.length === 0 ? (
            <p className="py-8 text-center text-sm text-tasami-gray">
              {t("customers.noConversations")}
            </p>
          ) : (
            customer.conversations.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col gap-1 ${
                  msg.sender === "CUSTOMER" ? "items-end" : "items-start"
                }`}
              >
                <div className="flex items-center gap-2 text-[10px] text-tasami-gray">
                  <span>{t(`sender.${msg.sender}`)}</span>
                  <span>·</span>
                  <span>{formatDate(msg.created_at, locale)}</span>
                  <span>·</span>
                  <span>{msg.channel}</span>
                </div>
                <div
                  className={`max-w-[85%] rounded-[16px] px-3.5 py-2.5 text-sm leading-relaxed ${senderBubbleClass(
                    msg.sender
                  )}`}
                >
                  {msg.message}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

function loadCustomer(id: string) {
  return prisma.customer.findUnique({
    where: { id },
    include: {
      conversations: { orderBy: { created_at: "asc" }, take: 200 },
    },
  });
}
