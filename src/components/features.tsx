// import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <section id="features" className="container custom-section-padding">
      <h2 className="custom-h2 md:text-center">
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
          ({ h3, description, image }) => (
            <Card key={h3}>
              <CardHeader>
                <CardTitle>{h3}</CardTitle>
              </CardHeader>

              <CardContent>{description}</CardContent>

              <CardFooter>
                <img
                  src={image}
                  alt="About feature"
                  className="w-[200px] lg:w-[300px] mx-auto"
                />
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
