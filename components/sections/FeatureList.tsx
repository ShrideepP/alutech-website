"use client";

import type { FC } from "react";
import type { Icon } from "@phosphor-icons/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FeatureItem {
  title: string;
  description: string;
  icon: Icon;
}

interface FeatureListProps {
  badge: string;
  heading: React.ReactNode;
  description?: string;
  items: FeatureItem[];
}

export const FeatureList: FC<FeatureListProps> = ({
  badge,
  heading,
  description,
  items,
}) => {
  return (
    <section className="border-background-300 relative grid gap-10 border-t border-dashed pt-20 pb-10 md:grid-cols-2 md:gap-0 md:pt-36">
      <hr className="border-background-300 absolute top-0 bottom-0 left-2/4 hidden h-full w-0 -translate-x-2/4 border-r border-dashed md:block" />

      <div className="border-background-300 flex w-full justify-end border-b border-dashed ps-6 pb-10 md:border-0 md:pb-0">
        <div className="w-full max-w-160 pe-6">
          <SectionHeading
            badge={badge}
            children={heading}
            description={description}
          />
        </div>
      </div>

      <div className="w-full">
        {items.map(({ title, description, icon: Icon }, index) => (
          <div
            key={index}
            style={{ borderBottomWidth: index == items.length - 1 ? 0 : "1px" }}
            className="border-background-300 border-b border-dashed py-8 pe-6 md:pe-10"
          >
            <div className="flex w-full max-w-160 gap-4 ps-6 md:gap-0 md:ps-10">
              <div className="flex flex-col gap-4">
                <h5 className="text-h5">{title}</h5>

                <p className="text-body-m text-text-200">{description}</p>
              </div>

              <div className="h-fit w-fit md:size-25">
                <Icon className="size-12" weight="thin" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
