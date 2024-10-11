import "server-only";
import { Locale } from "@/lib/utils-common";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  ja: () => import("../dictionaries/ja.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
