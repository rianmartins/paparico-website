import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DEFAULT_LANGUAGE = "pt";
const SUPPORTED_LANGUAGES = ["pt", "en"];
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const [, maybeLang] = pathname.split("/");

  if (SUPPORTED_LANGUAGES.includes(maybeLang)) {
    return NextResponse.next();
  }

  const redirectURL = request.nextUrl.clone();
  redirectURL.pathname = `/${DEFAULT_LANGUAGE}${pathname}`;

  return NextResponse.redirect(redirectURL);
}
