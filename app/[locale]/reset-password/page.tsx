import { setRequestLocale } from "next-intl/server";
import ResetPasswordForm from "@/components/ResetPasswordForm";

type Props = {
  params: { locale: string };
  searchParams: { token?: string };
};

export default function ResetPasswordPage({ params, searchParams }: Props) {
  setRequestLocale(params.locale);
  return <ResetPasswordForm token={searchParams.token || ""} />;
}
