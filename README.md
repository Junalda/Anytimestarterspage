# anytimemusic.nl/start

Startpagina met een snelle route naar verkoop: repetitieruimte-abonnement (#ruimte) of productiedag (#content).
Astro, statische output, geen client-JavaScript. Brand tokens en ∞-icoon komen uit `Junalda/anytimemusicstudio`.

```bash
npm install
npm run dev            # http://localhost:4321/start
npm run build          # dist/start, dist/en/start, dist/sitemap.xml
npm run check:links    # na build: WhatsApp-links, data-cta, JSON-LD, prijzen
```

## Waar pas je wat aan

| Bestand | Inhoud |
| --- | --- |
| `src/config/start.ts` | **Alle links** (booking, contact, Instagram), WhatsApp-nummer, bedrijfsgegevens, prijzen |
| `src/i18n/start.ts` | Teksten NL/EN, WhatsApp-berichten |
| `src/components/StartPage.astro` | Opmaak, JSON-LD |

## Meten

Elke link heeft `data-cta` (uniek, bijv. `plan-200`, `whatsapp-header`, `book-sticky`) en `data-cta-type`
(`whatsapp`, `booking`, `contact`, `anchor`, `nav`, `social`). Voorbeeld voor GA4/GTM:

```js
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-cta]');
  if (el) gtag('event', 'cta_click', { cta: el.dataset.cta, cta_type: el.dataset.ctaType, page_lang: document.documentElement.lang });
});
```

## Integreren in de hoofdsite

Draait de hoofdsite ook op Astro, kopieer dan `src/config/start.ts`, `src/i18n/start.ts`,
`src/components/{StartPage,Icon}.astro` en `src/pages/start.astro` (+ `en/start.astro`).
Voeg `/start` en `/en/start` toe aan de bestaande sitemap. `src/styles/brand.css` is alleen nodig als de
tokens daar nog niet globaal staan. De hoofdnavigatie hoeft niet aangepast te worden.
