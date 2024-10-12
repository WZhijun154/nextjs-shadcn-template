import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";

import { Section } from "@/components/section";

export const Services = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  return (
    <Section>
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="custom-h2">
            {/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services */}
            {dictionary.landingPage.services.h2}
          </h2>

          <p className="custom-muted-description custom-margin-after-title">
            {dictionary.landingPage.services.description}
          </p>

          <div className="flex flex-col gap-8 custom-margin-after-description">
            {dictionary.landingPage.services.items.map(
              ({ h3, description, icon }) => (
                <Card key={h3}>
                  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                      {icon}
                    </div>
                    <div>
                      <CardTitle>{h3}</CardTitle>
                      <CardDescription className="text-md mt-2">
                        {description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            )}
          </div>
        </div>
        <img
          src="/cube-leg.png"
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </Section>
  );
};
