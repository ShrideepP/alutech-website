import { Phone, MessageCircle } from "lucide-react";

export default function ComingSoonPage() {
  // Contact details - replace with actual values
  const phoneNumber = "+919071573153";
  const whatsappNumber = "+919071573153";
  const displayPhone = "+91 90715 73153";

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-center">
        {/* Logo/Brand mark placeholder */}
        <div className="mb-12">
          <div className="inline-block px-6 py-2 border border-neutral-300 text-neutral-700 text-sm tracking-widest font-light">
            PREMIUM ALUMINIUM
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 mb-6 tracking-tight leading-tight">
          Redefining Modern
          <span className="block mt-2">Architecture</span>
        </h1>

        {/* Supporting copy */}
        <p className="text-lg md:text-xl text-neutral-600 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          Premium aluminium windows and doors engineered for contemporary
          living. Precision crafted, energy efficient, and built to last.
        </p>

        {/* Coming Soon badge */}
        <div className="inline-block mb-12">
          <span className="text-sm uppercase tracking-widest text-neutral-500 font-medium px-4 py-2 border border-neutral-300 rounded-full">
            Coming Soon
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-none hover:bg-neutral-800 transition-colors duration-200 w-full sm:w-auto justify-center"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            <span className="font-medium">WhatsApp</span>
          </a>

          {/* Call button */}
          <a
            href={`tel:${phoneNumber}`}
            className="group inline-flex items-center gap-3 border-2 border-neutral-900 text-neutral-900 px-8 py-4 rounded-none hover:bg-neutral-900 hover:text-white transition-colors duration-200 w-full sm:w-auto justify-center"
            aria-label={`Call us at ${displayPhone}`}
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            <span className="font-medium">Call Now</span>
          </a>
        </div>

        {/* Phone number display */}
        <p className="mt-8 text-neutral-500 text-sm">{displayPhone}</p>

        {/* Bottom spacing */}
        <div className="mt-20 pt-8 border-t border-neutral-200">
          <p className="text-xs text-neutral-400 uppercase tracking-wider">
            Excellence in Every Detail
          </p>
        </div>
      </div>
    </main>
  );
}
