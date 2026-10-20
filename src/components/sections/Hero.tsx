import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import { heroHighlights } from "@/data/content";
import { images } from "@/lib/images";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="kreu"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 -z-10 animate-hero-zoom">
        <Image
          src={images.hero}
          alt="Sallon luksoz me tavan gipsi, spote LED dhe oxhak me gur dekorativ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,17,16,0.92)_0%,rgba(18,17,16,0.72)_60%,rgba(18,17,16,0.25)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink/80 to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-16 pt-32 sm:px-8 lg:pt-36">
        <div className="max-w-4xl">
          <p
            className="animate-fade-up flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
            style={{ animationDelay: "150ms" }}
          >
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            {siteConfig.tagline}
          </p>
          <h1
            id="hero-title"
            className="animate-fade-up mt-6 font-display text-5xl font-medium leading-[1.05] text-cream text-balance sm:text-6xl lg:text-7xl xl:text-[5rem]"
            style={{ animationDelay: "300ms" }}
          >
            Punime Gipsi me <em className="font-normal italic text-gold-light">Cilësi</em> dhe Elegancë
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg"
            style={{ animationDelay: "450ms" }}
          >
            Realizojmë tavane dekorative, ndarje gipsi dhe ambiente moderne me përkushtim ndaj çdo detaji.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "600ms" }}
          >
            <ButtonLink href="/kontakt" variant="gold">
              Kërko Ofertë
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/projektet" variant="outline-light">
              Shiko Projektet
            </ButtonLink>
          </div>
        </div>
      </div>

    </section>
  );
}
