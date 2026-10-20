"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks, siteConfig } from "@/config/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ${
        solid ? "bg-ink/95 py-3 shadow-[0_1px_0_rgba(193,154,88,0.18)] backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Kalo te përmbajtja
      </a>
      <nav aria-label="Navigimi kryesor" className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label={`${siteConfig.name} – Kreu`} onClick={() => setOpen(false)}>
          <Logo tone="light" />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-sm font-medium tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-500 ${
                    active
                      ? "text-cream after:scale-x-100"
                      : "text-cream/70 after:scale-x-0 hover:text-cream hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold-light"
          >
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <Link
            href="/kontakt"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-gold-light"
          >
            Kërko Ofertë
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-cream lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Mbyll menunë" : "Hap menunë"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>
    </header>

      {/* Outside <header>: its backdrop-filter would otherwise contain this fixed panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[68px] z-[45] bg-ink transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between overflow-y-auto px-6 pb-10 pt-8">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className={`flex items-baseline gap-4 border-b border-cream/10 py-4 font-display text-3xl transition-colors hover:text-gold-light ${
                    isActive(pathname, link.href) ? "text-gold-light" : "text-cream"
                  }`}
                >
                  <span className="font-sans text-xs text-gold">0{i + 1}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4 pt-8">
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gold py-4 text-center text-sm font-semibold text-ink"
            >
              Kërko Ofertë
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center justify-center gap-2 py-2 text-cream/80"
            >
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
