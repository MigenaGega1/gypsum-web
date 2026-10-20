import {
  CalendarCheck,
  Gem,
  MessagesSquare,
  PencilRuler,
  Ruler,
  ScanSearch,
  Sparkles,
  Wrench,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

export type Feature = { title: string; description: string; icon: LucideIcon };

export const strengths: Feature[] = [
  {
    title: "Punime të realizuara me kujdes",
    description:
      "Çdo kënd, bashkim dhe sipërfaqe punohet me durim dhe kontrollohet para se të kalojmë në hapin tjetër.",
    icon: ScanSearch,
  },
  {
    title: "Materiale cilësore",
    description:
      "Përdorim pllaka gipsi, profile dhe stuko të besueshme, të zgjedhura sipas ambientit dhe qëllimit.",
    icon: Gem,
  },
  {
    title: "Zgjidhje moderne dhe funksionale",
    description:
      "Dizajne që bashkojnë estetikën me funksionin: ndriçim, ventilim, izolim dhe akses te instalimet.",
    icon: Sparkles,
  },
  {
    title: "Komunikim i qartë me klientët",
    description:
      "Ju shpjegojmë çdo hap, opsionet dhe kostot, që të vendosni me informacion të plotë.",
    icon: MessagesSquare,
  },
  {
    title: "Respektim i afateve të dakordësuara",
    description:
      "Planifikojmë punën me realizëm dhe respektojmë afatet që përcaktojmë bashkë me ju.",
    icon: CalendarCheck,
  },
];

export const processSteps: Feature[] = [
  {
    title: "Konsultimi me Klientin",
    description:
      "Dëgjojmë idenë, nevojat dhe stilin që dëshironi dhe ju japim sugjerime praktike.",
    icon: MessagesSquare,
  },
  {
    title: "Matjet dhe Planifikimi",
    description:
      "Marrim matjet në vend, përcaktojmë materialet dhe ju paraqesim një ofertë të qartë.",
    icon: PencilRuler,
  },
  {
    title: "Realizimi i Punimeve",
    description:
      "Montim, stukim, patinim dhe përfundime me kujdes, duke mbajtur ambientin të rregullt.",
    icon: Wrench,
  },
  {
    title: "Dorëzimi i Projektit",
    description:
      "Kontrollojmë bashkë rezultatin final dhe ju dorëzojmë një ambient gati për përdorim.",
    icon: KeyRound,
  },
];

export const heroHighlights = [
  { label: "Precizion në çdo detaj", icon: Ruler },
  { label: "Materiale cilësore", icon: Gem },
  { label: "Përfundim i pastër", icon: Sparkles },
];
