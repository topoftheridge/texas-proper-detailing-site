import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Paint Enhancement & Protection | Texas Proper Detailing",
  description: "Paint correction, wax, compound buff, ceramic coating and more in Spring, TX. Texas Proper Detailing — add-on protection services.",
};

export default function PaintProtectionPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Paint Enhancement &amp; Protection</h1>
          <p className="text-primary font-bold text-xl">From $150</p>
          <p className="text-gray-400 mt-2">Add these to any detail or book standalone.</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Take your detail to the next level with paint enhancement and protection services. Whether you want a deep machine polish to bring back your paint&apos;s clarity, or a ceramic coating to protect it for years to come, we have the right solution for your vehicle and budget.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Available Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { name: "Paint Decontamination", price: "$50+", desc: "Clay bar treatment to remove bonded contaminants from the paint surface before polishing or coating." },
            { name: "Machine Polish / Compound Buff", price: "$150+", desc: "Single-stage machine polish to remove light swirl marks, water spots, and oxidation. Restores gloss and clarity." },
            { name: "Carnauba Wax", price: "$60+", desc: "Hand-applied carnauba wax for a warm, deep shine and 3–6 months of paint protection." },
            { name: "Ceramic Coating", price: "Call for quote", desc: "Long-term paint protection (1–3+ years) that repels water, UV, and contaminants. Keeps your car cleaner, longer." },
          ].map((addon) => (
            <div key={addon.name} className="flex flex-col justify-between p-5 rounded-lg bg-dark-lighter border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium text-lg">{addon.name}</span>
                <span className="text-primary font-bold text-lg">{addon.price}</span>
              </div>
              <p className="text-gray-500 text-sm">{addon.desc}</p>
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
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition text-lg">Exterior Detailing →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
