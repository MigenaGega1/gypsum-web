import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { strengths } from "@/data/content";

export default function WhyUs() {
  return (
    <section aria-labelledby="pse-ne-title" id="pse-ne" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="pse-ne-title"
            eyebrow="Pse Ne"
            title="Cilësia shihet në detaje"
            description="Punimet cilësore me gips karakterizohen nga saktësia, përfundimi profesional dhe harmonizimi me ambientin. Zbuloni standardet dhe përkushtimin që na dallojnë në çdo projekt."
          />
        </div>

        <ul className="border-t border-ink/10">
          {strengths.map(({ title, description, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 80}
              className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-b border-ink/10 py-8 sm:grid-cols-[auto_auto_1fr] sm:items-start sm:gap-x-8"
            >
              <span className="hidden pt-1 font-display text-lg text-mist sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="row-span-2 flex h-12 w-12 items-center justify-center border border-ink/15 text-gold-dark transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-gold sm:row-span-1">
                <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium text-ink">{title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-stone">{description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
