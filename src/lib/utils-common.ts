import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const UI_TITLE = "ShadcnUI/Nextjs";

export const i18n = {
  locales: ["en", "ja"],
  defaultLocale: "ja",
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: { [key: string]: string } = {
  en: "English",
  ja: "日本語",
};

export function getSanitizedPathname(pathname: string) {
  return pathname.startsWith("/") ? pathname.substring(1) : pathname;
}

export function isPathnameMissingLocale(pathname: string) {
  return i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
}
