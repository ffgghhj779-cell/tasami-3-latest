import { setRequestLocale } from "next-intl/server";
import AdminCampaignsClient from "./AdminCampaignsClient";

type Props = { params: { locale: string } };

export default function AdminCampaignsPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <AdminCampaignsClient locale={params.locale} />;
}
