"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/icons";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background-200 border-background-300 sticky top-0 left-0 z-50 w-full border-b border-dashed px-6">
      <div className="bg-background-200 mx-auto flex w-full max-w-7xl items-center justify-between py-4">
        <Image
          src="/logo.png"
          alt="Alutech logo"
          width={141}
          height={48}
          className="h-10 w-auto md:h-12"
        />

        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#"
            className="text-nav text-text-100 hover:text-primary-100 inline-flex transition-colors"
          >
            Systems
          </a>

          <a
            href="#"
            className="text-nav text-text-100 hover:text-primary-100 inline-flex transition-colors"
          >
            Why Alutech
          </a>

          <a
            href="#"
            className="text-nav text-text-100 hover:text-primary-100 inline-flex transition-colors"
          >
            Benefits
          </a>

          <a
            href="#"
            className="text-nav text-text-100 hover:text-primary-100 inline-flex transition-colors"
          >
            Applications
          </a>

          <a
            href="#"
            className="text-nav text-text-100 hover:text-primary-100 inline-flex transition-colors"
          >
            Process
          </a>

          <a href="https://wa.me/919071573153" target="_blank">
            <Button type="button">WhatsApp Us</Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="bg-accent-200 text-text-100 grid size-10 cursor-pointer place-items-center rounded-full md:hidden"
        >
          {open ? (
            <Icons.x className="size-6" />
          ) : (
            <Icons.equals className="size-6" />
          )}
        </button>
      </div>

      <div
        className={`border-background-300 bg-background-100 absolute top-full left-0 -z-10 flex h-fit w-full ${open ? "translate-y-0" : "-translate-y-full"} flex-col gap-6 border-y border-dashed pb-6 transition-transform duration-500 md:hidden`}
      >
        <div className="flex flex-col">
          <a
            href="#"
            onClick={() => setOpen(!open)}
            className="border-background-300 text-nav text-text-100 inline-flex w-full border-b border-dashed p-6"
          >
            Systems
          </a>

          <a
            href="#"
            onClick={() => setOpen(!open)}
            className="border-background-300 text-nav text-text-100 inline-flex w-full border-b border-dashed p-6"
          >
            Why Alutech
          </a>

          <a
            href="#"
            onClick={() => setOpen(!open)}
            className="border-background-300 text-nav text-text-100 inline-flex w-full border-b border-dashed p-6"
          >
            Benefits
          </a>

          <a
            href="#"
            onClick={() => setOpen(!open)}
            className="border-background-300 text-nav text-text-100 inline-flex w-full border-b border-dashed p-6"
          >
            Applications
          </a>

          <a
            href="#"
            onClick={() => setOpen(!open)}
            className="border-background-300 text-nav text-text-100 inline-flex w-full border-b border-dashed p-6"
          >
            Process
          </a>
        </div>

        <div className="ps-6">
          <a href="https://wa.me/919071573153" target="_blank">
            <Button type="button">WhatsApp Us</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
