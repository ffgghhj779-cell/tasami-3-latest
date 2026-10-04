import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "./i18n";

const intl = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

/** /id and /bn are standalone Indonesian and Bengali landing sections outside the next-intl locales. */
const STANDALONE_LANDINGS = ["/id", "/bn"];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (STANDALONE_LANDINGS.some((base) => pathname === base || pathname.startsWith(`${base}/`))) {
    return NextResponse.next();
  }
  return intl(request);
}

export const config = {
  // Skip API routes, Next internals, and static files
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
