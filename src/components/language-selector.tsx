"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useRouter, usePathname } from "next/navigation";
import {
  getSanitizedPathname,
  isPathnameMissingLocale,
} from "@/lib/utils-client-side";

const languages = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
  { code: "zh", name: "中文" },
];

const changeLanguage = (language: string, pathname: string) => {
  if (isPathnameMissingLocale(pathname)) {
    return `/${language}/${pathname}`;
  }
  const sanitizedPathname = getSanitizedPathname(pathname);

  const targetPathname = `/${language}/${sanitizedPathname
    .split("/")
    .slice(1)
    .join()}`;
  return targetPathname;
};

export function LocaleSelector() {
  const router = useRouter();
  const [language, setLanguage] = React.useState("");
  const pathname = usePathname();
  const href = changeLanguage(language, pathname);

  return (
    <Select
      value={language}
      onValueChange={(value) => {
        setLanguage(value);
        router.push(href);
      }}
    >
      <SelectTrigger
        className="w-9 px-0 justify-center items-center flex flex-row border-none"
        noCaret
      >
        <Globe className="h-5 w-5" />
      </SelectTrigger>
      <SelectContent className="w-24">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
