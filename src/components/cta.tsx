import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";
import { UniqueSection } from "@/components/section";
import { LocalizeLink } from "./localize-link";
export const Cta = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  return (
    <UniqueSection id="cta" className="bg-muted/70">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="custom-h2">
            {/* All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas & Concepts{" "}
            </span>
            In One Interface */}
            {dictionary.landingPage.cta.h2}
          </h2>
          <p className="custom-muted-description custom-margin-after-title mb-8 lg:mb-0">
            {dictionary.landingPage.cta.description}
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto" asChild>
            <LocalizeLink href="#main" lang={lang}>
              {dictionary.landingPage.cta.requestDemoButton}
            </LocalizeLink>
          </Button>

          <Button variant="outline" className="w-full md:w-auto" asChild>
            <LocalizeLink href="#features" lang={lang}>
              {dictionary.landingPage.cta.viewAllFeaturesButton}
            </LocalizeLink>
          </Button>
        </div>
      </div>
    </UniqueSection>
  );
};
