// Controleert de gebouwde /start-pagina's (draai eerst `npm run build`).
import { readFileSync } from 'node:fs';

const WA = 'https://wa.me/31643187444';
const files = ['dist/start/index.html', 'dist/en/start/index.html'];
const allowedEuro = new Set(['€35', '€90', '€200', '€300', '€400', '€750', '€30', '€25', '€5', '€10']);
let fail = 0;
const bad = (f, m) => { fail++; console.error(`✗ ${f}: ${m}`); };

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const anchors = [...html.matchAll(/<a\b[^>]*>/g)].map((m) => m[0]);
  const attr = (a, n) => (a.match(new RegExp(`\\s${n}="([^"]*)"`)) || [])[1];

  // 1. Elke WhatsApp-link → wa.me/31643187444
  const wa = anchors.filter((a) => /wa\.me|whatsapp|api\.whatsapp/i.test(attr(a, 'href') || ''));
  for (const a of wa) {
    const href = attr(a, 'href').replace(/&amp;/g, '&');
    if (!(href === WA || href.startsWith(`${WA}?text=`))) bad(f, `foute WhatsApp-link ${href}`);
  }
  console.log(`\n${f}: ${wa.length} WhatsApp-links`);
  for (const a of wa) {
    const href = attr(a, 'href').replace(/&amp;/g, '&');
    const text = new URL(href).searchParams.get('text');
    console.log(`  ✓ [${attr(a, 'data-cta')}] ${text ?? '(geen tekst)'}`);
  }

  // 2. Elke link behalve skip-link heeft een unieke data-cta
  const ctas = anchors.filter((a) => !/class="skip"/.test(a));
  const ids = ctas.map((a) => attr(a, 'data-cta'));
  ctas.forEach((a, i) => { if (!ids[i]) bad(f, `link zonder data-cta: ${a}`); });
  const dup = ids.filter((id, i) => id && ids.indexOf(id) !== i);
  if (dup.length) bad(f, `dubbele data-cta: ${dup.join(', ')}`);
  console.log(`  ${ids.filter(Boolean).length} CTA's met data-cta`);

  // 3. JSON-LD parsebaar
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  try { const j = JSON.parse(ld[1]); console.log(`  JSON-LD: ${j.map((x) => [].concat(x['@type']).join('+')).join(', ')} · ${j[0].makesOffer.length} offers`); }
  catch (e) { bad(f, `JSON-LD ongeldig: ${e.message}`); }

  // 4. Alleen prijzen uit het nieuwe aanbod
  const text = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  for (const m of new Set(text.match(/€\s?[\d.,]+/g) || [])) if (!allowedEuro.has(m.replace(/\s/g, ''))) bad(f, `onbekende prijs ${m}`);
}
console.log(fail ? `\n${fail} fout(en)` : '\nAlles OK');
process.exit(fail ? 1 : 0);
