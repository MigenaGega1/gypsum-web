import {
  Brush,
  Building2,
  Columns3,
  Hammer,
  Layers,
  Lightbulb,
  PaintRoller,
  Shapes,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import { unsplash } from "@/lib/images";
import type { ProjectCategory } from "./projects";

export type Service = {
  slug: string;
  title: string;
  /** Short text for cards */
  description: string;
  /** Meta description for the service page */
  metaDescription: string;
  /** Longer introduction paragraphs for the service page */
  intro: string[];
  /** What the client gets */
  benefits: string[];
  /** Where the service is typically applied */
  applications: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  /** Gallery category shown as related work on the service page */
  relatedCategory: ProjectCategory;
};

export const services: Service[] = [
  {
    slug: "tavane-te-varura",
    title: "Tavane të Varura Gipsi",
    description:
      "Tavane të niveluara në mënyrë perfekte mbi skelet metalik, që fshehin instalimet dhe japin një përfundim të pastër e modern.",
    metaDescription:
      "Tavane të varura gipsi me skelet metalik: sipërfaqe të niveluara, instalime të fshehura dhe përfundim modern për banesa e biznese. Kërkoni ofertë.",
    intro: [
      "Tavani i varur me gips është zgjidhja më praktike për të përftuar një sipërfaqe krejtësisht të sheshtë, edhe kur tavani ekzistues paraqet parregullsi, plasaritje ose diferenca në nivel.",
      "Montojmë skeletin metalik me precizion, vendosim pllakat e gipsit dhe bëjmë stukimin e bashkimeve, që rezultati të jetë një tavan i pastër, gati për patinim dhe lyerje. Hapësira mes tavanit dhe soletës përdoret për kabllo, tubacione, ventilim ose izolim.",
    ],
    benefits: [
      "Sipërfaqe e niveluar dhe pa të meta",
      "Fshehje e kabllove, tubave dhe kanaleve të ajrit",
      "Mundësi për spote dhe ndriçim LED të integruar",
      "Mundësi për shtim izolimi termik ose akustik",
    ],
    applications: ["Apartamente dhe vila", "Zyra dhe ambiente pune", "Dyqane, bare dhe restorante", "Korridore dhe ambiente të përbashkëta"],
    icon: Layers,
    image: unsplash("1718816281207-3b253cff549a", 1600),
    imageAlt: "Tavan i varur gipsi në proces montimi mbi skelet metalik",
    relatedCategory: "Tavane Dekorative",
  },
  {
    slug: "tavane-dekorative-led",
    title: "Tavane Dekorative me Ndriçim LED",
    description:
      "Nivele, kanale dhe korniza dekorative me shirita LED të integruar për një ndriçim të butë, indirekt dhe elegant.",
    metaDescription:
      "Tavane dekorative gipsi me ndriçim LED indirekt: nivele, korniza dhe kanale drite për salla, dhoma gjumi dhe ambiente biznesi. Dizajn modern dhe punim i kujdesshëm.",
    intro: [
      "Një tavan dekorativ me ndriçim LED ndryshon plotësisht atmosferën e një ambienti. Drita indirekte që del nga kanalet e gipsit krijon një ndjesi të ngrohtë, elegante dhe moderne.",
      "Projektojmë nivelet, kornizat dhe kanalet sipas formës së dhomës dhe vendosjes së mobiljeve, duke planifikuar që në fillim vendin e shiritave LED, spoteve dhe transformatorëve.",
    ],
    benefits: [
      "Ndriçim i butë dhe indirekt, pa verbim",
      "Dizajn i përshtatur me arredimin e ambientit",
      "Kombinim i shiritave LED me spote të integruara",
      "Përfundime të pastra në çdo kënd dhe nivel",
    ],
    applications: ["Sallone dhe dhoma ndenjeje", "Dhoma gjumi", "Holle hyrëse dhe korridore", "Hotele, restorante dhe lokale"],
    icon: Lightbulb,
    image: unsplash("1627383838166-6e697cd673c3", 1600),
    imageAlt: "Sallon me tavan kasetor gipsi dhe spote LED të integruara",
    relatedCategory: "Ndriçim LED",
  },
  {
    slug: "ndarje-gipsi",
    title: "Ndarje dhe Mure Gipsi",
    description:
      "Mure ndarës të shpejtë e të pastër për ndarjen e hapësirave, me profile metalike dhe pllaka gipsi sipas nevojës.",
    metaDescription:
      "Ndarje gipsi dhe mure gipsi me profile metalike: ndarje e shpejtë dhe e pastër e hapësirave për banesa, zyra dhe dyqane, me opsion izolimi akustik.",
    intro: [
      "Muret ndarëse prej gipsi janë mënyra më e shpejtë dhe më e pastër për të riorganizuar një ambient: krijoni një dhomë të re, një zyrë, një dhomë magazinimi ose një ndarje dekorative.",
    ],
    benefits: [
      "Punim i shpejtë, pa mbeturina të rënda",
      "Mure të drejta dhe gati për patinim",
      "Mundësi për izolim akustik brenda murit",
      "Kalim i lehtë i instalimeve elektrike",
    ],
    applications: ["Ndarje dhomash në apartamente", "Zyra me hapësirë të hapur", "Dyqane dhe showroom-e", "Magazina dhe ambiente teknike"],
    icon: Columns3,
    image: unsplash("1768321916886-30dc323bddf7", 1600),
    imageAlt: "Skelet metalik për ndarje gipsi në një ambient në rikonstruksion",
    relatedCategory: "Ndarje Gipsi",
  },
  {
    slug: "dekorime-mure-tavane",
    title: "Dekorime për Mure dhe Tavane",
    description:
      "Panele dekorative, kornizime, nishe dhe elemente me reliev që i japin karakter çdo muri dhe tavani.",
    metaDescription:
      "Dekorime gipsi për mure dhe tavane: nishe, kornizime, panele me reliev dhe mure TV. Elemente dekorative që i japin karakter ambientit tuaj.",
    intro: [
      "Gipsi lejon forma që me materiale të tjera do të ishin të vështira: nishe me ndriçim, mure TV, harqe, kornizime dhe panele me reliev.",
      "Bashkë me ju zgjedhim elementet që përshtaten me stilin e ambientit, nga linjat minimaliste moderne te detajet klasike, dhe i realizojmë me përfundime të pastra.",
    ],
    benefits: [
      "Elemente unike të përshtatura për ambientin",
      "Nishe dhe mure TV me ndriçim të integruar",
      "Kombinim me patinim dhe ngjyra të zgjedhura",
      "Detaje të punuara me durim dhe precizion",
    ],
    applications: ["Mure TV dhe nishe", "Kokë krevati dhe dhoma gjumi", "Holle dhe ambiente pritjeje", "Lokale dhe ambiente komerciale"],
    icon: Shapes,
    image: unsplash("1782718979595-be6003fc498e", 1600),
    imageAlt: "Mur me panele dekorative me reliev në një sallon modern",
    relatedCategory: "Ambiente Banimi",
  },
  {
    slug: "izolim-termik-akustik",
    title: "Izolim Termik dhe Akustik",
    description:
      "Sisteme gipsi me materiale izoluese për më shumë rehati, kursim energjie dhe më pak zhurmë mes ambienteve.",
    metaDescription:
      "Izolim termik dhe akustik me sisteme gipsi: më shumë rehati, më pak zhurmë dhe kursim energjie për banesa dhe zyra.",
    intro: [
      "Me sistemet e gipsit mund të përmirësoni ndjeshëm rehatinë e ambientit. Duke shtuar materiale izoluese brenda mureve dhe tavaneve ulni humbjet e nxehtësisë dhe zhurmën nga jashtë ose mes dhomave.",
      "Zgjedhim materialet dhe trashësinë e izolimit sipas qëllimit, për ngrohje, freskim ose qetësi akustike, dhe i montojmë pa kompromentuar pamjen përfundimtare.",
    ],
    benefits: [
      "Më pak zhurmë mes dhomave dhe kateve",
      "Temperaturë më e qëndrueshme në ambient",
      "Kursim në kostot e ngrohjes dhe freskimit",
      "Zgjidhje e pastër, pa ndërhyrje të rënda",
    ],
    applications: ["Mure ndarëse mes dhomave", "Tavane nën çati ose mbi ambiente të zhurmshme", "Zyra dhe salla mbledhjesh", "Studio dhe ambiente pune"],
    icon: Thermometer,
    image: unsplash("1768321914149-5a6428ec2f82", 1600),
    imageAlt: "Ambient në punim me skelet gipsi dhe izolim në tavan",
    relatedCategory: "Ndarje Gipsi",
  },
  {
    slug: "banesa-biznese",
    title: "Punime Gipsi për Banesa dhe Biznese",
    description:
      "Zgjidhje të përshtatura për apartamente, vila, zyra, dyqane dhe lokale, me organizim të kujdesshëm të punës.",
    metaDescription:
      "Punime gipsi për apartamente, vila, zyra, dyqane dhe lokale. Zgjidhje të përshtatura dhe organizim i kujdesshëm i punës për çdo ambient.",
    intro: [
      "Çdo ambient ka nevojat e veta. Në një apartament prioriteti është rehatia dhe estetika, ndërsa në një zyrë ose lokal kanë rëndësi edhe funksionaliteti, akustika dhe afatet.",
      "Për bizneset organizojmë punën që të ndikojë sa më pak në aktivitetin tuaj, ndërsa për banesat kujdesemi që ambienti të mbetet i rregullt dhe i pastër gjatë gjithë kohës.",
    ],
    benefits: [
      "Zgjidhje sipas llojit të ambientit",
      "Planifikim i qartë i fazave të punës",
      "Kujdes për pastërtinë dhe rregullin",
      "Komunikim i vazhdueshëm me klientin",
    ],
    applications: ["Apartamente dhe vila", "Zyra dhe qendra biznesi", "Dyqane dhe showroom-e", "Bare, restorante dhe hotele"],
    icon: Building2,
    image: unsplash("1497366811353-6870744d04b2", 1600),
    imageAlt: "Zyrë moderne me tavan të hapur dhe ndriçim të integruar",
    relatedCategory: "Ambiente Komerciale",
  },
  {
    slug: "rikonstruksione",
    title: "Rikonstruksione dhe Punime të Brendshme",
    description:
      "Rinovim i plotë i ambienteve të brendshme, nga muret dhe tavanet deri te përfundimet e fundit.",
    metaDescription:
      "Rikonstruksione dhe punime të brendshme: mure, tavane gipsi, patinim dhe lyerje në një vend. Rinovim i plotë i ambientit me kujdes për detajet.",
    intro: [
      "Kur ambienti ka nevojë për një ndryshim të plotë, ne kujdesemi për punimet e brendshme nga fillimi deri në fund: ndarjet e reja, tavanet, stukimi, patinimi dhe lyerja.",
      "Duke i realizuar këto faza me të njëjtin ekip, punimet janë më të koordinuara dhe përfundimet më uniforme.",
    ],
    benefits: [
      "Një ekip për disa faza të punës",
      "Koordinim më i mirë dhe më pak vonesa",
      "Përfundime uniforme në të gjithë ambientin",
      "Këshillim për zgjidhjet dhe materialet",
    ],
    applications: ["Rinovim apartamentesh", "Rikonstruksion zyrash", "Përshtatje ambientesh komerciale", "Rifreskim i ambienteve të vjetra"],
    icon: Hammer,
    image: unsplash("1733431772808-82d878e59000", 1600),
    imageAlt: "Sallë e madhe gjatë rikonstruksionit me mure dhe tavane gipsi të stukuara",
    relatedCategory: "Ndarje Gipsi",
  },
  {
    slug: "patinim",
    title: "Patinim",
    description:
      "Stukim dhe patinim i mureve dhe tavaneve për sipërfaqe të lëmuara, pa të meta, gati për lyerje.",
    metaDescription:
      "Patinim dhe stukim i mureve dhe tavaneve për sipërfaqe të lëmuara e pa të meta, gati për lyerje. Punim i kujdesshëm për përfundim perfekt.",
    intro: [
      "Patinimi është hapi që bën diferencën mes një muri të zakonshëm dhe një muri perfekt. Me shtresa të holla stuko dhe lëmim të kujdesshëm, sipërfaqja bëhet e njëtrajtshme dhe e lëmuar.",
      "Një patinim i mirë e bën bojën të duket më e bukur dhe të zgjasë më shumë, sepse çdo e metë e murit shihet edhe më qartë pas lyerjes.",
    ],
    benefits: [
      "Sipërfaqe të lëmuara dhe të njëtrajtshme",
      "Mbulim i plasaritjeve dhe të metave të vogla",
      "Bazë ideale për lyerje cilësore",
      "Kënde dhe bashkime të drejta",
    ],
    applications: ["Mure dhe tavane gipsi të reja", "Mure suvaje me të meta", "Ambiente para lyerjes", "Rinovime dhe rifreskime"],
    icon: Brush,
    image: unsplash("1768839725085-829e6ac7ac26", 1600),
    imageAlt: "Duar që aplikojnë stuko me shpatull për patinim muri",
    relatedCategory: "Ndarje Gipsi",
  },
  {
    slug: "lyerje",
    title: "Lyerje",
    description:
      "Lyerje e brendshme me bojëra cilësore dhe ngjyra të zgjedhura, për një përfundim uniform e të qëndrueshëm.",
    metaDescription:
      "Lyerje e brendshme e mureve dhe tavaneve me bojëra cilësore: përfundim uniform, ngjyra të zgjedhura dhe ambient i pastër pas punës.",
    intro: [
      "Lyerja është faza që i jep ambientit pamjen përfundimtare. Përgatisim sipërfaqet, mbrojmë dyshemetë dhe mobiljet dhe aplikojmë bojën në shtresa të njëtrajtshme.",
      "Ju ndihmojmë të zgjidhni ngjyrat dhe llojin e bojës sipas ambientit, si bojëra të lavueshme për kuzhina e korridore ose nuanca të ngrohta për dhomat e ndenjjes.",
    ],
    benefits: [
      "Përfundim uniform, pa njolla dhe gjurmë",
      "Mbrojtje e dyshemeve dhe mobiljeve",
      "Këshillim për ngjyrat dhe llojin e bojës",
      "Linja të pastra mes ngjyrave dhe sipërfaqeve",
    ],
    applications: ["Mure dhe tavane të brendshme", "Ambiente të reja pas patinimit", "Rifreskim i ambienteve ekzistuese", "Zyra dhe ambiente biznesi"],
    icon: PaintRoller,
    image: unsplash("1562259949-e8e7689d7828", 1600),
    imageAlt: "Rul bojë që lyen një mur të bardhë",
    relatedCategory: "Ambiente Banimi",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
