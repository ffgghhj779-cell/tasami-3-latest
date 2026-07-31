import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n";

/** Middleware handles locale routing; this is a safety fallback. */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
