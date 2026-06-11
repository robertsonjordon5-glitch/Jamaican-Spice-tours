export interface Tour {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  tag: string;
  duration: string;
  groupType: string;
  price: number;
  rating: number;
  reviewCount: number;
  highlights: string[];
  description: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  tourId: string;
  guests: number;
  notes: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  tourName: string;
  avatarSeed: string;
}
