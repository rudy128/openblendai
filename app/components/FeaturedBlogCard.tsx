'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';
import { useLocale } from 'next-intl';

interface FeaturedBlogCardProps {
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

export default function FeaturedBlogCard({ blog }: FeaturedBlogCardProps) {
  const locale = useLocale() as 'en' | 'fr';
  const title = blog.title[locale] || blog.title.en;
  const excerpt = blog.excerpt?.[locale] || blog.excerpt?.en || '';

  return (
    <Link href={`/${locale}/blogs/${blog.slug.current}`}>
      <div 
        className="rounded-lg overflow-hidden hover:ring-2 hover:ring-[#4F46E5] transition-all duration-300 group border border-gray-800"
        style={{ background: 'rgba(22, 27, 34, 0.6)' }}
      >
        <div 
          className="grid grid-cols-1 md:grid-cols-[57%_43%] gap-0"
        >
          {/* Left Column - Image with Overlay Text (57%) */}
          <div className="relative aspect-video md:aspect-auto md:h-full min-h-[400px]">
            {blog.mainImage && (
              <>
                <Image
                  src={urlFor(blog.mainImage).width(800).height(600).url()}
                  alt={blog.mainImage.alt || title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(79, 70, 229, 0.8) 0%, rgba(79, 70, 229, 0.4) 50%, transparent 100%)' }}
                ></div>
                
                {/* Title Overlay on Image */}
                <div className="absolute inset-0 flex items-end p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase leading-tight">
                    {/* {title} */}
                  </h2>
                </div>
              </>
            )}
          </div>

          {/* Right Column - Text Content (43%) */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* Full Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#4F46E5] transition-colors">
                {title}
              </h3>

              {/* Description/Excerpt */}
              <p className="text-[#9CA3AF] text-base md:text-lg mb-6 line-clamp-3">
                {excerpt}
              </p>
            </div>

            {/* Author Meta */}
            <div className="flex items-center gap-3">
              {/* Author Avatar Placeholder */}
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}
              >
                {blog.author ? blog.author.charAt(0).toUpperCase() : 'A'}
              </div>
              
              <div className="flex items-center gap-2 text-[#9CA3AF] text-sm">
                <span className="font-medium">{blog.author || 'Anonymous'}</span>
                <span>•</span>
                <span>{formatDate(blog.publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
