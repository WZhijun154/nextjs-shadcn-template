import { i18n } from "@/lib/utils-common";
import Link from "next/link";
import React from "react";

type LocalizeLinkProps = {
  href: string;
  lang: string;
  children: React.ReactNode;
  [key: string]: unknown;
};

export const LocalizeLink: React.FC<LocalizeLinkProps> = ({
  href,
  lang,
  ...props
}) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const isExternal = href.startsWith("http");
  const isEmail = href.startsWith("mailto:");
  const needLocalize = !isDefaultLang && !isExternal && !isEmail;
  const path = needLocalize ? `/${lang}${href}` : href;
  return <Link href={path} {...props} />;
};
