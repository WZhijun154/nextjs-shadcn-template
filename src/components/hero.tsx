import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";
import { TopSection } from "@/components/section";

export const Hero = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);

  return (
    <TopSection id="hero" className="flex flex-col items-center justify-center">
      <div className="text-center lg:text-start space-y-6 flex flex-col items-center justify-center">
        <div className="custom-h1">
          {/* <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
            <br />
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Nextjs
            </span>{" "}
            developers
          </h2> */}
          <h1>{dictionary.landingPage.hero.h1}</h1>
        </div>

        <p className="custom-muted-description md:w-10/12 mx-auto lg:mx-0 text-center">
          {dictionary.landingPage.hero.description}
        </p>

        <div className="w-full flex flex-col items-center justify-center container">
          <Button className="w-full md:w-1/3">Get Started</Button>
        </div>
      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      <div className="shadow"></div>
    </TopSection>
  );
};
