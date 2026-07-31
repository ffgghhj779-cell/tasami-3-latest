import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
});

export const config = {
  // Skip API routes, Next internals, and static files
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
