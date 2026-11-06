/**
 * ───────────────────────────────────────────────────────────────
 *  /start — ÉÉN plek voor alle links, nummers en prijzen
 * ───────────────────────────────────────────────────────────────
 *
 *  Dit aanbod is NIEUW en geldt alleen voor /start. Prijzen en
 *  pakketnamen van de rest van de site worden hier bewust niet
 *  gebruikt. Alles op de pagina (kaarten, prijs per uur, FAQ,
 *  JSON-LD) wordt uit dit bestand afgeleid.
 *
 *  Waarden met  TODO  moeten nog met de echte waarde gevuld worden.
 */

export const links = {
  /** Reserveren / losse boeking. */
  booking: '/studio/booking',
  /** Gratis rondleiding. */
  contact: '/contact',
  /**
   * Google Form voor lidmaatschap.
   * TODO: vervang door de echte link (de "viewform"-URL, niet forms.gle,
   * anders werkt de prefill niet).
   */
  membershipForm: 'https://docs.google.com/forms/d/e/TODO_FORM_ID/viewform',
  /**
   * Prefill van het plan in de Google Form. Vul het entry-ID van de
   * vraag "Welk abonnement?" in (bijv. 'entry.123456789'). Zo vind je het:
   * Form → ⋮ → "Vooraf ingevulde link ophalen" → vul iets in → kopieer link.
   * Leeg = geen prefill, de link werkt dan nog steeds.
   */
  membershipFormPlanEntry: '',
  /** TODO: controleer het Instagram-account. */
  instagram: 'https://www.instagram.com/anytimemusic.nl/',
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

/** Prijs per uur, afgerond op hele euro's. */
export const perHour = (p: Plan) => Math.round(p.price / p.hours);

/** WhatsApp-link met optioneel vooringevuld bericht (URL-encoded). */
export function waLink(message?: string): string {
  const base = `https://wa.me/${whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Google Form-link, met het plan als prefill als het entry-ID bekend is. */
export function membershipFormLink(planLabel: string): string {
  if (!links.membershipFormPlanEntry) return links.membershipForm;
  const url = new URL(links.membershipForm);
  url.searchParams.set('usp', 'pp_url');
  url.searchParams.set(links.membershipFormPlanEntry, planLabel);
  return url.toString();
}

/** "€1.234" in NL-notatie. */
export const eur = (n: number) => `€${n.toLocaleString('nl-NL')}`;
