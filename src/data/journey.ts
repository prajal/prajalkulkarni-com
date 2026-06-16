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
    cves?: { id: string; href: string }[];
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
      cves: [
        { id: "CVE-2014-4513", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4513" },
        { id: "CVE-2014-4514", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4514" },
        { id: "CVE-2014-4515", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4515" },
        { id: "CVE-2014-4516", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4516" },
        { id: "CVE-2014-4517", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4517" },
        { id: "CVE-2014-4519", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4519" },
        { id: "CVE-2014-4520", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4520" },
        { id: "CVE-2014-4521", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4521" },
        { id: "CVE-2014-4522", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4522" },
        { id: "CVE-2014-4523", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4523" },
        { id: "CVE-2014-4524", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4524" },
        { id: "CVE-2014-4525", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4525" },
        { id: "CVE-2014-4526", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4526" },
        { id: "CVE-2014-4527", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4527" },
        { id: "CVE-2014-4528", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4528" },
        { id: "CVE-2014-4529", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4529" },
        { id: "CVE-2014-4530", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4530" },
        { id: "CVE-2014-4531", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4531" },
        { id: "CVE-2014-4532", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4532" },
        { id: "CVE-2014-4533", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4533" },
        { id: "CVE-2014-4534", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4534" },
        { id: "CVE-2014-4535", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4535" },
        { id: "CVE-2014-4536", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4536" },
        { id: "CVE-2014-4537", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4537" },
        { id: "CVE-2014-4538", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4538" },
        { id: "CVE-2014-4539", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4539" },
        { id: "CVE-2014-4540", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4540" },
        { id: "CVE-2014-4541", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4541" },
        { id: "CVE-2014-4542", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4542" },
        { id: "CVE-2014-4543", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4543" },
        { id: "CVE-2014-4544", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4544" },
        { id: "CVE-2014-4545", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4545" },
        { id: "CVE-2014-4546", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4546" },
        { id: "CVE-2014-4547", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4547" },
        { id: "CVE-2014-4549", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4549" },
        { id: "CVE-2014-4550", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4550" },
        { id: "CVE-2014-4551", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4551" },
        { id: "CVE-2014-4552", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4552" },
        { id: "CVE-2014-4553", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4553" },
        { id: "CVE-2014-4555", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4555" },
        { id: "CVE-2014-4556", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4556" },
        { id: "CVE-2014-4557", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4557" },
        { id: "CVE-2014-4558", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4558" },
        { id: "CVE-2014-4559", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4559" },
        { id: "CVE-2014-4560", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4560" },
        { id: "CVE-2014-4561", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4561" },
        { id: "CVE-2014-4563", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4563" },
        { id: "CVE-2014-4564", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4564" },
        { id: "CVE-2014-4566", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4566" },
        { id: "CVE-2014-4572", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4572" },
        { id: "CVE-2014-4574", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4574" },
        { id: "CVE-2014-4576", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4576" },
        { id: "CVE-2014-4583", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4583" },
        { id: "CVE-2014-4584", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4584" },
        { id: "CVE-2014-4588", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4588" },
        { id: "CVE-2014-4589", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4589" },
        { id: "CVE-2014-4593", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4593" },
        { id: "CVE-2014-4596", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4596" },
        { id: "CVE-2014-4597", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4597" },
        { id: "CVE-2014-4599", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4599" },
        { id: "CVE-2014-4600", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4600" },
        { id: "CVE-2014-4604", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4604" },
        { id: "CVE-2014-4606", href: "https://nvd.nist.gov/vuln/detail/CVE-2014-4606" },
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
      cves: [
        { id: "CVE-2012-4002", href: "https://nvd.nist.gov/vuln/detail/CVE-2012-4002" },
        { id: "CVE-2012-4003", href: "https://nvd.nist.gov/vuln/detail/CVE-2012-4003" },
      ],
      writingLabel: "Research",
    },
  },
];
