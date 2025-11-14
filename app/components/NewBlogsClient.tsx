'use client';

import { useState, useMemo } from 'react';
import { Blog } from '@/types/sanity';
import FeaturedBlogCard from '@/app/components/FeaturedBlogCard';
import StandardBlogCard from '@/app/components/StandardBlogCard';
import BlogFilters from '@/app/components/BlogFilters';

interface NewBlogsClientProps {
  featuredBlog: Blog | null;
  standardBlogs: Blog[];
}

export default function NewBlogsClient({ featuredBlog, standardBlogs }: NewBlogsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAuthor, setSelectedAuthor] = useState('all');

  // Extract unique categories and authors
  const categories = useMemo(() => {
    const cats = new Set<string>();
    standardBlogs.forEach((blog) => {
      if (blog.category) cats.add(blog.category);
    });
    return Array.from(cats).sort();
  }, [standardBlogs]);

  const authors = useMemo(() => {
    const auths = new Set<string>();
    standardBlogs.forEach((blog) => {
      if (blog.author) auths.add(blog.author);
    });
    return Array.from(auths).sort();
  }, [standardBlogs]);

  // Filter blogs based on selected category and author
  const filteredBlogs = useMemo(() => {
    return standardBlogs.filter((blog) => {
      const categoryMatch = selectedCategory === 'all' || blog.category === selectedCategory;
      const authorMatch = selectedAuthor === 'all' || blog.author === selectedAuthor;
      return categoryMatch && authorMatch;
    });
  }, [standardBlogs, selectedCategory, selectedAuthor]);

  return (
    <div 
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Page Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Blog</h1>

        {/* Featured Post Section */}
        {featuredBlog && (
          <div className="mb-16">
            <FeaturedBlogCard blog={featuredBlog} />
          </div>
        )}

        {/* Filters Section */}
        <BlogFilters
          categories={categories}
          authors={authors}
          onCategoryChange={setSelectedCategory}
          onAuthorChange={setSelectedAuthor}
          selectedCategory={selectedCategory}
          selectedAuthor={selectedAuthor}
        />

        {/* Main Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <StandardBlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[#9CA3AF] text-lg">No blogs found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
