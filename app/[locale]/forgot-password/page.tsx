import { setRequestLocale } from "next-intl/server";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

type Props = { params: { locale: string } };

export default function ForgotPasswordPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <ForgotPasswordForm />;
}
