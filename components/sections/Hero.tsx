"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  const isMobile = useMediaQuery(768);

  return (
    <section className="bg-background-200 relative overflow-hidden pt-20 md:py-36">
      <div className="absolute top-0 right-0 left-0 grid grid-cols-10">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="border-background-300 h-16 w-full border-r border-b border-dashed md:h-20"
          />
        ))}
      </div>

      <div className="w-full px-6">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10">
          <div className="flex w-full max-w-150 flex-col gap-5">
            <span className="text-label label text-primary-100 inline-flex p-1">
              // Aluminium Windows & Doors [City]
            </span>

            <h1 className="text-h1 text-text-100">
              Premium Aluminium <br className="hidden md:block" />
              Window & Door Systems
            </h1>

            <p className="text-body-l text-text-200 font-medium">
              Precision-engineered solutions designed for strength, performance,
              and modern architecture.
            </p>
          </div>

          <a href="https://wa.me/919071573153" target="_blank">
            <Button type="button">WhatsApp Us</Button>
          </a>
        </div>
      </div>

      <Image
        src={isMobile ? "/hero-mobile.png" : "/hero-desktop.png"}
        alt="Modern luxury residential building with clean lines, large glass windows, and glass balcony railings."
        width={isMobile ? 402 : 752}
        height={isMobile ? 402 : 616}
        className="relative top-0 right-0 aspect-square h-auto w-full md:absolute md:aspect-auto md:h-full md:w-auto"
      />
    </section>
  );
};
