import { setRequestLocale } from "next-intl/server";
import AuthForm from "@/components/AuthForm";

type Props = { params: { locale: string } };

export default function RegisterPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <AuthForm mode="register" />;
}
