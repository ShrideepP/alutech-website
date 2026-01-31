import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icons } from "@/components/icons";

export const BenefitCards = () => {
  return (
    <section className="border-background-300 relative border-t border-dashed pt-20 md:pt-36">
      <div className="border-background-300 border-b border-dashed px-6 pb-10 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="// Benefits"
            children={
              <span>
                Performance That Delivers <br className="hidden md:block" />
                Long-Term Value
              </span>
            }
          />
        </div>
      </div>

      <div className="border-background-300 relative border-b border-dashed py-10">
        <hr className="border-background-300 absolute top-0 bottom-0 left-2/4 hidden h-full w-0 -translate-x-2/4 border-r border-dashed md:block" />

        <div className="grid md:grid-cols-2">
          <div className="border-background-300 flex w-full justify-end border-b border-dashed">
            <div className="flex w-full max-w-160 flex-col gap-8 px-6 py-8 md:px-0 md:pe-10">
              <Icons.shieldCheck className="size-12" weight="thin" />

              <div className="flex flex-col gap-2">
                <h5 className="text-h5">Structural Strength</h5>

                <p className="text-body-m text-text-200">
                  Communicates strength, safety, and reliability—key outcomes of
                  structurally sound aluminium systems.
                </p>
              </div>
            </div>
          </div>

          <div className="border-background-300 w-full border-b border-dashed">
            <div className="flex w-full max-w-160 flex-col gap-8 px-6 py-8 md:px-0 md:ps-10">
              <Icons.cloudRain className="size-12" weight="thin" />

              <div className="flex flex-col gap-2">
                <h5 className="text-h5">Weather Resistance</h5>

                <p className="text-body-m text-text-200">
                  Represents exposure to rain and harsh conditions, aligning
                  cleanly with protection from environmental elements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="border-background-300 flex w-full justify-end border-b border-dashed md:border-0">
            <div className="flex w-full max-w-160 flex-col gap-8 px-6 py-8 md:px-0 md:pe-10">
              <Icons.wrench className="size-12" weight="thin" />

              <div className="flex flex-col gap-2">
                <h5 className="text-h5">Low Maintenance</h5>

                <p className="text-body-m text-text-200">
                  A straightforward symbol for upkeep and maintenance; paired
                  with concise copy, it clearly implies reduced effort over
                  time.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex w-full max-w-160 flex-col gap-8 px-6 py-8 md:px-0 md:ps-10">
              <Icons.frameCorners className="size-12" weight="thin" />

              <div className="flex flex-col gap-2">
                <h5 className="text-h5">Modern Aesthetic</h5>

                <p className="text-body-m text-text-200">
                  Suggests structure, clean geometry, and framing—well aligned
                  with modern architectural design and slim-profile systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
