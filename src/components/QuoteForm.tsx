"use client";

import { useState } from "react";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneDigits = phone.replace(/\D/g, "");
  const canSubmit = name.trim() && phoneDigits.length === 10 && zip.length === 5;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitting) {
    return (
      <div className="bg-dark-lighter border border-zinc-800 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative w-20 h-20 mb-4 animate-spin" style={{ animationDuration: "1.2s" }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="6" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#444" strokeWidth="2" />
              <circle cx="50" cy="50" r="8" fill="#888" />
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <line
                  key={angle}
                  x1="50"
                  y1="50"
                  x2={50 + 34 * Math.cos((angle * Math.PI) / 180)}
                  y2={50 + 34 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#555"
                  strokeWidth="3"
                />
              ))}
              <circle cx="50" cy="50" r="45" fill="none" stroke="#888" strokeWidth="8" strokeDasharray="20 10" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-white animate-pulse">Processing your request...</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-dark-lighter border border-zinc-800 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-900/50 border border-green-500/30 flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Request Received — We&apos;ll Be in Touch Shortly</h3>
          <p className="text-gray-400 text-sm text-center max-w-md mb-6">
            Thanks for contacting Car Candy Auto Detailing. A member of our team will reach out shortly to confirm your service details and provide accurate pricing for your vehicle in Delaware County, PA.
          </p>
          <div className="text-sm text-gray-400 text-center space-y-1">
            <p>
              Need immediate assistance? Call us at{" "}
              <a href="tel:+16107260151" className="text-primary font-semibold hover:text-primary-light transition">(610) 726-0151</a>
            </p>
            <p>
              Want to skip the wait?{" "}
              <a href="/contact" className="text-primary font-semibold underline hover:text-primary-light transition">Schedule your appointment now →</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="quote" className="bg-dark-lighter border border-zinc-800 rounded-2xl shadow-2xl max-w-2xl mx-auto overflow-hidden">
      <div className="bg-zinc-800 px-6 py-4">
        <h2 className="text-white font-bold text-lg">Get a Fast Quote</h2>
        <p className="text-gray-400 text-xs mt-0.5">Quick &amp; easy — no obligation</p>
      </div>

      <div className="p-6 lg:p-8 space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">Your Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-dark text-white outline-none transition text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Phone *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="(000) 000-0000"
              className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-dark text-white outline-none transition text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder-gray-600"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Zip Code *</label>
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
              placeholder="19014"
              className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-dark text-white outline-none transition text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder-gray-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">Vehicle Type (optional)</label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-dark text-white outline-none transition text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
          >
            <option value="">Select vehicle type</option>
            <option value="sedan">Sedan / Small Car</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
            <option value="luxury">Luxury / Exotic</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Get My Quote
        </button>

        <p className="text-[10px] text-gray-500 leading-snug">
          By submitting, you agree to receive calls and text messages related to your request. I understand that I can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
