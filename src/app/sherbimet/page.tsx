import PageHero from "@/components/layout/PageHero";
import CallToAction from "@/components/sections/CallToAction";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import { services } from "@/data/services";
import { images } from "@/lib/images";
import { pageMetadata, withCity } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = pageMetadata({
  title: withCity("Shërbimet: Tavane Gipsi, Ndarje Gipsi, Patinim dhe Lyerje"),
  description:
    "Tavane të varura gipsi, tavane dekorative me ndriçim LED, ndarje gipsi, dekorime, izolim, rikonstruksione, patinim dhe lyerje për banesa dhe biznese.",
  path: "/sherbimet",
  image: services[1].image,
});

export default function ServicesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${siteConfig.url}/sherbimet/${s.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <PageHero
        eyebrow="Shërbimet"
        title="Punime gipsi dhe përfundime të brendshme"
        description="Nga tavanet e varura dhe dekorative me ndriçim LED te ndarjet, patinimi dhe lyerja: gjithçka që i nevojitet ambientit tuaj, me një ekip të vetëm."
        image={images.cta}
        imageAlt="Tavan gipsi me nivele dhe spote LED të integruara"
        breadcrumbs={[{ label: "Shërbimet", href: "/sherbimet" }]}
      />
      <Services showHeading={false} />
      <Process />
      <CallToAction />
    </>
  );
}
