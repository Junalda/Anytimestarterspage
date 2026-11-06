/**
 * ───────────────────────────────────────────────────────────────
 *  /start — ÉÉN plek voor alle links, nummers en prijzen
 * ───────────────────────────────────────────────────────────────
 *
 *  Dit aanbod is NIEUW en geldt alleen voor /start. Prijzen en
 *  pakketnamen van de rest van de site worden hier bewust niet
 *  gebruikt. Alles op de pagina (kaarten, prijs per uur, FAQ,
 *  JSON-LD) wordt uit dit bestand afgeleid.
 */

export const links = {
  /**
   * Volledige URL's, zodat ze ook werken als /start los draait
   * (bijv. op anytimestarterspage.vercel.app) en niet alleen op de hoofdsite.
   */
  home: 'https://anytimemusic.nl/',
  /** Reserveren / losse boeking. */
  booking: 'https://anytimemusic.nl/studio/booking',
  /** Gratis rondleiding. */
  contact: 'https://anytimemusic.nl/contact',
  /** Zonder de QR-trackingparameters, zodat bezoeken niet als QR-scan meetellen. */
  instagram: 'https://www.instagram.com/anytimemusicstudio/',
} as const;

export const whatsapp = {
  /** Alleen cijfers, internationaal formaat (0031 6 43187444). */
  number: '31643187444',
  /** Zoals getoond aan mensen. */
  display: '+31 6 43187444',
} as const;

export const business = {
  legalName: 'AnyTime Music B.V.',
  name: 'Anytime Music Studio',
  street: 'Gustoweg 39',
  postalCode: '3029 AR',
  city: 'Rotterdam',
  country: 'NL',
  telephone: '+31643187444',
  url: 'https://anytimemusic.nl',
} as const;

/* ─────────────────────────── Aanbod ─────────────────────────── */

/** Losse boeking, prijs per uur in euro. */
export const singleHourPrice = 35;

export interface Plan {
  /** Stabiele sleutel, ook gebruikt in data-cta (plan-200). */
  id: string;
  price: number;
  hours: number;
  popular?: boolean;
}

export const plans: Plan[] = [
  { id: '90', price: 90, hours: 3 },
  { id: '165', price: 165, hours: 6 },
  { id: '200', price: 200, hours: 8, popular: true },
  { id: '300', price: 300, hours: 12 },
  { id: '400', price: 400, hours: 16 },
];

export const productionDay = {
  price: 750,
  vatIncluded: false,
  sessionHours: 3,
  videos: 4,
  photos: 4,
  deliveryWorkdays: 5,
} as const;

/* ─────────────────────────── Helpers ─────────────────────────── */

/** Prijs per uur, op centen afgerond (€165 / 6 = €27,50). */
export const perHour = (p: Plan) => Math.round((p.price / p.hours) * 100) / 100;

/** WhatsApp-link met optioneel vooringevuld bericht (URL-encoded). */
export function waLink(message?: string): string {
  const base = `https://wa.me/${whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** "€1.234" of "€27,50" in NL-notatie (centen alleen als die er zijn). */
export const eur = (n: number) =>
  `€${n.toLocaleString('nl-NL', Number.isInteger(n) ? {} : { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
