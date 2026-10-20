import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services, type Service } from "@/data/services";

type ServicesProps = {
  /** Show only the first N services plus a link to the services page */
  limit?: number;
  /** Hide the section heading (e.g. on /sherbimet, where the page hero has the H1) */
  showHeading?: boolean;
  /** Services to leave out (e.g. the current one on a service page) */
  exclude?: string;
  title?: string;
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const href = `/sherbimet/${service.slug}`;
  return (
    <article className="group flex h-full flex-col">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-sand">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink/90 text-gold backdrop-blur-sm">
          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
      </Link>
      <div className="flex flex-1 flex-col border-b border-ink/10 pb-8 pt-7">
        <span className="text-xs font-semibold tracking-[0.25em] text-gold-dark">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-display text-[1.75rem] font-medium leading-tight text-ink">
          <Link href={href} className="transition-colors hover:text-gold-dark">
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-stone">{service.description}</p>
        <div>
          <Link
            href={href}
            className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-gold-dark"
            aria-label={`Më shumë për: ${service.title}`}
          >
            Më shumë informacion
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Services({ limit, showHeading = true, exclude, title }: ServicesProps) {
  const list = services.filter((s) => s.slug !== exclude);
  const shown = limit ? list.slice(0, limit) : list;

  return (
    <section id="sherbimet" aria-labelledby={showHeading ? "sherbimet-title" : undefined} className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {showHeading && (
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              id="sherbimet-title"
              eyebrow="Shërbimet"
              title={title ?? "Gjithçka për tavanet, muret dhe përfundimet e brendshme"}
            />
            <Reveal className="max-w-md">
              <p className="leading-relaxed text-stone">
                Nga skeleti metalik te shtresa e fundit e bojës, kujdesemi për çdo fazë të punës që ambienti juaj
                të duket i pastër, i rregullt dhe modern.
              </p>
            </Reveal>
          </div>
        )}

        <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={(i % 3) * 120} className="flex flex-col">
              <ServiceCard service={service} index={services.indexOf(service)} />
            </Reveal>
          ))}
        </ul>

        {limit && list.length > limit && (
          <Reveal className="mt-16 text-center">
            <ButtonLink href="/sherbimet" variant="dark">
              Të gjitha shërbimet
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}
