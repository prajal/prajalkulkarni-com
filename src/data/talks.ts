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
    title: "Black Hat Europe Review board - Financial Services Summit",
    event: "Black Hat Europe · Financial Services Summit",
    href: "https://blackhat.com/eu-25/financial-summit.html",
  },
  {
    year: "2025",
    title: "Scaling Security in Fintech: Building Secure Products at Startup Speed · podcast",
    event: "VULNCON 2025",
    href: "https://blog.vulncon.in/scaling-security-in-fintech-building-secure-products-at-startup-speed/",
  },
  {
    year: "2025",
    title: "Modernizing Security Architecture: Platforms or Best-of-Breed, What Works?",
    event: "NullCon 2025",
    href: "https://www.youtube.com/watch?v=GyQNbrZNrdg",
  },
  {
    year: "2023",
    title: "Bsides Bangalore CFP Review board",
    event: "Bsides Bangalore",
    href: "https://bsidesbangalore.in/teammembers",
  },
  {
    year: "2023",
    title: "A Day In The Life of A CISO",
    event: "Snyk · podcast",
    href: "https://www.youtube.com/watch?v=tkfUL08wrOM&t=10s",
  },
  {
    year: "2023",
    title: "Starting security from scratch — from zero to one",
    event: "br3akp0int · podcast",
    href: "https://www.youtube.com/watch?v=qL0oBiYHScQ",
  },
  {
    year: "2021",
    title: "Panel on Shift-Left with CISO's",
    event: "Snyk Live",
    href: "https://snyk.io/videos/shift-left-with-cisos-3/",
  },
  {
    year: "2020",
    title: "ATTACKING & DEFENDING WEB APPLICATIONS ON THE INTERNET",
    event: "Goa Engineering College Alumini Talk",
    href: "https://alumni.gec.ac.in/events/2462?source=eventlist",
  },
  {
    year: "2018",
    title: "Astra — automated security testing for REST APIs",
    event: "Black Hat USA · Arsenal",
    href: "https://www.blackhat.com/us-18/presenters/Prajal-Kulkarni.html",
  },
  {
    year: "2018",
    title: "Attack Monitoring Using Elastic Stack",
    event: "NullCon 2018 - Training",
    href: "hhttps://nullcon.net/training/attack-monitoring-using-elastic-stack/",
  },
  {
    year: "2016",
    title: "Building a Real-World Attack Monitoring Solution by leveraging the ELK Stack",
    event: "c0c0n 2018 - Training",
    href: "https://is-ra.org/c0c0n/2018/workshops.html",
  },
  {
    year: "2016",
    title: "Attack Monitoring using Elasticsearch, Logstash, Kibana",
    event: "NullCon 2016 - Training",
    href: "https://nullcon.net/training/attack-monitoring-using-elasticsearch-logstash-kibana/",
  },
  {
    year: "2015",
    title: "Attack Monitoring using Elasticsearch, Logstash, Kibana",
    event: "NullCon 2015 - Training",
    href: "https://nullcon.net/training/attack-monitoring-using-elasticsearch-logstash-kibana-2/",
  },
   {
    year: "2014",
    title: "The tale of 100 CVE's - Confidence Kraków 2014 (Poland)",
    event: "Confidence Kraków 2014 (Poland)",
    href: "https://www.youtube.com/watch?v=zfxx3JG0Lx8&list=PLnKL6-WWWE_WUzBw0_dQDiP3N6I7uzSVo&index=7",
  },
  {
    year: "2014",
    title: "Started CodeVigilant along with Anant Shrivastava",
    event: "The Project aims to help secure open source software",
    href: "https://codevigilant.com/author/prajalkulkarni/",
  },
{ year: "2014", title: "Conference talk", event: "Grace Hopper" },
];
