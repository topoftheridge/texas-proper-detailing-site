import { MetadataRoute } from "next";
import { locations } from "@/data/locations";

// [[SITEMAP]] — Replace texasproperdetailing.co with the client's domain e.g. "https://example.com"
const BASE_URL = "https://texasproperdetailing.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/interior-detailing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/exterior-detailing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/paint-protection`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/full-detail-package`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  const locationPages = locations.map((loc) => ({
    url: `${BASE_URL}/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages];
}
