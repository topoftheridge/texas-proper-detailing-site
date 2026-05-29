"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, X, ChevronDown } from "lucide-react";
import { locations } from "@/data/locations";

// [[NAVBAR]]
// - Replace /logoheader.png with the business logo file (drop it in /public)
// - (832) 566-4579 = formatted phone e.g. "(407) 801-6482"
// - +18325664579    = digits only e.g. "+14078016482"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center shrink-0">
            {/* [[LOGO]] — Replace src with your logo file in /public */}
            <Image src="/logoheader.png" alt="Texas Proper Detailing" width={180} height={60} className="h-12 lg:h-16 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-end flex-1 ml-12">
            <div className="flex items-center gap-14 mr-auto ml-8">
              <Link href="/" className="text-white text-lg hover:text-primary transition font-medium tracking-wide">Home</Link>
              <Link href="/about" className="text-white text-lg hover:text-primary transition font-medium tracking-wide">About</Link>
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-white text-lg hover:text-primary transition font-medium tracking-wide flex items-center gap-1">
                  Services <ChevronDown className="w-5 h-5" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="bg-dark-lighter border border-white/10 rounded-lg shadow-xl py-2 w-64">
                      <Link href="/services/full-detail-package" className="block px-4 py-2.5 text-base text-gray-300 hover:bg-primary/20 hover:text-primary transition">Complete Detail Package</Link>
                      <Link href="/services/interior-detailing" className="block px-4 py-2.5 text-base text-gray-300 hover:bg-primary/20 hover:text-primary transition">Interior Detailing</Link>
                      <Link href="/services/exterior-detailing" className="block px-4 py-2.5 text-base text-gray-300 hover:bg-primary/20 hover:text-primary transition">Exterior Detailing</Link>
                      <Link href="/services/paint-protection" className="block px-4 py-2.5 text-base text-gray-300 hover:bg-primary/20 hover:text-primary transition">Paint Enhancement &amp; Protection</Link>
                      {/* [[EXTRA_SERVICES]] — Add more service links here if needed */}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button className="text-white text-lg hover:text-primary transition font-medium tracking-wide flex items-center gap-1">
                  Areas <ChevronDown className="w-5 h-5" />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="bg-dark-lighter border border-white/10 rounded-lg shadow-xl py-2 w-56">
                      {locations.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/${loc.slug}`}
                          className="block px-4 py-2.5 text-base text-gray-300 hover:bg-primary/20 hover:text-primary transition"
                        >
                          {loc.name}, TX
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link href="/contact" className="text-white text-lg hover:text-primary transition font-medium tracking-wide">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:+18325664579" className="text-white hover:text-primary transition font-bold text-lg flex items-center gap-1.5">
                <Phone className="w-5 h-5" />
                (832) 566-4579
              </a>
              <Link
                href="/get-quote"
                className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition shadow-sm"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          <button className="lg:hidden p-2 text-white relative w-10 h-10 flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className="flex flex-col items-center justify-center w-6 h-5 relative">
              <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute ${mobileOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`} />
              <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute top-1/2 -translate-y-1/2 ${mobileOpen ? "opacity-0 scale-0" : "opacity-100"}`} />
              <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute ${mobileOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMobileOpen(false)} />

    {/* Mobile Menu Panel */}
    <div className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-black/95 backdrop-blur-lg border-l border-white/10 z-[70] transform transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}>
      <div className="flex items-center justify-end p-5">
        <button className="p-2 text-white" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="px-6 pb-8 space-y-1">
        <Link href="/" className="block py-3 font-medium text-lg text-white hover:text-primary transition border-b border-white/5" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/about" className="block py-3 font-medium text-lg text-white hover:text-primary transition border-b border-white/5" onClick={() => setMobileOpen(false)}>About</Link>

        {/* Services Accordion */}
        <div className="border-b border-white/5">
          <button className="w-full py-3 font-medium text-lg text-white hover:text-primary transition flex items-center justify-between" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
            Services
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-64 pb-3" : "max-h-0"}`}>
            <div className="pl-4 space-y-2">
              <Link href="/services/full-detail-package" className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>Complete Detail Package</Link>
              <Link href="/services/interior-detailing" className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>Interior Detailing</Link>
              <Link href="/services/exterior-detailing" className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>Exterior Detailing</Link>
              <Link href="/services/paint-protection" className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>Paint Enhancement &amp; Protection</Link>
              {/* [[EXTRA_SERVICES_MOBILE]] */}
            </div>
          </div>
        </div>

        {/* Areas Accordion */}
        <div className="border-b border-white/5">
          <button className="w-full py-3 font-medium text-lg text-white hover:text-primary transition flex items-center justify-between" onClick={() => setMobileAreasOpen(!mobileAreasOpen)}>
            Areas Served
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileAreasOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileAreasOpen ? "max-h-96 pb-3" : "max-h-0"}`}>
            <div className="pl-4 space-y-2">
              {locations.map((loc) => (
                <Link key={loc.slug} href={`/${loc.slug}`} className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>
                  {loc.name}, TX
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/contact" className="block py-3 font-medium text-lg text-white hover:text-primary transition border-b border-white/5" onClick={() => setMobileOpen(false)}>Contact</Link>

        <div className="pt-4 space-y-3">
          <a href="tel:+18325664579" className="flex items-center gap-2 font-bold text-white text-lg hover:text-primary transition">
            <Phone className="w-5 h-5" /> (832) 566-4579
          </a>
          <Link href="/get-quote" className="block text-center bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-dark transition" onClick={() => setMobileOpen(false)}>BOOK NOW</Link>
        </div>
      </div>
    </div>
    </>
  );
}
