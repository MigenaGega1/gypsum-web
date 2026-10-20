import Image from "next/image";
import { Check } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { siteConfig } from "@/config/site";

const commitments = [
  "Ekzekutim i kujdesshëm, nga matjet deri te përfundimi",
  "Dizajne moderne të përshtatura me ambientin tuaj",
  "Ambient i pastër dhe i rregullt gjatë punës",
  "Kënaqësia e klientit si masë e suksesit",
];

export default function About({ showMoreLink = true }: { showMoreLink?: boolean }) {
  return (
    <section id="rreth-nesh" aria-labelledby="rreth-nesh-title" className="overflow-hidden bg-linen py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:w-[85%]">
            <Image
              src={images.about}
              alt="Sallon me tavan gipsi në nivele dhe ndriçim LED të ngrohtë"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 right-0 hidden aspect-[4/3] w-[48%] overflow-hidden rounded-xl border-[10px] border-linen sm:block">
            <Image
              src={images.aboutDetail}
              alt="Mjeshtër duke punuar në tavanin e një ambienti në rikonstruksion"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-6 -top-6 -z-0 hidden h-32 w-32 border-l border-t border-gold/60 lg:block"
          />
        </Reveal>

        <div>
          <SectionHeading
            id="rreth-nesh-title"
            eyebrow="Rreth Nesh"
            title="Punime Profesionale, Rezultate që Bëjnë Diferencën"
          />
          <Reveal delay={100}>
            <div className="mt-7 space-y-5 leading-relaxed text-stone">
              <p>
                {siteConfig.name} është specializuar në punime gipsi, patinim dhe lyerje për ambiente banimi dhe
                biznesi. Besojmë se një ambient i bukur fillon nga detajet: një tavan i niveluar mirë, një bashkim
                i padukshëm, një dritë që bie në vendin e duhur.
              </p>
              <p>
                Çdo projekt e trajtojmë me seriozitet. Dëgjojmë kërkesat tuaja, sugjerojmë zgjidhje moderne dhe
                funksionale dhe punojmë me kujdes, që rezultati përfundimtar të jetë ashtu siç e keni imagjinuar,
                apo edhe më mirë.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {commitments.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-ink text-gold">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-11 flex flex-wrap gap-4">
              {showMoreLink && (
                <ButtonLink href="/rreth-nesh" variant="dark">
                  Më shumë për ne
                </ButtonLink>
              )}
              <ButtonLink href="/kontakt" variant="outline-dark">
                Na kontaktoni
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
