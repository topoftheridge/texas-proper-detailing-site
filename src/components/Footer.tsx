import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { locations } from "@/data/locations";

// [[FOOTER]]
// Fill in: BUSINESS_NAME, CITY, STATE, PHONE_DISPLAY, PHONE_LINK, EMAIL, HOURS, INSTAGRAM_HANDLE

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              {/* [[FOOTER_LOGO]] — same logo file as navbar */}
              <Image src="/logoheader.png" alt="Texas Proper Detailing" width={160} height={55} className="h-12 w-auto" />
            </div>
            <p className="text-sm mb-4">Professional mobile auto detailing in Spring, TX and surrounding areas. We bring your vehicle back to life.</p>
            {/* e.g. "Professional auto detailing in [City], [State]. We bring your vehicle back to life." */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Spring, TX</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Mon–Sun: 6:30 AM – 7:30 PM</div>
              {/* e.g. "Mon–Sun: 8 AM – 6 PM" */}
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:+18325664579" className="hover:text-primary transition">(832) 566-4579</a></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href="mailto:texasproperdetailing@gmail.com" className="hover:text-primary transition">texasproperdetailing@gmail.com</a></div>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/full-detail-package" className="hover:text-primary transition">Complete Detail Package</Link></li>
              <li><Link href="/services/interior-detailing" className="hover:text-primary transition">Interior Detailing</Link></li>
              <li><Link href="/services/exterior-detailing" className="hover:text-primary transition">Exterior Detailing</Link></li>
              <li><Link href="/services/paint-protection" className="hover:text-primary transition">Paint Enhancement &amp; Protection</Link></li>
              {/* [[EXTRA_SERVICES_FOOTER]] — Add more if needed */}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-white font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2 text-sm">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/${loc.slug}`} className="hover:text-primary transition">{loc.name}, TX</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Texas Proper Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
