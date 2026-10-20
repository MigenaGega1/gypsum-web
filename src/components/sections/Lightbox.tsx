"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/data/projects";

type LightboxProps = {
  items: Project[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const item = items[index];

  const prev = useCallback(() => onNavigate((index - 1 + items.length) % items.length), [index, items.length, onNavigate]);
  const next = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Tab" && dialogRef.current) {
        // Keep focus inside the dialog
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>("button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  if (!item) return null;

  const navBtn =
    "flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:bg-gold hover:text-ink";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria: ${item.title}`}
      className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="text-sm tracking-widest text-cream/60" aria-live="polite">
          {index + 1} / {items.length}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} className={navBtn} aria-label="Mbyll galerinë">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-4 sm:px-20"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="relative h-full max-h-[75vh] w-full">
          {item.video ? (
            <video
              key={item.video}
              src={item.video}
              poster={item.image}
              aria-label={item.alt}
              controls
              autoPlay
              playsInline
              className="animate-fade-up absolute inset-0 h-full w-full object-contain"
            />
          ) : (
            <Image
              key={item.image}
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1280px) 1100px, 100vw"
              className="animate-fade-up object-contain"
              priority
            />
          )}
        </div>
        <button
          type="button"
          onClick={prev}
          className={`${navBtn} absolute left-4 top-1/2 hidden -translate-y-1/2 sm:flex`}
          aria-label="Fotoja e mëparshme"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className={`${navBtn} absolute right-4 top-1/2 hidden -translate-y-1/2 sm:flex`}
          aria-label="Fotoja tjetër"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 px-5 py-6 sm:justify-center sm:px-8">
        <button type="button" onClick={prev} className={`${navBtn} sm:hidden`} aria-label="Fotoja e mëparshme">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{item.category}</p>
          <p className="mt-1 font-display text-xl text-cream sm:text-2xl">{item.title}</p>
        </div>
        <button type="button" onClick={next} className={`${navBtn} sm:hidden`} aria-label="Fotoja tjetër">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
