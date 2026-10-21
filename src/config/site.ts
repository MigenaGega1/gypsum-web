/**
 * Central company configuration.
 * Update the values here and they propagate across the whole website
 * (navbar, footer, contact section, WhatsApp button, SEO metadata).
 *
 * Fields set to `null` are hidden on the site until real details are provided.
 */
export const siteConfig = {
  name: "Punime Gipsi DITI",
  /** Short brand word used in the logo wordmark */
  shortName: "DITI",
  tagline: "Punime Gipsi · Patinim · Lyerje",
  description:
    "Punime Gipsi DITI realizon punime gipsi, tavane të varura dhe dekorative me ndriçim LED, ndarje gipsi, patinim dhe lyerje për banesa dhe biznese në të gjithë Shqipërinë, me përkushtim ndaj çdo detaji.",

  /** Production URL, used for canonical links, sitemap and Open Graph. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",

  /**
   * Logo image inside /public. Save the logo as public/logo.png (square works best).
   * If the file is missing or this is `null`, a drawn emblem in the logo's style is shown.
   */
  logoSrc: "/logo.png" as string | null,

  contact: {
    /** Shown on the website */
    phoneDisplay: "+355 68 282 8669",
    /** Used in tel: links (no spaces) */
    phone: "+355682828669",
    /** WhatsApp number in international format without "+" or spaces */
    whatsapp: "355682828669",
    /** Set to a real address, e.g. "info@diti.al" */
    email: null as string | null,
    /** City used for local SEO and the contact section, e.g. "Tiranë" */
    city: null as string | null,
    /** Full street address, e.g. "Rruga ..., Tiranë" */
    address: null as string | null,
    country: "Shqipëri",
    /** Where the company works, shown in the contact section and footer */
    serviceArea: "Në të gjithë Shqipërinë",
    workingHours: null as string | null,
  },

  /** Social profiles. Only entries with a URL are displayed. */
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    tiktok: null as string | null,
  },

  /**
   * Optional form endpoint (e.g. Formspree, Getform, or your own API route)
   * that accepts a JSON POST. While `null`, the contact form validates input
   * and offers to send the request through WhatsApp instead.
   */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? null,

  keywords: [
    "punime gipsi",
    "tavane gipsi",
    "tavane dekorative",
    "tavane të varura",
    "ndarje gipsi",
    "mure gipsi",
    "tavane me ndriçim LED",
    "dekorime gipsi",
    "patinim",
    "lyerje",
    "rikonstruksione",
    "izolim termik dhe akustik",
  ],
};

export const navLinks = [
  { label: "Kreu", href: "/" },
  { label: "Rreth Nesh", href: "/rreth-nesh" },
  { label: "Shërbimet", href: "/sherbimet" },
  { label: "Projektet", href: "/projektet" },
  { label: "Çmimet", href: "/cmimet" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Location label: city when known, otherwise the country. */
export function locationLabel() {
  return siteConfig.contact.serviceArea;
}
