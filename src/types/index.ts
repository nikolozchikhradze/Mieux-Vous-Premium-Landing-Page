export interface ServiceCard {
  id: string;
  title: string;
  titleGe: string;
  description: string;
  descriptionGe: string;
  image: string;
}

export interface Testimonial {
  id: number;
  text: string;
  textGe: string;
  author: string;
  treatment: string;
  treatmentGe: string;
  initials: string;
}

export interface FAQItem {
  id: number;
  question: string;
  questionGe: string;
  answer: string;
  answerGe: string;
}

export interface JourneyStep {
  num: string;
  title: string;
  titleGe: string;
  desc: string;
  descGe: string;
}
