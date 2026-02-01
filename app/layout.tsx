import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Aluminium Windows & Doors | Coming Soon",
  description:
    "High-quality aluminium windows and doors for modern architecture. Opening soon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-family-sans bg-background-100 text-text-100 relative antialiased">
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
