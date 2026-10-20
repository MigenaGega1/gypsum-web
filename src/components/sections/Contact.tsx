import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { locationLabel, siteConfig, whatsappLink } from "@/config/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { contact } = siteConfig;

  const details = [
    {
      icon: Phone,
      label: "Telefon",
      value: contact.phoneDisplay,
      href: `tel:${contact.phone}`,
    },
    contact.email && {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: MapPin,
      label: "Zona e shërbimit",
      value: locationLabel(),
    },
    contact.workingHours && {
      icon: Clock,
      label: "Orari",
      value: contact.workingHours,
    },
  ].filter(Boolean) as { icon: typeof Phone; label: string; value: string; href?: string }[];

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="bg-sand/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              id="kontakt-title"
              eyebrow="Kontakt"
              title="Le të flasim për projektin tuaj"
              description="Ju lutemi ndani me ne kërkesat dhe idetë tuaja, në mënyrë që t’ju propozojmë zgjidhjet më të përshtatshme dhe një ofertë të personalizuar sipas ambientit tuaj."
            />

            <Reveal delay={100}>
              <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-5 py-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-gold rounded-lg">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">{label}</p>
                      {href ? (
                        <a href={href} className="mt-1 block text-lg text-ink transition-colors hover:text-gold-dark">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg text-ink">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink("Përshëndetje! Dëshiroj informacion për punime gipsi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1f7a4d] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#186440] sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Na shkruani në WhatsApp
              </a>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <Suspense fallback={<div className="min-h-[560px] rounded-2xl bg-cream" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
