export type PriceItem = {
  title: string;
  /** Price in lek per m² for the work only */
  base: number;
  /** Price in lek per m² with materials + labour (finished); `null` when not offered */
  finished: number | null;
};

export const prices: PriceItem[] = [
  { title: "Gips i drejtë", base: 21000, finished: 29000 },
  { title: "Gips i varur", base: 25000, finished: 33000 },
  { title: "Mur gipsi dopio", base: 35000, finished: 43000 },
  { title: "Mur gipsi tek pllakë", base: 32000, finished: 40000 },
  { title: "Mur gipsi kundër lagështirës dopio", base: 40000, finished: 48000 },
  { title: "Mur gipsi kundër lagështirës tek pllakë", base: 37000, finished: 45000 },
  { title: "Patinim", base: 500, finished: null },
  { title: "Bojë e bardhë", base: 300, finished: null },
  { title: "Bojë me ngjyrë", base: 350, finished: null },
];

export const priceNote =
  "Çmimi “Me materiale + punëtorë (i përfunduar)” përfshin materialet, punën dhe përfundimin e punimit.";

export function formatLek(value: number) {
  return `${value.toLocaleString("en-US")} lek/m²`;
}
