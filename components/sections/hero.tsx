import { landingPageContent } from "@/app/(landing)/content";
import { SectionBadge } from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  const { hero } = landingPageContent;

  return (
    <section
      id="hero"
      className="bg-background-200 border-background-300 relative h-fit w-full overflow-hidden border-b border-dashed pt-20 pb-0 lg:py-36"
    >
      <div className="absolute top-0 right-0 left-0 grid grid-cols-10">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="border-background-300 h-16 w-full border-r border-b border-dashed lg:h-20"
          />
        ))}
      </div>

      <div className="w-full px-6">
        <div className="relative mx-auto grid w-full max-w-7xl lg:grid-cols-2">
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-3 lg:space-y-5">
              <SectionBadge>{hero.badge}</SectionBadge>

              <h1 className="text-heading-xl">
                Premium Aluminium <br className="hidden lg:inline-block" />{" "}
                Window & Door Systems
              </h1>

              <p className="text-body-l-medium text-text-200">
                Precision-engineered solutions designed for strength,
                performance, and modern architecture.
              </p>
            </div>

            <a href={hero.cta.href} target="_blank">
              <Button type="button">{hero.cta.label}</Button>
            </a>
          </div>
        </div>
      </div>

      <Image
        src="/images/hero-desktop.png"
        alt="Modern multi-story building with large glass windows and balconies, viewed from below."
        width={2630}
        height={2154}
        className="absolute top-0 right-0 hidden h-full w-auto lg:block"
      />

      <Image
        src="/images/hero-mobile.png"
        alt="Contemporary building corner with tall glass windows and glass balcony panels against a white sky."
        width={3840}
        height={3840}
        className="relative aspect-square h-auto w-full lg:hidden"
      />
    </section>
  );
};
