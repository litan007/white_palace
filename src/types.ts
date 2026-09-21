export type PageType = 'accueil' | 'chambres' | 'restaurant' | 'services' | 'galerie' | 'contact';

export interface Room {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  bed: string;
  capacity: string;
  size?: string;
  image: string;
  gallery?: string[];
  description: string;
  amenities: string[];
  tag?: string;
}

export interface CulinaryOffer {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
