/* Tiny inline formatter: converts **bold** to <strong>…</strong>.
   Escapes HTML first so content stays safe. */
export function inlineBold(text: string): string {
  const esc = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return esc.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
