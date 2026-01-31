import { type FC } from "react";

interface SectionHeadingProps {
  badge?: string;
  children: React.ReactNode;
  description?: React.ReactNode;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  badge,
  children,
  description,
}) => {
  return (
    <div className="flex flex-col gap-5">
      {badge && (
        <span className="text-label label text-primary-100 inline-flex p-1">
          {badge}
        </span>
      )}

      <h2 className="text-h2 text-text-100">{children}</h2>

      {description && (
        <p className="text-text-200 text-body-l font-medium">{description}</p>
      )}
    </div>
  );
};
