import type { Metadata, Viewport } from "next";
import { Cinzel, Montserrat, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { withCity } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const defaultTitle = `${withCity("Punime Gipsi")}, Tavane Gipsi & Tavane Dekorative | ${siteConfig.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.contact.city
    ? [...siteConfig.keywords, `punime gipsi ${siteConfig.contact.city}`, `tavane gipsi ${siteConfig.contact.city}`]
    : siteConfig.keywords,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "sq_AL",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#121110",
};

function BusinessStructuredData() {
  const { contact, social } = siteConfig;
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phone,
    ...(contact.email && { email: contact.email }),
    address: {
      "@type": "PostalAddress",
      addressCountry: "AL",
      ...(contact.city && { addressLocality: contact.city }),
      ...(contact.address && { streetAddress: contact.address }),
    },
    areaServed: { "@type": "Country", name: "Albania" },
    sameAs: Object.values(social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Shërbimet",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: `${siteConfig.url}/sherbimet/${s.slug}`,
        },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sq" className={`${montserrat.variable} ${playfair.variable} ${cinzel.variable}`}>
      {/* Browser extensions (e.g. ColorZilla adds cz-shortcut-listen) inject attributes on <body> before hydration */}
      <body suppressHydrationWarning>
        <BusinessStructuredData />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
