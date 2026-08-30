// ============================================================================
// AMPLIFY MARKETING SITE — site.config.ts
//
// THIS IS THE ONLY FILE YOU EDIT PER CLIENT (together with src/content/faq.ts
// and src/content/testimonials.ts for longer lists). Same philosophy as the
// order-landing-page engine's brand.config.ts: one config object, real
// content, nothing hardcoded in the page templates.
//
// PER-CLIENT PUBLISH CHECKLIST (do all of these, in this order):
//   1. Fill in every field below with the real restaurant's info.
//   2. Update astro.config.mjs's SITE_URL to match identity.siteUrl exactly
//      (sitemap + canonical URLs are generated from astro.config's `site`,
//      NOT from this file — they must match or canonicals will be wrong),
//      AND update the Sitemap: line in public/robots.txt to the same URL.
//   3. Fill src/content/faq.ts and src/content/testimonials.ts with real,
//      client-specific content — do not ship the example FAQ/reviews.
//   4. Replace every image in public/ with real photos (see the "why 100+
//      real photos matter more than any code change" note below).
//   5. Double-check ordering.orderSiteUrl points at the actual deployed
//      order-landing-page (the separate React/Vite project) — every
//      "Commander" CTA on this site links out to that URL.
// ============================================================================

// Small local alias instead of importing the shared LocalizedText type —
// site.config.ts is deliberately the one file with zero imports from the
// rest of the app (see the file banner above), so every other file can
// safely import FROM here without a circular-import risk. Shape is
// identical to src/i18n/languages.ts's LocalizedText on purpose.
interface LocalizedString {
  fr: string;
  en: string;
  ar: string;
}

export interface SiteConfig {
  identity: {
    name: string;
    tagline: LocalizedString;
    city: string;
    country: string;
    siteUrl: string; // must match astro.config.mjs's SITE_URL exactly
    // The primary SERVICE keyword — deliberately WITHOUT the city baked in
    // ("restaurant indien", not "restaurant indien Rabat"). Every page
    // composes it with `city` explicitly (`${primaryKeyword} à ${city}`),
    // exactly once per sentence. Keeping city out of the constant is what
    // stops it from being concatenated in twice in the same title/
    // description — a real bug this template shipped with once already
    // ("restaurant indien Rabat au Rabat"). Match the exact term the local
    // market actually searches, not a rebrand of it ("spa culinaire") — see
    // the standing SEO notes at the bottom of this file. Now LocalizedText
    // because "the term the market actually searches" is a DIFFERENT term
    // per language, not a translation of the French one (an English
    // searcher types "indian restaurant", not a literal rendering of
    // "restaurant indien").
    primaryKeyword: LocalizedString;
  };
  colors: {
    primary: string;
    accent: string;
    background: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string; // tel: link, digits only with country code
    whatsappNumber: string; // digits only, country code, no + or spaces
    address: string;
    mapsUrl?: string;
    openingHours: LocalizedString;
    // Structured, machine-readable hours for the live "open now / closed"
    // badge (final punch-list item #4) — kept separate from the free-text
    // `openingHours` above on purpose: parsing "13:00 - 23:00" out of a
    // translated sentence at runtime is fragile (format changes per
    // language, e.g. English's "1:00 PM – 11:00 PM"), while these two plain
    // 24h numbers are unambiguous and can't drift out of sync with a
    // wording change. Restaurant is open every day, same hours — if that
    // ever changes to different hours per day, this becomes a per-day
    // structure instead of two flat numbers.
    hours: { open: number; close: number };
    instagramUrl?: string;
    facebookUrl?: string;
  };
  ordering: {
    // The separate order-landing-page deploy (React/Vite engine). Every
    // "Commander" / "Voir le menu et commander" button on this marketing
    // site links out to this URL — this site does not implement ordering
    // itself (see the architecture decision recorded in this project).
    orderSiteUrl: string;
  };
  reservations: {
    // Table reservations write straight to Supabase from the browser (see
    // src/content-pages/ReservationContent.astro) — this site stays fully
    // static (see astro.config.mjs's `output: 'static'` note), no server of
    // our own involved. The anon key below is MEANT to be public: it's the
    // same key Supabase's own JS client ships to the browser, and it can
    // only ever INSERT into the reservations table (see the row-level-
    // security policy in the SQL setup) — never read, update or delete
    // anything, so exposing it here is not a leak. Staff review incoming
    // reservations in Supabase's own free Table Editor for now; the same
    // table is what a future in-restaurant tablet screen (orders +
    // reservations together, still on the roadmap) will read from, so
    // nothing here gets rebuilt when that's built — same backend, new UI.
    supabaseUrl: string;
    supabaseAnonKey: string;
  };
  social: {
    googleReviewsUrl?: string;
    // Real number from the client's Google Business Profile — NOT computed
    // or guessed. Deliberately no googleReviewCount field: only the rating
    // was confirmed, and showing a review count we didn't verify would be
    // exactly the kind of fabricated-looking claim this site has avoided
    // everywhere else (see testimonials.ts's standing note on this).
    googleRating?: string;
  };
}

export const siteConfig: SiteConfig = {
  identity: {
    name: 'Shoko Lounge',
    tagline: {
      fr: 'Lounge fusion contemporaine au cœur de Rabat',
      en: 'Contemporary fusion lounge in the heart of Rabat',
      ar: 'لاونج فيوجن معاصر في قلب الرباط',
    },
    city: 'Rabat',
    country: 'Maroc',
    // TODO: confirm final domain with the client before launch — kept the
    // existing shokolounge.com since that's the live domain today.
    siteUrl: 'https://www.shokolounge.com',
    primaryKeyword: {
      fr: 'restaurant lounge',
      en: 'lounge restaurant',
      ar: 'مطعم لاونج',
    },
  },
  colors: {
    // Pulled from the real Wix site's gold-on-black branding (logo file was
    // literally named "…-DORÉ", i.e. "gold") instead of inventing a new
    // palette — primary carries a touch of deep burgundy/wine for contrast
    // against pure gold-on-black, which read a bit flat as two tones alone.
    primary: '#7A1F2B',
    accent: '#C9A15A',
    background: '#0B0B0C',
  },
  contact: {
    // TODO: confirm with the client whether this number also takes
    // WhatsApp messages — the current Wix site states reservations are
    // "by telephone only", so whatsappNumber below is left equal to the
    // phone number as a safe default rather than assumed.
    phoneDisplay: '07 66 66 66 87',
    phoneHref: 'tel:+212766666687',
    whatsappNumber: '212766666687',
    address: 'Avenue Oulad Fares, Rue Tafetacht, Bir Kacem, Souissi, Lot 1 Lotissement Oum El Kheir, 10100 Rabat',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Shoko+Lounge+Souissi+Rabat',
    openingHours: {
      fr: 'Ouvert 7j/7 : 19h - 2h',
      en: 'Open 7 days a week: 7:00 PM – 2:00 AM',
      ar: 'مفتوح طوال أيام الأسبوع: 19:00 - 02:00',
    },
    // Crosses midnight (19 -> 2) — OpenStatusBadge.astro's "open now" logic
    // needs to handle close < open as "wraps past midnight"; double-check
    // that component still resolves correctly with these hours.
    hours: { open: 19, close: 2 },
    instagramUrl: 'https://www.instagram.com/shoko_lounge_rabat/',
    // Not on the current Wix site (its Facebook icon points at Wix's own
    // demo account) — add the real one here once the client confirms it,
    // then uncomment: facebookUrl: 'https://www.facebook.com/...'
  },
  ordering: {
    // Shoko Lounge does not sell through this site — no WhatsApp/online
    // ordering, by the client's explicit request. This field is unused
    // (see src/lib/nav.ts, which now points every CTA at /reservation
    // instead of reading this URL) but left in place since the shared
    // SiteConfig type still declares it.
    orderSiteUrl: '',
  },
  reservations: {
    // TODO: this needs its own Supabase project (a fresh "shoko-lounge"
    // project + the reservations table/RLS policy, same setup as the
    // other Amplify client sites) before /reservation can actually accept
    // submissions — placeholder values below will not work as-is.
    supabaseUrl: 'https://REPLACE-ME.supabase.co',
    supabaseAnonKey: 'REPLACE-ME',
  },
  social: {
    // TODO: fill in once the client's Google Business Profile is confirmed
    // — do not guess a rating/link, see the standing note on this field
    // below (fabricated-looking claims are exactly what this template
    // avoids). Leave both commented out until real values are in hand:
    // googleReviewsUrl: 'https://www.google.com/maps/place/...',
    // googleRating: '4.x',
  },
};

// ----------------------------------------------------------------------------
// STANDING SEO NOTES — read before editing page copy or adding new pages.
// These are the non-negotiable rules the templates in src/pages/ were built
// around; breaking them quietly undoes the SEO work even if the page still
// "looks fine".
//
// 1. Keyword realism: use the term the local market actually types into
//    Google in the H1, body copy, meta title AND meta description of a
//    page — all four, not just one. A clever rebrand of the service name
//    loses the search traffic entirely.
// 2. No keyword cannibalization: never create two pages targeting the same
//    search intent (e.g. a "Commander" page AND a "Livraison" page). This
//    site deliberately has ONE ordering path — every CTA points at
//    ordering.orderSiteUrl — instead of splitting that intent across pages.
// 3. FAQ sections are structural, not decorative: AI answer engines (ChatGPT,
//    Google AI Overviews, Perplexity) pull directly from clearly-formatted
//    question/answer pairs. Every service-relevant page should have one.
// 4. Real photos beat every on-page trick combined. Code cannot manufacture
//    E-E-A-T — only the client uploading 100+ real, original photos of the
//    food and the physical location can. Don't waste time renaming image
//    files to keyword strings or injecting EXIF geodata: Google strips that
//    metadata on upload and it can read as manipulation, not help ranking.
// 5. Review velocity and Google Business Profile completeness (Services
//    section, not Products) are the two highest-leverage local-SEO levers
//    available — and neither is something this codebase can do for you.
//    That's an operating habit for whoever runs the account: reply to every
//    review fast, and ask happy customers to name the dish + city in their
//    review text.
// ----------------------------------------------------------------------------
