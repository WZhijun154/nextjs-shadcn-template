import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/dynamics";
import { Section } from "@/components/section";
import { Locale } from "@/lib/utils-common";
import { getDictionary } from "@/lib/dictionaries";
import { LocalizeLink } from "@/components/localize-link";
import { SUPPORT_EMAIL } from "@/lib/utils-server-side";
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
      <p className="text-xl font-medium mt-8">
        If you have any questions, please feel free to reach out to me at{" "}
        <LocalizeLink
          rel="noreferrer noopener"
          href={`mailto:${SUPPORT_EMAIL}`}
          lang={lang}
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          {SUPPORT_EMAIL}
        </LocalizeLink>
      </p>
    </Section>
  );
};
