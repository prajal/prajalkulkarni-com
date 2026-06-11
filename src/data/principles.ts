/* Security philosophy — numbered in order. Add or reorder freely. */

export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: "Security is a business function first.",
    body:
      "Before I try to secure anything, I try to understand how the business creates value. Every company has its own DNA — the products, systems, and processes that matter most. Once you understand what the business depends on, it becomes much easier to understand what an adversary would target and where security efforts will have the greatest impact. Good security starts with understanding the business, not the technology.",
  },
  {
    title: "Security should enable velocity.",
    body:
      "The business wants to move fast, and security can't always keep up with that pace. A lot of the job is balancing what's needed against what the business can absorb — and communicating risk to leadership honestly, without drama.",
  },
  {
    title: "Trust is earned, and it's expensive.",
    body:
      "In fintech you're dealing with people's money, which raises the bar on everything. Trust comes from strong architecture built from the ground up — but also from being reliable, and from being honest with people about their own role in staying safe.",
  },
  {
    title: "Security teams should be engineering teams.",
    body:
      "The only way security truly scales is to embed problem-solving into the engineers themselves. When that happens, security stops being the security team's problem and becomes something everyone quietly owns.",
  },
  {
    title: "Remove friction; don't add gates.",
    body:
      "At Flipkart, we gave developers a single place to request security reviews and automated much of the work behind the scenes. What surprised us wasn't the automation itself, but how quickly developers adopted it when the process became simple and predictable. That experience reinforced a belief I still hold today: people rarely resist security itself — they resist unnecessary friction.",
  },
  {
    title: "Context matters more than severity scores.",
    body:
      "Dropping thousands of vulnerabilities on a team rarely changes behavior. Providing clear context — how a specific issue could be exploited and what impact it could have — does. People don't act on numbers. They act on understanding. Good security helps teams see why something matters, not just that it exists.",
  },
  {
    title: "When starting from zero, start simple.",
    body:
      "Get your inventory and perimeter first, and reach for open-source before commercial tools. It reduces friction with leadership and buys you time to understand what you genuinely need before you spend on it.",
  },
  {
    title: "Tell stories, not just numbers.",
    body:
      "Metrics land better as stories. Showing a team how many issues they shipped last release — and what those could have meant in the real world — holds up a mirror far better than any dashboard.",
  },
];
