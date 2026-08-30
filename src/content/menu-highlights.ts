// Display-only menu for the marketing site. Shoko Lounge does not sell
// through this site (no WhatsApp/online ordering — client's explicit
// request), so THIS is the actual public menu, not a curated teaser of a
// bigger orderable list on a separate site (contrast with the Indian
// Flavors version of this template, which pointed at a separate order
// engine). Content transcribed directly from the client's real PDF menus
// (MENU_SHOKO_FR_ENG.pdf + MENU-DRINKS-SHOKO-ENG.pdf, supplied Aug 2026) —
// real dishes, descriptions and prices, not placeholders.
//
// Allergen codes from the source PDFs: L = dairy, N = nuts, G = gluten,
// A = peanuts. Folded into each dish's description sentence rather than
// kept as a separate badge system, to avoid adding new UI just for this.
//
// Arabic descriptions are straightforward working translations (not
// supplied by the client) — have a native speaker sanity-check the food
// terms before publishing, same as any new trilingual content on this
// template.
//
// The full spirits/wine/beer list (Aperitifs, Beers, Wines, Champagnes,
// Sangrias, Whiskys, Vodkas, Gins, Cognacs, Rhums, Tequilas, Shooters,
// Softs) lives separately in src/content/bar-list.ts — those are bare
// name+price bottle/glass lists with no real descriptions in the source
// PDF, so forcing them into this file's illustrated item-card shape would
// mean inventing filler text. See that file's own header comment.
import type { LocalizedText } from '../i18n/languages';

export interface MenuHighlightItem {
  name: string;
  description: LocalizedText;
  priceMAD: number;
  image?: string;
  imageAlt?: LocalizedText;
  vegetarian?: boolean;
}
export interface MenuHighlightCategory {
  label: LocalizedText;
  items: MenuHighlightItem[];
  image?: string;
  imageAlt?: LocalizedText;
}

export const menuHighlights: MenuHighlightCategory[] = [
  {
    label: { fr: 'Mise en appétit', en: 'Starters', ar: 'المقبلات' },
    items: [
      {
        name: 'Rouleaux de printemps gambas',
        description: {
          fr: 'Gambas marinées, croquant de navets et carottes, menthe fraîche, noix de cajou et douceur de cream cheese. Contient produits laitiers et noix.',
          en: 'Marinated prawns, crunchy turnips and carrots, fresh mint, cashew nuts and cream cheese. Contains dairy and nuts.',
          ar: 'جمبري متبّل، لفت وجزر مقرمش، نعناع طازج، كاجو وجبنة كريمية. يحتوي على منتجات الألبان والمكسرات.',
        },
        priceMAD: 90,
      },
      {
        name: 'Tartare de thon',
        description: {
          fr: "Thon rouge, avocat, wakame, parfums d'huile de sésame torréfié et gingembre frais, servi avec ses chips de riz.",
          en: 'Red tuna, avocado, wakame, hints of toasted sesame oil and fresh ginger, served with rice chips.',
          ar: 'تونة حمراء، أفوكادو، واكامي، لمسات من زيت السمسم المحمّص والزنجبيل الطازج، تُقدَّم مع رقائق الأرز.',
        },
        priceMAD: 95,
      },
      {
        name: 'Avocat aux gambas',
        description: {
          fr: "Gambas, dés d'avocat, concassée de tomates, échalotes, sauce cocktail maison et ciboulette.",
          en: 'Prawns, avocado cubes, crushed tomatoes, shallots, homemade cocktail sauce and chives.',
          ar: 'جمبري، مكعبات أفوكادو، طماطم مهروسة، كراث، صلصة كوكتيل منزلية وثوم معمّر.',
        },
        priceMAD: 95,
      },
      {
        name: 'Saumon mariné à la truffe',
        description: {
          fr: "Sashimi de saumon frais, marinade soja-agrumes, sésame, brisures de truffe et croquant d'oignons frits. Contient gluten.",
          en: 'Fresh salmon sashimi, citrus-soy marinade, sesame seeds, truffle shavings and crispy fried onions. Contains gluten.',
          ar: 'ساشيمي سلمون طازج، تتبيلة صويا-حمضيات، سمسم، برادة كمأة وبصل مقرمش. يحتوي على الغلوتين.',
        },
        priceMAD: 100,
      },
      {
        name: 'Ô César',
        description: {
          fr: "Blanc de poulet grillé, cœur de romaine, tomates cerises, anchois, croûtons à l'ail, œufs de caille et copeaux de parmesan. Contient produits laitiers et gluten.",
          en: 'Grilled chicken breast, romaine heart, cherry tomatoes, anchovies, garlic croutons, quail eggs and parmesan shavings. Contains dairy and gluten.',
          ar: 'صدر دجاج مشوي، قلب خس روماني، طماطم كرزية، أنشوجة، خبز محمّص بالثوم، بيض سمان وبرادة بارميزان. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 105,
      },
      {
        name: 'Salade fruits de mer',
        description: {
          fr: 'Sélection de gambas et calamars, avocat, tomates cerises, échalotes, noix de cajou et vinaigrette signature au soja, yuzu et huile de sésame. Contient noix.',
          en: 'Selection of prawns and calamari, avocado, cherry tomatoes, shallots, cashew nuts and signature soy-yuzu-sesame dressing. Contains nuts.',
          ar: 'تشكيلة من الجمبري والكاليماري، أفوكادو، طماطم كرزية، كراث، كاجو وصلصة مميزة بالصويا واليوزو وزيت السمسم. يحتوي على المكسرات.',
        },
        priceMAD: 125,
      },
    ],
  },
  {
    label: { fr: 'Les mijotés', en: 'Slow-Cooked Woks', ar: 'الأطباق المطهوة على الووك' },
    items: [
      {
        name: 'Wok de poulet',
        description: {
          fr: 'Émincé de blanc de poulet, légumes croquants, noix de cajou torréfiées et riz parfumé. Contient noix.',
          en: 'Sliced chicken breast, crunchy vegetables, roasted cashew nuts and fragrant rice. Contains nuts.',
          ar: 'شرائح صدر دجاج، خضروات مقرمشة، كاجو محمّص وأرز عطري. يحتوي على المكسرات.',
        },
        priceMAD: 150,
      },
      {
        name: 'Wok de bœuf',
        description: {
          fr: 'Filet de bœuf sauté au gingembre frais et piment, légumes croquants, noix de cajou et riz parfumé. Contient noix.',
          en: 'Beef fillet stir-fried with fresh ginger and chili, crunchy vegetables, cashew nuts and fragrant rice. Contains nuts.',
          ar: 'فيليه لحم بقري مقلي بالزنجبيل الطازج والفلفل الحار، خضروات مقرمشة، كاجو وأرز عطري. يحتوي على المكسرات.',
        },
        priceMAD: 170,
      },
      {
        name: 'Wok de fruits de mer',
        description: {
          fr: 'Gambas et calamars saisis au wok, légumes croquants, noix de cajou et riz parfumé. Contient noix.',
          en: 'Prawns and calamari stir-fried in a wok, crunchy vegetables, cashew nuts and fragrant rice. Contains nuts.',
          ar: 'جمبري وكاليماري مقلي على الووك، خضروات مقرمشة، كاجو وأرز عطري. يحتوي على المكسرات.',
        },
        priceMAD: 180,
      },
    ],
  },
  {
    label: { fr: 'Les incontournables Terre & Mer', en: 'Land & Sea Favorites', ar: 'أطباق البر والبحر المميزة' },
    items: [
      {
        name: 'Poulet caramélisé',
        description: {
          fr: 'Suprême de poulet laqué à la sauce Teriyaki et croquant de légumes sautés au wok.',
          en: 'Chicken supreme glazed with teriyaki sauce and crispy wok vegetables.',
          ar: 'صدر دجاج مغطى بصلصة تيرياكي وخضروات مقرمشة مقلية على الووك.',
        },
        priceMAD: 150,
      },
      {
        name: 'Burger de bœuf signature',
        description: {
          fr: 'Filet de bœuf haché, oignons caramélisés, tomates confites, chou blanc, champignons, cheddar fondu et sauce tartare. Servi avec frites maison. Contient produits laitiers et gluten.',
          en: 'Minced beef fillet, caramelized onions, confit tomatoes, white cabbage, mushrooms, melted cheddar and tartar sauce. Served with homemade fries. Contains dairy and gluten.',
          ar: 'لحم بقري مفروم، بصل مكرمل، طماطم مطهوة، ملفوف أبيض، فطر، جبن شيدر ذائب وصلصة تارتار. يُقدَّم مع البطاطس المقلية المنزلية. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 150,
      },
      {
        name: 'Suprême de poulet',
        description: {
          fr: "Suprême de poulet rôti, nappé d'une sauce crémée au paprika fumé, infusion de thym et romarin. Servi avec pommes nouvelles.",
          en: 'Roasted chicken supreme, topped with a creamy smoked paprika sauce infused with thyme and rosemary, served with baby potatoes.',
          ar: 'صدر دجاج مشوي مغطى بصلصة كريمية بالبابريكا المدخنة، منقوعة بالزعتر وإكليل الجبل، يُقدَّم مع البطاطس الصغيرة.',
        },
        priceMAD: 160,
      },
      {
        name: 'Bœuf au fromage et truffe',
        description: {
          fr: 'Filet de bœuf, gouda, crème de truffe, pain de mie et croquant de légumes sautés au wok. Contient produits laitiers et gluten.',
          en: 'Beef fillet, gouda, truffle cream, sliced bread and wok vegetables. Contains dairy and gluten.',
          ar: 'فيليه لحم بقري، جبن غودا، كريمة الكمأة، خبز وخضروات مقرمشة مقلية على الووك. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 180,
      },
      {
        name: 'Tentacules de poulpe braisées',
        description: {
          fr: 'Poulpe, crème de truffe, émulsion de soja-miel et pommes nouvelles. Contient produits laitiers.',
          en: 'Octopus, truffle cream, soy-honey emulsion and baby potatoes. Contains dairy.',
          ar: 'أخطبوط، كريمة الكمأة، صلصة الصويا والعسل وبطاطس صغيرة. يحتوي على منتجات الألبان.',
        },
        priceMAD: 180,
      },
      {
        name: 'Le tigre qui a faim',
        description: {
          fr: 'Filet de bœuf poêlé au beurre, sauce aigre-douce et croquant de légumes sautés au wok. Contient produits laitiers.',
          en: 'Pan-seared beef fillet in butter, sweet and sour sauce and crispy wok vegetables. Contains dairy.',
          ar: 'فيليه لحم بقري مقلي بالزبدة، صلصة حلوة حامضة وخضروات مقرمشة مقلية على الووك. يحتوي على منتجات الألبان.',
        },
        priceMAD: 210,
      },
      {
        name: 'Saumon snacké au Teriyaki',
        description: {
          fr: 'Pavé de saumon, réduction Teriyaki maison, riz basmati et légumes sautés.',
          en: 'Salmon fillet, homemade teriyaki reduction, basmati rice and sautéed vegetables.',
          ar: 'شريحة سلمون، صلصة تيرياكي منزلية، أرز بسمتي وخضروات سوتيه.',
        },
        priceMAD: 210,
      },
      {
        name: 'Filet de bœuf',
        description: {
          fr: 'Filet grillé, sauce poivre et purée de pommes de terre. Contient produits laitiers.',
          en: 'Grilled beef fillet, pepper sauce and mashed potatoes. Contains dairy.',
          ar: 'فيليه لحم بقري مشوي، صلصة الفلفل وبطاطس مهروسة. يحتوي على منتجات الألبان.',
        },
        priceMAD: 220,
      },
    ],
  },
  {
    label: { fr: 'Signatures Terre & Mer', en: 'Signatures Land & Sea', ar: 'أطباق البر والبحر المميزة الخاصة' },
    items: [
      {
        name: 'Black COD au Miso blanc',
        description: {
          fr: 'Filet de cabillaud charbonnier mariné 72h au miso, servi avec un riz Vénéré noir et accompagné d\'une salade de légumes croquants à l\'huile de sésame torréfié.',
          en: 'Black cod fillet marinated for 72h in miso, served with black Venere rice and a crunchy vegetable salad with toasted sesame oil.',
          ar: 'فيليه سمك الكود الأسود متبّل 72 ساعة بالميسو، يُقدَّم مع أرز فينيري أسود وسلطة خضروات مقرمشة بزيت السمسم المحمّص.',
        },
        priceMAD: 540,
      },
      {
        name: 'Umami Rib Steak (900g)',
        description: {
          fr: 'Grande pièce de bœuf maturée, tranchée pour le partage, servie avec pommes grenailles, légumes grillés et sauce chimichurri. Contient produits laitiers. Pour partager.',
          en: 'Dry-aged rib steak, sliced for sharing, served with baby potatoes, grilled vegetables and chimichurri sauce. Contains dairy. To share.',
          ar: 'قطعة لحم بقري مُنضّج، مقطعة للمشاركة، تُقدَّم مع بطاطس صغيرة وخضروات مشوية وصلصة تشيميتشوري. يحتوي على منتجات الألبان. للمشاركة.',
        },
        priceMAD: 590,
      },
      {
        name: 'Entrecôte Black Angus Umami (500g)',
        description: {
          fr: "L'excellence du bœuf Black Angus grillé, beurre composé au miso, purée onctueuse et légumes grillés. Contient produits laitiers.",
          en: 'Grilled Black Angus beef, miso butter, creamy mashed potatoes and grilled vegetables. Contains dairy.',
          ar: 'لحم بقري بلاك أنغوس مشوي فاخر، زبدة الميسو، بطاطس مهروسة كريمية وخضروات مشوية. يحتوي على منتجات الألبان.',
        },
        priceMAD: 690,
      },
    ],
  },
  {
    label: { fr: "Shoko signatures Roll's (8pcs)", en: 'Shoko Signature Rolls (8pcs)', ar: 'لفائف شوكو المميزة (8 قطع)' },
    items: [
      {
        name: 'Hokkaido',
        description: {
          fr: 'Gambas pané, ebi sushi, cream cheese, avocat, crème chili paste et oignons frits. Contient produits laitiers.',
          en: 'Breaded prawns, ebi sushi, cream cheese, avocado, chili paste cream and fried onions. Contains dairy.',
          ar: 'جمبري مقرمش، إيبي سوشي، جبنة كريمية، أفوكادو، كريمة الفلفل الحار وبصل مقلي. يحتوي على منتجات الألبان.',
        },
        priceMAD: 120,
      },
      {
        name: 'Niigata',
        description: {
          fr: 'Gambas pané, avocat, piquant de jalapeños et crème Mayo. Contient produits laitiers.',
          en: 'Breaded prawns, avocado, jalapeño spice and mayo cream. Contains dairy.',
          ar: 'جمبري مقرمش، أفوكادو، حرارة الخالبينو وكريمة المايونيز. يحتوي على منتجات الألبان.',
        },
        priceMAD: 130,
      },
      {
        name: 'Osaka (6pcs)',
        description: {
          fr: 'Assortiment de nigiris signatures : gambas à la sauce Tom Yam, thon rouge au kimchi et saumon à la truffe noire. Contient gluten.',
          en: 'Signature nigiri selection: prawns with Tom Yam sauce, red tuna with kimchi, salmon with black truffle. Contains gluten.',
          ar: 'تشكيلة نيغيري مميزة: جمبري بصلصة توم يام، تونة حمراء بالكيمتشي وسلمون بالكمأة السوداء. يحتوي على الغلوتين.',
        },
        priceMAD: 130,
      },
      {
        name: 'Tokyo',
        description: {
          fr: "Sashimi de thon rouge et avocat, relevés par une sauce chili paste et d'une sauce Unagi.",
          en: 'Red tuna sashimi and avocado, enhanced with chili paste sauce and Unagi sauce.',
          ar: 'ساشيمي تونة حمراء وأفوكادو، مع صلصة الفلفل الحار وصلصة أوناغي.',
        },
        priceMAD: 140,
      },
      {
        name: 'Nara (crunchy)',
        description: {
          fr: 'Saumon et crevettes tempura, cream cheese et avocat, sublimés par une mayonnaise japonaise, sauce Unagi et tobiko. Contient produits laitiers et gluten.',
          en: 'Salmon and tempura shrimp, cream cheese and avocado, enhanced with Japanese mayonnaise, Unagi sauce and tobiko. Contains dairy and gluten.',
          ar: 'سلمون وجمبري تمبورا، جبنة كريمية وأفوكادو، مع مايونيز ياباني وصلصة أوناغي وتوبيكو. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 150,
      },
      {
        name: 'Yamagata',
        description: {
          fr: 'Saumon frais, cream cheese, riz épicé, sésame, oignon frits et mayonnaise japonaise. Contient produits laitiers.',
          en: 'Fresh salmon, cream cheese, spicy rice, sesame, fried onions and Japanese mayonnaise. Contains dairy.',
          ar: 'سلمون طازج، جبنة كريمية، أرز حار، سمسم، بصل مقلي ومايونيز ياباني. يحتوي على منتجات الألبان.',
        },
        priceMAD: 150,
      },
      {
        name: "Shoko Rock n'rolls (crunchy)",
        description: {
          fr: 'Cœur de filet de bœuf, guacamole, crème de truffe et riz croustillant, laqué à la sauce Unagi. Contient gluten.',
          en: 'Beef tenderloin, guacamole, truffle cream and crispy rice, glazed with Unagi sauce. Contains gluten.',
          ar: 'قلب فيليه لحم بقري، جواكامولي، كريمة الكمأة وأرز مقرمش، مغطى بصلصة أوناغي. يحتوي على الغلوتين.',
        },
        priceMAD: 160,
      },
    ],
  },
  {
    label: { fr: 'À partager (ou pas)', en: 'To Share (or not)', ar: 'للمشاركة (أو لا)' },
    items: [
      {
        name: 'Nems au poulet (3pcs)',
        description: {
          fr: 'Blanc de poulet effiloché, julienne de carottes, vermicelles de riz et champignons noirs. Contient gluten.',
          en: 'Shredded chicken breast, julienne carrots, rice vermicelli and black mushrooms. Contains gluten.',
          ar: 'صدر دجاج مبشور، جزر مقطّع، شعيرية أرز وفطر أسود. يحتوي على الغلوتين.',
        },
        priceMAD: 70,
      },
      {
        name: 'Crispy rice saumon',
        description: {
          fr: 'Croustillant de riz, tartare de saumon relevé aux épices douces, avocat et sauce Kimchi. Contient gluten.',
          en: 'Crispy rice topped with salmon tartare, mild spices, avocado and kimchi sauce. Contains gluten.',
          ar: 'أرز مقرمش مع تارتار سلمون متبّل بتوابل خفيفة، أفوكادو وصلصة كيمتشي. يحتوي على الغلوتين.',
        },
        priceMAD: 80,
      },
      {
        name: 'Rock Shrimps',
        description: {
          fr: 'Gambas en tempura légère enrobées d\'une émulsion aïoli épicée, zestes de citron vert et ciboulette fine. Contient gluten.',
          en: 'Light tempura prawns coated in a spicy aioli emulsion, lime zest and chives. Contains gluten.',
          ar: 'جمبري تمبورا خفيف مغطى بصلصة أيولي حارة، برادة ليمون أخضر وثوم معمّر. يحتوي على الغلوتين.',
        },
        priceMAD: 90,
      },
      {
        name: 'Gyoza au fromage et truffe',
        description: {
          fr: 'Raviolis japonais fondants au fromage blanc et champignons de Paris, sublimés par une crème de truffe et parmesan. Contient produits laitiers et gluten.',
          en: 'Melting dumplings with fresh cheese and mushrooms, enhanced with truffle cream and parmesan. Contains dairy and gluten.',
          ar: 'رافيولي ياباني بالجبن الطازج والفطر، مع كريمة الكمأة والبارميزان. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 90,
      },
      {
        name: 'Pizzette à la truffe',
        description: {
          fr: 'Fine pâte feuilletée croustillante, duxelles de champignons de Paris, crème de truffe et parmesan affiné. Contient produits laitiers et gluten.',
          en: 'Crispy puff pastry, mushroom duxelles, truffle cream and aged parmesan. Contains dairy and gluten.',
          ar: 'عجين مقرمش رقيق، فطر مفروم، كريمة الكمأة وبارميزان معتّق. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 100,
      },
      {
        name: 'Gyoza bœuf Umami',
        description: {
          fr: 'Raviolis japonais au filet de bœuf, liés au beurre de miso blanc. Contient produits laitiers et gluten.',
          en: 'Japanese dumplings filled with beef fillet, bound with white miso butter. Contains dairy and gluten.',
          ar: 'رافيولي ياباني محشو بفيليه لحم بقري، مع زبدة الميسو الأبيض. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 95,
      },
    ],
  },
  {
    label: { fr: 'Les plaisirs sucrés', en: 'Desserts', ar: 'الحلويات' },
    items: [
      {
        name: 'Tiramisu',
        description: {
          fr: "L'équilibre parfait entre une crème mascarpone aérienne et l'intensité du cacao. Contient produits laitiers et gluten.",
          en: 'The perfect balance between airy mascarpone cream and intense cocoa. Contains dairy and gluten.',
          ar: 'توازن مثالي بين كريمة الماسكاربوني الخفيفة وكثافة الكاكاو. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 80,
        vegetarian: true,
      },
      {
        name: 'Fondant au chocolat (20mn)',
        description: {
          fr: "Cœur coulant intense, accompagné d'une onctueuse glace à la vanille. Contient produits laitiers et gluten. Préparation : 20 min.",
          en: 'Rich molten chocolate center, served with smooth vanilla ice cream. Contains dairy and gluten. Preparation: 20 min.',
          ar: 'قلب شوكولاتة سائل غني، يُقدَّم مع آيس كريم الفانيليا. يحتوي على منتجات الألبان والغلوتين. وقت التحضير: 20 دقيقة.',
        },
        priceMAD: 80,
        vegetarian: true,
      },
      {
        name: 'Cheesecake mon amour',
        description: {
          fr: 'Crémeux au fromage frais sur sablé Spéculoos, rehaussé par un coulis de fruits de la passion. Contient produits laitiers et gluten.',
          en: 'Creamy cheesecake on a speculoos biscuit base, enhanced with passion fruit coulis. Contains dairy and gluten.',
          ar: 'تشيز كيك كريمي على قاعدة بسكويت سبيكولوس، مع صلصة فاكهة الباشن. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 80,
        vegetarian: true,
      },
      {
        name: 'Chocolate sphère Shoko',
        description: {
          fr: 'Sphère de chocolat noir et cœur croquant, sauce caramel beurre salé chaude versée à table. Contient produits laitiers et gluten.',
          en: 'Dark chocolate sphere with a crunchy center, served with warm salted butter caramel poured at the table. Contains dairy and gluten.',
          ar: 'كرة شوكولاتة داكنة بقلب مقرمش، مع صلصة الكراميل بالزبدة المملحة تُسكب على الطاولة. يحتوي على منتجات الألبان والغلوتين.',
        },
        priceMAD: 80,
        vegetarian: true,
      },
    ],
  },
  {
    label: { fr: 'Les suppléments', en: 'The Sides', ar: 'الإضافات' },
    items: [
      {
        name: 'Légumes sautés',
        description: { fr: 'Légumes sautés.', en: 'Sautéed vegetables.', ar: 'خضروات سوتيه.' },
        priceMAD: 35,
        vegetarian: true,
      },
      {
        name: 'Légumes façon wok',
        description: { fr: 'Légumes façon wok. Contient gluten.', en: 'Wok-style vegetables. Contains gluten.', ar: 'خضروات على طريقة الووك. يحتوي على الغلوتين.' },
        priceMAD: 35,
        vegetarian: true,
      },
      {
        name: 'Purée de pommes de terre',
        description: { fr: 'Purée de pommes de terre. Contient produits laitiers.', en: 'Mashed potatoes. Contains dairy.', ar: 'بطاطس مهروسة. يحتوي على منتجات الألبان.' },
        priceMAD: 40,
        vegetarian: true,
      },
      {
        name: 'Frites maison',
        description: { fr: 'Frites maison.', en: 'Homemade fries.', ar: 'بطاطس مقلية منزلية.' },
        priceMAD: 40,
        vegetarian: true,
      },
    ],
  },
  {
    label: { fr: 'Sip — Cocktails', en: 'Sip — Cocktails', ar: 'كوكتيلات' },
    image: '/images/cocktail-category.webp',
    imageAlt: {
      fr: 'Cocktail signature dressé au bar, garni d\'un zeste d\'agrume séché',
      en: 'Signature cocktail crafted at the bar, garnished with a dried citrus twist',
      ar: 'كوكتيل مميز يُحضَّر على البار، مزيَّن بقشرة حمضيات مجففة',
    },
    items: [
      {
        name: 'Pornstar Martini',
        description: { fr: 'Vodka, fruit de la passion, vanille, champagne. Contient blanc d\'œuf.', en: 'Vodka, passion fruit, vanilla, champagne. Contains egg white.', ar: 'فودكا، فاكهة الباشن، فانيليا، شمبانيا. يحتوي على بياض البيض.' },
        priceMAD: 110,
      },
      {
        name: 'Amaretto Sour',
        description: { fr: 'Amaretto, citron, sucre de canne. Contient blanc d\'œuf.', en: 'Amaretto, lemon, cane sugar. Contains egg white.', ar: 'أماريتو، ليمون، سكر القصب. يحتوي على بياض البيض.' },
        priceMAD: 95,
      },
      {
        name: 'Espresso Martini',
        description: { fr: 'Vodka, espresso, liqueur de café, vanille.', en: 'Vodka, espresso, coffee liqueur, vanilla.', ar: 'فودكا، إسبريسو، مشروب القهوة الكحولي، فانيليا.' },
        priceMAD: 105,
      },
      {
        name: 'Margarita',
        description: { fr: 'Tequila, triple sec, citron.', en: 'Tequila, triple sec, lemon.', ar: 'تكيلا، تريبل سيك، ليمون.' },
        priceMAD: 100,
      },
      {
        name: 'Mojito',
        description: { fr: 'Rhum blanc, menthe, citron, eau gazeuse.', en: 'White rum, mint, lemon, sparkling water.', ar: 'روم أبيض، نعناع، ليمون، ماء فوّار.' },
        priceMAD: 90,
      },
      {
        name: 'Red Velvet',
        description: { fr: 'Gin, framboise, citron, vanille. Contient blanc d\'œuf.', en: 'Gin, raspberry, lemon, vanilla. Contains egg white.', ar: 'جين، توت العليق، ليمون، فانيليا. يحتوي على بياض البيض.' },
        priceMAD: 100,
      },
      {
        name: 'Piña Colada',
        description: { fr: 'Rhum blanc, ananas, coco.', en: 'White rum, pineapple, coconut.', ar: 'روم أبيض، أناناس، جوز الهند.' },
        priceMAD: 95,
      },
      {
        name: 'Sex on the Beach',
        description: { fr: 'Vodka, pêche, orange, cranberry. Contient blanc d\'œuf.', en: 'Vodka, peach, orange, cranberry. Contains egg white.', ar: 'فودكا، خوخ، برتقال، توت بري. يحتوي على بياض البيض.' },
        priceMAD: 95,
      },
    ],
  },
  {
    label: { fr: 'Sip — Mocktails', en: 'Sip — Mocktails', ar: 'موكتيلات' },
    items: [
      {
        name: 'Virgin Mojito',
        description: { fr: 'Menthe, citron, soda.', en: 'Mint, lemon, soda.', ar: 'نعناع، ليمون، صودا.' },
        priceMAD: 70,
        vegetarian: true,
      },
      {
        name: 'Virgin Sex on the Beach',
        description: { fr: 'Pêche, orange, cranberry.', en: 'Peach, orange, cranberry.', ar: 'خوخ، برتقال، توت بري.' },
        priceMAD: 70,
        vegetarian: true,
      },
      {
        name: 'Virgin Piña Colada',
        description: { fr: 'Ananas, coco.', en: 'Pineapple, coconut.', ar: 'أناناس، جوز الهند.' },
        priceMAD: 70,
        vegetarian: true,
      },
      {
        name: 'Virgin Pornstar Martini',
        description: { fr: 'Vanille, fruit de la passion, soda.', en: 'Vanilla, passion fruit, soda.', ar: 'فانيليا، فاكهة الباشن، صودا.' },
        priceMAD: 80,
        vegetarian: true,
      },
      {
        name: 'Berry Kiss',
        description: { fr: 'Ananas, framboise, citron, vanille.', en: 'Pineapple, raspberry, lemon, vanilla.', ar: 'أناناس، توت العليق، ليمون، فانيليا.' },
        priceMAD: 80,
        vegetarian: true,
      },
    ],
  },
];
