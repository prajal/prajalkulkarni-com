# Field Notes Skill — Prajal Kulkarni

## What Field Notes are
Short, opinionated security takes. Not Groww-centric. Personal interpretation of security news, events, and 16 years of practitioner experience. Think hallway conversation with a sharp security engineer, not a blog post or company announcement.

---

## File location
`src/data/fieldnotes.ts`

## Data structure
```typescript
{
  date: "Jun 28, 2026",       // today's date, formatted exactly like this
  topic: "supply-chain",      // ONLY: 'supply-chain' | 'ai' | 'vuln' | 'privacy' | 'identity'
  title: "Declarative take.", // see title rules below
  body: "...",                // see body rules below
}
```

Always insert new entries at the **top** of the `fieldNotes` array (newest first).

---

## Title rules
- Declarative statement, not a question or clickbait headline
- Punchy, direct, slightly sardonic
- Challenges the default/obvious thinking immediately
- Examples:
  - "A CVE advisory shouldn't require a human to figure out if you're affected."
  - "\"We had MFA\" is not the flex you think it is"
  - "Prompt injection is just input validation wearing a costume"
  - "Your critical vendors are part of your security team whether you like it or not."

---

## Body rules

### Length
95–145 words. Never exceed 150. Count before finalising.

### Structure
1. **Open** — challenge the default thinking immediately. No preamble, no scene-setting. Drop straight into the problem or the wrong assumption most people hold.
2. **Reframe** — flip the narrative. What's the real issue underneath?
3. **Bold the actionable insight** — one or two `**bold**` lines. These are the sharp takeaways, not summaries.
4. **Close punchy** — one line that lands. Not a wrap-up paragraph. Not "in conclusion."

### Voice
- Conversational, sardonic, practitioner-first
- "nobody reads 1,400 transitive packages" — specific, real, slightly dry
- "SQL injection with vibes" — irreverent but accurate
- "acting surprised" — the sardonic closer
- First person where experience is referenced ("We made install steps egress-restricted by default")
- Never consulting-report tone ("what's missing in most organisations", "the tech isn't exotic")
- Never over-explain. Trust the reader.

### What NOT to do
- No fluff openers ("In today's threat landscape...")
- No bullet points
- No numbered lists
- No headers inside the body
- No Groww references
- Don't summarise the news — interpret it
- Don't end with a wrap-up paragraph

---

## Workflow
1. Discuss topic ideas verbally or in text
2. Propose 4 title options in Prajal's voice
3. Wait for title approval
4. Draft body — share for approval before pushing
5. On approval, fetch current SHA via `github:get_file_contents`, then push via `github:create_or_update_file`
6. Always include the full `fieldnotes.ts` file content when pushing — do not patch individual entries

---

## Example entry (reference for tone and length)

```typescript
{
  date: "Jun 11, 2026",
  topic: "ai",
  title: "Prompt injection is just input validation wearing a costume",
  body: "Every week someone \"discovers\" that an LLM agent can be tricked into exfiltrating data through a poisoned web page. We've seen this movie — it's SQL injection with vibes. The mistake is giving the model both untrusted content and privileged tools in the same context. **Treat model output as untrusted, scope tool permissions tightly, and put a human or a deterministic check in front of anything irreversible.** The interesting part isn't the jailbreak; it's that we keep handing agents production credentials and acting surprised.",
},
```
