import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "./i18n";

const intl = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

/** /id is a standalone Indonesian landing section outside the next-intl locales. */
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/id" || pathname.startsWith("/id/")) return NextResponse.next();
  return intl(request);
}

export const config = {
  // Skip API routes, Next internals, and static files
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
