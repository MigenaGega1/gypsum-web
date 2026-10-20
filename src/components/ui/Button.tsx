import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "outline-light" | "outline-dark" | "dark";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-light",
  dark: "bg-ink text-cream hover:bg-graphite",
  "outline-light": "border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink",
  "outline-dark": "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream",
};

export const buttonBase =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

/** Button-styled link: internal paths use next/link, everything else a plain anchor. */
export default function ButtonLink({ href, variant = "gold", className = "", children, ...props }: ButtonLinkProps) {
  const classes = `${buttonBase} ${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
