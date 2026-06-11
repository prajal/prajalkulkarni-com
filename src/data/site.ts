/* Site-wide profile + contact. Edit freely — no component changes needed. */

export const site = {
  name: "Prajal Kulkarni",
  location: "Bengaluru, India",
  url: "https://prajalkulkarni.com",
  description:
    "Prajal Kulkarni — A security engineer at heart. More than a decade building security teams, programs, and engineering-focused security practices at PayPal, Flipkart, and Groww.",
  // Home page intro (first-person). Each string is a paragraph.
  // The first paragraph renders as the lede.
  intro: [
    "Over the last 16 years I've worked across application, cloud, infrastructure, and detection security — but mostly I've been lucky to work alongside some of the brightest people in the field, and I've learned a great deal from them.",
    "Along the way I've had the chance to help build and lead security at **PayPal**, **Flipkart**, and now **Groww**, where I'm Chief Information Security Officer. I care about security that enables velocity, treats engineers as partners, and earns trust by being reliable.",
  ],
  headline: "Hi, I'm Prajal. I help build security teams and programs that scale",
  companies: ["PayPal", "Flipkart", "Cleartrip", "Groww"],
  contact: {
    blurb:
      "I'd genuinely love to hear from you — whether it's about security leadership, a speaking engagement, or just comparing notes on the work. I try to reply to everyone.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/prajalkulkarni/" },
      { label: "GitHub", href: "https://github.com/prajalkulkarni" },
      { label: "Email", href: "mailto:prajalkulkarni@gmail.com" },
      { label: "Topmate", href: "https://topmate.io/prajalkulkarni/" },
    ],
  },
} as const;
