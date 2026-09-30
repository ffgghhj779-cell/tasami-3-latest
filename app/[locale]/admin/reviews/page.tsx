import { setRequestLocale } from "next-intl/server";
import AdminReviewsClient from "./AdminReviewsClient";

type Props = { params: { locale: string } };

export default function AdminReviewsPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <AdminReviewsClient locale={params.locale} />;
}
