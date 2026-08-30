import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site.config';

// Hand-written static sitemap instead of @astrojs/sitemap (see the comment
// in astro.config.mjs for why). Update this list if pages are added or
// removed — it deliberately stays a flat, explicit array rather than a
// filesystem crawl, so it's obvious at a glance exactly what's in it.
// /decouvrir, /avis and /club existed on the Indian Flavors version of
// this template (dish-guide articles, Tripadvisor testimonials, and a
// loyalty program) — all three were removed for Shoko Lounge: no
// dish-guide content marketing was requested, the client chose Instagram
// proof over a review page (see content/social-proof.ts), and no loyalty
// program was requested.
const PAGES = [
  '/',
  '/menu',
  '/a-propos',
  '/reservation',
  '/faq',
  '/contact',
];

export const GET: APIRoute = () => {
  const base = siteConfig.identity.siteUrl.replace(/\/$/, '');
  const urls = PAGES.map(
    (path) => `  <url>\n    <loc>${base}${path}</loc>\n  </url>`
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
