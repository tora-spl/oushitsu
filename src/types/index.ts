export interface Drink {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'cocktail' | 'wine' | 'beer' | 'spirit' | 'non-alcoholic';
  image?: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export interface MenuCategory {
  id: number;
  name: string;
  drinks: Drink[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}
