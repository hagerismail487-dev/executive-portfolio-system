// ======================================================
// Executive Portfolio System
// Service Module Types
// ======================================================

export interface CTA {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface HeroSection {
  title: string;
  headline: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;

  hero: HeroSection;

  businessValue: string;

  deliverables: string[];

  workflow: WorkflowStep[];

  technologies: string[];

  idealClients: string[];

  businessOutcomes: string[];

  whyWorkWithMe: string;

  faqs: FAQItem[];

  cta: CTA;
}