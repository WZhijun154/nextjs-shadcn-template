"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
  { code: "zh", name: "中文" },
];

export function LanguageSelector() {
  const [language, setLanguage] = React.useState("en");

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-24" noCaret>
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue placeholder="" />
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
