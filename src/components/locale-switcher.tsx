"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/dynamics";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, Locale, localeNames } from "@/lib/utils-common";

const languages = i18n.locales.map((locale) => {
  return {
    code: locale,
    name: localeNames[locale] || locale,
  };
});

const needShowLocaleSwitcher = i18n.locales.length > 1;

export function LocaleSwitcher() {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  if (!needShowLocaleSwitcher) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-9 rounded-lg px-0 py-2 justify-center items-center flex flex-row border-none">
        <Globe className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code}>
            <Link href={redirectedPathname(lang.code)}>{lang.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
