import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { locationLabel, navLinks, siteConfig, whatsappLink } from "@/config/site";
import { services } from "@/data/services";

export default function Footer() {
  const { contact, social } = siteConfig;
  const socials = [
    { label: "WhatsApp", href: whatsappLink(), icon: WhatsAppIcon },
    social.facebook && { label: "Facebook", href: social.facebook, icon: FacebookIcon },
    social.instagram && { label: "Instagram", href: social.instagram, icon: InstagramIcon },
    social.tiktok && { label: "TikTok", href: social.tiktok, icon: TikTokIcon },
  ].filter(Boolean) as { label: string; href: string; icon: typeof WhatsAppIcon }[];

  const heading = "text-xs font-semibold uppercase tracking-[0.25em] text-gold";
  const link = "text-sm text-cream/65 transition-colors hover:text-cream";

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_1fr]">
          <div>
            <Link href="/" aria-label={`${siteConfig.name} – Kreu`}>
              <Logo tone="light" variant="large" showTagline />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              Punime gipsi, tavane dekorative me ndriçim LED, ndarje gipsi, patinim dhe lyerje për banesa dhe
              biznese, me kujdes për çdo detaj.
            </p>
            <ul className="mt-7 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/75 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Lidhje të shpejta">
            <h2 className={heading}>Navigimi</h2>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={heading}>Shërbimet</h2>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/sherbimet/${s.slug}`} className={link}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>Kontakt</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href={`tel:${contact.phone}`} className={`flex items-center gap-3 ${link}`}>
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
              </li>
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className={`flex items-center gap-3 ${link}`}>
                    <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-3 text-cream/65">
                <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                {locationLabel()}
              </li>
            </ul>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Kërko Ofertë
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Të gjitha të drejtat të rezervuara.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
