'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Blog } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';

interface BlogsClientProps {
  blogs: Blog[];
}

export default function BlogsClient({ blogs }: BlogsClientProps) {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Get unique categories from blogs
  const categories = ['all', ...Array.from(new Set(blogs.map(b => b.category).filter((c): c is string => Boolean(c))))];

  // Filter blogs based on active category and search query
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === 'all' || blog.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      blog.title[locale as 'en' | 'fr']?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.[locale as 'en' | 'fr']?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#000810] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] bg-clip-text text-transparent">
              {locale === 'fr' ? 'Blog' : 'Blog'}
            </h1>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              {locale === 'fr' 
                ? 'Restez informé des dernières tendances en blockchain, crypto et web3'
                : 'Stay updated with the latest trends in blockchain, crypto, and web3'}
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder={locale === 'fr' ? 'Rechercher des articles...' : 'Search articles...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-[#161B22] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4F46E5] transition"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-medium px-6 py-2.5 rounded-lg whitespace-nowrap transition ${
                  activeCategory === category
                    ? 'bg-[#4F46E5]/20 text-[#4F46E5] border border-[#4F46E5]/50'
                    : 'text-[#9CA3AF] bg-[#161B22] border border-gray-700 hover:bg-gray-700/50'
                }`}
              >
                {category === 'all' 
                  ? (locale === 'fr' ? 'Tous' : 'All')
                  : category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/${locale}/blogs/${blog.slug.current}`}
                  className="group bg-[#161B22] rounded-2xl overflow-hidden border border-gray-800 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(2,6,23,0.6),0_8px_30px_rgba(79,70,229,0.08)] hover:border-[rgba(79,70,229,0.16)] transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {/* Blog Image */}
                  <div className="h-[240px] bg-[#21262D] relative overflow-hidden">
                    {blog.mainImage ? (
                      <Image
                        src={urlFor(blog.mainImage).width(400).height(240).url()}
                        alt={blog.mainImage.alt || blog.title[locale as 'en' | 'fr'] || 'Blog image'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="96" 
                          height="96" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="text-[#9CA3AF]/50"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between mb-3">
                      {blog.category && (
                        <span className="text-xs font-semibold px-3 py-1 bg-[#4F46E5]/10 text-[#4F46E5] rounded-full border border-[#4F46E5]/20">
                          {blog.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      )}
                      <span className="text-xs text-[#9CA3AF]">
                        {formatDate(blog.publishedAt)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#E5E7EB] mb-3 line-clamp-2 group-hover:text-[#4F46E5] transition-colors">
                      {blog.title[locale as 'en' | 'fr'] || blog.title.en}
                    </h3>

                    {/* Excerpt */}
                    {blog.excerpt && (
                      <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-3">
                        {blog.excerpt[locale as 'en' | 'fr'] || blog.excerpt.en}
                      </p>
                    )}

                    {/* Author and Read More */}
                    <div className="flex items-center justify-between">
                      {blog.author && (
                        <span className="text-sm text-[#9CA3AF]">
                          {locale === 'fr' ? 'Par' : 'By'} {blog.author}
                        </span>
                      )}
                      <span className="text-[#4F46E5] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                        {locale === 'fr' ? 'Lire' : 'Read'}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          className="ml-1"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg 
                className="mx-auto mb-4 text-[#9CA3AF]/50"
                xmlns="http://www.w3.org/2000/svg" 
                width="96" 
                height="96" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <p className="text-[#9CA3AF] text-lg">
                {locale === 'fr' ? 'Aucun article trouvé.' : 'No articles found.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
