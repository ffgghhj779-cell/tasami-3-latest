import { setRequestLocale } from "next-intl/server";
import AdminRemindersClient from "./AdminRemindersClient";

type Props = { params: { locale: string } };

export default function AdminRemindersPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <AdminRemindersClient locale={params.locale} />;
}
