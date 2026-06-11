/* Career journey — newest first. Add or edit entries here. */

export interface JourneyEntry {
  company: string;
  role: string;
  dates: string;
  current?: boolean;
  title: string;       // short, human heading for the entry
  body: string;        // first-person summary
  learned?: { label: string; text: string };
}

export const journey: JourneyEntry[] = [
  {
    company: "Groww",
    role: "Chief Information Security Officer",
    dates: "2023 — Now",
    current: true,
    title: "Building the security function from the ground up.",
    body:
      "At Groww I've had the chance to build the security function more or less from zero. Bootstrapping taught me to start with the unglamorous basics — know your inventory, secure the perimeter, and reach for open-source before commercial tools so you buy time to understand what you actually need. I've also leaned on design partnerships with Indian security startups who genuinely understand our pace and our regulators.",
    learned: {
      label: "What I keep learning",
      text: "Security is a business function before it's a technical one. Understand the company's DNA first, then protect what an adversary would actually go after.",
    },
  },
  {
    company: "Cleartrip",
    role: "Head of Information Security (BISO)",
    dates: "2022 — 2023",
    title: "Owning a security charter end to end.",
    body:
      "Cleartrip was where I first owned security strategy from end to end — setting up the function, writing the policies, running the security council, and being the person business teams came to with their hardest questions. It taught me how much of leadership is simply translation: turning risk into language that leaders can actually act on.",
    learned: {
      label: "What I learned",
      text: "You can't always keep pace with the business. The job is to balance what's needed against what the business can absorb — and to communicate the trade-offs honestly.",
    },
  },
  {
    company: "Flipkart",
    role: "Security Engineer → Senior Security Architect",
    dates: "2014 — 2022",
    title: "Where I grew up, professionally.",
    body:
      "Flipkart is where I really grew up as an engineer and a leader. I joined as one of the founding members of the Application Security team and had the opportunity to help shape its evolution as the company scaled rapidly. As the engineering organization expanded, our focus shifted from finding vulnerabilities to building systems that made security easier to consume. We invested in automation, developer workflows, and clear risk context so security could scale alongside engineering rather than become a bottleneck. More than anything, Flipkart taught me that successful security programs are built through partnership. Many of the lessons that continue to shape how I think about security, engineering, and leadership came from the people I worked with there.",
    learned: {
      label: "What I learned",
      text: "If security stays the security team's problem, it never scales. The goal is to embed problem-solving into the engineers building the product.",
    },
  },
  {
    company: "PayPal",
    role: "Security Engineer",
    dates: "2013 — 2014",
    title: "Learning what trust really costs.",
    body:
      "At PayPal I worked on the security of digital and mobile payments. Handling people's money raised the bar on everything, and it's where I first understood what user trust actually costs — and why it's worth protecting carefully.",
  },
  {
    company: "PwC",
    role: "Software Engineer, Core Security",
    dates: "2013",
    title: "Reading systems before securing them.",
    body:
      "A brief but formative stop, working on core security as an engineer. It taught me to read and understand systems carefully before trying to secure them — a habit I'm still grateful for.",
  },
  {
    company: "Microland",
    role: "Security Engineer",
    dates: "2010 — 2012",
    title: "Where it all started.",
    body:
      "Where I began — vulnerability assessment and penetration testing. Long nights, a lot of curiosity, and the first people who were generous enough to teach a beginner how any of this worked.",
  },
];
