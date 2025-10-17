// types/index.ts
import { JSX } from 'react';

export interface Service {
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  features: string[];
  additionalContent: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  color: string;
  gradient: string;
  popular: boolean;
  buttonText: string;
  features: string[];
  requirements: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface ContactInfo {
  icon: JSX.Element;
  title: string;
  content: string;
}

export interface SolutionItem {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  hoverColor: string;
}

export interface StatItem {
  icon: any;
  label: string;
  value: string;
}

export interface FooterColumn {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}