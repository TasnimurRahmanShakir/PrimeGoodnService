import { IconName } from "@/components/icons";

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface SectorItem {
  title: string;
  description: string;
  image: string;
  icon: IconName;
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  images?: string[];
  price?: string;
}

export interface ProductTab {
  id: string;
  label: string;
  products: ProductItem[];
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
