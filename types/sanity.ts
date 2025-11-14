export interface LocalizedString {
  en: string;
  fr: string;
}

export interface LocalizedText {
  en: string;
  fr: string;
}

export interface BlockContent {
  _type: string;
  [key: string]: unknown;
}

export interface LocalizedContent {
  en: BlockContent[];
  fr: BlockContent[];
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface GalleryImage {
  url: string;
  alt?: string;
}

export interface Technology {
  _id: string;
  name: string;
  iconUrl: string;
  order?: number;
}

export interface Project {
  _id: string;
  _type: 'project';
  title: LocalizedString;
  slug: {
    current: string;
  };
  description?: LocalizedText;
  mainImage?: SanityImage;
  technologies?: string[];
  category?: Category;
  categoryLegacy?: string;
  order?: number;
  liveUrl?: string;
  publishedAt?: string;
  featured?: boolean;
  websiteUrl?: string;
  galleryImages?: GalleryImage[];
  task?: LocalizedText;
  result?: LocalizedText;
  developmentTime?: string;
  stack?: Technology[];
}

export interface Blog {
  _id: string;
  _type: 'blog';
  title: LocalizedString;
  slug: {
    current: string;
  };
  excerpt?: LocalizedText;
  content?: LocalizedContent;
  mainImage?: SanityImage;
  author?: string;
  category?: string;
  tags?: string[];
  publishedAt: string;
  featured?: boolean;
}

export interface Service {
  _id: string;
  _type: 'service';
  title: string;
  description?: string;
  icon?: string;
  priceString?: string;
  durationString?: string;
  hasTag?: boolean;
  tagText?: string;
  order?: number;
}

export interface Testimonial {
  _id: string;
  _type: 'testimonial';
  name: string;
  title: string;
  avatar?: SanityImage;
  companyLogo?: SanityImage;
  quote: string;
  order?: number;
  featured?: boolean;
}

export interface TechIcon {
  _id: string;
  _type: 'techIcon';
  name: string;
  icon: SanityImage;
  category: string;
  order?: number;
}

export interface Category {
  _id: string;
  _type: 'category';
  title: LocalizedString;
  slug: {
    current: string;
  };
  glowColor: string;
  order?: number;
}
