import { unsplash } from "@/lib/images";

export const projectCategories = [
  "Tavane Dekorative",
  "Ndriçim LED",
  "Ndarje Gipsi",
  "Ambiente Banimi",
  "Ambiente Komerciale",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  title: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  /** Optional video (e.g. "/projects/video.mp4"); `image` is then its poster frame */
  video?: string;
  /** Layout hint for the masonry-style grid */
  size?: "tall" | "wide";
};

const own = (n: number) => `/projects/projekt-${String(n).padStart(2, "0")}.jpg`;

/**
 * The company's own work (photos in /public/projects) comes first, followed by
 * representative sample photography (Unsplash).
 */
export const projects: Project[] = [
  // --- Punimet e kompanisë ---
  { title: "Tavan gipsi me linja LED", category: "Tavane Dekorative", image: own(26), alt: "Tavan gipsi i bardhë me linja ndriçimi LED të integruara pranë trarëve prej druri", size: "tall" },
  { title: "Sallon me spote të përgatitura", category: "Ndriçim LED", image: own(7), alt: "Sallon i lyer me tavan gipsi dhe vrima për spote LED", size: "wide" },
  { title: "Video nga punimet në banesë", category: "Ambiente Banimi", image: "/projects/video-01-poster.jpg", video: "/projects/video-01.mp4", alt: "Video e banesës pas punimeve me tavan gipsi dhe mure të lyera", size: "tall" },
  { title: "Tavan me kornizë dekorative", category: "Tavane Dekorative", image: own(27), alt: "Tavan gipsi me kornizë dekorative në nivele dhe spote LED", size: "tall" },
  { title: "Skelet metalik për tavan të varur", category: "Ndarje Gipsi", image: own(29), alt: "Profile metalike të montuara për tavan të varur gipsi me llambë të varur", size: "wide" },
  { title: "Dhomë me hapje harku", category: "Ambiente Banimi", image: own(6), alt: "Dhomë e rikonstruktuar me mure të lyera dhe hapje gipsi drejt dritares", size: "tall" },
  { title: "Tavan me kornizë LED dhe spote", category: "Tavane Dekorative", image: own(41), alt: "Tavan gipsi i bardhë me kornizë drite LED dhe spote, pranë trarëve prej druri", size: "tall" },
  { title: "Tavan me kornizë në nivele", category: "Tavane Dekorative", image: own(44), alt: "Tavan gipsi me korniza dekorative në nivele dhe spote LED", size: "wide" },
  { title: "Video: skelet tavani i varur", category: "Ndarje Gipsi", image: "/projects/video-04-poster.jpg", video: "/projects/video-04.mp4", alt: "Video e skeletit metalik të montuar për tavan të varur me llamba të varura", size: "tall" },
  { title: "Korridor me tavan dekorativ", category: "Tavane Dekorative", image: own(45), alt: "Korridor me tavan gipsi me korniza dekorative në nivele", size: "tall" },
  { title: "Linja dekorative me spote", category: "Tavane Dekorative", image: own(46), alt: "Detaj tavani gipsi me linja dekorative dhe spote LED", size: "tall" },
  { title: "Tavan dekorativ nën trarë druri", category: "Tavane Dekorative", image: own(47), alt: "Tavan gipsi me korniza dekorative poshtë trarëve prej druri", size: "tall" },
  { title: "Montim pllakash gipsi", category: "Ndarje Gipsi", image: own(32), alt: "Pllaka gipsi të montuara në tavan me tela për ndriçim", size: "tall" },
  { title: "Video: stukim i tavanit", category: "Ndarje Gipsi", image: "/projects/video-02-poster.jpg", video: "/projects/video-02.mp4", alt: "Video e tavanit të gipsit me fuga të stukuara gjatë punimeve", size: "tall" },
  { title: "Tavan i bardhë me spote", category: "Ndriçim LED", image: own(42), alt: "Tavan gipsi i bardhë i përfunduar me spote LED", size: "tall" },
  { title: "Skelet metalik në punim", category: "Ndarje Gipsi", image: own(54), alt: "Profile metalike të montuara për tavan të varur", size: "wide" },
  { title: "Tavani parë nga oborri", category: "Tavane Dekorative", image: own(48), alt: "Tavan dekorativ gipsi parë nga jashtë përmes dritares, me trarë druri dhe bimë", size: "tall" },
  { title: "Izolim dhe montim tavani", category: "Ndarje Gipsi", image: own(36), alt: "Montim pllake gipsi me ngritës, mbi izolim termik në tavan", size: "tall" },
  { title: "Video: profile për tavan të varur", category: "Ndarje Gipsi", image: "/projects/video-03-poster.jpg", video: "/projects/video-03.mp4", alt: "Video e profileve metalike të montuara në tavan", size: "tall" },
  { title: "Stukim i fugave", category: "Ndarje Gipsi", image: own(50), alt: "Tavan gipsi me fuga të stukuara dhe ndriçim pune", size: "wide" },
  { title: "Detaj kornize me spote", category: "Tavane Dekorative", image: own(51), alt: "Kornizë dekorative gipsi me vrima për spote LED", size: "tall" },
  { title: "Skelet tavani mbi hyrje", category: "Ndarje Gipsi", image: own(55), alt: "Skelet metalik i tavanit të varur mbi derën e hyrjes", size: "tall" },
  { title: "Ndriçim pranë dritares", category: "Ndriçim LED", image: own(40), alt: "Tavan i bardhë me spote LED pranë dritares", size: "tall" },
  { title: "Pllaka gipsi në tavan", category: "Ndarje Gipsi", image: own(33), alt: "Pllaka gipsi të montuara në tavan me tela elektrike", size: "tall" },
  { title: "Montim i skeletit", category: "Ndarje Gipsi", image: own(38), alt: "Punëtor gjatë montimit të skeletit metalik në tavan", size: "tall" },
  { title: "Video: tavan i varur me llamba", category: "Ndarje Gipsi", image: "/projects/video-05-poster.jpg", video: "/projects/video-05.mp4", alt: "Video e skeletit metalik të tavanit me ndriçim të varur", size: "tall" },
  { title: "Hapje e re me gips", category: "Ndarje Gipsi", image: own(57), alt: "Hapje e madhe e veshur me gips midis dy ambienteve", size: "tall" },
  { title: "Spote në tavan të ri", category: "Ndriçim LED", image: own(43), alt: "Tavan gipsi i bardhë me vrima për spote LED", size: "tall" },
  { title: "Skelet tavani parë nga jashtë", category: "Ndarje Gipsi", image: own(53), alt: "Skelet metalik i tavanit parë nga dritarja, nën trarë druri", size: "tall" },
  { title: "Tavan me pllaka gipsi", category: "Ndarje Gipsi", image: own(34), alt: "Tavan me pllaka gipsi të montuara pranë dritareve", size: "tall" },
  { title: "Stukim pranë derës", category: "Ndarje Gipsi", image: own(49), alt: "Tavan dhe mur me fuga të stukuara pranë një dere", size: "tall" },
  { title: "Montim në kënd të tavanit", category: "Ndarje Gipsi", image: own(35), alt: "Pllaka gipsi në tavan dhe profile metalike në kënd", size: "tall" },
  { title: "Përgatitje e tavanit", category: "Ndarje Gipsi", image: own(52), alt: "Tavan me fuga të stukuara dhe tela për ndriçim", size: "tall" },
  { title: "Tavan parë nga hapja", category: "Ndarje Gipsi", image: own(31), alt: "Tavan me pllaka gipsi parë përmes një hapjeje me kornizë", size: "tall" },
  { title: "Profile rreth hapjes", category: "Ndarje Gipsi", image: own(56), alt: "Profile metalike të montuara rreth një hapjeje në mur", size: "tall" },
  { title: "Tavan i përgatitur për ndriçim", category: "Ndriçim LED", image: own(4), alt: "Tavan gipsi i bardhë me vrima për spote LED dhe kuti elektrike", size: "wide" },
  { title: "Montim pllakash gipsi në tavan", category: "Ndarje Gipsi", image: own(25), alt: "Pllaka gipsi të montuara në tavan gjatë punimeve", size: "tall" },
  { title: "Korridor me hark", category: "Ambiente Banimi", image: own(8), alt: "Korridor me mure të lyera dhe hark gipsi në fund", size: "tall" },
  { title: "Spote LED në tavan sallonit", category: "Ndriçim LED", image: own(11), alt: "Tavan i bardhë me shumë vrima për spote LED", size: "tall" },
  { title: "Strukturë tavani me trarë druri", category: "Ndarje Gipsi", image: own(28), alt: "Skelet metalik për tavan gipsi poshtë trarëve dekorativë prej druri", size: "tall" },
  { title: "Kënd me dritare", category: "Ambiente Banimi", image: own(2), alt: "Mure të lyera dhe tavan gipsi rreth dy dritareve", size: "tall" },
  { title: "Dhomë e lyer me ngjyrë të ngrohtë", category: "Ambiente Banimi", image: own(18), alt: "Dhomë me mure në ngjyrë krem dhe dritare të madhe pas lyerjes", size: "tall" },
  { title: "Tavan me spote dhe kondicioner", category: "Ndriçim LED", image: own(3), alt: "Tavan gipsi me vrima për spote dhe kondicioner në mur", size: "tall" },
  { title: "Tavan i varur gjatë montimit", category: "Ndarje Gipsi", image: own(30), alt: "Profile metalike të tavanit të varur dhe ndriçim pune", size: "tall" },
  { title: "Hyrje me dyer druri", category: "Ambiente Banimi", image: own(10), alt: "Hyrje me mure të lyera, dyer druri dhe ndriçim në tavan", size: "tall" },
  { title: "Tavan me nivel pranë xhamave", category: "Ndriçim LED", image: own(5), alt: "Tavan gipsi me nivel pranë dritareve të mëdha", size: "tall" },
  { title: "Kolona dhe hapje gipsi", category: "Ambiente Banimi", image: own(13), alt: "Kolonë gipsi dhe hapje drejt dritares në një dhomë të rikonstruktuar", size: "tall" },
  { title: "Tavan i lëmuar me spote", category: "Ndriçim LED", image: own(14), alt: "Tavan i bardhë i lëmuar me vrima për spote LED", size: "tall" },
  { title: "Hyrje me hark dhe derë", category: "Ambiente Banimi", image: own(1), alt: "Hyrje me hark, derë druri dhe tavan gipsi me spote", size: "tall" },
  { title: "Dhomë gati për mobilim", category: "Ambiente Banimi", image: own(22), alt: "Dhomë me mure të lyera dhe dritare, gjatë pastrimit pas punimeve", size: "tall" },
  { title: "Tavan me spote në dhomë", category: "Ndriçim LED", image: own(12), alt: "Tavan gipsi me vrima për spote dhe kondicioner", size: "tall" },
  { title: "Hapje gipsi drejt dritares", category: "Ambiente Banimi", image: own(9), alt: "Hapje e veshur me gips drejt dritares dhe tavan me spote", size: "tall" },
  { title: "Punime në dhomë ndenjeje", category: "Ambiente Banimi", image: own(23), alt: "Dhomë ndenjeje gjatë punimeve me tavan gipsi dhe mure të lyera", size: "tall" },
  { title: "Tavan me pjerrësi", category: "Ndriçim LED", image: own(17), alt: "Tavan i bardhë me vrima për spote LED", size: "tall" },
  { title: "Mure gati për lyerje", category: "Ambiente Banimi", image: own(19), alt: "Dhomë me mure të stukuara dhe shkallë pune", size: "tall" },
  { title: "Dritare dhe ndriçim", category: "Ambiente Banimi", image: own(24), alt: "Mur pranë dritareve të mëdha me tela për ndriçim në tavan", size: "tall" },
  { title: "Korridor drejt kuzhinës", category: "Ambiente Banimi", image: own(16), alt: "Korridor me hark dhe mure të lyera drejt kuzhinës", size: "tall" },
  { title: "Tavan banje me ndriçim", category: "Ambiente Banimi", image: own(15), alt: "Tavan banje me dritë dhe dritare", size: "tall" },
  { title: "Mure të lëmuara", category: "Ambiente Banimi", image: own(21), alt: "Mur dhe tavan i lëmuar pas stukimit dhe lyerjes", size: "tall" },
  { title: "Dalje në ballkon", category: "Ambiente Banimi", image: own(20), alt: "Derë ballkoni e hapur nga banesa e rikonstruktuar", size: "tall" },

  // --- Foto ilustruese ---
  {
    title: "Tavan me nivele dhe ndriçim indirekt",
    category: "Ndriçim LED",
    image: unsplash("1746439307632-cba0f8effbed", 1600),
    alt: "Sallon me tavan gipsi në dy nivele dhe shirit LED të ngrohtë përreth",
    size: "tall",
  },
  {
    title: "Tavan valor në hapësirë publike",
    category: "Tavane Dekorative",
    image: unsplash("1582203423341-64b918240e25", 1600),
    alt: "Tavan gipsi me forma valore dhe ndriçim të integruar pranë xhamave",
    size: "wide",
  },
  {
    title: "Tavan kasetor me spote",
    category: "Tavane Dekorative",
    image: unsplash("1679121877287-0dbb1d68f44c", 1600),
    alt: "Tavan kasetor gipsi me korniza dhe spote LED",
  },
  {
    title: "Dhomë gjumi me kornizë LED",
    category: "Ambiente Banimi",
    image: unsplash("1750420556288-d0e32a6f517b", 1600),
    alt: "Dhomë gjumi me tavan gipsi, ndriçim LED indirekt dhe panel në formë harku",
  },
  {
    title: "Skelet për mure ndarëse",
    category: "Ndarje Gipsi",
    image: unsplash("1768321902841-aafb906dc0a4", 1600),
    alt: "Profile metalike të montuara për ndarje gipsi në një ambient të madh",
    size: "tall",
  },
  {
    title: "Ndriçim i integruar në tavan",
    category: "Ndriçim LED",
    image: unsplash("1749571598439-d307cce8e870", 1600),
    alt: "Tavan gipsi me nivele, dritare çatie dhe spote LED të integruara",
  },
  {
    title: "Sallon me nishe dhe ndriçim",
    category: "Ambiente Banimi",
    image: unsplash("1758915753332-cab59126742c", 1600),
    alt: "Sallon modern me nishe gipsi, rafte të integruara dhe ndriçim të butë",
    size: "tall",
  },
  {
    title: "Ambient restoranti",
    category: "Ambiente Komerciale",
    image: unsplash("1770816307528-67e404552dcf", 1600),
    alt: "Restorant me ndriçim të ngrohtë dhe llamba të varura",
    size: "wide",
  },
  {
    title: "Mure dhe tavane të stukuara",
    category: "Ndarje Gipsi",
    image: unsplash("1733431774078-692252a6605e", 1600),
    alt: "Hapësirë e madhe me mure dhe tavane gipsi të stukuara gati për lyerje",
  },
  {
    title: "Kuzhinë me ndriçim të integruar",
    category: "Ambiente Banimi",
    image: unsplash("1778731525401-982ab0eaa746", 1600),
    alt: "Kuzhinë moderne me tavan të bardhë dhe ndriçim të integruar",
    size: "tall",
  },
  {
    title: "Korridor zyrash",
    category: "Ambiente Komerciale",
    image: unsplash("1497366216548-37526070297c", 1600),
    alt: "Korridor zyrash me tavan linear dhe ndriçim të shpërndarë",
  },
  {
    title: "Tavan me kurbë dhe dritë indirekte",
    category: "Tavane Dekorative",
    image: unsplash("1745242655021-d0b950c8b0da", 1600),
    alt: "Tavan dekorativ me formë të lakuar, ndriçim indirekt dhe spote",
  },
];
