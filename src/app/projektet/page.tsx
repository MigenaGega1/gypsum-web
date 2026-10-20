import PageHero from "@/components/layout/PageHero";
import CallToAction from "@/components/sections/CallToAction";
import Projects from "@/components/sections/Projects";
import { projects } from "@/data/projects";
import { pageMetadata, withCity } from "@/lib/seo";

export const metadata = pageMetadata({
  title: withCity("Projektet: Tavane Dekorative dhe Punime Gipsi"),
  description:
    "Galeri me tavane dekorative, ndriçim LED, ndarje gipsi dhe ambiente banimi e komerciale. Shihni stilin e punimeve që realizojmë.",
  path: "/projektet",
  image: projects[0].image,
  keywords: ["galeri tavane gipsi", "foto tavane dekorative"],
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projektet"
        title="Ambiente që flasin me detaje"
        description="Tavane dekorative, ndriçim LED, ndarje gipsi dhe përfundime të brendshme për banesa dhe biznese."
        image={projects[1].image}
        imageAlt={projects[1].alt}
        breadcrumbs={[{ label: "Projektet", href: "/projektet" }]}
      />
      <Projects showHeading={false} />
      <CallToAction />
    </>
  );
}
