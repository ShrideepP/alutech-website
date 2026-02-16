import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-background-200 h-fit w-full px-6">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 py-20 pb-10 lg:grid-cols-4 lg:pb-20">
        <div className="space-y-6">
          <Image
            src="/images/logo.png"
            alt="Alutech logo"
            width={140}
            height={48}
            className="h-10 w-auto lg:h-12"
          />

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/919071573153"
              target="_blank"
              className="text-body-m-medium"
            >
              Phone:{" "}
              <span className="underline hover:no-underline">
                +91 90715 73153
              </span>
            </a>

            <a
              href="https://wa.me/919071573153"
              target="_blank"
              className="text-body-m-medium"
            >
              WhatsApp:{" "}
              <span className="underline hover:no-underline">
                +91 90715 73153
              </span>
            </a>

            <span className="text-body-m-medium">
              Service Area:
              <br />
              Belagavi & Nearby Regions
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="text-body-l-medium">Quick Links</h6>

          <a
            href="#products"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            Systems
          </a>

          <a
            href="#why-alutech"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            Why Alutech
          </a>

          <a
            href="#benefits"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            Benefits
          </a>

          <a
            href="#applications"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            Applications
          </a>

          <a
            href="#process"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            Process
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="text-body-l-medium">Stay Connected</h6>

          <a
            href="https://www.instagram.com/alutech_system_windows/"
            target="_blank"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            Instagram
          </a>

          <a
            href="#"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            X (Twitter)
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="text-body-l-medium">Legal</h6>

          <a
            href="#"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-body-m-medium hover:text-text-200 transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>

      <div className="border-background-300 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-dashed py-10">
        <p className="text-body-m-medium">
          © 2025 Alutech. All rights reserved.
        </p>

        <p className="text-body-m-medium">
          Built with precision. Designed to perform.
        </p>
      </div>
    </footer>
  );
};
