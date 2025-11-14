'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  project: {
    title: { en: string; fr: string };
    slug: { current: string };
    mainImage: SanityImageSource;
    description: { en: string; fr: string };
    category?: {
      title: { en: string; fr: string };
      glowColor: string;
    } | null;
    categoryLegacy?: string;
  };
  locale: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, locale }) => {
  const t = useTranslations('cases');
  const title = project.title?.[locale as 'en' | 'fr'] || project.title?.en || 'Untitled';
  const description = project.description?.[locale as 'en' | 'fr'] || project.description?.en || '';
  const categoryTitle = project.category 
    ? (project.category.title[locale as 'en' | 'fr'] || project.category.title.en)
    : (project.categoryLegacy || 'Project');
  const glowColor = project.category?.glowColor || '#4F46E5';

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl">
      {/* Background Image */}
      {project.mainImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={urlFor(project.mainImage).width(800).height(600).url()}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/40" />
        </div>
      )}

      {/* Glow Effect */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40 z-10"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Card Content with Glassmorphism */}
      <div className="relative z-20 flex flex-col h-full p-6 justify-end min-h-[400px]">
        {/* Category Tag - Glassmorphism */}
        <div className="inline-flex items-center mb-4 self-start">
          <span className="px-3 py-1 text-white/90 text-xs font-medium bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            {categoryTitle}
          </span>
        </div>

        {/* Text Content - Glassmorphism Container */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-5 space-y-3 transition-all duration-300 group-hover:bg-slate-900/60 group-hover:border-white/20">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-200 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Learn More Link */}
          <Link
            href={`/${locale}/cases/${project.slug.current}`}
            className="text-white font-semibold hover:text-blue-400 transition-colors inline-flex items-center gap-2 pt-2"
          >
            {t('learnMore')}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
