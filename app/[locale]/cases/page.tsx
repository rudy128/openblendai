import { client } from '@/lib/sanity';
import CasesClient from './CasesClient';

const CATEGORIES_QUERY = `*[_type == "category"] | order(order asc) {
  _id,
  title,
  slug,
  glowColor,
  order
}`;

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  slug,
  mainImage,
  description,
  category->{
    title,
    glowColor
  },
  categoryLegacy,
  order,
  featured
}`;

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  const [categories, projects] = await Promise.all([
    client.fetch(CATEGORIES_QUERY),
    client.fetch(PROJECTS_QUERY),
  ]);

  return <CasesClient categories={categories} projects={projects} locale={locale} />;
}
