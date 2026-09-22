export interface Room {
  id: string;
  title: string;
  subtitle: string;
  category: 'suite' | 'villa' | 'lodge';
  price: number;
  surface: number;
  capacity: number;
  view: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  amenities: string[];
  rating: number;
  featured?: boolean;
}

export interface MenuItem {
  id: string;
  title: string;
  category: 'entrees' | 'plats' | 'desserts' | 'boissons' | 'degustation';
  price: number;
  description: string;
  image: string;
  tags?: string[];
  recommended?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hotel' | 'restaurant' | 'nature' | 'experiences';
  image: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TableBookingState {
  date: string;
  timeSlot: string;
  guestsCount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialRequests: string;
  seatingArea: 'terrasse' | 'interieur' | 'vue-lac';
}
