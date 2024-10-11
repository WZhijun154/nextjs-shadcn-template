import "server-only";
import { Locale } from "@/lib/utils-common";

const dictionaries = {
  en: () => import("../dictionaries/en").then((module) => module.en),
  ja: () => import("../dictionaries/ja").then((module) => module.ja),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
