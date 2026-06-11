/* Talks, trainings, panels & conversations. Newest first.
   Omit `href` to render a plain (non-linked) item. */

export interface Talk {
  year: string;
  title: string;
  event: string;
  href?: string;
}

export const talks: Talk[] = [
  {
    year: "2025",
    title: "Scaling security in fintech (CXO panel)",
    event: "Black Hat Europe · Financial Services Summit",
    href: "https://blackhat.com/eu-25/financial-summit.html",
  },
  {
    year: "2025",
    title: "eBPF & supply-chain security",
    event: "RootConf",
  },
  {
    year: "2023",
    title: "Starting security from scratch — from zero to one",
    event: "br3akp0int · podcast",
  },
  {
    year: "2018",
    title: "Astra — automated security testing for REST APIs",
    event: "Black Hat USA · Arsenal",
    href: "https://www.blackhat.com/us-18/presenters/Prajal-Kulkarni.html",
  },
  { year: "2018", title: "Training & talk", event: "NullCon" },
  { year: "2016", title: "Security training", event: "NullCon" },
  { year: "2015", title: "Security training", event: "NullCon" },
  { year: "2014", 
    title: "Conference talk", 
    event: "Confidence 2014" 
    href:  "https://www.youtube.com/watch?v=zfxx3JG0Lx8&list=PLnKL6-WWWE_WUzBw0_dQDiP3N6I7uzSVo&index=7"},
  { year: "2014", title: "Conference talk", event: "Grace Hopper" },
];
