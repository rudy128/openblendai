'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';
import { useLocale } from 'next-intl';

interface StandardBlogCardProps {
  blog: Blog;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export default function StandardBlogCard({ blog }: StandardBlogCardProps) {
  const locale = useLocale() as 'en' | 'fr';
  const title = blog.title[locale] || blog.title.en;
  const excerpt = blog.excerpt?.[locale] || blog.excerpt?.en || '';

  return (
    <Link href={`/${locale}/blogs/${blog.slug.current}`}>
      <div 
        className="rounded-lg overflow-hidden flex flex-col hover:ring-2 hover:ring-[#4F46E5] hover:shadow-lg transition-all duration-300 h-full group border border-gray-800"
        style={{ 
          background: 'rgba(22, 27, 34, 0.6)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Image */}
        <div className="relative w-full aspect-video overflow-hidden">
          {blog.mainImage ? (
            <Image
              src={urlFor(blog.mainImage).width(600).height(400).url()}
              alt={blog.mainImage.alt || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}
            >
              <span className="text-white text-4xl font-bold opacity-20">
                {title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Text Content Area */}
        <div className="p-5 flex flex-col grow">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#4F46E5] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-3 grow">
            {excerpt}
          </p>

          {/* Author Meta */}
          <div className="flex items-center gap-2 mt-auto">
            {/* Author Avatar */}
            <div 
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}
            >
              {blog.author ? blog.author.charAt(0).toUpperCase() : 'A'}
            </div>
            
            <div className="flex items-center gap-2 text-[#9CA3AF] text-xs">
              <span className="font-medium">{blog.author || 'Anonymous'}</span>
              <span>•</span>
              <span>{formatDate(blog.publishedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
