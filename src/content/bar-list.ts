// The bottle/glass price lists from the client's real drinks PDF
// (MENU-DRINKS-SHOKO-ENG.pdf, supplied Aug 2026) — Aperitifs & Digestifs,
// Beers, Wines, Champagnes & Sparkles, Sangrias, Whiskys, Vodkas, Gins,
// Cognacs, Rhums, Tequilas, Shooters, Softs & Sodas.
//
// Kept separate from menu-highlights.ts on purpose: those items have real
// tasting descriptions from the client; these are bare name + price(s)
// lists with no description in the source, so they render as compact
// tables (see BarListContent in MenuContent.astro) instead of being
// force-fit into the illustrated food item-card, which would mean
// inventing filler text for 70+ bottles.
//
// Section labels are FR/EN only (no Arabic in the source PDF for this
// list) — same trilingual gap noted for wherever this renders; add Arabic
// labels here if the client wants full parity on this section.
export interface BarItem {
  name: string;
  origin?: string; // e.g. 'Morocco', 'Spain' — only wines have this in the source
  note?: string; // e.g. '25cl', '900g' — serving size/volume when the source states one
  priceGlass?: number; // MAD — omitted where the source has no glass price ('-')
  priceBottle: number; // MAD
}
export interface BarSection {
  label: { fr: string; en: string };
  columns: 'glassBottle' | 'bottleOnly'; // whether to show a glass-price column
  items: BarItem[];
}

export const barList: BarSection[] = [
  {
    label: { fr: 'Apéritifs & Digestifs', en: 'Aperitifs & Digestifs' },
    columns: 'bottleOnly',
    items: [
      { name: 'Martini White or Red', priceBottle: 70 },
      { name: 'Ricard', priceBottle: 70 },
      { name: 'Get 27', priceBottle: 70 },
      { name: 'Amaretto Disaronno', priceBottle: 80 },
      { name: 'Pastis 1212', priceBottle: 80 },
      { name: "Bailey's", priceBottle: 90 },
    ],
  },
  {
    label: { fr: 'Bières', en: 'Beers' },
    columns: 'bottleOnly',
    items: [
      { name: 'San Miguel', note: '25cl', priceBottle: 55 },
      { name: 'San Miguel 0%', note: '25cl', priceBottle: 50 },
      { name: 'Casablanca', note: '33cl', priceBottle: 65 },
      { name: 'San Miguel Fresca', note: '33cl', priceBottle: 70 },
      { name: 'Smirnoff Ice', note: '27,5cl', priceBottle: 90 },
    ],
  },
  {
    label: { fr: 'Vins Rouges', en: 'Red Wines' },
    columns: 'glassBottle',
    items: [
      { name: 'Medaillon', origin: 'Morocco', priceGlass: 160, priceBottle: 300 },
      { name: 'Marques de Caceres', origin: 'Spain', priceBottle: 320 },
      { name: 'S de Siroua', origin: 'Morocco', priceGlass: 170, priceBottle: 340 },
      { name: 'Côtes du Rhône Guigal', origin: 'Côtes du Rhône', priceBottle: 400 },
      { name: 'CB Initiales', origin: 'Morocco', priceBottle: 470 },
      { name: 'Brouilly Terre de Granite', origin: 'Beaujolais', priceBottle: 470 },
      { name: 'Gros Caillou St-Emilion', origin: 'Bordeaux', priceBottle: 470 },
      { name: 'Antonin Rodet Pinot Noir', origin: 'Bordeaux', priceBottle: 550 },
      { name: "Château Roslane — Coteaux de L'Atlas", origin: 'Morocco', priceBottle: 620 },
      { name: 'Château Lafitte', origin: 'Bordeaux', priceBottle: 670 },
      { name: "L'héritage de Chasse-Spleen", origin: 'Bordeaux', priceBottle: 760 },
    ],
  },
  {
    label: { fr: 'Vins Blancs', en: 'White Wines' },
    columns: 'glassBottle',
    items: [
      { name: 'Vina Esmeralda', origin: 'Spain', priceBottle: 300 },
      { name: 'Medaillon', origin: 'Morocco', priceGlass: 160, priceBottle: 300 },
      { name: 'Mateus', origin: 'Portugal', priceBottle: 310 },
      { name: 'Marques de Caceres', origin: 'Spain', priceBottle: 320 },
      { name: 'S de Siroua', origin: 'Morocco', priceGlass: 170, priceBottle: 340 },
      { name: 'CB Initiales', origin: 'Morocco', priceBottle: 470 },
      { name: 'Chablis La Monale', origin: 'Bourgogne', priceBottle: 530 },
      { name: "Château Roslane — Coteaux de L'Atlas", origin: 'Morocco', priceBottle: 620 },
      { name: 'Sancerre J. De Villebois', origin: 'Valle de Loire', priceBottle: 630 },
      { name: 'Pouilly Fumé J. De Villebois', origin: 'Bourgogne', priceBottle: 640 },
    ],
  },
  {
    label: { fr: 'Vins Rosés', en: 'Rosé Wines' },
    columns: 'glassBottle',
    items: [
      { name: 'Medaillon', origin: 'Morocco', priceGlass: 160, priceBottle: 300 },
      { name: 'Mateus', origin: 'Portugal', priceBottle: 310 },
      { name: 'Marques de Caceres', origin: 'Spain', priceBottle: 320 },
      { name: 'S de Siroua', origin: 'Morocco', priceBottle: 330 },
      { name: 'Studio By Miraval', origin: 'Côte de Provence', priceBottle: 540 },
      { name: 'Maison Sainte Marguerite', origin: 'Côte de Provence', priceBottle: 660 },
    ],
  },
  {
    label: { fr: 'Champagnes & Sparkles', en: 'Champagnes & Sparkles' },
    columns: 'bottleOnly',
    items: [
      { name: 'Belaire Gold', priceBottle: 1000 },
      { name: 'Belaire Fantôme Rosé', priceBottle: 1200 },
      { name: 'G.H. Mumm', priceBottle: 1600 },
      { name: 'G.H. Mumm Rosé', priceBottle: 2400 },
      { name: 'Perrier-Jouët Grand Brut', priceBottle: 1900 },
      { name: 'Dom Perignon Brut', priceBottle: 7000 },
    ],
  },
  {
    label: { fr: 'Sangrias', en: 'Sangrias' },
    columns: 'bottleOnly',
    items: [
      { name: 'Red Sangria', note: '3/4', priceBottle: 300 },
      { name: 'White Sangria', note: '3/4', priceBottle: 300 },
      { name: 'Rosé Sangria', note: '3/4', priceBottle: 300 },
    ],
  },
  {
    label: { fr: 'Whiskys', en: 'Whiskys' },
    columns: 'glassBottle',
    items: [
      { name: 'JW Red Label', priceGlass: 80, priceBottle: 1300 },
      { name: 'Chivas Regal 12 years', priceGlass: 100, priceBottle: 1500 },
      { name: 'JW Double Black Label', priceGlass: 110, priceBottle: 1900 },
      { name: 'Chivas Regal 18 years', priceGlass: 180, priceBottle: 3000 },
      { name: "Jack Daniel's N°7", priceGlass: 100, priceBottle: 1500 },
      { name: "Jack Daniel's Honey", priceGlass: 100, priceBottle: 1500 },
      { name: 'Glenfiddich 12 years', priceGlass: 100, priceBottle: 1500 },
      { name: 'Glenfiddich 15 years', priceGlass: 130, priceBottle: 2000 },
      { name: 'Glenfiddich 18 years', priceGlass: 160, priceBottle: 2700 },
      { name: 'Royal Salute 21 years', priceBottle: 5500 },
    ],
  },
  {
    label: { fr: 'Vodkas', en: 'Vodkas' },
    columns: 'glassBottle',
    items: [
      { name: 'Absolut', priceGlass: 80, priceBottle: 1300 },
      { name: 'Elyx', priceGlass: 100, priceBottle: 1500 },
      { name: 'Greygoose', priceGlass: 100, priceBottle: 1600 },
      { name: 'Greygoose Magnum', priceBottle: 3400 },
      { name: 'Greygoose Altius', priceBottle: 4000 },
    ],
  },
  {
    label: { fr: 'Gins', en: 'Gins' },
    columns: 'glassBottle',
    items: [
      { name: 'Beefeater', priceGlass: 80, priceBottle: 1300 },
      { name: 'Bombay Sapphire', priceGlass: 90, priceBottle: 1400 },
      { name: 'Malfy Originale', priceGlass: 90, priceBottle: 1400 },
      { name: "Hendrick's", priceGlass: 100, priceBottle: 1500 },
      { name: 'Monkey 47', priceGlass: 160, priceBottle: 1600 },
      { name: 'Palmarae', priceGlass: 170, priceBottle: 2400 },
    ],
  },
  {
    label: { fr: 'Cognacs', en: 'Cognacs' },
    columns: 'bottleOnly',
    items: [
      { name: 'Martell VS', priceBottle: 100 },
      { name: 'Martell XO', priceBottle: 450 },
    ],
  },
  {
    label: { fr: 'Rhums', en: 'Rhums' },
    columns: 'glassBottle',
    items: [
      { name: 'Havana Club 3 years', priceGlass: 80, priceBottle: 1300 },
      { name: 'Bacardi Carta White or Red', priceGlass: 90, priceBottle: 1400 },
      { name: 'Havana Club Anejo 7 years', priceGlass: 90, priceBottle: 1400 },
      { name: 'Bacardi 8 years', priceGlass: 100, priceBottle: 1500 },
    ],
  },
  {
    label: { fr: 'Tequilas', en: 'Tequilas' },
    columns: 'glassBottle', // "shot" price in the source, reused as the glass column
    items: [
      { name: 'Olmeca Altos Plata', priceGlass: 70, priceBottle: 1300 },
      { name: 'Olmeca Altos Reposado', priceGlass: 80, priceBottle: 1400 },
      { name: 'Patron Silver', priceGlass: 100, priceBottle: 2000 },
      { name: 'Patron Reposado', priceGlass: 115, priceBottle: 2700 },
      { name: 'Clase Azul Plata', priceBottle: 5000 },
      { name: 'Clase Azul Reposado', priceBottle: 7500 },
    ],
  },
  {
    label: { fr: 'Shooters', en: 'Shooters' },
    columns: 'bottleOnly',
    items: [
      { name: 'Sambucca', priceBottle: 70 },
      { name: 'Limoncello', priceBottle: 70 },
      { name: 'Melon Ball', priceBottle: 70 },
      { name: 'Jagermeister', priceBottle: 80 },
      { name: 'B52', priceBottle: 80 },
    ],
  },
  {
    label: { fr: 'Softs & Sodas', en: 'Softs & Sodas' },
    columns: 'bottleOnly',
    items: [
      { name: 'Redbull / Redbull sugar free', priceBottle: 60 },
      { name: 'Soda', priceBottle: 50 },
      { name: 'Sidi Ali', note: '75cl', priceBottle: 45 },
      { name: 'Oulmes', note: '75cl', priceBottle: 45 },
      { name: 'San Pellegrino', note: '75cl', priceBottle: 55 },
      { name: 'Acqua Panna', note: '75cl', priceBottle: 55 },
      { name: 'Nespresso Coffee', priceBottle: 40 },
    ],
  },
];
