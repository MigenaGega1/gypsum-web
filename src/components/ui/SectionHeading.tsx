import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  id,
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${
          tone === "dark" ? "text-gold-dark" : "text-gold"
        } ${center ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-5 font-display text-4xl font-medium leading-[1.08] text-balance sm:text-5xl ${
          tone === "dark" ? "text-ink" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-stone" : "text-mist"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
