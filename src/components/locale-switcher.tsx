"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/dynamics";
// do not use LocalizeLink in locale-switcher
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, Locale, localeNames } from "@/lib/utils-common";
import { useIsMobile } from "@/hooks/use-is-mobile";

const languages = i18n.locales.map((locale) => {
  return {
    code: locale,
    name: localeNames[locale] || locale,
  };
});

const needShowLocaleSwitcher = i18n.locales.length > 1;

export function LocaleSwitcher() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const isMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  const isDefaultLocale = isMissingLocale;

  const currentLang = isDefaultLocale
    ? i18n.defaultLocale
    : pathname.split("/")[1];

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) {
        return pathname;
      }
      return `/${locale}${pathname}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathname.split("/");
        const isHome = segments.length === 2;
        if (isHome) {
          return "/";
        }
        segments.splice(1, 1);
        return segments.join("/");
      }
      const segments = pathname.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  if (!needShowLocaleSwitcher) {
    return null;
  }

  if (isMobile) {
    return (
      <div className="w-20 rounded-lg px-0 py-2 justify-center items-center flex flex-row gap-1">
        <Globe className="h-5 w-5" />
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm" aria-label="Locale Switcher">
            {localeNames[currentLang]}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onSelect={() => {
                  window.location.href = redirectedPathname(lang.code);
                }}
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger
        className="w-20 rounded-lg px-0 py-2 justify-center items-center flex flex-row gap-1"
        aria-label="Locale Switcher"
      >
        <Globe className="h-5 w-5" />
        <p className="text-sm">{localeNames[currentLang]}</p>
      </HoverCardTrigger>
      <HoverCardContent className="w-24 p-4">
        {languages.map((lang) => (
          <div key={lang.code} className="py-1">
            <Link
              href={redirectedPathname(lang.code)}
              className={lang.code === currentLang ? "text-primary" : ""}
            >
              {lang.name}
            </Link>
          </div>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
}
