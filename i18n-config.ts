export const i18n = {
  locales: ["en", "ja"],
  defaultLocale: "ja",
} as const;

export type Locale = (typeof i18n)["locales"][number];
