"use client";

import { landingPageContent } from "@/app/(landing)/content";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "@/lib/use-prev-next-buttons";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

export const Testimonials = () => {
  const { testimonials } = landingPageContent;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section
      id="testimonials"
      className="border-background-300 h-fit w-full border-b border-dashed py-20 lg:pt-36 lg:pb-0"
    >
      <div className="border-background-300 border-b border-dashed px-6">
        <div className="mx-auto w-full max-w-7xl grid-cols-2 lg:grid">
          <SectionHeading badge={testimonials.badge}>
            Trusted Across Residential <br className="hidden lg:inline-block" />{" "}
            and Commercial Projects
          </SectionHeading>

          <div className="hidden items-end justify-end gap-3 pb-20 lg:flex">
            <button
              type="button"
              onClick={onPrevButtonClick}
              className="border-background-300 grid size-12 cursor-pointer place-items-center rounded-full border"
            >
              <ArrowLeftIcon weight="regular" className="size-6" />
            </button>

            <button
              type="button"
              onClick={onNextButtonClick}
              className="border-background-300 grid size-12 cursor-pointer place-items-center rounded-full border"
            >
              <ArrowRightIcon weight="regular" className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <hr className="border-background-300 absolute top-0 bottom-0 left-2/4 hidden h-full w-0 -translate-x-2/4 border-r border-dashed lg:block" />

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {testimonials.items.map(
              ({ author, profession, content }, index) => (
                <div
                  key={index}
                  className={`flex min-w-0 px-6 lg:px-0 ${index % 2 == 0 ? "justify-end lg:ps-6" : "lg:pe-6"} flex-[0_0_100%] py-10 lg:flex-[0_0_50%]`}
                >
                  <div
                    className={`max-w-160 ${index % 2 == 0 ? "lg:pe-10" : "lg:ps-10"} space-y-8 lg:py-8`}
                  >
                    <p className="text-body-l-medium text-text-200">
                      {content}
                    </p>

                    <div className="space-y-1">
                      <h6 className="text-body-l-medium">{author}</h6>
                      <span className="text-text-200 text-body-m-regular block">
                        {profession}
                      </span>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="flex gap-2 px-6 lg:hidden">
          <button
            type="button"
            onClick={onPrevButtonClick}
            className="border-background-300 grid size-10 cursor-pointer place-items-center rounded-full border"
          >
            <ArrowLeftIcon weight="regular" className="size-5" />
          </button>

          <button
            type="button"
            onClick={onNextButtonClick}
            className="border-background-300 grid size-10 cursor-pointer place-items-center rounded-full border"
          >
            <ArrowRightIcon weight="regular" className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
