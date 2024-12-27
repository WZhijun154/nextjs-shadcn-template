// import { About } from "@/components/about";
import { Cta } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";
import { GradientSection } from "@/components/section";
import { LocalizeLink } from "@/components/localize-link";
import { Input } from "@/components/ui/input"; // Assuming shadcn UI has an Input component
// import { Pricing } from "@/components/pricing";
// import { Services } from "@/components/services";
// import { Sponsors } from "@/components/sponsors";
// import { Team } from "@/components/team";
// import { Testimonials } from "@/components/testimonials";
// import { Newsletter, ShadowBackground } from "@/components/dynamics";
// import { ShadowBackground } from "@/components/shadow-background";

import { check } from "./core";
import { NameUranaiClientSide } from "./client-side";

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
    <GradientSection
      id="hero"
      className="flex flex-col items-center justify-center"
    >
      <div className="text-center lg:text-start space-y-6 flex flex-col items-center justify-center w-10/12">
        <div className="custom-h1">
          <h1>姓名判断</h1>
        </div>

        <p className="custom-muted-description md:w-2/3 mx-auto lg:mx-0 text-center">
        姓名判断は、あなたの名前に秘められた運命や性格を解き明かす技術です。名前の文字や音の響きから、人生の方向性や才能を見つけ出します。姓名判断を通じて、自分自身を理解し、未来への道筋を見つけましょう。あなたの名前には、まだ知られていない可能性が詰まっています。一緒にその秘密を解き明かしてみませんか？
        </p>


      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}

    </GradientSection>

    <NameUranaiClientSide />

    </>
  );
}
