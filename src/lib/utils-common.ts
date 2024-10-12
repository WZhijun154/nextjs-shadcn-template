import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const UI_TITLE = "ShadcnUI/Nextjs";

export const i18n = {
  locales: ["en", "ja"],
  defaultLocale: "en",
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: { [key: string]: string } = {
  en: "English",
  ja: "日本語",
};
