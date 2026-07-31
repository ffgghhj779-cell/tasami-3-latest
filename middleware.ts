import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
});

export const config = {
  // Match all pathnames except Next internals and static files
  matcher: ["/", "/(ar|en|ur|hi)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
