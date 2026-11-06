/**
 * Teksten voor /start (NL) en /en/start (EN).
 * Prijzen staan NIET hier maar in src/config/start.ts.
 */
import { plans, productionDay as pd, singleHourPrice, eur, type Plan } from '../config/start';

export type Lang = 'nl' | 'en';

const planLabel = {
  nl: (p: Plan) => `${eur(p.price)} per maand (${p.hours} uur)`,
  en: (p: Plan) => `${eur(p.price)} per month (${p.hours} hours)`,
};

export const t = {
  nl: {
    lang: 'nl',
    path: '/start',
    altPath: '/en/start',
    altLabel: 'EN',
    meta: {
      title: 'Repetitieruimte Rotterdam 24/7 & muziekcontent laten maken | Anytime Music',
      description: `24/7 repetitieruimte in Rotterdam met smart lock, volledige backline, PA en drums. Abonnement vanaf ${eur(plans[0].price)} per maand, of laat muziekcontent maken: 4 video's + 4 foto's op één productiedag.`,
    },
    header: { whatsapp: 'App ons', book: 'Boek nu', home: 'Anytime Music, naar de homepage' },
    hero: {
      eyebrow: 'Start hier',
      title: ['Jouw studio. 24/7.', 'Repeteren of content maken?'],
      sub: 'Met de smart lock kom je er dag en nacht in, midden in Rotterdam. Volledige backline, PA, drums en recording staan klaar. Maandelijks opzegbaar.',
      choiceRoom: 'Ik zoek een repetitieruimte',
      choiceRoomSub: `Abonnement vanaf ${eur(plans[0].price)} p/m`,
      choiceContent: 'Ik wil content voor mijn muziek',
      choiceContentSub: `Productiedag ${eur(pd.price)}`,
      whatsapp: 'Vragen? App ons direct',
      trust: ['24/7 open', 'Smart lock', 'Maandelijks opzegbaar', 'Volledige backline', 'Rotterdam'],
    },
    pains: {
      title: 'Herken je dit?',
      items: [
        { who: 'Producer', text: 'Je wilt werken wanneer de inspiratie komt, maar er is nergens plek op jouw tijd.' },
        { who: 'Band', text: 'Elke repetitie eerst een uur je setup opbouwen, en na afloop weer alles afbreken.' },
        { who: 'Artiest', text: 'Je release staat klaar, maar je hebt geen content om hem te promoten.' },
        { who: 'Iedereen', text: 'Losse studio\'s zijn duur, en je betaalt elke keer opnieuw de hoofdprijs.' },
      ],
    },
    room: {
      eyebrow: '🎶 Repetitieruimte',
      title: 'Kies je maandplan',
      sub: 'Ideaal om regelmatig te repeteren en aan je muziek te werken. Maandelijks opzegbaar.',
      perMonth: 'per maand',
      hours: (h: number) => `${h} uur per maand`,
      perHour: (n: number) => `${eur(n)} per uur`,
      saving: (n: number) => `${eur(singleHourPrice - n)} per uur goedkoper dan los`,
      popular: 'Meest gekozen',
      cta: 'Kies dit plan',
      waMsg: (p: Plan) => `Hoi! Ik heb interesse in het abonnement van ${planLabel.nl(p)}.`,
      single: {
        title: 'Liever eenmalig?',
        text: `Losse boeking ${eur(singleHourPrice)} per uur, zonder abonnement.`,
        cta: 'Boek een los uur',
      },
      usp: 'Je persoonlijke instellingen blijven bewaard: monitor mix, X32-scene en lichtscène. Binnenlopen en meteen spelen.',
    },
    content: {
      eyebrow: '🎬 Content',
      title: 'Productiedag: content voor een hele maand',
      sub: `In één sessie van ${pd.sessionHours} uur maken we ${pd.videos} video's en ${pd.photos} foto's. Dat is één video en één foto per week, een hele maand lang.`,
      price: eur(pd.price),
      vat: 'excl. btw',
      checklist: [
        `Sessie van ${pd.sessionHours} uur`,
        `${pd.videos} video's`,
        `${pd.photos} foto's`,
        'Content voor een hele maand',
        `Geleverd binnen ${pd.deliveryWorkdays} werkdagen`,
      ],
      timelineTitle: 'Zo ziet je maand eruit',
      week: (n: number) => `Week ${n}`,
      weekItems: ['1 video', '1 foto'],
      cta: 'Plan je productiedag',
      waMsg: 'Hoi! Ik wil graag een productiedag plannen.',
      secondary: 'Eerst even langskomen?',
    },
    roles: {
      title: 'Twijfel je? Kies op basis van je rol',
      items: [
        { id: 'producer', title: 'Producer', text: `${eur(plans[0].price)}-, ${eur(plans[1].price)}- of ${eur(plans[2].price)}-plan`, href: '#ruimte' },
        { id: 'band', title: 'Band', text: `${eur(plans[3].price)}- of ${eur(plans[4].price)}-plan`, href: '#ruimte' },
        { id: 'artiest', title: 'Artiest', text: 'Productiedag + een plan', href: '#content' },
      ],
      go: 'Bekijk',
    },
    faq: {
      title: 'Veelgestelde vragen',
      items: [
        { q: 'Hoe werkt 24/7 toegang?', a: 'Je reserveert online. Op je gereserveerde tijd open je de deur met de smart lock. Je hebt geen sleutel nodig en er hoeft niemand op je te wachten, ook niet midden in de nacht.' },
        { q: 'Wat staat er in de ruimte?', a: 'Een volledige backline, PA, drums en recording. Je neemt je instrument mee en kunt meteen spelen.' },
        { q: 'Kan ik maandelijks opzeggen?', a: 'Ja. Alle abonnementen zijn maandelijks opzegbaar.' },
        { q: 'Wat als ik meer uren nodig heb?', a: `Je stapt over naar een groter plan, of je boekt losse uren voor ${eur(singleHourPrice)} per uur.` },
        { q: 'Wat krijg ik bij een productiedag?', a: `${pd.videos} video's en ${pd.photos} foto's uit één sessie van ${pd.sessionHours} uur, geleverd binnen ${pd.deliveryWorkdays} werkdagen. Dat is content voor een hele maand. Prijs: ${eur(pd.price)} excl. btw.` },
        { q: 'Kan ik eerst komen kijken?', a: 'Ja, je bent welkom voor een gratis rondleiding. Plan hem via de contactpagina.' },
      ],
    },
    final: {
      title: 'Nog niet zeker?',
      text: 'App ons of kom langs voor een gratis rondleiding.',
      wa: 'App ons',
      waMsg: 'Hoi! Ik heb een vraag over Anytime Music.',
      tour: 'Gratis rondleiding',
    },
    sticky: { book: 'Boek nu', wa: 'WhatsApp' },
    footer: { address: 'Gustoweg 39, 3029 AR Rotterdam', instagram: 'Instagram' },
    headerWaMsg: 'Hoi! Ik heb een vraag over Anytime Music.',
    heroWaMsg: 'Hoi! Ik kom via de startpagina en heb een vraag.',
    stickyWaMsg: 'Hoi! Ik heb een vraag over Anytime Music.',
  },

  en: {
    lang: 'en',
    path: '/en/start',
    altPath: '/start',
    altLabel: 'NL',
    meta: {
      title: '24/7 rehearsal space Rotterdam & music content production | Anytime Music',
      description: `24/7 rehearsal space in Rotterdam with smart lock, full backline, PA and drums. Plans from ${eur(plans[0].price)} a month, or get music content made: 4 videos + 4 photos in one production day.`,
    },
    header: { whatsapp: 'Text us', book: 'Book now', home: 'Anytime Music, go to the homepage' },
    hero: {
      eyebrow: 'Start here',
      title: ['Your studio. 24/7.', 'Rehearse or create content?'],
      sub: 'Get in day or night with the smart lock, right in Rotterdam. Full backline, PA, drums and recording are ready to go. Cancel monthly.',
      choiceRoom: "I'm looking for a rehearsal space",
      choiceRoomSub: `Plans from ${eur(plans[0].price)}/month`,
      choiceContent: 'I want content for my music',
      choiceContentSub: `Production day ${eur(pd.price)}`,
      whatsapp: 'Questions? Text us directly',
      trust: ['Open 24/7', 'Smart lock', 'Cancel monthly', 'Full backline', 'Rotterdam'],
    },
    pains: {
      title: 'Sound familiar?',
      items: [
        { who: 'Producer', text: 'You want to work when inspiration hits, but there is nowhere to go on your own time.' },
        { who: 'Band', text: 'Every rehearsal starts with an hour of setting up, and ends with tearing it all down.' },
        { who: 'Artist', text: "Your release is ready, but you don't have the content to promote it." },
        { who: 'Everyone', text: 'Hourly studios are expensive, and you pay full price every single time.' },
      ],
    },
    room: {
      eyebrow: '🎶 Rehearsal space',
      title: 'Pick your monthly plan',
      sub: 'Perfect for rehearsing regularly and working on your music. Cancel monthly.',
      perMonth: 'per month',
      hours: (h: number) => `${h} hours per month`,
      perHour: (n: number) => `${eur(n)} per hour`,
      saving: (n: number) => `${eur(singleHourPrice - n)}/hour less than booking single hours`,
      popular: 'Most popular',
      cta: 'Choose this plan',
      waMsg: (p: Plan) => `Hi! I'm interested in the ${planLabel.en(p)} plan.`,
      single: {
        title: 'Just once?',
        text: `Single booking ${eur(singleHourPrice)} per hour, no subscription.`,
        cta: 'Book a single hour',
      },
      usp: 'Your personal settings are saved: monitor mix, X32 scene and lighting scene. Walk in and play.',
    },
    content: {
      eyebrow: '🎬 Content',
      title: 'Production day: a full month of content',
      sub: `In one ${pd.sessionHours}-hour session we make ${pd.videos} videos and ${pd.photos} photos. That's one video and one photo a week, for a whole month.`,
      price: eur(pd.price),
      vat: 'excl. VAT',
      checklist: [
        `${pd.sessionHours}-hour session`,
        `${pd.videos} videos`,
        `${pd.photos} photos`,
        'A full month of content',
        `Delivered within ${pd.deliveryWorkdays} working days`,
      ],
      timelineTitle: 'What your month looks like',
      week: (n: number) => `Week ${n}`,
      weekItems: ['1 video', '1 photo'],
      cta: 'Plan your production day',
      waMsg: "Hi! I'd like to plan a production day.",
      secondary: 'Want to drop by first?',
    },
    roles: {
      title: 'Not sure? Choose by role',
      items: [
        { id: 'producer', title: 'Producer', text: `${eur(plans[0].price)}, ${eur(plans[1].price)} or ${eur(plans[2].price)} plan`, href: '#ruimte' },
        { id: 'band', title: 'Band', text: `${eur(plans[3].price)} or ${eur(plans[4].price)} plan`, href: '#ruimte' },
        { id: 'artiest', title: 'Artist', text: 'Production day + a plan', href: '#content' },
      ],
      go: 'View',
    },
    faq: {
      title: 'FAQ',
      items: [
        { q: 'How does 24/7 access work?', a: 'You book online. At your booked time you open the door with the smart lock. No key, and nobody needs to wait for you, even in the middle of the night.' },
        { q: "What's in the room?", a: 'A full backline, PA, drums and recording. Bring your instrument and start playing.' },
        { q: 'Can I cancel monthly?', a: 'Yes. All plans can be cancelled monthly.' },
        { q: 'What if I need more hours?', a: `Switch to a bigger plan, or book extra single hours at ${eur(singleHourPrice)} per hour.` },
        { q: 'What do I get with a production day?', a: `${pd.videos} videos and ${pd.photos} photos from one ${pd.sessionHours}-hour session, delivered within ${pd.deliveryWorkdays} working days. A full month of content. Price: ${eur(pd.price)} excl. VAT.` },
        { q: 'Can I come and have a look first?', a: 'Yes, you are welcome for a free tour. Plan it through the contact page.' },
      ],
    },
    final: {
      title: 'Still not sure?',
      text: 'Text us or drop by for a free tour.',
      wa: 'Text us',
      waMsg: 'Hi! I have a question about Anytime Music.',
      tour: 'Free tour',
    },
    sticky: { book: 'Book now', wa: 'WhatsApp' },
    footer: { address: 'Gustoweg 39, 3029 AR Rotterdam', instagram: 'Instagram' },
    headerWaMsg: 'Hi! I have a question about Anytime Music.',
    heroWaMsg: 'Hi! I came via the start page and have a question.',
    stickyWaMsg: 'Hi! I have a question about Anytime Music.',
  },
};

export type Copy = (typeof t)['nl'];

