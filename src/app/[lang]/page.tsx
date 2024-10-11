import { About } from "@/components/about";
import { Cta } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Services } from "@/components/services";
import { Sponsors } from "@/components/sponsors";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { Newsletter, ShadowBackground } from "@/components/dynamics";
import { Locale } from "@/lib/utils-common";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.landingPage.metadata.title,
    description: dictionary.landingPage.metadata.description,
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <ShadowBackground />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features features={dictionary.landingPage.features} />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
    </>
  );
}
