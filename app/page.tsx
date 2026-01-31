"use client";

import { Fragment } from "react/jsx-runtime";
import { Hero } from "@/components/sections/Hero";
import { FeatureList } from "@/components/sections/FeatureList";
import { Icons } from "@/components/icons";
import { BenefitCards } from "@/components/sections/BenefitCards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <Fragment>
      <Hero />

      <FeatureList
        badge="// Why Alutech"
        heading={
          <span>
            Built for Performance. <br className="hidden md:block" /> Designed
            for Modern Architecture.
          </span>
        }
        items={[
          {
            title: "Precision Engineering",
            description:
              "Engineered aluminium systems delivering long-term durability, precise performance, and consistent quality across residential and commercial projects.",
            icon: Icons.target,
          },
          {
            title: "Custom System Solutions",
            description:
              "Custom-built solutions designed to match architectural intent while meeting functional requirements, site conditions, and project timelines.",
            icon: Icons.blueprint,
          },
          {
            title: "End-to-End Execution",
            description:
              "Experienced teams manage fabrication and installation with accuracy, coordination, and accountability from initial consultation to handover.",
            icon: Icons.screwdriver,
          },
          {
            title: "Proven Material Quality",
            description:
              "Premium materials and tested systems ensure weather resistance, thermal efficiency, and low maintenance throughout product lifespan.",
            icon: Icons.shieldCheck,
          },
        ]}
      />

      <div className="bg-background-200">
        <BenefitCards />

        <CtaBanner />

        <FeatureList
          badge="// Applications"
          heading={
            <span>
              Aluminium Systems Designed <br className="hidden md:block" /> for
              Every Building Context
            </span>
          }
          description="Solutions tailored to different project types, performance requirements, and architectural needs."
          items={[
            {
              title: "Residential Projects",
              description:
                "Ideal for homeowners and residential developers seeking durable, low-maintenance aluminium systems that enhance comfort, natural light, and modern living spaces.",
              icon: Icons.houseSimple,
            },
            {
              title: "Commercial Buildings",
              description:
                "Designed for offices, retail spaces, and commercial facilities that require reliable performance, clean aesthetics, and systems capable of handling high-traffic environments.",
              icon: Icons.buildings,
            },
            {
              title: "Architectural & High-Rise Developments",
              description:
                "Engineered for architects and developers working on complex, large-scale projects where structural integrity, design flexibility, and long-term performance are critical.",
              icon: Icons.buildingOffice,
            },
            {
              title: "Industrial Applications",
              description:
                "Built to perform in demanding industrial environments, offering strength, weather resistance, and dependable operation where durability and functionality matter most.",
              icon: Icons.factory,
            },
          ]}
        />
      </div>

      <section className="bg-background-200 border-background-300 relative overflow-hidden border-t border-dashed px-6 py-20 lg:py-36">
        <div className="absolute top-0 right-0 left-0 grid grid-cols-10">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="border-background-300 h-16 w-full border-r border-b border-dashed md:h-20"
            />
          ))}
        </div>

        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-10">
          <div className="flex w-full flex-col items-center gap-5 text-center">
            <span className="text-label label text-primary-100 inline-flex p-1">
              // Get Started
            </span>

            <h1 className="text-h1 text-text-100">
              Ready to Upgrade to
              <br className="hidden md:block" />
              Premium Aluminium Systems?
            </h1>

            <p className="text-body-l text-text-200 font-medium">
              Speak directly with our team to discuss your project requirements,
              system options, and next steps—quickly and without obligation.
            </p>
          </div>

          <a href="https://wa.me/919071573153" target="_blank">
            <Button type="button">WhatsApp Us Now</Button>
          </a>
        </div>
      </section>
    </Fragment>
  );
}
