"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { siteConfig, whatsappLink } from "@/config/site";
import { services } from "@/data/services";

type Values = { name: string; phone: string; email: string; service: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string; whatsappUrl?: string }
  | { type: "error"; message: string };

const initialValues: Values = { name: "", phone: "", email: "", service: "", message: "" };

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Ju lutem shkruani emrin tuaj.";
  const digits = v.phone.replace(/\D/g, "");
  if (!v.phone.trim()) errors.phone = "Numri i telefonit është i detyrueshëm.";
  else if (!/^[+\d\s()-]+$/.test(v.phone) || digits.length < 8 || digits.length > 15)
    errors.phone = "Shkruani një numër telefoni të vlefshëm.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    errors.email = "Adresa e email-it nuk është e vlefshme.";
  if (!v.service) errors.service = "Zgjidhni llojin e shërbimit.";
  if (v.message.trim().length < 10) errors.message = "Përshkruani shkurt projektin (të paktën 10 karaktere).";
  return errors;
}

function buildWhatsAppMessage(v: Values, serviceTitle: string) {
  return [
    "Përshëndetje! Dëshiroj një ofertë.",
    `Emri: ${v.name.trim()}`,
    `Telefoni: ${v.phone.trim()}`,
    v.email.trim() ? `Email: ${v.email.trim()}` : null,
    `Shërbimi: ${serviceTitle}`,
    `Projekti: ${v.message.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");
}

const fieldBase =
  "mt-2 w-full rounded-lg border bg-transparent px-4 py-3.5 text-ink placeholder:text-mist transition-colors focus:outline-none focus-visible:outline-none";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const statusRef = useRef<HTMLDivElement>(null);
  const hasEndpoint = Boolean(siteConfig.formEndpoint);

  // Preselect a service from the URL, e.g. /kontakt?sherbimi=patinim
  const requestedService = useSearchParams().get("sherbimi");
  useEffect(() => {
    if (requestedService && services.some((s) => s.slug === requestedService)) {
      setValues((v) => ({ ...v, service: requestedService }));
    }
  }, [requestedService]);

  useEffect(() => {
    if (status.type === "success" || status.type === "error") statusRef.current?.focus();
  }, [status.type]);

  const update = (field: keyof Values, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field]) setErrors((er) => ({ ...er, [field]: validate(next)[field] }));
  };

  const blur = (field: keyof Values) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((er) => ({ ...er, [field]: validate(values)[field] }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, phone: true, email: true, service: true, message: true });
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`cf-${firstInvalid}`)?.focus();
      return;
    }

    const serviceTitle = services.find((s) => s.slug === values.service)?.title ?? values.service;

    // No backend configured: hand the request over to WhatsApp instead.
    if (!siteConfig.formEndpoint) {
      const url = whatsappLink(buildWhatsAppMessage(values, serviceTitle));
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus({
        type: "success",
        message:
          "Mesazhi juaj u përgatit në WhatsApp. Dërgojeni nga aty dhe do t'ju kontaktojmë sa më shpejt.",
        whatsappUrl: url,
      });
      return;
    }

    const honeypot = (e.currentTarget.elements.namedItem("company_website") as HTMLInputElement | null)?.value;
    if (honeypot) return;

    setStatus({ type: "sending" });
    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, service: serviceTitle }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({ type: "success", message: "Faleminderit! Kërkesa juaj u dërgua. Do t'ju kontaktojmë së shpejti." });
      setValues(initialValues);
      setTouched({});
    } catch {
      setStatus({
        type: "error",
        message: `Kërkesa nuk u dërgua. Ju lutem provoni përsëri ose na telefononi në ${siteConfig.contact.phoneDisplay}.`,
      });
    }
  }

  const border = (field: keyof Values) =>
    errors[field] ? "border-red-700 focus:border-red-700" : "border-ink/20 hover:border-ink/40 focus:border-gold-dark";

  const ErrorText = ({ field }: { field: keyof Values }) =>
    errors[field] ? (
      <p id={`cf-${field}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-800">
        <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
        {errors[field]}
      </p>
    ) : null;

  const describe = (field: keyof Values) => (errors[field] ? `cf-${field}-error` : undefined);
  const label = "text-xs font-semibold uppercase tracking-[0.18em] text-graphite";

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-2xl bg-cream p-6 sm:p-10" aria-describedby="cf-note">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Emri dhe mbiemri <span className="text-gold-dark">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describe("name")}
            className={`${fieldBase} ${border("name")}`}
            placeholder="Emri juaj"
          />
          <ErrorText field="name" />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>
            Telefoni <span className="text-gold-dark">*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => blur("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describe("phone")}
            className={`${fieldBase} ${border("phone")}`}
            placeholder="+355 6X XXX XXXX"
          />
          <ErrorText field="phone" />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Email <span className="font-normal normal-case tracking-normal text-stone">(opsional)</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describe("email")}
            className={`${fieldBase} ${border("email")}`}
            placeholder="emri@shembull.com"
          />
          <ErrorText field="email" />
        </div>
        <div>
          <label htmlFor="cf-service" className={label}>
            Lloji i shërbimit <span className="text-gold-dark">*</span>
          </label>
          <select
            id="cf-service"
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            onBlur={() => blur("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describe("service")}
            className={`${fieldBase} ${border("service")} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236b655e%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11 ${
              values.service ? "" : "text-mist"
            }`}
          >
            <option value="" disabled>
              Zgjidhni shërbimin
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug} className="text-ink">
                {s.title}
              </option>
            ))}
            <option value="tjeter" className="text-ink">
              Tjetër
            </option>
          </select>
          <ErrorText field="service" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={label}>
            Përshkrimi i projektit <span className="text-gold-dark">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => blur("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describe("message")}
            className={`${fieldBase} ${border("message")} resize-y`}
            placeholder="P.sh. tavan dekorativ me LED për sallonin, rreth 30 m²..."
          />
          <ErrorText field="message" />
        </div>
      </div>

      {/* Honeypot field for spam bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-company">Mos e plotësoni këtë fushë</label>
        <input id="cf-company" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p id="cf-note" className="max-w-sm text-sm leading-relaxed text-stone">
          {hasEndpoint
            ? "Fushat me * janë të detyrueshme."
            : "Fushat me * janë të detyrueshme. Kërkesa juaj do të hapet në WhatsApp, gati për t'u dërguar."}
        </p>
        <button
          type="submit"
          disabled={status.type === "sending"}
          className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-graphite disabled:cursor-wait disabled:opacity-70"
        >
          {status.type === "sending" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
              Duke dërguar...
            </>
          ) : hasEndpoint ? (
            <>
              Dërgo kërkesën
              <Send className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          ) : (
            <>
              <WhatsAppIcon className="h-4 w-4 text-gold" />
              Dërgo kërkesën në WhatsApp
            </>
          )}
        </button>
      </div>

      <div aria-live="polite" className="empty:hidden">
        {status.type === "success" && (
          <div
            ref={statusRef}
            tabIndex={-1}
            className="mt-6 flex gap-3 border-l-2 border-emerald-700 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900 focus:outline-none"
          >
            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <div>
              <p>{status.message}</p>
              {status.whatsappUrl && (
                <a
                  href={status.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-semibold underline underline-offset-4"
                >
                  WhatsApp nuk u hap? Klikoni këtu.
                </a>
              )}
            </div>
          </div>
        )}
        {status.type === "error" && (
          <div
            ref={statusRef}
            tabIndex={-1}
            role="alert"
            className="mt-6 flex gap-3 border-l-2 border-red-700 bg-red-50 p-4 text-sm leading-relaxed text-red-900 focus:outline-none"
          >
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>{status.message}</p>
          </div>
        )}
      </div>
    </form>
  );
}
