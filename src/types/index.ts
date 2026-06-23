export interface ServiceCard {
  id: string;
  title: string;
  titleGe: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  treatment: string;
  initials: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
