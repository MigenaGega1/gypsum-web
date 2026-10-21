import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { formatLek, priceNote, prices } from "@/data/prices";

type PriceListProps = {
  /** Hide the section heading (e.g. on /cmimet, where the page hero has the H1) */
  showHeading?: boolean;
};

export default function PriceList({ showHeading = true }: PriceListProps) {
  return (
    <section id="cmimet" aria-labelledby={showHeading ? "cmimet-title" : undefined} className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {showHeading && (
          <div className="mb-16">
            <SectionHeading
              id="cmimet-title"
              eyebrow="Çmimet"
              title="Listë çmimesh – Punime gipsi"
              description="Çmimet bazë dhe çmimet e përfunduara me materiale + punëtorë."
            />
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <Reveal>
            {/* Mobile: stacked cards instead of a horizontally scrolling table */}
            <ul className="space-y-3 sm:hidden">
              {prices.map((p) => (
                <li key={p.title} className="rounded-xl border border-ink/10 bg-white/60 p-4">
                  <h3 className="font-medium text-ink">{p.title}</h3>
                  <dl className="mt-3 grid grid-cols-2 gap-3 border-t border-ink/10 pt-3 text-sm">
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone">Çmimi bazë</dt>
                      <dd className="mt-1 text-stone">{formatLek(p.base)}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-dark">
                        I përfunduar
                      </dt>
                      <dd className="mt-1 font-semibold text-gold-dark">
                        {p.finished ? formatLek(p.finished) : <span aria-label="Nuk aplikohet">—</span>}
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>

            <div className="hidden overflow-hidden rounded-xl border border-ink/10 bg-white/60 sm:block">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">Listë çmimesh për punime gipsi, patinim dhe lyerje</caption>
                <thead>
                  <tr className="bg-ink text-cream">
                    <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                      Punimi
                    </th>
                    <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
                      Çmimi bazë
                    </th>
                    <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      Me materiale + punëtorë
                      <span className="block text-[0.65rem] font-normal normal-case tracking-normal text-cream/70">
                        (i përfunduar)
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((p) => (
                    <tr key={p.title} className="border-t border-ink/10 transition-colors hover:bg-sand/40">
                      <th scope="row" className="px-5 py-4 font-medium text-ink">
                        {p.title}
                      </th>
                      <td className="whitespace-nowrap px-5 py-4 text-stone">{formatLek(p.base)}</td>
                      <td className="whitespace-nowrap px-5 py-4 font-semibold text-gold-dark">
                        {p.finished ? formatLek(p.finished) : <span aria-label="Nuk aplikohet">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-stone">
              <strong className="font-semibold text-ink">Shënim:</strong> {priceNote}
            </p>
          </Reveal>

          <Reveal delay={120} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-sand">
            <Image
              src="/projects/projekt-58.jpg"
              alt="Shkallë dhe korridor me tavan gipsi, mure të patinuara dhe të lyera"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
