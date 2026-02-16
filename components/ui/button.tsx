import type { ButtonHTMLAttributes, FC } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-accent-200 group hover:bg-accent-100/80 inline-flex h-fit w-fit cursor-pointer items-center gap-4 rounded-full py-1 ps-6 pe-1 transition-colors"
    >
      <span className="text-button-m text-text-100 inline-flex">
        {children}
      </span>

      <span className="bg-background-100 grid size-10 place-items-center rounded-full">
        <ArrowRightIcon className="text-text-100 size-6 transition-transform group-hover:-rotate-45" />
      </span>
    </button>
  );
};
