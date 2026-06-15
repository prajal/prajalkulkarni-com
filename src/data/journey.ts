/* Career journey — newest first. Add or edit entries here. */

export interface JourneyEntry {
  company: string;
  role: string;
  dates: string;
  current?: boolean;
  title: string;
  body: string;
  learned?: { label: string; text: string };
  artifacts?: {
    highlights?: string[];
    tools?: { label: string; href: string }[];
    writing?: { label: string; href: string }[];
    writingLabel?: string;
  };
}

export const journey: JourneyEntry[] = [
  {
    company: "Groww",
    role: "Chief Information Security Officer",
    dates: "2023 — Now",
    current: true,
    title: "Building the security function from the ground up.",
    body: "At Groww I've had the chance to build the security function more or less from zero. Bootstrapping taught me to start with the unglamorous basics — know your inventory, secure the perimeter, and reach for open-source before commercial tools so you buy time to understand what you actually need. I've also leaned on design partnerships with Indian security startups who genuinely understand our pace and our regulators.",
    learned: {
      label: "What I keep learning",
      text: "Security is a business function before it's a technical one. Understand the company's DNA first, then protect what an adversary would actually go after.",
    },
    artifacts: {
      highlights: [
        "Security organization spanning multiple security domains",
        "Security programs designed to scale with business growth",
        "Developer-focused security platforms and automation",
        "Security integrated into engineering and business decision-making",
      ],
      tools: [
        { label: "Appollo", href: "https://github.com/Groww-OSS/Appollo" },
        { label: "Hela", href: "https://github.com/Groww-OSS/hela" },
        { label: "SecretLens", href: "https://github.com/Groww-OSS/SecretLens" },
      ],
      writing: [
        { label: "Securing at speed: scaling vulnerability management", href: "https://tech.groww.in/securing-at-speed-how-groww-scales-vulnerability-management-f2ddfb9841a5" },
        { label: "Beyond the checkbox: scaling product security across Groww's SDLC", href: "https://tech.groww.in/beyond-the-checkbox-scaling-product-security-across-growws-sdlc-e5cd3d70a3be" },
        { label: "Not just OWASP: deep dive into Groww's API security playbook", href: "https://tech.groww.in/not-just-owasp-deep-dive-into-growws-api-security-playbook-ab5e74ef1cb8" },
        { label: "Beyond perimeter: introducing Appollo for real-time attack surface detection", href: "https://tech.groww.in/beyond-perimeter-introducing-appollo-for-real-time-attack-surface-detection-777092b6be2e" },
      ],
    },
  },
  {
    company: "Cleartrip",
    role: "Head of Information Security (BISO)",
    dates: "2022 — 2023",
    title: "Owning a security charter end to end.",
    body: "Cleartrip was where I first owned security strategy from end to end — setting up the function, writing the policies, running the security council, and being the person business teams came to with their hardest questions. It taught me how much of leadership is simply translation: turning risk into language that leaders can actually act on.",
    learned: {
      label: "What I learned",
      text: "Smaller teams teach you to be pragmatic. You don't always have the luxury of specialists, which means solving problems across disciplines and focusing on what creates the most impact with the least complexity.",
    },
    artifacts: {
      highlights: [
        "Security foundations for a fast-moving product organization",
        "Early application security and secure development practices",
        "Security reviews embedded into product delivery",
        "Cross-functional ownership of security initiatives",
        "Built a BISO function to embed security partnership directly within business and product teams",
      ],
    },
  },
  {
    company: "Flipkart",
    role: "Security Engineer → Senior Security Architect",
    dates: "2014 — 2022",
    title: "Where I grew up, professionally.",
    body: "Flipkart is where I really grew up as an engineer and a leader. I joined as one of the founding members of the Application Security team and had the opportunity to help shape its evolution as the company scaled rapidly. As the engineering organization expanded, our focus shifted from finding vulnerabilities to building systems that made security easier to consume. We invested in automation, developer workflows, and clear risk context so security could scale alongside engineering rather than become a bottleneck. More than anything, Flipkart taught me that successful security programs are built through partnership. Many of the lessons that continue to shape how I think about security, engineering, and leadership came from the people I worked with there.",
    learned: {
      label: "What I learned",
      text: "If security stays the security team's problem, it never scales. The goal is to embed problem-solving into the engineers building the product.",
    },
    artifacts: {
      highlights: [
        "One of the earliest AppSec functions at scale in India",
        "Developer-centric security workflows embedded into engineering",
        "Security embedded into OKRs across teams",
      ],
      tools: [
        { label: "Astra", href: "https://github.com/flipkart-incubator/Astra" },
        { label: "Watchdog", href: "https://github.com/flipkart-incubator/watchdog" },
        { label: "RTA", href: "https://github.com/flipkart-incubator/RTA" },
      ],
      writing: [
        { label: "How Flipkart reacts to security vulnerabilities", href: "https://blog.flipkart.tech/how-flipkart-reacts-to-security-vulnerabilities-17dae9b0661e" },
        { label: "Securing the billion-dollar app", href: "https://blog.flipkart.tech/securing-the-billion-dollar-app-417d5af1f0de" },
      ],
    },
  },
  {
    company: "PayPal",
    role: "Security Engineer",
    dates: "2013 — 2014",
    title: "Learning what trust really costs.",
    body: "At PayPal I worked on the security of digital and mobile payments. Handling people's money raised the bar on everything, and it's where I first understood what user trust actually costs — and why it's worth protecting carefully.",
    learned: {
      label: "What I learned",
      text: "If you want security to matter, you need to understand what the business actually depends on. The closer security gets to customers, money, and trust, the easier it becomes to prioritize what truly matters.",
    },
    artifacts: {
      highlights: [
        "Security controls and processes at global scale",
        "Security deeply integrated into product development",
        "Risk-driven approaches to protecting customer trust",
        "Exposure to operating security in a highly regulated environment",
      ],
      writing: [
        { label: "The tale of 100 CVEs", href: "https://www.slideshare.net/slideshow/the-tale-of-100-cves/35253566" },
        { label: "Code Vigilant", href: "https://codevigilant.com/" },
      ],
    },
  },
  {
    company: "PwC",
    role: "Software Engineer, Core Security",
    dates: "2013",
    title: "Reading systems before securing them.",
    body: "A brief but formative stop, working on core security as an engineer. It taught me to read and understand systems carefully before trying to secure them — a habit I'm still grateful for.",
    artifacts: {
      writing: [
        { label: "The tale of 100 CVEs", href: "https://codevigilant.com/author/prajalkulkarni/" },
      ],
      writingLabel: "Research",
    },
  },
  {
    company: "Microland",
    role: "Security Engineer",
    dates: "2010 — 2012",
    title: "Where it all started.",
    body: "Where I began — vulnerability assessment and penetration testing. Long nights, a lot of curiosity, and the first people who were generous enough to teach a beginner how any of this worked.",
    learned: {
      label: "What I learned",
      text: "The best way to learn security is to learn technology first. Understanding infrastructure, operations, and how systems actually work provides a foundation that stays useful throughout your career.",
    },
    artifacts: {
      highlights: [
        "Exposure to enterprise infrastructure and operations",
        "Hands-on experience across networks, systems, and security",
        "Foundations in troubleshooting and operational excellence",
        "Early understanding of security from an infrastructure perspective",
      ],
      writing: [
        { label: "GLPI 0.83.3 Security vulnerabilities", href: "https://www.tenable.com/plugins/nessus/61416" },
      ],
      writingLabel: "Research",
    },
  },
];
