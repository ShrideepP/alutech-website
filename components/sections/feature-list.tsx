import { type Icon } from "@phosphor-icons/react";
import { FC } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

interface FeatureItem {
  icon: Icon;
  title: string;
  description: string;
}

interface FeatureListProps {
  id: string;

  badge: string;
  children: React.ReactNode;
  description?: string;
  items: FeatureItem[];
}

export const FeatureList: FC<FeatureListProps> = ({
  id,
  badge,
  children,
  description,
  items,
}) => {
  return (
    <section
      id={id}
      className="border-background-300 relative grid h-fit w-full grid-cols-1 border-b border-dashed py-20 lg:grid-cols-2 lg:pt-36 lg:pb-10"
    >
      <hr className="border-background-300 absolute top-0 bottom-0 left-2/4 hidden h-full w-0 -translate-x-2/4 border-r border-dashed lg:block" />

      <div className="border-background-300 flex w-full justify-end border-b border-dashed px-6 lg:border-none lg:px-0 lg:ps-6">
        <div className="w-full max-w-160 lg:pe-10">
          <SectionHeading badge={badge} description={description}>
            {children}
          </SectionHeading>
        </div>
      </div>

      <div className="w-full">
        {items.map(({ title, description, icon: Icon }, index) => (
          <div
            key={index}
            style={{ borderBottomWidth: index == items.length - 1 ? 0 : "1px" }}
            className="border-background-300 border-b border-dashed py-10 last:pb-0 lg:pe-6 lg:last:pb-10"
          >
            <div className="flex w-full max-w-160 gap-6 px-6 lg:gap-0 lg:px-0 lg:ps-10">
              <div className="space-y-3 lg:space-y-4">
                <h5 className="text-heading-xs">{title}</h5>

                <p className="text-body-m-regular text-text-200">
                  {description}
                </p>
              </div>

              <div className="flex h-fit w-fit justify-end lg:min-h-25 lg:min-w-25">
                <Icon weight="thin" className="size-10 lg:size-12" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
