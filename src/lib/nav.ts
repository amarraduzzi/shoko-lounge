import { common } from '../i18n/ui';
import { localizedPath, t, type Language } from '../i18n/languages';

// Single source of truth for the sitewide primary CTA that appears in the
// header, footer, and every page's primary CTA button. Shoko Lounge does
// not sell through this site (display-only menu, phone/WhatsApp-driven
// reservations) — so unlike the order-engine-linked version of this
// template, this CTA always points at the on-site /reservation page
// instead of an external ordering site. Deliberately ONE function used
// everywhere instead of each component hardcoding its own label/href.
export function getOrderCtaLabel(lang: Language = 'fr') {
  return {
    label: t(common.reserverUneTable, lang),
    href: localizedPath('/reservation', lang),
  };
}

// Back-compat default (French) for any call site not yet passing a
// language — every current call site does, but keeping this avoids a
// silent crash if one is missed.
export const orderCtaLabel = getOrderCtaLabel('fr');
