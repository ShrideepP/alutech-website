"use client";

import { landingPageContent } from "@/app/(landing)/content";
import {
  motionValue,
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const ProductShowcase = () => {
  const {
    products: { badge, showcase },
  } = landingPageContent;

  const progressValues = useRef(showcase.map(() => motionValue(0))).current;

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="products"
      className="border-background-300 h-fit w-full border-b border-dashed py-20 lg:pt-36 lg:pb-0"
    >
      <div className="border-background-300 border-b border-dashed px-6">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading badge={badge}>
            Aluminium Systems Engineered{" "}
            <br className="hidden lg:inline-block" /> for Performance and
            Flexibility
          </SectionHeading>
        </div>
      </div>

      <div className="relative hidden w-full grid-cols-2 lg:grid">
        <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center justify-end py-10 ps-6">
          <div className="h-full w-full max-w-160 pe-10">
            <div className="relative h-full w-full">
              {showcase.map(({ image }, index) => (
                <AnimatedImage
                  key={index}
                  index={index}
                  image={image}
                  progress={progressValues[index]}
                />
              ))}
            </div>
          </div>
        </div>

        <hr className="border-background-300 absolute top-0 bottom-0 left-2/4 hidden h-full w-0 -translate-x-2/4 border-r border-dashed lg:block" />

        <div className="pe-6">
          <div className="w-full max-w-160 ps-10">
            {showcase.map((item, index) => (
              <ProductItem
                key={index}
                item={item}
                progressValue={progressValues[index]}
              />
            ))}
          </div>
        </div>
      </div>

      <div ref={containerRef} className="w-full lg:hidden">
        {showcase.map((item, index) => {
          const targetScale = 1 - (showcase.length - index) * 0.05;
          return (
            <StickyCard
              key={index}
              item={item}
              range={[index * (1 / (showcase.length - 1)), 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

const AnimatedImage = ({
  index,
  image,
  progress,
}: {
  index: number;
  image: {
    src: string;
    alt: string;
  };
  progress: MotionValue<number>;
}) => {
  const {
    products: { showcase },
  } = landingPageContent;

  const isLast = index == showcase.length - 1;

  const clip = useTransform(
    progress,
    [0, 1],
    isLast
      ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
      : ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
  );

  return (
    <motion.div
      style={{ zIndex: showcase.length - index, clipPath: clip }}
      className="absolute inset-x-0 top-2/4 h-fit w-full -translate-y-2/4 overflow-hidden rounded"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={1080}
        height={1440}
        className="h-auto w-full"
      />
    </motion.div>
  );
};

const ProductItem = ({
  item,
  progressValue,
}: {
  item: (typeof landingPageContent.products.showcase)[0];
  progressValue: MotionValue<number>;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80px", "end 80px"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progressValue.set(v);
  });

  return (
    <div
      ref={ref}
      className="flex h-[calc(100vh-5rem)] items-center justify-end"
    >
      <div className="space-y-10">
        <div className="space-y-4">
          <h5 className="text-heading-l">{item.title}</h5>
          <p className="text-body-m-regular">{item.description}</p>
        </div>

        <a href="https://wa.me/919071573153" target="_blank">
          <Button type="button">Request System Details</Button>
        </a>
      </div>
    </div>
  );
};

export const StickyCard = ({
  item,
  range,
  targetScale,
  progress,
}: {
  item: (typeof landingPageContent.products.showcase)[0];
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
}) => {
  const { image, title, description } = item;

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      style={{ scale }}
      className="bg-background-100 sticky top-18 flex flex-col gap-10 px-6 py-10"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="absolute inset-0 object-cover object-center"
        />
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h5 className="text-heading-l">{title}</h5>

          <p className="text-body-m-regular text-text-200">{description}</p>
        </div>

        <a href="https://wa.me/919071573153" target="_blank">
          <Button type="button">Request System Details</Button>
        </a>
      </div>
    </motion.div>
  );
};
