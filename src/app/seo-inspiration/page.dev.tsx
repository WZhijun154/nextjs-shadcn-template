import { Hero } from "@/components/hero";
import { Sponsors } from "@/components/sponsors";
import { About } from "@/components/about";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Services } from "@/components/services";
import { Cta } from "@/components/cta";
import { Testimonials } from "@/components/testimonials";
import { Team } from "@/components/team";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";

export default function DemoPage() {
  return (
    <>
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
