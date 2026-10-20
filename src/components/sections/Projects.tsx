"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Expand, Play } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectCategories, projects, type Project, type ProjectCategory } from "@/data/projects";
import Lightbox from "./Lightbox";

type Filter = "Të gjitha" | ProjectCategory;
const filters: Filter[] = ["Të gjitha", ...projectCategories];

/** How many tiles the full gallery shows before "Shfaq më shumë" */
const PAGE_SIZE = 12;

const counts = Object.fromEntries(
  filters.map((f) => [f, f === "Të gjitha" ? projects.length : projects.filter((p) => p.category === f).length]),
) as Record<Filter, number>;

const aspect = (p: Project) => (p.size === "wide" ? "4 / 3" : p.size === "tall" ? "3 / 4" : "1 / 1");

type ProjectsProps = {
  /** Preview mode: first N projects, no filters, link to /projektet */
  limit?: number;
  /** Only show projects of this category (no filters) */
  category?: ProjectCategory;
  showHeading?: boolean;
  title?: string;
};

export default function Projects({ limit, category, showHeading = true, title }: ProjectsProps) {
  const [filter, setFilter] = useState<Filter>("Të gjitha");
  const [shown, setShown] = useState(PAGE_SIZE);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const showFilters = !limit && !category;

  const filtered = useMemo(() => {
    const active = category ?? filter;
    const list = active === "Të gjitha" ? projects : projects.filter((p) => p.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [filter, category, limit]);

  const visible = limit ? filtered : filtered.slice(0, shown);
  const remaining = filtered.length - visible.length;

  const selectFilter = (f: Filter) => {
    setFilter(f);
    setShown(PAGE_SIZE);
  };

  return (
    <section
      id="projektet"
      aria-labelledby={showHeading ? "projektet-title" : undefined}
      aria-label={showHeading ? undefined : "Galeria e projekteve"}
      className="bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {showHeading && (
          <SectionHeading
            id="projektet-title"
            eyebrow="Projektet"
            title={title ?? "Ambiente që flasin me detaje"}
            description="Një përzgjedhje ambientesh me tavane dekorative, ndriçim LED, ndarje gipsi dhe përfundime të brendshme."
            tone="light"
          />
        )}

        {showFilters && (
          <Reveal delay={100}>
            <div
              role="group"
              aria-label="Filtro projektet sipas kategorisë"
              className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => selectFilter(f)}
                  aria-pressed={filter === f}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors duration-300 ${
                    filter === f
                      ? "border-gold bg-gold text-ink"
                      : "border-cream/15 text-cream/75 hover:border-cream/50 hover:text-cream"
                  }`}
                >
                  {f}
                  <span className={`text-xs tabular-nums ${filter === f ? "text-ink/60" : "text-cream/40"}`}>
                    {counts[f]}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        )}

        <ul
          key={category ?? filter}
          className={`${showHeading || showFilters ? "mt-10" : ""} columns-1 gap-3 sm:columns-2 lg:columns-3 lg:gap-4`}
        >
          {visible.map((project, i) => (
            <li key={project.image} className="mb-3 break-inside-avoid lg:mb-4">
              <ProjectTile project={project} onOpen={() => setOpenIndex(i)} />
            </li>
          ))}
        </ul>

        {remaining > 0 && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShown((n) => n + PAGE_SIZE)}
              className="group inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-sm text-cream transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              Shfaq më shumë
              <span className="text-cream/50 transition-colors group-hover:text-ink/60">({remaining})</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </button>
          </div>
        )}

        {limit && (
          <div className="mt-12 text-center">
            <ButtonLink href="/projektet" variant="outline-light">
              Shiko të gjitha projektet
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
          </div>
        )}

        <p className="mt-8 text-xs leading-relaxed text-mist/80">
          Krahas punimeve tona, galeria përfshin edhe disa foto ilustruese që paraqesin stilin e punimeve që
          realizojmë.
        </p>
      </div>

      {openIndex !== null && (
        <Lightbox items={filtered} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      )}
    </section>
  );
}

function ProjectTile({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ aspectRatio: aspect(project) }}
      className="group relative block w-full animate-fade-up overflow-hidden rounded-xl bg-graphite text-left"
      aria-label={`Hap në galeri: ${project.title}`}
    >
      <Image
        src={project.image}
        alt={project.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
      />
      {project.video && (
        <>
          <video
            src={project.video}
            poster={project.image}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
          />
          <span
            aria-hidden="true"
            className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-ink/60 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream ring-1 ring-cream/25 backdrop-blur-sm"
          >
            <Play className="h-3 w-3 fill-current" />
            Video
          </span>
        </>
      )}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <span>
          <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-light">
            {project.category}
          </span>
          <span className="mt-1.5 block font-display text-xl leading-snug text-cream sm:text-2xl">{project.title}</span>
        </span>
        <span className="flex h-10 w-10 shrink-0 translate-y-2 items-center justify-center border border-cream/30 text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <Expand className="h-4 w-4" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
