import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const CtaBanner = () => {
  return (
    <section className="px-6 py-10 md:py-20">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 overflow-hidden rounded px-6 py-20">
        <Image
          src="/glass-office-cta.jpg"
          alt="Modern glass office building at sunset."
          fill
          className="absolute inset-0 object-cover object-center"
        />

        <div className="bg-text-100/48 absolute inset-0" />

        <h2 className="text-h2 text-background-100 relative text-center">
          Upgrade Your Space with <br className="hidden md:block" />
          Premium Aluminium Systems
        </h2>

        <a
          href="https://wa.me/919071573153"
          target="_blank"
          className="relative"
        >
          <Button type="button">Request System Details</Button>
        </a>
      </div>
    </section>
  );
};
