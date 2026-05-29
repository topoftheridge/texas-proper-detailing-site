import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import HeroBackground from "@/components/HeroBackground";
import Link from "next/link";
import { locations } from "@/data/locations";
import { Sparkles, Shield, Clock, Droplets } from "lucide-react";

// [[HOMEPAGE]]
// Replace all [[PLACEHOLDER]] values below.

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Texas Proper Detailing",
    description: "Professional auto detailing in Spring, TX. Interior & exterior detailing, paint correction, waxing, and more.",
    url: "https://texasproperdetailing.co",
    telephone: "+18325664579",
    email: "texasproperdetailing@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Spring",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 30.0799, longitude: -95.4172 },
      // [[LAT_LNG]] — Find your coordinates at maps.google.com (right-click → "What's here?")
      geoRadius: "25000",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00", // Mo-Su 06:30-19:30 e.g. "Mo-Su 08:00-18:00"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroBackground>
        <Hero
          title="Texas Proper Detailing"
          subtitle="Mobile auto detailing in Spring, TX — we come to you for interior cleaning, exterior detailing, and full-service packages."
          // Mobile auto detailing in Spring, TX — we come to you for interior cleaning, exterior detailing, and full-service packages. e.g. "Professional auto detailing in [City], [State] — interior cleaning, exterior detailing, and full-service packages."
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 -mt-16">
          <QuoteForm />
        </div>
      </HeroBackground>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Texas Proper</p>
          {/* Texas Proper e.g. "Car Candy" or "Orlando Detailing" */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mb-16">
            Not your average<br />car wash.
          </h2>

          <div className="space-y-16">
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Sparkles className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">We Come to You</h3>
                {/* e.g. "Premium Products Only" */}
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">No need to drive anywhere. We bring professional-grade detailing equipment straight to your driveway, office, or wherever your vehicle is parked.</p>
                {/* e.g. "We use professional-grade detailing products — no shortcuts, no diluted sprays." */}
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Shield className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Proper Products, Every Time</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">We use professional-grade products — no shortcuts, no diluted sprays. Your car gets treated with the care it deserves.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Clock className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">7 Days a Week</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">Open Monday through Sunday, 6:30 AM to 7:30 PM. We work around your schedule so you don’t have to work around ours.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Droplets className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Same-Day Response</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">Fill out the form or call and we’ll get back to you same day. Fast, friendly, and professional — every time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From quick interior refreshes to full exterior restorations, we offer comprehensive mobile detailing packages for every vehicle.
            {/* e.g. "From deep interior cleaning to full exterior restoration, we offer comprehensive detailing packages." */}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interior Detailing Card — [[INTERIOR_CARD_IMAGE]] replace /interiorcard1.jpg */}
            <Link href="/services/interior-detailing" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/interiorcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Interior Detailing</h3>
                <p className="text-primary font-bold text-lg">Starting at $80</p>
                {/* e.g. "$90" */}
                <p className="text-gray-200 text-base leading-relaxed">Vacuuming, steam cleaning, dashboard & console wipe-down, upholstery treatment, and odor elimination.</p>
                {/* e.g. "Deep cleaning, stain removal, dashboard & console detailing, upholstery treatment." */}
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>

            {/* Exterior Detailing Card — [[EXTERIOR_CARD_IMAGE]] replace /exteriorcard1.jpg */}
            <Link href="/services/exterior-detailing" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/exteriorcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Exterior Detailing</h3>
                <p className="text-primary font-bold text-lg">Starting at $80</p>
                <p className="text-gray-200 text-base leading-relaxed">Hand wash, clay bar, wheel & tire shine, window cleaning, and protective wax or sealant.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>

            {/* Paint Card — [[PAINT_CARD_IMAGE]] replace /Paintcard1.jpg */}
            <Link href="/services/paint-protection" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Paintcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Paint Enhancement &amp;&nbsp;Protection</h3>
                <p className="text-primary font-bold text-lg">From $150</p>
                <p className="text-gray-200 text-base leading-relaxed">Paint decontamination, machine polish, and ceramic coating or wax protection for a long-lasting shine.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>
          </div>

          {/* Complete Detail Package CTA */}
          <Link href="/services/full-detail-package" className="group mt-8 block rounded-xl border border-white/10 hover:border-primary/50 transition bg-gradient-to-r from-dark-lighter to-dark-light p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Complete Detail Package</h3>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-3">Interior + Exterior detailing bundled together for a full vehicle refresh.</p>
                <p className="text-primary font-bold text-xl">Starting at $140</p>
                <p className="text-gray-400 text-sm mt-1">Final pricing depends on vehicle size and condition.</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg group-hover:bg-primary-dark transition text-lg">Get Exact Quote</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Areas We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Proudly serving Spring, The Woodlands, Tomball, Cypress, Conroe, Humble, and all surrounding communities across the greater Houston area.
            {/* e.g. "Proudly serving communities across Delaware County, Pennsylvania." */}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="p-4 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group"
              >
                <span className="text-white font-semibold group-hover:text-primary transition">{loc.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready for the <span className="text-primary">Proper Treatment</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            Call us today or fill out the form above for a free, no-obligation quote. We respond same day.
            {/* e.g. "Call us today or fill out the form above for a free, no-obligation quote." */}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18325664579" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              Call (832) 566-4579
            </a>
            <span className="text-gray-500">or</span>
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              GET A FREE QUOTE
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Spring, TX &nbsp;|&nbsp; Mon–Sun: 6:30 AM – 7:30 PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
