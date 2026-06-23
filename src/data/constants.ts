import { ServiceCard, Testimonial, FAQItem } from '../types';

export const EASE_LUXURY: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const HERO_IMAGE = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80";

export const SERVICES: ServiceCard[] = [
  {
    id: 'injection',
    title: 'Injection Cosmetology',
    titleGe: 'საინექციო კოსმეტოლოგია',
    description: "Botox, fillers, bioremodeling, and mesotherapy delivered with medical precision and an artist's eye.",
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=90&auto=format&fit=crop'
  },
  {
    id: 'hardware',
    title: 'Hardware Aesthetics',
    titleGe: 'აპარატურული ესთეტიკა',
    description: 'RF lifting, laser rejuvenation, and ultrasound therapy for non-invasive transformation.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=90&auto=format&fit=crop'
  },
  {
    id: 'skincare',
    title: 'Premium Skin Care',
    titleGe: 'ესთეტიკური მოვლა',
    description: 'Bespoke facial protocols, deep hydration, and skin barrier restoration for a luminous complexion.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=90&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: 'The results exceeded every expectation. My skin looks 10 years younger and I feel genuinely radiant.',
    author: 'Ana K.',
    treatment: 'Skin Rejuvenation',
    initials: 'AK'
  },
  {
    id: 2,
    text: "Mieux Vous combines clinical excellence with the most calming, luxurious atmosphere I've experienced.",
    author: 'Mariam T.',
    treatment: 'Botox & Fillers',
    initials: 'MT'
  },
  {
    id: 3,
    text: 'Perfectly natural results. My friends noticed I looked refreshed without being able to pinpoint why.',
    author: 'Sophie N.',
    treatment: 'Bioremodeling',
    initials: 'SN'
  },
  {
    id: 4,
    text: 'The consultation was incredibly thorough. I felt heard and cared for throughout the entire process.',
    author: 'Nino G.',
    treatment: 'RF Lifting',
    initials: 'NG'
  },
  {
    id: 5,
    text: 'Impeccable technique and a beautiful, serene space. I leave every appointment feeling transformed.',
    author: 'Tamar L.',
    treatment: 'Premium Skin Care',
    initials: 'TL'
  },
  {
    id: 6,
    text: 'After years of searching, I finally found specialists who truly understand aesthetic harmony.',
    author: 'Elene M.',
    treatment: 'Mesotherapy',
    initials: 'EM'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'How long is the recovery time after injectable treatments?',
    answer: 'Most injectable procedures require minimal to no downtime. Mild redness or swelling may occur for 24-48 hours, which can easily be concealed.'
  },
  {
    id: 2,
    question: 'Are the results of hardware aesthetics treatments permanent?',
    answer: 'Results vary by treatment. RF lifting and ultrasound therapy provide long-lasting tightening that improves over 3-6 months, with maintenance sessions recommended annually.'
  },
  {
    id: 3,
    question: 'What safety standards do you follow?',
    answer: 'We adhere to the highest European medical standards. All practitioners are certified specialists, and only CE/FDA-approved materials and devices are used.'
  },
  {
    id: 4,
    question: 'How do I know which treatment is right for me?',
    answer: 'Every client begins with a comprehensive personal consultation where we assess your skin, discuss goals, and recommend a fully customized protocol.'
  },
  {
    id: 5,
    question: 'Can treatments be combined in the same session?',
    answer: 'Yes, many of our protocols are designed to complement each other. Your specialist will guide you on safe and effective combinations.'
  },
  {
    id: 6,
    question: 'What technologies do you use for skin rejuvenation?',
    answer: 'We offer RF lifting, HIFU ultrasound, laser resurfacing, and advanced LED phototherapy — all calibrated to your individual skin type.'
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

export const JOURNEY_STEPS = [
  {
    num: '01',
    title: 'Personal Consultation',
    desc: 'We listen deeply to your goals and assess your unique facial anatomy and skin profile to craft a fully individualized approach.'
  },
  {
    num: '02',
    title: 'Customized Treatment Strategy',
    desc: 'Your specialist designs a bespoke protocol aligned with your aesthetic vision, timeline, and lifestyle — no two plans are alike.'
  },
  {
    num: '03',
    title: 'Flawless Execution',
    desc: 'Each procedure is performed with precision instruments and medical-grade materials in our serene, clinically impeccable environment.'
  }
];
