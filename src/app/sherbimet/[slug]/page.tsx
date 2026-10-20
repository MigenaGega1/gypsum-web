import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CallToAction from "@/components/sections/CallToAction";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import ButtonLink from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { siteConfig, whatsappLink } from "@/config/site";
import { getService, services } from "@/data/services";
import { pageMetadata, withCity } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: withCity(service.title),
    description: service.metaDescription,
    path: `/sherbimet/${service.slug}`,
    image: service.image,
    keywords: [service.title.toLowerCase()],
  });
}

export default async function ServicePage({ params }: Params) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const Icon = service.icon;
  const path = `/sherbimet/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: `${siteConfig.url}${path}`,
    image: service.image,
    areaServed: { "@type": "Country", name: "Albania" },
    provider: { "@id": `${siteConfig.url}/#business` },
  };

  const headingCls = "font-display text-3xl font-medium text-ink sm:text-4xl";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Shërbimet"
        title={withCity(service.title)}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: "Shërbimet", href: "/sherbimet" },
          { label: service.title, href: path },
        ]}
      />

      <section aria-label={`Detaje për ${service.title}`} className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className={headingCls}>Rreth shërbimit</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone">
                {service.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className={headingCls}>Çfarë përfitoni</h2>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 rounded-xl border border-ink/10 bg-linen/60 p-5 leading-relaxed text-graphite">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className={headingCls}>Ku e realizojmë</h2>
              <ul className="mt-7 flex flex-wrap gap-3">
                {service.applications.map((a) => (
                  <li key={a} className="rounded-full border border-ink/15 px-5 py-2.5 text-sm text-graphite">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="overflow-hidden rounded-2xl bg-ink text-cream">
              <div className="relative aspect-[16/10]">
                <Image src={service.image} alt="" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover opacity-80" />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-ink/90 text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>
              <div className="p-7 sm:p-8">
                <p className="font-display text-2xl leading-snug">Kërkoni ofertë për {service.title.toLowerCase()}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  Na tregoni për ambientin tuaj dhe ju kthejmë përgjigje me sugjerime dhe një ofertë të përshtatur.
                </p>
                <div className="mt-7 flex flex-col gap-3">
                  <ButtonLink href={`/kontakt?sherbimi=${service.slug}`} variant="gold">
                    Kërko Ofertë
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappLink(`Përshëndetje! Dëshiroj informacion për: ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-light"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </ButtonLink>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="mt-1 flex items-center justify-center gap-2 text-sm text-cream/75 transition-colors hover:text-gold-light"
                  >
                    <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>

            <nav aria-label="Shërbime të tjera" className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Të gjitha shërbimet</p>
              <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/sherbimet/${s.slug}`}
                      aria-current={s.slug === service.slug ? "page" : undefined}
                      className={`flex items-center justify-between gap-3 py-3.5 text-sm transition-colors ${
                        s.slug === service.slug ? "font-semibold text-gold-dark" : "text-graphite hover:text-ink"
                      }`}
                    >
                      {s.title}
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <Projects category={service.relatedCategory} title="Ambiente të ngjashme" />
      <Services exclude={service.slug} limit={3} title="Shërbime të tjera" />
      <CallToAction />
    </>
  );
}
