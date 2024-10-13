import React from "react";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";
import { Section } from "./section";

export const ComingSoon = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  return (
    <Section id="coming-soon" className="border-2 border-dashed rounded-lg">
      <p className="custom-muted-description text-center custom-margin-after-title">
        {dictionary.comingSoon.description}
      </p>
    </Section>
  );
};
