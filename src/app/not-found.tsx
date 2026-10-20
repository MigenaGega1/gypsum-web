import ButtonLink from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-ink px-5 pb-20 pt-36 text-center sm:px-8">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-8xl text-gold">404</p>
        <h1 className="mt-6 font-display text-4xl text-cream sm:text-5xl">Faqja nuk u gjet</h1>
        <p className="mt-5 leading-relaxed text-cream/70">
          Faqja që kërkoni nuk ekziston ose është zhvendosur.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Kthehu në ballinë</ButtonLink>
          <ButtonLink href="/sherbimet" variant="outline-light">
            Shiko shërbimet
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
