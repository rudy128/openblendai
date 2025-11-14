import { client, FEATURED_BLOG_QUERY, STANDARD_BLOGS_QUERY } from '@/lib/sanity';
import { Blog } from '@/types/sanity';
import NewBlogsClient from '@/app/components/NewBlogsClient';

export default async function BlogsPage() {
  // Fetch the featured blog (single post where featured == true)
  const featuredBlog: Blog | null = await client.fetch(FEATURED_BLOG_QUERY);
  
  // Fetch all standard blogs (where featured != true or featured == false)
  const standardBlogs: Blog[] = await client.fetch(STANDARD_BLOGS_QUERY);

  return <NewBlogsClient featuredBlog={featuredBlog} standardBlogs={standardBlogs} />;
}
