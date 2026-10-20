import PageHero from "@/components/layout/PageHero";
import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import { images } from "@/lib/images";
import { pageMetadata, withCity } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Rreth Nesh",
  description: `Njihuni me Punime Gipsi DITI: ${withCity("punime gipsi")}, tavane dekorative, patinim dhe lyerje me kujdes për çdo detaj, materiale cilësore dhe komunikim të qartë.`,
  path: "/rreth-nesh",
  image: images.about,
  keywords: ["kompani punime gipsi", "mjeshtër gipsi"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Rreth Nesh"
        title="Mjeshtëri në gips, kujdes në çdo detaj"
        description="Punojmë me përkushtim për ambiente të pastra, moderne dhe funksionale, nga tavanet dekorative deri te shtresa e fundit e bojës."
        image={images.aboutDetail}
        imageAlt="Mjeshtër duke punuar në tavanin e një ambienti në rikonstruksion"
        breadcrumbs={[{ label: "Rreth Nesh", href: "/rreth-nesh" }]}
      />
      <About showMoreLink={false} />
      <WhyUs />
      <Process />
      <CallToAction />
    </>
  );
}
