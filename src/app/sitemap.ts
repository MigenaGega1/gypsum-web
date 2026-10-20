import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: "", priority: 1 },
    { path: "/sherbimet", priority: 0.9 },
    { path: "/projektet", priority: 0.8 },
    { path: "/rreth-nesh", priority: 0.7 },
    { path: "/kontakt", priority: 0.8 },
  ];
  return [
    ...pages.map((p) => ({
      url: `${siteConfig.url}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${siteConfig.url}/sherbimet/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
