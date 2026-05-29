import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// [[CONTACT_PAGE]]

export const metadata: Metadata = {
  title: "Contact Us | Texas Proper Detailing",
  description: "Get in touch with Texas Proper Detailing in Spring, TX. Call (832) 566-4579. Open Mon–Sun: 6:30 AM – 7:30 PM.",
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to give your vehicle the proper treatment? Reach out today and we will get back to you same day.
            {/* e.g. "Ready to give your vehicle the Car Candy treatment? Reach out today!" */}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: <Phone className="w-6 h-6" />, label: "Phone", content: (
                <a href="tel:+18325664579" className="text-white hover:text-primary transition font-semibold">(832) 566-4579</a>
              )},
              { icon: <Mail className="w-6 h-6" />, label: "Email", content: (
                <a href="mailto:texasproperdetailing@gmail.com" className="text-white hover:text-primary transition">texasproperdetailing@gmail.com</a>
              )},
              { icon: <MapPin className="w-6 h-6" />, label: "Location", content: <span className="text-white">Spring, TX</span> },
              { icon: <Clock className="w-6 h-6" />, label: "Hours", content: <span className="text-white">Mon–Sun: 6:30 AM – 7:30 PM</span> },
              {/* Mon–Sun: 6:30 AM – 7:30 PM e.g. "Monday – Sunday: 8:00 AM – 6:00 PM" */}
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-dark-lighter border border-white/5">
                <div className="text-primary mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-1">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg w-full sm:w-auto">
              Get a Free Quote
            </Link>
          </div>

          {/* [[MAP_EMBED]] — Replace the src with a Google Maps embed for the client's location.
              Go to Google Maps → share → embed a map → copy the iframe src URL */}
          <div className="rounded-xl overflow-hidden border border-white/10 h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d-95.4172!3d30.0799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA0JzQ3LjYiTiA5NcKwMjUnMDIuMiJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Texas Proper Detailing Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
