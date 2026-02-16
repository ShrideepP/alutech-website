import type { Metadata } from "next";
import { ReactLenis } from "@/lib/lenis";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aluminium Windows & Doors in Belagavi | Premium Aluminium Systems",
  description:
    "Premium aluminium window and door systems in Belagavi. Custom-built solutions for residential and commercial projects. Call or WhatsApp for a free consultation.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className="bg-background-100 font-family-sans text-text-100 relative min-h-screen w-full overflow-x-hidden antialiased">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
