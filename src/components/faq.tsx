import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/dynamics";
import { Section } from "@/components/section";
import { Locale } from "@/lib/utils-common";
import { getDictionary } from "@/lib/dictionaries";

export const FAQ = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);

  return (
    <Section id="faq">
      <h2 className="custom-h2">
        {/* Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span> */}
        {dictionary.landingPage.faq.h2}
      </h2>
      <p className="custom-muted-description custom-margin-after-title">
        {dictionary.landingPage.faq.description}
      </p>

      <Accordion
        type="single"
        collapsible
        className="w-full custom-margin-after-description"
      >
        {dictionary.landingPage.faq.items.map(({ h3, h4, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{h3}</AccordionTrigger>

            <AccordionContent>{h4}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {dictionary.contactUs}
    </Section>
  );
};
