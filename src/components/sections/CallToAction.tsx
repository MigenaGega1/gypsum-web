import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { images } from "@/lib/images";
import { whatsappLink } from "@/config/site";

export default function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-ink py-28 sm:py-40">
      <Image
        src={images.cta}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/60" />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span aria-hidden="true" className="mx-auto block h-12 w-px bg-gold" />
          <h2 id="cta-title" className="mt-8 font-display text-4xl font-medium leading-tight text-cream text-balance sm:text-6xl">
            Po Planifikoni një Projekt të Ri?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Na kontaktoni për të diskutuar idenë tuaj dhe për të marrë një ofertë të përshtatur sipas projektit.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/kontakt" variant="gold">
              Na Kontaktoni
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={whatsappLink("Përshëndetje! Dua të diskutoj për një projekt me punime gipsi.")}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Shkruani në WhatsApp
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
