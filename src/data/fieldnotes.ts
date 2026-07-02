/* Field Notes — short, opinionated takes on security events. Newest first.
   `body` supports **bold** (rendered via inlineBold). Keep each under ~200 words.
   topic drives the chip color/label (see field-notes.astro). */

export interface FieldNote {
  date: string;   // e.g. "Jun 18, 2026"
  topic: 'supply-chain' | 'ai' | 'vuln' | 'privacy' | 'identity' | 'culture';
  title: string;
  body: string;
}

export const fieldNotes: FieldNote[] = [
  {
    date: "Jul 02, 2026",
    topic: "culture",
    title: "A false sense of security is worse than no security at all. Most tool-heavy teams have exactly that.",
    body: "Every CISO gets asked the same question: what's the one thing that makes a company truly secure? The answer they're looking for is a tool, a framework, a vendor. It never is.\n\nTeams that buy every category-leading product and run quarterly pentests often have the weakest posture. Not because the tools don't work — they do. **Because tooling without the right security mindset is just expensive checkbox coverage.**\n\nThe security team's mindset is the real differentiator. How they think about threat models, how they respond when something breaks, whether they treat security as an operating principle or a compliance exercise.\n\n**You can't buy your way to a security culture.** The team that asks \"how would an attacker think about this?\" before shipping beats the team with a $10M security budget and no curiosity every single time.",
  },
  {
    date: "Jun 28, 2026",
    topic: "supply-chain",
    title: "A CVE advisory shouldn't require a human to figure out if you're affected.",
    body: "A critical advisory drops. Someone pastes it in Slack. A dozen engineers start manually grepping repos. An hour later, you maybe have an answer.\n\nThis is not a people problem. It's a missing engine problem.\n\n**Ingest advisories from GitHub Advisory Database or OSV, cross-reference against your dependency inventory and SBOM, and surface affected services automatically.** The answer to \"are we affected?\" should exist before anyone hits the panic button.\n\nMost teams have the raw material — lock files, package manifests, code scanning pipelines. What they haven't done is wire it together. **Automated advisory detection doesn't kill the scramble. The absence of it does.**",
  },
  {
    date: "Jun 24, 2026",
    topic: "ai",
    title: "An AI agent with database keys is just a privileged insider you can't fire.",
    body: "Google DeepMind published their AI Control Roadmap: a framework for securing autonomous agents in production. The core idea is borrowed from insider threat defense — assume the agent can fail, monitor what it does at runtime, and build hard stops before bad actions become irreversible.\n\nMost teams building AI agents focus on alignment, making sure the model understands the goal. **DeepMind's saying that's not enough. Once you give an agent credentials, API access, or decision authority, the security model flips.** It's no longer \"is the model safe?\" It's \"what happens when it isn't?\"\n\nYou wouldn't hand a human employee database keys without audit logs, approval workflows, and revocation. Why do we hand AI agents the same keys and hope training holds? **Defense needs to be a system property, not a bet on alignment.** In high-stakes domains — finance, healthcare — a misaligned agent isn't a research problem. It's a breach.",
  },
  {
    date: "Jun 22, 2026",
    topic: "supply-chain",
    title: "Your critical vendors are part of your security team whether you like it or not.",
    body: "Nobody can meaningfully audit every vendor in a modern ecosystem. The companies that try usually end up with spreadsheets full of questionnaires and very little understanding of actual risk.\n\nThe real challenge is identifying the vendors that hold sensitive data, operate critical systems, or have privileged access into your environment. I think of them as the extended family. Their resilience directly affects yours.\n\nInstead of spreading effort across hundreds of vendors, **invest deeply in the handful that matter.** Include them in resilience planning, incident discussions, and recovery exercises. Treat them less like suppliers and more like part of the operating model.\n\nYou don't need visibility into every vendor. **You need confidence in the ones that can hurt you.**",
  },
  {
    date: "Jun 18, 2026",
    topic: "supply-chain",
    title: "Another npm compromise. The lesson isn't \u201Caudit more.\u201D",
    body: "When a popular package ships a malicious post-install script, the reflex is to tell teams to audit dependencies harder. That doesn't scale — nobody reads 1,400 transitive packages. The real fix is boring: **pin versions, build in a sandbox with no network egress, and treat the registry as untrusted input.** Velocity doesn't have to drop. We made install steps egress-restricted by default and developers barely noticed. Defense should be a property of the pipeline, not a task on someone's plate.",
  },
  {
    date: "Jun 11, 2026",
    topic: "ai",
    title: "Prompt injection is just input validation wearing a costume",
    body: "Every week someone \u201Cdiscovers\u201D that an LLM agent can be tricked into exfiltrating data through a poisoned web page. We've seen this movie — it's SQL injection with vibes. The mistake is giving the model both untrusted content and privileged tools in the same context. **Treat model output as untrusted, scope tool permissions tightly, and put a human or a deterministic check in front of anything irreversible.** The interesting part isn't the jailbreak; it's that we keep handing agents production credentials and acting surprised.",
  },
  {
    date: "Jun 4, 2026",
    topic: "vuln",
    title: "On the latest \u201Ccritical\u201D RCE everyone's patching",
    body: "A CVSS 9.8 dropped this morning and my inbox is on fire. Before the fire drill: is the vulnerable component even reachable from the internet in your environment? Most of the time, **exposure — not severity — should drive your priority.** A 9.8 behind three layers of network policy can wait until Tuesday; a \u201Cmedium\u201D on your edge cannot. Severity scores are context-free by design. Your job is to add the context. Patch fast, but patch the right things first.",
  },
  {
    date: "May 27, 2026",
    topic: "privacy",
    title: "The DPDP rules are a security mandate in disguise",
    body: "People read India's data protection rules as a legal problem. Read them again as an engineer: you can't honor a deletion request if you don't know where the data lives, and you can't report a breach in time if you can't detect one. The companies that struggle won't be the ones with bad lawyers — **they'll be the ones without a data inventory and decent logging.** Compliance deadlines are, annoyingly, the best forcing function we have for the hygiene we should've done anyway.",
  },
  {
    date: "May 20, 2026",
    topic: "identity",
    title: "\u201CWe had MFA\u201D is not the flex you think it is",
    body: "Another breach post-mortem, another \u201Cbut we had MFA enabled.\u201D OTP and push MFA are phishable — attackers proxy the login in real time or fatigue users into approving. If the account guards anything that matters, the answer is **phishing-resistant factors: passkeys, hardware keys, device-bound credentials.** Yes, rollout is annoying. So is explaining to your board why the \u201CMFA\u201D you bragged about got relayed in ninety seconds. Pick the factor that matches the threat, not the one that's easiest to ship.",
  },
];
