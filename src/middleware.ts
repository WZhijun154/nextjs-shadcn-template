import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
import { i18n } from "@/lib/utils-common";

// function getLocale(request: NextRequest): string | undefined {
//   // Negotiator expects plain object so we need to transform headers
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   // @ts-expect-error locales are readonly
//   const locales: string[] = i18n.locales;

//   // Use negotiator and intl-localematcher to get best locale
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
//     locales
//   );

//   const locale = matchLocale(languages, locales, i18n.defaultLocale);

//   return locale;
// }

export function middleware(request: NextRequest) {
  // Note: As a best strategy to gain audience, we should not redirect user to their locale
  // instead we just give user a friendly notification
  const pathname = request.nextUrl.pathname;

  // Check if the pathname has the default locale
  const pathnameHasDefaultLocale =
    pathname.startsWith(`/${i18n.defaultLocale}/`) ||
    pathname === `/${i18n.defaultLocale}`;

  if (pathnameHasDefaultLocale) {
    // Remove the default locale from the pathname
    let pathnameWithoutDefaultLocale = pathname;
    if (pathname.startsWith(`/${i18n.defaultLocale}/`)) {
      pathnameWithoutDefaultLocale = pathname.slice(
        i18n.defaultLocale.length + 1
      );
    } else if (pathname === `/${i18n.defaultLocale}`) {
      pathnameWithoutDefaultLocale = "/";
    }
    return NextResponse.redirect(
      new URL(pathnameWithoutDefaultLocale, request.url)
    );
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(
      new URL(
        `/${i18n.defaultLocale}${
          pathname.startsWith("/") ? "" : "/"
        }${pathname}`,
        request.url
      )
    );
  }

  return;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!_next/static|_next/image|api|favicon.ico|manifest.json|.*\\.(?:svg|png|jpg|jpeg|gif|webp|webm|xml|txt)$).*)",
  ],
};
