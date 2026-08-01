import { setRequestLocale } from "next-intl/server";
import AuthForm from "@/components/AuthForm";

type Props = { params: { locale: string } };

export default function LoginPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <AuthForm mode="login" />;
}
