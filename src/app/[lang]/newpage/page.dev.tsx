import { Locale } from "@/lib/utils-common";
import { getDictionary } from "@/lib/dictionaries";

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
  return <>{dictionary.landingPage.hero.h1}</>;
}
