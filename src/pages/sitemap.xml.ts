/**
 * Sitemap-fragment voor /start. Op de hoofdsite: voeg deze twee URL's toe
 * aan de bestaande sitemap (hoofdnavigatie blijft ongewijzigd).
 */
import type { APIRoute } from 'astro';

const pages = [
  { loc: '/start', alt: { nl: '/start', en: '/en/start' } },
  { loc: '/en/start', alt: { nl: '/start', en: '/en/start' } },
];

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${abs(p.loc)}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="nl" href="${abs(p.alt.nl)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(p.alt.en)}"/>
  </url>`,
    )
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
