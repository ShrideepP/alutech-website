import { landingPageContent } from "@/app/(landing)/content";
import { SectionHeading } from "@/components/ui/section-heading";

export const BenefitCards = () => {
  const { benefits } = landingPageContent;

  return (
    <section
      id="benefits"
      className="border-background-300 h-fit w-full border-b border-dashed py-20 lg:border-0 lg:pt-36 lg:pb-0"
    >
      <div className="border-background-300 border-b border-dashed px-6">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading badge={benefits.badge}>
            Performance That Delivers <br className="hidden lg:inline-block" />{" "}
            Long-Term Value
          </SectionHeading>
        </div>
      </div>

      <div className="border-background-300 relative grid grid-cols-1 border-dashed lg:grid-cols-2 lg:border-b lg:py-10">
        <hr className="border-background-300 absolute top-0 bottom-0 left-2/4 hidden h-full w-0 -translate-x-2/4 border-r border-dashed lg:block" />

        <div className="w-full">
          {benefits.items.map(({ icon: Icon, title, description }, index) =>
            index % 2 == 0 ? (
              <div
                key={index}
                className="border-background-300 flex justify-end border-b border-dashed py-10 lg:border-b-0 lg:ps-6 lg:first:border-b"
              >
                <div className="w-full max-w-160 space-y-8 px-6 lg:px-0 lg:pe-10">
                  <Icon weight="thin" className="size-10 lg:size-12" />

                  <div className="space-y-2">
                    <h5 className="text-heading-xs">{title}</h5>
                    <p className="text-body-m-regular text-text-200">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>

        <div className="w-full">
          {benefits.items.map(({ icon: Icon, title, description }, index) =>
            index % 2 != 0 ? (
              <div
                key={index}
                className={`border-background-300 flex justify-start border-dashed pt-10 first:border-b first:pb-10 lg:pe-6`}
              >
                <div className="w-full max-w-160 space-y-8 px-6 lg:px-0 lg:ps-10">
                  <Icon weight="thin" className="size-10 lg:size-12" />

                  <div className="space-y-2">
                    <h5 className="text-heading-xs">{title}</h5>
                    <p className="text-body-m-regular text-text-200">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
};
