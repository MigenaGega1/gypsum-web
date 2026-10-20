import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section id="procesi" aria-labelledby="procesi-title" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="procesi-title"
          eyebrow="Si Punojmë"
          title="Një proces i qartë, nga ideja te dorëzimi"
          align="center"
        />

        <ol className="relative mt-16 grid gap-0 md:grid-cols-4 md:gap-8">
          {/* Horizontal line on desktop */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-px bg-ink/15 md:block" />
          {/* Vertical line on mobile */}
          <span aria-hidden="true" className="absolute bottom-8 left-7 top-7 w-px bg-ink/15 md:hidden" />

          {processSteps.map(({ title, description, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 130} className="relative flex gap-6 pb-12 md:block md:pb-0">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center bg-ink text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="md:mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Hapi {i + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-medium text-ink">{title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
