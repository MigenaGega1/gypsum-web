"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";

type LogoProps = {
  /** "light" for dark backgrounds, "dark" for light backgrounds */
  tone?: "light" | "dark";
  /** "nav": compact badge + wordmark, "large": big round badge (footer) */
  variant?: "nav" | "large";
  showTagline?: boolean;
  className?: string;
};

/** Fallback emblem in the logo's style, used until /public/logo.png is added. */
function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="22.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <path d="M11 25.5 24 14l13 11.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 23v11h16V23" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
      <rect x="22" y="21" width="4" height="4" fill="currentColor" opacity="0.9" />
      <path d="M13 37.5h22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export default function Logo({ tone = "light", variant = "nav", showTagline = false, className = "" }: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const src = siteConfig.logoSrc;
  const useImage = Boolean(src) && !imageFailed;

  const text = tone === "light" ? "text-cream" : "text-ink";
  const sub = tone === "light" ? "text-mist" : "text-stone";
  const badgeSize = variant === "large" ? 120 : 52;

  const badge = useImage ? (
    <Image
      src={src!}
      alt={`Logo ${siteConfig.name}`}
      width={badgeSize}
      height={badgeSize}
      onError={() => setImageFailed(true)}
      className={`shrink-0 rounded-full object-cover ring-1 ring-gold/40 ${
        variant === "large" ? "h-[120px] w-[120px]" : "h-11 w-11 sm:h-[52px] sm:w-[52px]"
      }`}
      priority={variant === "nav"}
    />
  ) : (
    <Emblem className={`shrink-0 text-gold ${variant === "large" ? "h-16 w-16" : "h-10 w-10"}`} />
  );

  return (
    <span className={`inline-flex items-center gap-3 ${variant === "large" ? "gap-5" : ""} ${className}`}>
      {badge}
      <span className="flex flex-col leading-none">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold">Punime Gipsi</span>
        <span className={`mt-1 font-brand text-[1.6rem] font-semibold tracking-[0.18em] ${text}`}>
          {siteConfig.shortName}
        </span>
        {showTagline && (
          <span className={`mt-1 text-[0.55rem] font-medium uppercase tracking-[0.22em] ${sub}`}>
            Patinim · Lyerje
          </span>
        )}
      </span>
    </span>
  );
}
