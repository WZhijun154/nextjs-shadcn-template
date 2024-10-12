import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";

export const HowItWorks = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  return (
    <section
      id="howItWorks"
      className="container text-center custom-section-padding"
    >
      <h2 className="custom-h2">
        {/* How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide */}
        {dictionary.landingPage.howItWorks.h2}
      </h2>
      <p className="custom-muted-description md:w-3/4 mx-auto custom-margin-after-title">
        {dictionary.landingPage.howItWorks.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 custom-margin-after-description">
        {dictionary.landingPage.howItWorks.steps.map(
          ({ icon, h3, description }) => (
            <Card key={h3} className="bg-muted/50">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  {icon}
                  {h3}
                </CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
