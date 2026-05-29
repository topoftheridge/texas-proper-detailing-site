import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// [[SEO_META]] — Fill in the business name, city, state, and primary services.
export const metadata: Metadata = {
  title: {
    default: "Texas Proper Detailing | Professional Auto Detailing in Spring, TX",
    template: "%s | Texas Proper Detailing",
  },
  description:
    "Professional auto detailing in Spring, TX. Interior & exterior detailing, paint correction, waxing, and more. Call (832) 566-4579.",
  keywords: [
    "auto detailing Spring TX",
    "car detailing Spring",
    "interior detailing Spring",
    "exterior detailing Spring",
    "Texas Proper Detailing",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
