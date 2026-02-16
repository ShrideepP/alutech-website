import { landingPageContent } from "@/app/(landing)/content";
import { SectionHeading } from "@/components/ui/section-heading";

export const ProcessSteps = () => {
  const { process } = landingPageContent;

  return (
    <section
      id="process"
      className="border-background-300 h-fit w-full border-b border-dashed py-20 lg:pt-36 lg:pb-0"
    >
      <div className="border-background-300 border-b border-dashed px-6">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading
            badge={process.badge}
            description="Designed to keep projects efficient, transparent, and on schedule."
          >
            A Clear, Structured Approach{" "}
            <br className="hidden lg:inline-block" /> From Consultation to
            Completion
          </SectionHeading>
        </div>
      </div>

      <div className="w-full lg:px-6">
        <div className="border-background-300 mx-auto grid w-full max-w-7xl border-dashed md:grid-cols-2 lg:grid-cols-4 lg:border-x">
          {process.steps.map(({ number, title, description }, index) => (
            <div
              key={index}
              className="border-background-300 space-y-6 border-b border-dashed px-6 py-10 last:border-0 last:pb-0 md:px-8 lg:space-y-8 lg:border-r lg:border-b-0"
            >
              <span className="text-heading-l text-text-200 block font-light opacity-32">
                0{number}
              </span>

              <div className="space-y-3">
                <h5 className="text-heading-xs">{title}</h5>
                <p className="text-body-m-regular text-text-200">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
