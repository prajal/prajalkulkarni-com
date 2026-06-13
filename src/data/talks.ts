/* Talks, trainings, panels & conversations. Newest first.
   Omit `href` to render a plain (non-linked) item. */

export interface Talk {
  year: string;
  title: string;
  event: string;
  type: 'talk' | 'panel' | 'podcast' | 'training' | 'review';
  href?: string;
}

export const talks: Talk[] = [
  {
    year: "2025",
    title: "Black Hat Europe Review board — Financial Services Summit",
    event: "Black Hat Europe · Financial Services Summit",
    type: "review",
    href: "https://blackhat.com/eu-25/financial-summit.html",
  },
  {
    year: "2025",
    title: "Scaling Security in Fintech: Building Secure Products at Startup Speed",
    event: "VULNCON 2025",
    type: "podcast",
    href: "https://blog.vulncon.in/scaling-security-in-fintech-building-secure-products-at-startup-speed/",
  },
  {
    year: "2025",
    title: "Government Policies & Cybersecurity: Safeguarding India's Digital Future",
    event: "Startupmahakumbh",
    type: "panel",
    href: "https://startupmahakumbh.org/speakers-2025.php#spk1",
  },
  {
    year: "2025",
    title: "Modernizing Security Architecture: Platforms or Best-of-Breed, What Works?",
    event: "NullCon 2025",
    type: "talk",
    href: "https://www.youtube.com/watch?v=GyQNbrZNrdg",
  },
  {
    year: "2023",
    title: "Bsides Bangalore CFP Review board",
    event: "Bsides Bangalore",
    type: "review",
    href: "https://bsidesbangalore.in/teammembers",
  },
  {
    year: "2023",
    title: "A Day In The Life of A CISO",
    event: "Snyk · podcast",
    type: "podcast",
    href: "https://www.youtube.com/watch?v=tkfUL08wrOM&t=10s",
  },
  {
    year: "2023",
    title: "Starting security from scratch — from zero to one",
    event: "br3akp0int · podcast",
    type: "podcast",
    href: "https://www.youtube.com/watch?v=qL0oBiYHScQ",
  },
  {
    year: "2021",
    title: "Panel on Shift-Left with CISOs",
    event: "Snyk Live",
    type: "panel",
    href: "https://snyk.io/videos/shift-left-with-cisos-3/",
  },
  {
    year: "2020",
    title: "Attacking & Defending Web Applications on the Internet",
    event: "Goa Engineering College Alumni Talk",
    type: "talk",
    href: "https://alumni.gec.ac.in/events/2462?source=eventlist",
  },
  {
    year: "2018",
    title: "Astra — automated security testing for REST APIs",
    event: "Black Hat USA · Arsenal",
    type: "talk",
    href: "https://www.blackhat.com/us-18/presenters/Prajal-Kulkarni.html",
  },
  {
    year: "2018",
    title: "Attack Monitoring Using Elastic Stack",
    event: "NullCon 2018",
    type: "training",
    href: "https://nullcon.net/training/attack-monitoring-using-elastic-stack/",
  },
  {
    year: "2018",
    title: "Building a Real-World Attack Monitoring Solution with the ELK Stack",
    event: "c0c0n 2018",
    type: "training",
    href: "https://is-ra.org/c0c0n/2018/workshops.html",
  },
  {
    year: "2016",
    title: "Attack Monitoring using Elasticsearch, Logstash, Kibana",
    event: "NullCon 2016",
    type: "training",
    href: "https://nullcon.net/training/attack-monitoring-using-elasticsearch-logstash-kibana/",
  },
  {
    year: "2015",
    title: "Attack Monitoring using Elasticsearch, Logstash, Kibana",
    event: "NullCon 2015",
    type: "training",
    href: "https://nullcon.net/training/attack-monitoring-using-elasticsearch-logstash-kibana-2/",
  },
  {
    year: "2014",
    title: "The tale of 100 CVEs",
    event: "Confidence Kraków (Poland)",
    type: "talk",
    href: "https://www.youtube.com/watch?v=zfxx3JG0Lx8&list=PLnKL6-WWWE_WUzBw0_dQDiP3N6I7uzSVo&index=7",
  },
  {
    year: "2014",
    title: "Conference talk",
    event: "Grace Hopper",
    type: "talk",
  },
];
