'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Project } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const t = useTranslations('projects');
  const locale = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  // Get unique categories from projects
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category).filter((c): c is string => Boolean(c))))];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="bg-[#0D1117] w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#E5E7EB]">{t('title')}</h2>
          <Link 
            href="#" 
            className="bg-linear-to-r from-[#4F46E5] to-[#6366F1] hover:shadow-[0_6px_20px_rgba(79,70,229,0.5)] hover:-translate-y-1 text-white font-semibold py-3 px-8 rounded-xl mt-4 md:mt-0 shadow-lg transition-all duration-300"
          >
            {t('seeAllCases')}
          </Link>
        </div>

        {/* Project Filters */}
        <div className="flex space-x-3 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-medium px-4 py-2 rounded-lg whitespace-nowrap transition ${
                activeCategory === category
                  ? 'bg-[#4F46E5]/20 text-[#4F46E5] border border-[#4F46E5]/50'
                  : 'text-[#9CA3AF] bg-[#161B22] border border-gray-700 hover:bg-gray-700/50'
              }`}
            >
              {category === 'all' ? 'All' : category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Project Cards Slider */}
        <div className="relative">
          {/* Scroll Left Button */}
          <button 
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-[#4F46E5] hover:bg-[#6366F1] text-white rounded-full w-12 h-12 items-center justify-center shadow-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>

          {/* Projects Track */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div 
                  key={project._id}
                  className="snap-center bg-[#161B22] rounded-2xl overflow-hidden border border-gray-800 p-6 shrink-0 w-80 md:w-[360px] min-w-[280px] group hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(2,6,23,0.6),0_8px_30px_rgba(79,70,229,0.08)] hover:border-[rgba(79,70,229,0.16)] transition-all duration-350 ease-[cubic-bezier(0.2,0.9,0.3,1)]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow: '0 8px 30px rgba(2,6,23,0.6), 0 2px 8px rgba(0,0,0,0.6)'
                  }}
                >
                  <div className="h-[250px] bg-[#21262D] rounded-xl mb-4 relative overflow-hidden">
                    {project.mainImage ? (
                      <Image
                        src={urlFor(project.mainImage).width(360).height(250).url()}
                        alt={project.mainImage.alt || project.title[locale as 'en' | 'fr'] || 'Project image'}
                        fill
                        className="object-cover"
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
                          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {project.category && (
                    <span className="text-sm font-medium text-[#9CA3AF]">
                      {project.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-bold text-[#E5E7EB] my-2">
                    {project.title[locale as 'en' | 'fr'] || project.title.en}
                  </h3>
                  
                  {project.description && (
                    <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-3">
                      {project.description[locale as 'en' | 'fr'] || project.description.en}
                    </p>
                  )}
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs px-2 py-1 bg-[#4F46E5]/10 text-[#4F46E5] rounded-md border border-[#4F46E5]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {project.liveUrl && (
                    <Link 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#4F46E5] hover:text-[#6366F1] font-medium transition group/link"
                    >
                      View Project
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="ml-1 transition-transform group-hover/link:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  )}
                </div>
              ))
            ) : (
              <div className="w-full text-center py-12">
                <p className="text-[#9CA3AF] text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>

          {/* Scroll Right Button */}
          <button 
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-[#4F46E5] hover:bg-[#6366F1] text-white rounded-full w-12 h-12 items-center justify-center shadow-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
