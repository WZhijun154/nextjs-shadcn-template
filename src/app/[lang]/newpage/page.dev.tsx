import { Locale } from "@/lib/utils-common";
import { getDictionary } from "@/lib/dictionaries";
import { Section } from "@/components/section";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return {
    // replace with title and description from dictionary
    title: dictionary.landingPage.metadata.title,
    description: dictionary.landingPage.metadata.description,
  };
}

export default async function NewPageDev({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <Section>
      <h1 className="custom-h1 text-center">
        {dictionary.landingPage.hero.h1}
      </h1>
    </Section>
  );
}
