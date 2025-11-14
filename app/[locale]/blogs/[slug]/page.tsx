import { client, BLOG_BY_SLUG_QUERY } from '@/lib/sanity';
import { Blog } from '@/types/sanity';
import BlogDetailClient from '@/app/components/BlogDetailClient';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  
  // Fetch blog from Sanity by slug
  const blog: Blog = await client.fetch(BLOG_BY_SLUG_QUERY, { slug });

  if (!blog) {
    notFound();
  }

  return <BlogDetailClient blog={blog} />;
}
