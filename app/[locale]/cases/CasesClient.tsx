'use client';

import React, { useState } from 'react';
import ProjectCard from '@/app/components/ProjectCard';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useTranslations } from 'next-intl';

interface Category {
  _id: string;
  title: { en: string; fr: string };
  slug: { current: string };
  glowColor: string;
  order: number;
}

interface Project {
  _id: string;
  title: { en: string; fr: string };
  slug: { current: string };
  mainImage: SanityImageSource;
  description: { en: string; fr: string };
  category?: {
    title: { en: string; fr: string };
    glowColor: string;
  } | null;
  categoryLegacy?: string;
  order: number;
  featured: boolean;
}

interface CasesClientProps {
  categories: Category[];
  projects: Project[];
  locale: string;
}

const CasesClient: React.FC<CasesClientProps> = ({ categories, projects, locale }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = useTranslations('cases');

  const getCategoryTitle = (category: { title: { en: string; fr: string } }) => {
    return category.title[locale as 'en' | 'fr'] || category.title.en;
  };

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => {
        const categoryTitle = project.category ? getCategoryTitle(project.category) : null;
        return categoryTitle === selectedCategory || project.categoryLegacy === selectedCategory;
      });

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left Column - Title */}
          <div>
            <h1 className="text-5xl font-bold text-white">
              {t('title')}
            </h1>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-lg text-slate-300">
              {t('description')}
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-3 flex-wrap mb-12">
          {/* All Filter */}
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 hover:bg-white/20'
            }`}
          >
            {t('allFilter')}
          </button>

          {/* Category Filters */}
          {categories.map((category) => {
            const categoryTitle = getCategoryTitle(category);
            return (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(categoryTitle)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === categoryTitle
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 hover:bg-white/20'
                }`}
              >
                {categoryTitle}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} locale={locale} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              {t('noProjects')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CasesClient;
