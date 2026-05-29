import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Detailing | Texas Proper Detailing",
  description: "Professional exterior auto detailing in Spring, TX. Hand wash, wax, paint decontamination, tire & wheel cleaning. Starting at $80.",
};

export default function ExteriorDetailingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Exterior Detailing</h1>
          <p className="text-primary font-bold text-xl">Starting at $80</p>
          <p className="text-gray-400 mt-2">Final pricing depends on vehicle size and condition.</p>
          <p className="text-gray-300 mt-1">Most vehicles typically fall between $80–$160.</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Our exterior detail restores your vehicle&apos;s finish from the outside in. We hand wash, clay bar, degrease the wheels and tires, clean the glass, and apply a protective wax or sealant to keep your paint looking sharp. No automatic car wash shortcuts — just proper, methodical work.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Pre-rinse and hand wash",
            "Clay bar treatment (paint decontamination)",
            "Wheel and tire cleaning",
            "Tire dressing",
            "Door jamb cleaning",
            "Window cleaning (exterior)",
            "Chrome and trim detailing",
            "Wax or sealant application",
            "Final rinse and dry",
            "Paint inspection",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
            Get Your Free Quote
          </Link>
          <a href="tel:+18325664579" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
            <Phone className="w-5 h-5" /> Call (832) 566-4579
          </a>
        </div>

        {/* Other Services */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Explore Our Other Services</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <Link href="/services/full-detail-package" className="text-gray-400 hover:text-primary transition text-lg">Complete Detail Package →</Link>
            <Link href="/services/interior-detailing" className="text-gray-400 hover:text-primary transition text-lg">Interior Detailing →</Link>
            <Link href="/services/paint-protection" className="text-gray-400 hover:text-primary transition text-lg">Paint Enhancement &amp; Protection →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
