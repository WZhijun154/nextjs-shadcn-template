import "server-only";
import { Locale } from "@/lib/utils-common";

const dictionaries = {
  en: () => import("../dictionaries/en").then((module) => module.en),
  ja: () => import("../dictionaries/ja").then((module) => module.ja),
  zh: () => import("../dictionaries/zh").then((module) => module.zh),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
