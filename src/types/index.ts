export interface Package {
  id: string;
  title_en: string;
  title_so: string;
  description_en: string;
  description_so: string;
  price: number;
  duration: string;
  inclusions: string[];
  image_url: string;
  type: 'hajj' | 'umrah';
  created_at: string;
}

export interface Post {
  id: string;
  title_en: string;
  title_so: string;
  content_en: string;
  content_so: string;
  image_url?: string;
  video_url?: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content_en: string;
  content_so: string;
  rating: number;
  created_at: string;
}

export type Language = 'en' | 'so';