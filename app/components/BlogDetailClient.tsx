'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Blog } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';

interface BlogDetailClientProps {
  blog: Blog;
}

export default function BlogDetailClient({ blog }: BlogDetailClientProps) {
  const locale = useLocale();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Custom components for PortableText
  const portableTextComponents = {
    block: {
      h1: ({ children }: any) => <h1 className="text-4xl font-bold text-[#E5E7EB] mb-6 mt-8">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-3xl font-bold text-[#E5E7EB] mb-5 mt-8">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-2xl font-bold text-[#E5E7EB] mb-4 mt-6">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-xl font-bold text-[#E5E7EB] mb-3 mt-6">{children}</h4>,
      normal: ({ children }: any) => <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-[#4F46E5] pl-6 py-2 my-6 italic text-[#E5E7EB]">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc list-inside text-[#9CA3AF] mb-6 space-y-2">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal list-inside text-[#9CA3AF] mb-6 space-y-2">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="text-lg leading-relaxed">{children}</li>,
      number: ({ children }: any) => <li className="text-lg leading-relaxed">{children}</li>,
    },
    marks: {
      strong: ({ children }: any) => <strong className="font-bold text-[#E5E7EB]">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      code: ({ children }: any) => (
        <code className="bg-[#161B22] px-2 py-1 rounded text-[#4F46E5] font-mono text-sm">
          {children}
        </code>
      ),
      link: ({ children, value }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4F46E5] hover:text-[#6366F1] underline transition"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-[#000810] text-white">
      {/* Back Button */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${locale}/blogs`}
            className="inline-flex items-center text-[#9CA3AF] hover:text-[#4F46E5] transition group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {locale === 'fr' ? 'Retour aux articles' : 'Back to articles'}
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category and Date */}
          <div className="flex items-center gap-4 mb-6">
            {blog.category && (
              <span className="text-sm font-semibold px-4 py-1.5 bg-[#4F46E5]/10 text-[#4F46E5] rounded-full border border-[#4F46E5]/20">
                {blog.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            )}
            <span className="text-sm text-[#9CA3AF]">
              {formatDate(blog.publishedAt)}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E5E7EB] mb-6 leading-tight">
            {blog.title[locale as 'en' | 'fr'] || blog.title.en}
          </h1>

          {/* Author */}
          {blog.author && (
            <p className="text-lg text-[#9CA3AF] mb-8">
              {locale === 'fr' ? 'Par' : 'By'} <span className="text-[#E5E7EB] font-medium">{blog.author}</span>
            </p>
          )}

          {/* Featured Image */}
          {blog.mainImage && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <Image
                src={urlFor(blog.mainImage).width(1200).height(630).url()}
                alt={blog.mainImage.alt || blog.title[locale as 'en' | 'fr'] || 'Blog image'}
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Excerpt */}
          {blog.excerpt && (
            <div className="mb-8 pb-8 border-b border-gray-800">
              <p className="text-xl text-[#E5E7EB] leading-relaxed italic">
                {blog.excerpt[locale as 'en' | 'fr'] || blog.excerpt.en}
              </p>
            </div>
          )}

          {/* Content */}
          {blog.content && (
            <div className="prose prose-invert max-w-none">
              <PortableText
                value={blog.content[locale as 'en' | 'fr'] || blog.content.en}
                components={portableTextComponents}
              />
            </div>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-[#9CA3AF] mb-4">
                {locale === 'fr' ? 'Tags' : 'Tags'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1.5 bg-[#161B22] text-[#9CA3AF] rounded-lg border border-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to blogs link */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <Link
              href={`/${locale}/blogs`}
              className="inline-flex items-center text-[#4F46E5] hover:text-[#6366F1] font-medium transition group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {locale === 'fr' ? 'Voir tous les articles' : 'View all articles'}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
