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

export default function Home() {
  return (
    <>
      <ShadowBackground />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
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
