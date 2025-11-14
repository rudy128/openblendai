'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import technologyStackData from '../../messages/technologyStack.json';

interface Technology {
  name: string;
  icon: string;
}

interface TechSection {
  title: string;
  technologies: Technology[];
}

const TechGrid = ({ section, isGridLayout = true }: { section: TechSection, isGridLayout?: boolean }) => (
  <div className="p-8 bg-[#161b22] rounded-2xl border border-[#2f3338]">
    <h4 className="text-xl font-bold text-[#e5e7eb] mb-8">{section.title}</h4>
    <div className={isGridLayout ? "flex flex-wrap gap-4 justify-center" : "flex flex-wrap gap-4 text-sm text-[#9ca3af]"}>
      {section.technologies.map((tech: Technology, index: number) => (
        isGridLayout ? (
          <div key={index} className="text-center text-[#9ca3af]/70 shrink-0 flex-[0_0_calc(33.333%-0.75rem)]">
            <div className="inline-flex flex-col items-center gap-2 px-3 py-2.5 bg-white/5 border border-white/4 rounded-xl text-slate-300 text-sm backdrop-blur-md text-center mx-auto">
              <span className="w-12 h-12 inline-flex items-center justify-center text-lg text-violet-400 rounded-xl p-2">
                <Image className="w-7 h-7" src={tech.icon} alt={tech.name} width={28} height={28} />
              </span>
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          </div>
        ) : (
          <span key={index} className="inline-flex flex-col items-center gap-1.5 px-3 py-2.5 bg-white/5 border border-white/4 rounded-xl text-slate-300 text-sm backdrop-blur-md min-w-[88px] text-center">
            <span className="w-[42px] h-[42px] inline-flex items-center justify-center text-lg text-violet-400 rounded-xl p-1.5">
              <Image className="w-6 h-6" src={tech.icon} alt={tech.name} width={24} height={24} />
            </span>
            {tech.name}
          </span>
        )
      ))}
    </div>
  </div>
);

const TechnologyStackSection = () => {
  const { technologyStack } = technologyStackData;
  const t = useTranslations('technologyStack');
  
  return (
    <section id="tech-stack" className="w-full py-20 text-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#e5e7eb]">{t('title')}</h2>
          <p className="text-xl text-[#9ca3af] mt-4 lg:mt-0 lg:w-1/2">
            {t('subtitle')}
          </p>
        </div>

        {/* Blockchain Tags */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#e5e7eb] mb-6">{technologyStack.sections.blockchain.title}</h3>
          <div className="flex flex-wrap gap-3">
            {technologyStack.sections.blockchain.tags.map((tag, index) => (
              <div key={index} className="inline-flex flex-col items-center gap-1.5 px-3 py-2.5 bg-white/5 border border-white/4 rounded-xl text-slate-300 text-sm backdrop-blur-md min-w-[88px] text-center">
                <span className="w-[42px] h-[42px] inline-flex items-center justify-center text-lg text-violet-400 rounded-xl p-1.5">
                  <i className={tag.icon}></i>
                </span>
                <span className="text-xs">{tag.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <TechGrid section={technologyStack.sections.tools} />
          <TechGrid section={technologyStack.sections.services} />
          <TechGrid section={technologyStack.sections.chains} />
          <TechGrid section={technologyStack.sections.web} isGridLayout={false} />
          <TechGrid section={technologyStack.sections.mobile} isGridLayout={false} />
          <TechGrid section={technologyStack.sections.devops} isGridLayout={false} />
          <TechGrid section={technologyStack.sections.database} isGridLayout={false} />
          <TechGrid section={technologyStack.sections.cloud} isGridLayout={false} />
        </div>
      </div>


    </section>
  );
};

export default TechnologyStackSection;
