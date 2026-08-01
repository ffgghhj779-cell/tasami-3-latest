import { setRequestLocale } from "next-intl/server";
import AdminRequestsClient from "./AdminRequestsClient";

type Props = { params: { locale: string } };

export default function AdminRequestsPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <AdminRequestsClient locale={params.locale} />;
}
