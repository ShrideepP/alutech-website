import { FC } from "react";
import { SectionBadge } from "./section-badge";

interface SectionHeadingProps {
  badge: string;
  children: React.ReactNode;
  description?: string;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  badge,
  children,
  description,
}) => {
  return (
    <div className="space-y-3 pb-10 lg:space-y-5 lg:pb-20">
      <SectionBadge>{badge}</SectionBadge>
      <h2 className="text-heading-l">{children}</h2>
      {description && (
        <p className="text-body-l-medium text-text-200">{description}</p>
      )}
    </div>
  );
};
