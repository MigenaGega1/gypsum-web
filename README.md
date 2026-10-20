# Punime Gipsi DITI – Website

Faqja e internetit për **Punime Gipsi DITI** (Punime Gipsi · Patinim · Lyerje), e ndërtuar me Next.js (App Router), TypeScript, Tailwind CSS dhe Lucide React.

## Nisja lokale

```bash
npm install
npm run dev        # http://localhost:3000
```

Kontrollet dhe versioni për prodhim:

```bash
npx tsc --noEmit   # kontroll tipesh
npm run lint
npm run build
npm run start
```

Nëse `npm run dev` është ndezur, build-i mund të bëhet në një dosje tjetër që të mos e prishë serverin e zhvillimit:
`NEXT_DIST_DIR=.next-build npm run build`.

## Faqet

| URL | Përmbajtja |
| --- | --- |
| `/` | Kreu: hero, shërbimet, rreth nesh, projektet, pse ne, procesi, CTA |
| `/rreth-nesh` | Rreth nesh, pse ne, procesi |
| `/sherbimet` | Të gjitha shërbimet |
| `/sherbimet/[slug]` | Faqe e veçantë për çdo shërbim (9 faqe) |
| `/projektet` | Galeria me filtra dhe lightbox |
| `/kontakt` | Kontakti, formulari, WhatsApp, harta |

Çdo faqe ka titull, përshkrim, URL kanonike dhe Open Graph të vetin. Gjenerohen automatikisht `sitemap.xml`, `robots.txt`, imazhi Open Graph dhe të dhënat e strukturuara (LocalBusiness, Service, BreadcrumbList).

## Ku ndryshohen të dhënat

- **`src/config/site.ts`**: emri, telefoni, WhatsApp, email-i, qyteti, adresa, harta Google, rrjetet sociale, logoja dhe URL e faqes. Fushat `null` nuk shfaqen në faqe.
  - Kur vendosni `city` (p.sh. `"Tiranë"`), titujt SEO bëhen automatikisht "Punime Gipsi në Tiranë" e kështu me radhë.
  - `mapEmbedUrl`: në Google Maps zgjidhni *Share → Embed a map* dhe kopjoni vlerën `src`.
- **`src/data/services.ts`**: shërbimet dhe teksti i faqes së secilit shërbim.
- **`src/data/projects.ts`**: fotot e galerisë. Tani janë foto ilustruese nga Unsplash. Për projektet tuaja, vendosni fotot në `public/projects/` dhe përdorni `image: "/projects/emri.jpg"`.
- **`src/data/content.ts`**: "Pse ne", procesi i punës dhe pikat e hero-s.
- **Logoja**: `public/logo.png`. Favicon-i (`src/app/icon.png` dhe `apple-icon.png`) është krijuar nga kjo logo.

## Formulari i kontaktit

Pa backend, formulari i kontrollon fushat dhe e hap kërkesën në WhatsApp, me mesazhin gati për t'u dërguar.
Për ta dërguar kërkesën në email, krijoni një formular në p.sh. [Formspree](https://formspree.io) dhe vendosni:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
NEXT_PUBLIC_SITE_URL=https://domeni-juaj.al
```

në `.env.local` (ose te variablat e mjedisit në hosting, p.sh. Vercel).
