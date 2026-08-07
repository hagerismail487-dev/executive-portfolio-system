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

  executiveTitle: string;
  executiveDescription: string;
  highlights: string[];
}

export interface BusinessValueSection {
  description: string;
  benefits: string[];
}

export interface WhyPartnerStrength {
  title: string;
  description: string;
}

export interface WhyPartnerSection {
  description: string;
  strengths: WhyPartnerStrength[];
}

export interface ServiceDetail {
  slug: string;

  hero: HeroSection;

  businessValue: BusinessValueSection;

  deliverables: string[];

  workflow: WorkflowStep[];

  technologies: string[];

  idealClients: string[];

  businessOutcomes: string[];

  whyWorkWithMe: WhyPartnerSection;

  faqs: FAQItem[];

  cta: CTA;
}