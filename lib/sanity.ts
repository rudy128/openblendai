import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ queries for fetching data
export const PROJECTS_QUERY = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  mainImage,
  technologies,
  category,
  liveUrl,
  publishedAt,
  featured
}`;

export const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(publishedAt desc)[0...6] {
  _id,
  title,
  slug,
  description,
  mainImage,
  technologies,
  category,
  liveUrl,
  publishedAt
}`;

export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  mainImage,
  technologies,
  category,
  liveUrl,
  publishedAt
}`;

export const BLOGS_QUERY = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  author,
  category,
  tags,
  publishedAt,
  featured
}`;

// Fetch the single featured blog post
export const FEATURED_BLOG_QUERY = `*[_type == "blog" && featured == true] | order(publishedAt desc)[0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  author,
  category,
  tags,
  publishedAt,
  featured
}`;

// Fetch all non-featured blog posts
export const STANDARD_BLOGS_QUERY = `*[_type == "blog" && (featured != true || featured == false)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  author,
  category,
  tags,
  publishedAt
}`;

export const BLOG_BY_SLUG_QUERY = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  mainImage,
  author,
  category,
  tags,
  publishedAt
}`;

// Services queries
export const SERVICES_QUERY = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  priceString,
  durationString,
  hasTag,
  tagText,
  order
}`;

// Testimonials queries
export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  title,
  avatar,
  companyLogo,
  quote,
  order
}`;

// Tech Icons queries
export const TECH_ICONS_QUERY = `*[_type == "techIcon"] | order(order asc) {
  _id,
  name,
  icon,
  category,
  order
}`;

// Get tech icons by category
export const TECH_ICONS_BY_CATEGORY_QUERY = `*[_type == "techIcon" && category == $category] | order(order asc) {
  _id,
  name,
  icon,
  category,
  order
}`;
