import PageHero from "@/components/layout/PageHero";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/config/site";
import { images } from "@/lib/images";
import { pageMetadata, withCity } from "@/lib/seo";

export const metadata = pageMetadata({
  title: withCity("Kontakt: Kërkoni Ofertë për Punime Gipsi"),
  description: `Kontaktoni Punime Gipsi DITI në ${siteConfig.contact.phoneDisplay} ose në WhatsApp për tavane gipsi, tavane dekorative, ndarje gipsi, patinim dhe lyerje.`,
  path: "/kontakt",
  image: images.hero,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Kërkoni një ofertë"
        description="Na tregoni për projektin tuaj dhe ju kthejmë përgjigje me sugjerime dhe një ofertë të përshtatur."
        image={images.hero}
        imageAlt="Dhomë moderne me tavan gipsi në nivele dhe ndriçim LED indirekt"
        breadcrumbs={[{ label: "Kontakt", href: "/kontakt" }]}
      />
      <Contact />
    </>
  );
}
