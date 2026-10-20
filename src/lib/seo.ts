import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Appends the city for local SEO once it is configured, e.g. "Punime Gipsi në Tiranë". */
export function withCity(text: string) {
  const city = siteConfig.contact.city;
  return city ? `${text} në ${city}` : text;
}

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

/** Consistent per-page metadata: title, description, canonical URL and Open Graph. */
export function pageMetadata({ title, description, path, image, keywords }: PageMeta): Metadata {
  return {
    title,
    description,
    keywords: keywords ? [...keywords, ...siteConfig.keywords] : siteConfig.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sq_AL",
      siteName: siteConfig.name,
      url: path,
      title: `${title} | ${siteConfig.name}`,
      description,
      ...(image && { images: [{ url: image, width: 1600, height: 1067, alt: title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      ...(image && { images: [image] }),
    },
  };
}
