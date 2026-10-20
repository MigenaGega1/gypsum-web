import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

type Crumb = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  /** Trail after "Kreu"; the last item is the current page */
  breadcrumbs: Crumb[];
};

export default function PageHero({ eyebrow, title, description, image, imageAlt, breadcrumbs }: PageHeroProps) {
  const trail = [{ label: "Kreu", href: "/" }, ...breadcrumbs];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${siteConfig.url}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <section className="relative isolate overflow-hidden bg-ink pb-16 pt-36 sm:pb-24 sm:pt-44">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="absolute inset-0 -z-10 animate-hero-zoom">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,17,16,0.92)_0%,rgba(18,17,16,0.75)_55%,rgba(18,17,16,0.45)_100%)]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream/60">
            {trail.map((c, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-1.5">
                  {last ? (
                    <span aria-current="page" className="text-gold-light">
                      {c.label}
                    </span>
                  ) : (
                    <>
                      <Link href={c.href} className="transition-colors hover:text-cream">
                        {c.label}
                      </Link>
                      <ChevronRight className="h-3 w-3" aria-hidden="true" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <p
          className="animate-fade-up mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
          style={{ animationDelay: "120ms" }}
        >
          <span className="h-px w-10 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1
          className="animate-fade-up mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-cream text-balance sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "240ms" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg"
            style={{ animationDelay: "360ms" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
