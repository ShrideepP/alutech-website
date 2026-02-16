"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="border-background-300 bg-background-100 sticky top-0 z-50 flex h-18 w-full items-center border-b border-dashed px-6 lg:h-20">
      <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
        <Image
          src="/images/logo.png"
          alt="Alutech logo"
          width={140}
          height={48}
          className="h-10 w-auto lg:h-12"
        />

        <div className="hidden items-center gap-10 lg:flex">
          <a
            href="#products"
            className="text-nav hover:text-text-200 transition-colors"
          >
            Systems
          </a>

          <a
            href="#why-alutech"
            className="text-nav hover:text-text-200 transition-colors"
          >
            Why Alutech
          </a>

          <a
            href="#benefits"
            className="text-nav hover:text-text-200 transition-colors"
          >
            Benefits
          </a>

          <a
            href="#applications"
            className="text-nav hover:text-text-200 transition-colors"
          >
            Applications
          </a>

          <a
            href="#process"
            className="text-nav hover:text-text-200 transition-colors"
          >
            Process
          </a>

          <a href="https://wa.me/919071573153" target="_blank">
            <Button type="button">WhatsApp Us</Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenu(!menu)}
          className="bg-accent-200 relative grid h-10 w-10 place-items-center rounded-full lg:hidden"
        >
          <span className="relative inline-block h-4 w-4">
            <span
              className={`bg-text-100 absolute left-2/4 -translate-x-2/4 ${menu ? "top-2/4 origin-center -translate-2/4 rotate-45" : "top-1"} inline-block h-0.5 w-4 transition-all`}
            />

            <span
              className={`bg-text-100 absolute left-2/4 -translate-x-2/4 ${menu ? "top-2/4 origin-center -translate-2/4 -rotate-45" : "bottom-1"} inline-block h-0.5 w-4 transition-all`}
            />
          </span>
        </button>
      </nav>

      <div className="bg-background-100 absolute inset-0 -z-10" />

      <div
        className={`bg-background-100 mx-auto w-full max-w-7xl ${menu ? "translate-y-0" : "-translate-y-full"} border-background-300 absolute top-full left-0 -z-50 flex h-fit w-full flex-col border-y border-dashed transition-transform duration-500 lg:hidden`}
      >
        <a
          href="#products"
          onClick={() => setMenu(!menu)}
          className="border-background-300 text-nav border-b border-dashed p-6"
        >
          Systems
        </a>

        <a
          href="#why-alutech"
          onClick={() => setMenu(!menu)}
          className="border-background-300 text-nav border-b border-dashed p-6"
        >
          Why Alutech
        </a>

        <a
          href="#benefits"
          onClick={() => setMenu(!menu)}
          className="border-background-300 text-nav border-b border-dashed p-6"
        >
          Benefits
        </a>

        <a
          href="#applications"
          onClick={() => setMenu(!menu)}
          className="border-background-300 text-nav border-b border-dashed p-6"
        >
          Applications
        </a>

        <a
          href="#process"
          onClick={() => setMenu(!menu)}
          className="border-background-300 text-nav border-b border-dashed p-6"
        >
          Process
        </a>

        <div className="w-full p-6">
          <a href="https://wa.me/919071573153" target="_blank">
            <Button type="button">WhatsApp Us</Button>
          </a>
        </div>
      </div>
    </header>
  );
};
