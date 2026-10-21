import PageHero from "@/components/layout/PageHero";
import CallToAction from "@/components/sections/CallToAction";
import PriceList from "@/components/sections/PriceList";
import { images } from "@/lib/images";
import { pageMetadata, withCity } from "@/lib/seo";

export const metadata = pageMetadata({
  title: withCity("Çmimet për Punime Gipsi, Patinim dhe Lyerje"),
  description:
    "Listë çmimesh për punime gipsi: gips i drejtë, gips i varur, mure gipsi dopio dhe kundër lagështirës, patinim dhe lyerje. Çmime bazë dhe me materiale + punëtorë.",
  path: "/cmimet",
  image: "/projects/projekt-58.jpg",
  keywords: ["çmime gipsi", "çmimi i gipsit për m2", "çmim patinimi", "çmim lyerje"],
});

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Çmimet"
        title="Listë çmimesh – Punime gipsi"
        description="Çmimet bazë dhe çmimet e përfunduara me materiale + punëtorë."
        image={images.cta}
        imageAlt="Tavan gipsi me nivele dhe spote LED të integruara"
        breadcrumbs={[{ label: "Çmimet", href: "/cmimet" }]}
      />
      <PriceList showHeading={false} />
      <CallToAction />
    </>
  );
}
