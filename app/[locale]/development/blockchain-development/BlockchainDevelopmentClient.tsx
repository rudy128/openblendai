'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Service, Testimonial, Project } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';
import ServiceRow from '@/app/components/ServiceRow';
import TestimonialCard from '@/app/components/TestimonialCard';
import { useState } from 'react';
import technologyStackData from '@/messages/technologyStack.json';
import ContactFormSection from '@/app/components/ContactFormSection';

interface BlockchainDevelopmentClientProps {
  services: Service[];
  testimonials: Testimonial[];
  projects: Project[];
}

export default function BlockchainDevelopmentClient({
  services,
  testimonials,
  projects,
}: BlockchainDevelopmentClientProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const { technologyStack } = technologyStackData;

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                CUSTOM BLOCKCHAIN DEVELOPMENT
              </h1>

              {/* Service List */}
              <ul className="space-y-4">
                {[
                  'Development of crypto web services and mobile applications',
                  'Token and NFT collection launches',
                  'Blockchain based Telegram Mini Apps development',
                  'Fintech projects: exchanges, P2P platforms, wallets'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-[#4F46E5] mt-1 shrink-0"></div>
                    <span className="text-[#E5E7EB] text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href="#contact"
                className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
                  boxShadow: '0 6px 20px rgba(79, 70, 229, 0.5)'
                }}
              >
                Submit a request
              </a>
            </div>

            {/* Right Column - Laptop Image */}
            <div className="relative h-96 hidden md:block">
              <Image
                src="/blockchain-laptop.webp"
                alt="Blockchain Development"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Anchor Links */}
          {/* <div className="flex justify-center gap-6 mt-16">
            <a 
              href="#pricing"
              className="bg-slate-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-700 transition-colors"
            >
              PRICING
            </a>
            <a 
              href="#cases"
              className="bg-slate-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-700 transition-colors"
            >
              CASES
            </a>
          </div> */}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Tech Stack</h2>
          
          {/* Blockchain Tags */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-6">{technologyStack.sections.blockchain.title}</h3>
            <div className="flex flex-wrap gap-3">
              {technologyStack.sections.blockchain.tags.map((tag, index) => (
                <div key={index} className="inline-flex flex-col items-center gap-1.5 px-3 py-2.5 bg-[#F3F4F6] border border-gray-200 rounded-xl text-gray-800 text-sm min-w-[88px] text-center hover:bg-gray-200 transition-colors">
                  <span className="w-[42px] h-[42px] inline-flex items-center justify-center text-lg text-[#4F46E5] rounded-xl p-1.5">
                    <i className={tag.icon}></i>
                  </span>
                  <span className="text-xs font-medium">{tag.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Tools */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-8">{technologyStack.sections.tools.title}</h4>
              <div className="flex flex-wrap gap-4 justify-center">
                {technologyStack.sections.tools.technologies.map((tech, index) => (
                  <div key={index} className="text-center shrink-0 flex-[0_0_calc(33.333%-0.75rem)]">
                    <div className="inline-flex flex-col items-center gap-2 px-3 py-2.5 bg-[#F3F4F6] border border-gray-200 rounded-xl text-gray-800 text-sm text-center mx-auto hover:bg-gray-200 transition-colors">
                      <span className="w-12 h-12 inline-flex items-center justify-center text-lg text-[#4F46E5] rounded-xl p-2">
                        <Image className="w-7 h-7" src={tech.icon} alt={tech.name} width={28} height={28} />
                      </span>
                      <span className="text-xs font-medium">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-8">{technologyStack.sections.services.title}</h4>
              <div className="flex flex-wrap gap-4 justify-center">
                {technologyStack.sections.services.technologies.map((tech, index) => (
                  <div key={index} className="text-center shrink-0 flex-[0_0_calc(33.333%-0.75rem)]">
                    <div className="inline-flex flex-col items-center gap-2 px-3 py-2.5 bg-[#F3F4F6] border border-gray-200 rounded-xl text-gray-800 text-sm text-center mx-auto hover:bg-gray-200 transition-colors">
                      <span className="w-12 h-12 inline-flex items-center justify-center text-lg text-[#4F46E5] rounded-xl p-2">
                        <Image className="w-7 h-7" src={tech.icon} alt={tech.name} width={28} height={28} />
                      </span>
                      <span className="text-xs font-medium">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chains */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-8">{technologyStack.sections.chains.title}</h4>
              <div className="flex flex-wrap gap-4 justify-center">
                {technologyStack.sections.chains.technologies.map((tech, index) => (
                  <div key={index} className="text-center shrink-0 flex-[0_0_calc(33.333%-0.75rem)]">
                    <div className="inline-flex flex-col items-center gap-2 px-3 py-2.5 bg-[#F3F4F6] border border-gray-200 rounded-xl text-gray-800 text-sm text-center mx-auto hover:bg-gray-200 transition-colors">
                      <span className="w-12 h-12 inline-flex items-center justify-center text-lg text-[#4F46E5] rounded-xl p-2">
                        <Image className="w-7 h-7" src={tech.icon} alt={tech.name} width={28} height={28} />
                      </span>
                      <span className="text-xs font-medium">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Web */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-8">{technologyStack.sections.web.title}</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                {technologyStack.sections.web.technologies.map((tech, index) => (
                  <span key={index} className="inline-flex flex-col items-center gap-1.5 px-3 py-2.5 bg-[#F3F4F6] border border-gray-200 rounded-xl text-gray-800 text-sm min-w-[88px] text-center hover:bg-gray-200 transition-colors">
                    <span className="w-[42px] h-[42px] inline-flex items-center justify-center text-lg text-[#4F46E5] rounded-xl p-1.5">
                      <Image className="w-6 h-6" src={tech.icon} alt={tech.name} width={24} height={24} />
                    </span>
                    <span className="text-xs">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-8">{technologyStack.sections.mobile.title}</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                {technologyStack.sections.mobile.technologies.map((tech, index) => (
                  <span key={index} className="inline-flex flex-col items-center gap-1.5 px-3 py-2.5 bg-[#F3F4F6] border border-gray-200 rounded-xl text-gray-800 text-sm min-w-[88px] text-center hover:bg-gray-200 transition-colors">
                    <span className="w-[42px] h-[42px] inline-flex items-center justify-center text-lg text-[#4F46E5] rounded-xl p-1.5">
                      <Image className="w-6 h-6" src={tech.icon} alt={tech.name} width={24} height={24} />
                    </span>
                    <span className="text-xs">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-8">{technologyStack.sections.devops.title}</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                {technologyStack.sections.devops.technologies.map((tech, index) => (
                  <span key={index} className="inline-flex flex-col items-center gap-1.5 px-3 py-2.5 bg-[#F3F4F6] border border-gray-200 rounded-xl text-gray-800 text-sm min-w-[88px] text-center hover:bg-gray-200 transition-colors">
                    <span className="w-[42px] h-[42px] inline-flex items-center justify-center text-lg text-[#4F46E5] rounded-xl p-1.5">
                      <Image className="w-6 h-6" src={tech.icon} alt={tech.name} width={24} height={24} />
                    </span>
                    <span className="text-xs">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-8">{technologyStack.sections.database.title}</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                {technologyStack.sections.database.technologies.map((tech, index) => (
                  <span key={index} className="inline-flex flex-col items-center gap-1.5 px-3 py-2.5 bg-[#F3F4F6] border border-gray-200 rounded-xl text-gray-800 text-sm min-w-[88px] text-center hover:bg-gray-200 transition-colors">
                    <span className="w-[42px] h-[42px] inline-flex items-center justify-center text-lg text-[#4F46E5] rounded-xl p-1.5">
                      <Image className="w-6 h-6" src={tech.icon} alt={tech.name} width={24} height={24} />
                    </span>
                    <span className="text-xs">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-black mb-8">{technologyStack.sections.cloud.title}</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                {technologyStack.sections.cloud.technologies.map((tech, index) => (
                  <span key={index} className="inline-flex flex-col items-center gap-1.5 px-3 py-2.5 bg-[#F3F4F6] border border-gray-200 rounded-xl text-gray-800 text-sm min-w-[88px] text-center hover:bg-gray-200 transition-colors">
                    <span className="w-[42px] h-[42px] inline-flex items-center justify-center text-lg text-[#4F46E5] rounded-xl p-1.5">
                      <Image className="w-6 h-6" src={tech.icon} alt={tech.name} width={24} height={24} />
                    </span>
                    <span className="text-xs">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Our advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                number: '01',
                title: 'Transparency',
                description: 'Clear processes and regular updates on project progress',
                icons: []
              },
              {
                number: '02',
                title: 'Experience',
                description: '5+ years in blockchain development',
                icons: []
              },
              {
                number: '03',
                title: 'Quality',
                description: 'Code reviews and comprehensive testing',
                icons: []
              },
              {
                number: '04',
                title: 'Support',
                description: 'Post-launch maintenance and updates',
                icons: []
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <span className="text-[#4F46E5] text-sm font-bold">/ {advantage.number}</span>
                <h3 className="text-xl font-bold text-black mt-2 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
                
                {advantage.icons.length > 0 && (
                  <div className="flex gap-3 mt-4">
                    {advantage.icons.map((icon) => (
                      <div key={icon} className="w-6 h-6 text-gray-400">
                        {/* Icon placeholders */}
                        <div className="w-full h-full bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pricing</h2>
              <p className="text-[#9CA3AF] text-lg mb-8">
                Fixed prices with no hidden costs. Choose the service you need and get started.
              </p>
            </div>

            {/* Right Column - Decorative Image Placeholder */}
            <div className="relative h-64 hidden lg:block">
              <Image
                src="/blockchain-prices-img.webp"
                alt="Pricing Decorative"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Services List */}
          <div className="space-y-4 mb-12">
            {services.map((service) => (
              <ServiceRow key={service._id} service={service} />
            ))}
          </div>

          {/* Featured Testimonial Quote Section */}
          {testimonials.filter(t => t.featured).length > 0 && (
            <div className="bg-slate-800/50 border border-gray-800 rounded-lg p-8 mb-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Quote Icon */}
                <div className="shrink-0">
                  <svg 
                    className="w-16 h-16 text-[#4F46E5]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
                  </svg>
                </div>

                {/* Quote Content */}
                <div className="flex-1">
                  <p className="text-white text-lg md:text-xl italic mb-6 leading-relaxed">
                    &quot;{testimonials.find(t => t.featured)?.quote}&quot;
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {testimonials.find(t => t.featured)?.avatar && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={urlFor(testimonials.find(t => t.featured)!.avatar!).width(100).height(100).url()}
                          alt={testimonials.find(t => t.featured)?.name || ''}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {!testimonials.find(t => t.featured)?.avatar && (
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonials.find(t => t.featured)?.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="text-white font-bold">{testimonials.find(t => t.featured)?.name}</p>
                      <p className="text-[#9CA3AF] text-sm">{testimonials.find(t => t.featured)?.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Final CTA */}
          <div className="text-center">
            <a 
              href="#contact"
              className="inline-block px-10 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
                boxShadow: '0 6px 20px rgba(79, 70, 229, 0.5)'
              }}
            >
              Discuss your project
            </a>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section 
        id="cases"
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 4).map((project) => {
              const title = typeof project.title === 'object' ? project.title.en : project.title;
              const description = typeof project.description === 'object' ? project.description.en : project.description;
              
              return (
                <Link 
                  key={project._id}
                  href={`/projects/${project.slug.current}`}
                  className="group"
                >
                  <div 
                    className="rounded-lg overflow-hidden border border-gray-800 hover:border-[#4F46E5] transition-all duration-300"
                    style={{ background: 'rgba(22, 27, 34, 0.6)' }}
                  >
                    {/* Project Image */}
                    {project.mainImage && (
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={urlFor(project.mainImage).width(800).height(500).url()}
                          alt={project.mainImage.alt || title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-[#4F46E5] transition-colors">
                        {title}
                      </h3>
                      {description && (
                        <p className="text-[#9CA3AF] text-sm line-clamp-3">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* All Projects Button */}
          <div className="text-center">
            <Link 
              href="/projects"
              className="inline-block px-10 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
                boxShadow: '0 6px 20px rgba(79, 70, 229, 0.5)'
              }}
            >
              All projects
            </Link>
          </div>
        </div>
      </section>

      {/* Development Stages Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
      >
        <div className="max-w-7xl relative mx-auto">
          <div className="flex justify-between items-start mb-12 pr-60">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Development stages</h2>
            
            {/* Decorative Code Icons (Top Right) */}
            <div className="hidden lg:flex max-h-3/12 gap-4">
              <Image src="/blockchain-stages.png" alt="Code Brackets" width={124} height={64} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { number: 1, title: 'Request', description: 'Submit your project requirements' },
              { number: 2, title: 'Introduction', description: 'Initial consultation and discussion' },
              { number: 3, title: 'Estimation', description: 'Project timeline and cost calculation' },
              { number: 4, title: 'Contract', description: 'Agreement signing and terms' },
              { number: 5, title: 'Design', description: 'UI/UX and architecture planning' },
              { number: 6, title: 'Development', description: 'Coding and implementation' },
              { number: 7, title: 'Testing', description: 'Quality assurance and bug fixes' },
              { number: 8, title: 'Deployment', description: 'Launch to production' },
              { number: 9, title: 'Support', description: 'Maintenance and updates' },
              { number: 10, title: 'Optimization', description: 'Performance improvements' },
            ].map((stage) => (
              <div key={stage.number} className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-white font-bold">{stage.number}</span>
                </div>
                <h3 className="text-white font-bold text-lg">{stage.title}</h3>
                <p className="text-[#9CA3AF] text-sm">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Testimonials</h2>
            
            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonials Grid/Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(currentTestimonial, currentTestimonial + 3).map((testimonial) => (
              <TestimonialCard key={testimonial._id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Partners</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5'].map((partner, index) => (
              <div key={index} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="w-32 h-16 bg-slate-800 rounded flex items-center justify-center">
                  <span className="text-[#9CA3AF] text-xs">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <ContactFormSection />

    </div>
  );
}

