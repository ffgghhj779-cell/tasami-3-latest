import { setRequestLocale } from "next-intl/server";
import AdminWhatsAppClient from "./AdminWhatsAppClient";

type Props = { params: { locale: string } };

export default function AdminWhatsAppPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <AdminWhatsAppClient locale={params.locale} />;
}
