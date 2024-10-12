import { Button } from "@/components/ui/button";
import { HeroCards } from "@/components/hero-cards";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";

export const Hero = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center pt-20 pb-16 md:pt-32 md:pb-24 gap-10">
      <div className="text-center lg:text-start space-y-6">
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

        <p className="custom-muted-description md:w-10/12 mx-auto lg:mx-0">
          {dictionary.landingPage.hero.description}
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          {/* <Link
            rel="noreferrer noopener"
            href={AUTHOR_GITHUB_URL}
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </Link> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
