import { landingPageContent } from "@/app/(landing)/content";
import { SectionBadge } from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";

export const CtaBanner = () => {
  const { finalCta } = landingPageContent;

  return (
    <section
      id="get-started"
      className="border-background-300 relative h-fit w-full overflow-hidden border-b border-dashed px-6 py-20 lg:py-36"
    >
      <div className="absolute top-0 right-0 left-0 grid grid-cols-10">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="border-background-300 h-16 w-full border-r border-b border-dashed lg:h-20"
          />
        ))}
      </div>

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-8 lg:gap-10">
        <div className="space-y-3 text-center lg:space-y-5">
          <SectionBadge>{finalCta.badge}</SectionBadge>

          <h2 className="text-heading-xl">Let's Build Something Better</h2>

          <p className="text-body-l-medium text-text-200">
            {finalCta.description}
          </p>
        </div>

        <a href={finalCta.cta.href} target="_blank">
          <Button type="button">{finalCta.cta.label}</Button>
        </a>
      </div>
    </section>
  );
};
