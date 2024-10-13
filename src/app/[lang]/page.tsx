// import { About } from "@/components/about";
import { Cta } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Main } from "./main";
// import { Pricing } from "@/components/pricing";
// import { Services } from "@/components/services";
// import { Sponsors } from "@/components/sponsors";
// import { Team } from "@/components/team";
// import { Testimonials } from "@/components/testimonials";
// import { Newsletter, ShadowBackground } from "@/components/dynamics";
// import { ShadowBackground } from "@/components/shadow-background";
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
  return (
    <>
      {/* <ShadowBackground /> */}
      <Hero lang={lang} />
      <Main lang={lang} />
      {/* <Sponsors /> */}
      {/* <About /> */}
      <HowItWorks lang={lang} />
      <Features lang={lang} />
      {/* <Services lang={lang} /> */}
      <Cta lang={lang} />
      {/* <Testimonials lang={lang} /> */}
      {/* <Team lang={lang} /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      <FAQ lang={lang} />
    </>
  );
}
