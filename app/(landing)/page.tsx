import React from "react";
import { landingPageContent } from "./content";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { FeatureList } from "@/components/sections/feature-list";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { BenefitCards } from "@/components/sections/benefit-cards";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";

const LandingPage = () => {
  const { whyAlutech, applications, ctaBanner } = landingPageContent;
  return (
    <React.Fragment>
      <Hero />

      <FeatureList
        id="why-alutech"
        badge={whyAlutech.badge}
        items={whyAlutech.features}
      >
        Built for Performance. <br className="hidden lg:inline-block" />{" "}
        Designed for Modern Architecture.
      </FeatureList>

      <ProductShowcase />

      <div className="bg-background-200">
        <BenefitCards />

        <section
          id="upgrade-cta"
          className="border-background-300 h-fit w-full border-b border-dashed px-6 py-10 lg:py-20"
        >
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 overflow-hidden rounded px-6 py-20 lg:gap-10">
            <Image
              src="/images/glass-office-cta.png"
              alt="Modern glass office building at sunset."
              fill
              className="absolute inset-0 -z-10 object-cover object-center"
            />

            <div className="bg-text-100/48 absolute inset-0 -z-10" />

            <h2 className="text-heading-xl text-background-100 text-center">
              Ready to Upgrade <br className="hidden lg:inline-block" /> Your
              Windows & Doors?
            </h2>

            <a href={ctaBanner.cta.href} target="_blank">
              <Button type="button">{ctaBanner.cta.label}</Button>
            </a>
          </div>
        </section>

        <FeatureList
          id="applications"
          badge={applications.badge}
          description={applications.description}
          items={applications.items}
        >
          Aluminium Systems Designed <br className="hidden lg:inline-block" />{" "}
          for Every Building Context
        </FeatureList>
      </div>

      <ProcessSteps />

      <Testimonials />

      <CtaBanner />
    </React.Fragment>
  );
};

export default LandingPage;
