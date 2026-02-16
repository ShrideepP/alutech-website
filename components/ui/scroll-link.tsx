"use client";

import React from "react";
import { useLenis } from "@studio-freight/react-lenis";

const SCROLL_OFFSET = -72;
const SCROLL_DURATION = 0.5;

type ScrollLinkProps = {
  target: string;
  children: React.ReactNode;
};

export function ScrollLink({ target, children }: ScrollLinkProps) {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!lenis) return;

    const element = document.querySelector<HTMLElement>(target);

    if (!element) return;

    lenis.scrollTo(element, {
      offset: SCROLL_OFFSET,
      duration: SCROLL_DURATION,
      easing: (t: number): number => 1 - Math.pow(1 - t, 4),
    });
  };

  return (
    <a
      href={target}
      onClick={handleClick}
      className="text-nav hover:text-text-200 transition-colors"
    >
      {children}
    </a>
  );
}
