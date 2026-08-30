// FAQ content — kept structural (plain question/answer pairs, no nesting)
// on purpose. AI answer engines and Google's FAQ rich results both parse
// this shape directly; the FAQ page renders this list AND emits it as
// FAQPage JSON-LD (see src/content-pages/FaqContent.astro) — one source of
// truth for both the human-readable page and the structured data, in all
// three languages.
//
// Content for Shoko Lounge (Rabat), built from public sources checked
// Aug 2026: the restaurant's Tripadvisor listing (address, hours,
// "Accepts Credit Cards", "Valet Parking", "Reservations", price range
// $$$$) and the client's own PDF menus/site copy. Two things below are
// flagged ⚠ because they aren't confirmed with the client directly —
// verify before publishing, same standing rule this template already
// follows: a wrong claim is worse than no claim.
import type { LocalizedText } from '../i18n/languages';

// `category` is presentation metadata (groups the flat list into scannable
// sections on the page) — it's deliberately NOT emitted in the FAQPage
// JSON-LD, which stays exactly the flat question/answer shape AI answer
// engines and Google expect. Three buckets keep it simple: practical info,
// menu & bookings, payment.
export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
  category: 'pratique' | 'menu' | 'paiement';
}

export const faqCategoryLabels: Record<FaqItem['category'], LocalizedText> = {
  pratique: { fr: 'Infos pratiques', en: 'Practical info', ar: 'معلومات عملية' },
  menu: { fr: 'Menu & réservations', en: 'Menu & bookings', ar: 'القائمة والحجوزات' },
  paiement: { fr: 'Paiement', en: 'Payment', ar: 'الدفع' },
};

export const faqItems: FaqItem[] = [
  {
    question: {
      fr: 'Où se trouve Shoko Lounge ?',
      en: 'Where is Shoko Lounge located?',
      ar: 'أين يقع شوكو لاونج؟',
    },
    answer: {
      fr: 'Shoko Lounge se situe dans le quartier Souissi (Bir Kacem) à Rabat, Avenue Oulad Fares.',
      en: 'Shoko Lounge is located in the Souissi (Bir Kacem) neighborhood of Rabat, Avenue Oulad Fares.',
      ar: 'يقع شوكو لاونج في حي السويسي (بئر قاسم) بالرباط، شارع أولاد فارس.',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: "Quels sont les horaires d'ouverture ?",
      en: 'What are the opening hours?',
      ar: 'ما هي ساعات العمل؟',
    },
    answer: {
      fr: 'Nous sommes ouverts tous les jours de 19h00 à 2h00 du matin.',
      en: 'We are open every day from 7:00 PM to 2:00 AM.',
      ar: 'نحن مفتوحون كل يوم من الساعة 19:00 حتى 2:00 صباحًا.',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Le stationnement est-il disponible ?',
      en: 'Is parking available?',
      ar: 'هل يتوفر مكان لركن السيارات؟',
    },
    answer: {
      fr: 'Oui, un service voiturier et un parking sont disponibles sur place.',
      en: 'Yes, valet service and parking are available on site.',
      ar: 'نعم، تتوفر خدمة صف السيارات (فاليه) ومكان للركن في عين المكان.',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Proposez-vous la livraison ou la commande en ligne ?',
      en: 'Do you offer delivery or online ordering?',
      ar: 'هل تقدمون خدمة التوصيل أو الطلب عبر الإنترنت؟',
    },
    answer: {
      fr: "Non. Shoko Lounge est un lieu conçu pour l'expérience sur place — dîner, cocktails et ambiance — sans service de livraison.",
      en: 'No. Shoko Lounge is designed as an on-site experience — dinner, cocktails and atmosphere — without a delivery service.',
      ar: 'لا. شوكو لاونج مصمم كتجربة داخل المكان — عشاء وكوكتيلات وأجواء — دون خدمة توصيل.',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Le menu propose-t-il des options végétariennes ?',
      en: 'Does the menu offer vegetarian options?',
      ar: 'هل تقدم القائمة خيارات نباتية؟',
    },
    answer: {
      fr: 'Oui, plusieurs entrées, accompagnements, desserts et mocktails du menu sont végétariens — repérables par leur mention sur la page menu de ce site.',
      en: 'Yes, several starters, sides, desserts and mocktails on the menu are vegetarian — marked as such on this site\'s menu page.',
      ar: 'نعم، العديد من المقبلات والإضافات والحلويات والموكتيلات في القائمة نباتية — موضحة على صفحة القائمة في هذا الموقع.',
    },
    category: 'menu',
  },
  {
    question: {
      fr: 'Comment réserver une table ?',
      en: 'How do I reserve a table?',
      ar: 'كيف يمكنني حجز طاولة؟',
    },
    answer: {
      fr: 'Vous pouvez réserver via le formulaire de notre page Réservation, ou nous appeler directement.',
      en: 'You can book via the form on our Reservation page, or call us directly.',
      ar: 'يمكنكم الحجز عبر نموذج صفحة الحجز، أو الاتصال بنا مباشرة.',
    },
    category: 'menu',
  },
  {
    question: {
      fr: 'Y a-t-il des soirées à thème ou des shows ?',
      en: 'Are there themed nights or shows?',
      ar: 'هل توجد أمسيات خاصة أو عروض؟',
    },
    answer: {
      // ⚠ VÉRIFIER — nights aren't confirmed as weekly/fixed by the client; kept vague ("certains soirs") on purpose rather than naming a day.
      fr: "Oui, Shoko Lounge propose régulièrement des soirées avec DJ set et show. Contactez-nous pour connaître le programme du moment.",
      en: "Yes, Shoko Lounge regularly hosts DJ set and show nights. Contact us for the current schedule.",
      ar: "نعم، ينظم شوكو لاونج بانتظام أمسيات بدي جي وعروض حية. تواصلوا معنا لمعرفة البرنامج الحالي.",
    },
    category: 'menu',
  },
  {
    question: {
      fr: 'Quel est le budget moyen par personne ?',
      en: 'What is the average budget per person?',
      ar: 'ما هي الميزانية المتوسطة للشخص الواحد؟',
    },
    answer: {
      // ⚠ VÉRIFIER — figure sourced from a single third-party review mentioning "MAD 500+", not confirmed with the client.
      fr: 'Comptez à partir de 500 MAD par personne selon les plats et boissons choisis.',
      en: 'Expect from 500 MAD per person depending on the dishes and drinks chosen.',
      ar: 'يبدأ المبلغ من 500 درهم للشخص الواحد حسب الأطباق والمشروبات المختارة.',
    },
    category: 'menu',
  },
  {
    question: {
      fr: 'Peut-on payer par carte bancaire ?',
      en: 'Can we pay by card?',
      ar: 'هل يمكن الدفع بالبطاقة البنكية؟',
    },
    answer: {
      fr: 'Oui, le paiement par carte bancaire est accepté, tout comme le paiement en espèces.',
      en: 'Yes, card payment is accepted, as well as cash.',
      ar: 'نعم، يُقبل الدفع بالبطاقة البنكية، وكذلك نقدًا.',
    },
    category: 'paiement',
  },
];
