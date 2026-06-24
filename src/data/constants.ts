import { ServiceCard, Testimonial, FAQItem, JourneyStep } from '../types';

export const EASE_LUXURY: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const HERO_IMAGE = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80";

export const SERVICES: ServiceCard[] = [
  {
    id: 'injection',
    title: 'Injection Cosmetology',
    titleGe: 'საინექციო კოსმეტოლოგია',
    description: "Botox, fillers, bioremodeling, and mesotherapy delivered with medical precision and an artist's eye.",
    descriptionGe: "ბოტოქსი, ფილერები, ბიორემოდელირება და მეზოთერაპია შესრულებული სამედიცინო სიზუსტით.",
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=90&auto=format&fit=crop'
  },
  {
    id: 'hardware',
    title: 'Hardware Aesthetics',
    titleGe: 'აპარატურული ესთეტიკა',
    description: 'RF lifting, laser rejuvenation, and ultrasound therapy for non-invasive transformation.',
    descriptionGe: 'RF ლიფტინგი, ლაზერული გაახალგაზრდავება და ულტრაბგერითი თერაპია არაინვაზიური ტრანსფორმაციისთვის.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=90&auto=format&fit=crop'
  },
  {
    id: 'skincare',
    title: 'Premium Skin Care',
    titleGe: 'პრემიუმ კანის მოვლა',
    description: 'Bespoke facial protocols, deep hydration, and skin barrier restoration for a luminous complexion.',
    descriptionGe: 'ინდივიდუალური პროტოკოლები, ღრმა დატენიანება და კანის ბარიერის აღდგენა ბრწყინვალე იერისთვის.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=90&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: 'The results exceeded every expectation. My skin looks 10 years younger and I feel genuinely radiant.',
    textGe: 'შედეგმა მოლოდინს გადააჭარბა. ჩემი კანი 10 წლით ახალგაზრდულად გამოიყურება.',
    author: 'Ana K.',
    treatment: 'Skin Rejuvenation',
    treatmentGe: 'კანის გაახალგაზრდავება',
    initials: 'AK'
  },
  {
    id: 2,
    text: "Mieux Vous combines clinical excellence with the most calming, luxurious atmosphere I've experienced.",
    textGe: "Mieux Vous აერთიანებს კლინიკურ ბრწყინვალებას დამამშვიდებელ, მდიდრულ ატმოსფეროსთან.",
    author: 'Mariam T.',
    treatment: 'Botox & Fillers',
    treatmentGe: 'ბოტოქსი და ფილერები',
    initials: 'MT'
  },
  {
    id: 3,
    text: 'Perfectly natural results. My friends noticed I looked refreshed without being able to pinpoint why.',
    textGe: 'იდეალურად ბუნებრივი შედეგი. ჩემმა მეგობრებმა შეამჩნიეს ცვლილება, მაგრამ ვერ მიხვდნენ რატომ.',
    author: 'Sophie N.',
    treatment: 'Bioremodeling',
    treatmentGe: 'ბიორემოდელირება',
    initials: 'SN'
  },
  {
    id: 4,
    text: 'The consultation was incredibly thorough. I felt heard and cared for throughout the entire process.',
    textGe: 'კონსულტაცია იყო წარმოუდგენლად დეტალური. ვგრძნობდი ყურადღებას მთელი პროცესის განმავლობაში.',
    author: 'Nino G.',
    treatment: 'RF Lifting',
    treatmentGe: 'RF ლიფტინგი',
    initials: 'NG'
  },
  {
    id: 5,
    text: 'Impeccable technique and a beautiful, serene space. I leave every appointment feeling transformed.',
    textGe: 'უნაკლო ტექნიკა და ლამაზი, მშვიდი სივრცე. ყოველი ვიზიტის შემდეგ თავს გარდაქმნილად ვგრძნობ.',
    author: 'Tamar L.',
    treatment: 'Premium Skin Care',
    treatmentGe: 'პრემიუმ კანის მოვლა',
    initials: 'TL'
  },
  {
    id: 6,
    text: 'After years of searching, I finally found specialists who truly understand aesthetic harmony.',
    textGe: 'წლების ძიების შემდეგ, საბოლოოდ ვიპოვე სპეციალისტები, რომლებსაც ესმით ესთეტიკური ჰარმონია.',
    author: 'Elene M.',
    treatment: 'Mesotherapy',
    treatmentGe: 'მეზოთერაპია',
    initials: 'EM'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'How long is the recovery time after injectable treatments?',
    questionGe: 'რამდენი ხანია აღდგენის პერიოდი საინექციო პროცედურების შემდეგ?',
    answer: 'Most injectable procedures require minimal to no downtime. Mild redness or swelling may occur for 24-48 hours, which can easily be concealed.',
    answerGe: 'უმეტეს საინექციო პროცედურებს არ სჭირდება აღდგენის პერიოდი. მცირე სიწითლე შეიძლება გაგრძელდეს 24-48 საათი.'
  },
  {
    id: 2,
    question: 'Are the results of hardware aesthetics treatments permanent?',
    questionGe: 'არის თუ არა აპარატურული ესთეტიკის შედეგები მუდმივი?',
    answer: 'Results vary by treatment. RF lifting and ultrasound therapy provide long-lasting tightening that improves over 3-6 months, with maintenance sessions recommended annually.',
    answerGe: 'შედეგები განსხვავდება პროცედურების მიხედვით. RF ლიფტინგი უზრუნველყოფს ხანგრძლივ შედეგს.'
  },
  {
    id: 3,
    question: 'What safety standards do you follow?',
    questionGe: 'რა უსაფრთხოების სტანდარტებს იცავთ?',
    answer: 'We adhere to the highest European medical standards. All practitioners are certified specialists, and only CE/FDA-approved materials and devices are used.',
    answerGe: 'ჩვენ ვიცავთ ევროპულ სამედიცინო სტანდარტებს. ვიყენებთ მხოლოდ CE/FDA-ს მიერ დამტკიცებულ მასალებს.'
  },
  {
    id: 4,
    question: 'How do I know which treatment is right for me?',
    questionGe: 'როგორ გავიგო რომელი პროცედურაა ჩემთვის შესაფერისი?',
    answer: 'Every client begins with a comprehensive personal consultation where we assess your skin, discuss goals, and recommend a fully customized protocol.',
    answerGe: 'ყველა კლიენტი იწყებს პერსონალური კონსულტაციით, სადაც ჩვენ ვადგენთ ინდივიდუალურ პროტოკოლს.'
  },
  {
    id: 5,
    question: 'Can treatments be combined in the same session?',
    questionGe: 'შეიძლება თუ არა პროცედურების კომბინირება ერთ ვიზიტში?',
    answer: 'Yes, many of our protocols are designed to complement each other. Your specialist will guide you on safe and effective combinations.',
    answerGe: 'დიახ, ჩვენი პროტოკოლების უმეტესობა შექმნილია ერთმანეთის შესავსებად.'
  },
  {
    id: 6,
    question: 'What technologies do you use for skin rejuvenation?',
    questionGe: 'რა ტექნოლოგიებს იყენებთ კანის გაახალგაზრდავებისთვის?',
    answer: 'We offer RF lifting, HIFU ultrasound, laser resurfacing, and advanced LED phototherapy — all calibrated to your individual skin type.',
    answerGe: 'ჩვენ გთავაზობთ RF ლიფტინგს, HIFU ულტრაბგერას, ლაზერულ პროცედურებს და LED ფოტოთერაპიას.'
  }
];

export const BOOKING_OPTIONS = [
  'Injection Cosmetology',
  'Hardware Aesthetics',
  'Premium Skin Care',
  'General Consultation'
];

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    num: '01',
    title: 'Personal Consultation',
    titleGe: 'პერსონალური კონსულტაცია',
    desc: 'We listen deeply to your goals and assess your unique facial anatomy and skin profile to craft a fully individualized approach.',
    descGe: 'ჩვენ ყურადღებით ვისმენთ თქვენს მიზნებს და ვსწავლობთ თქვენს უნიკალურ ანატომიას ინდივიდუალური მიდგომის შესაქმნელად.'
  },
  {
    num: '02',
    title: 'Customized Treatment Strategy',
    titleGe: 'ინდივიდუალური სტრატეგია',
    desc: 'Your specialist designs a bespoke protocol aligned with your aesthetic vision, timeline, and lifestyle — no two plans are alike.',
    descGe: 'თქვენი სპეციალისტი შეიმუშავებს უნიკალურ პროტოკოლს თქვენი ხედვის, დროისა და ცხოვრების სტილის გათვალისწინებით.'
  },
  {
    num: '03',
    title: 'Flawless Execution',
    titleGe: 'უნაკლო შესრულება',
    desc: 'Each procedure is performed with precision instruments and medical-grade materials in our serene, clinically impeccable environment.',
    descGe: 'თითოეული პროცედურა სრულდება ზუსტი ინსტრუმენტებით და უმაღლესი ხარისხის მასალებით ჩვენს კლინიკურ გარემოში.'
  }
];
