// import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/section";
// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ];
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";

export const Features = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  return (
    <Section id="features">
      <h2 className="custom-h2 text-center">
        {/* Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span> */}
        {dictionary.landingPage.greatFeatures.h2}
      </h2>

      <p className="custom-muted-description text-center custom-margin-after-title">
        {dictionary.landingPage.greatFeatures.description}
      </p>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="custom-badge-text">
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 custom-margin-after-description">
        {dictionary.landingPage.greatFeatures.features.map(
          ({ h3, description, icon }) => (
            <Card key={h3}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  {icon}
                  <CardTitle>{h3}</CardTitle>
                </div>
              </CardHeader>

              <CardContent>{description}</CardContent>

              {/* <CardFooter> */}
              {/* </CardFooter> */}
            </Card>
          )
        )}
      </div>
    </Section>
  );
};
