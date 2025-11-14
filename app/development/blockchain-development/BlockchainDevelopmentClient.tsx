'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Service, Testimonial, TechIcon, Project } from '@/types/sanity';
import { urlFor } from '@/lib/sanity';
import ServiceRow from '@/app/components/ServiceRow';
import TestimonialCard from '@/app/components/TestimonialCard';
import { useState } from 'react';

interface BlockchainDevelopmentClientProps {
  services: Service[];
  testimonials: Testimonial[];
  techIcons: TechIcon[];
  projects: Project[];
}

export default function BlockchainDevelopmentClient({
  services,
  testimonials,
  techIcons,
  projects,
}: BlockchainDevelopmentClientProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Group tech icons by category
  const groupedTechIcons = techIcons.reduce((acc, icon) => {
    if (!acc[icon.category]) {
      acc[icon.category] = [];
    }
    acc[icon.category].push(icon);
    return acc;
  }, {} as Record<string, TechIcon[]>);

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
              <button 
                className="px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
                  boxShadow: '0 6px 20px rgba(79, 70, 229, 0.5)'
                }}
              >
                Submit a request
              </button>
            </div>

            {/* Right Column - Image (placeholder for laptop image) */}
            <div className="relative h-96 hidden md:block">
              {/* Add your laptop image here */}
              <div className="w-full h-full bg-linear-to-br from-[#4F46E5]/20 to-[#6366F1]/20 rounded-2xl flex items-center justify-center">
                <span className="text-[#9CA3AF] text-sm">Laptop Image Placeholder</span>
              </div>
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
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            {/* Blockchain Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">Blockchain</h3>
              
              {/* Chains */}
              {groupedTechIcons.chains && groupedTechIcons.chains.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-sm text-gray-600 uppercase mb-4">Chains</h4>
                  <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {groupedTechIcons.chains.map((icon) => (
                      <div key={icon._id} className="flex flex-col items-center gap-2">
                        <div className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all">
                          <Image
                            src={urlFor(icon.icon).width(100).height(100).url()}
                            alt={icon.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs text-black text-center">{icon.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools */}
              {groupedTechIcons.tools && groupedTechIcons.tools.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-sm text-gray-600 uppercase mb-4">Tools</h4>
                  <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {groupedTechIcons.tools.map((icon) => (
                      <div key={icon._id} className="flex flex-col items-center gap-2">
                        <div className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all">
                          <Image
                            src={urlFor(icon.icon).width(100).height(100).url()}
                            alt={icon.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs text-black text-center">{icon.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {groupedTechIcons.services && groupedTechIcons.services.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-sm text-gray-600 uppercase mb-4">Services</h4>
                  <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {groupedTechIcons.services.map((icon) => (
                      <div key={icon._id} className="flex flex-col items-center gap-2">
                        <div className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all">
                          <Image
                            src={urlFor(icon.icon).width(100).height(100).url()}
                            alt={icon.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs text-black text-center">{icon.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Web */}
            {groupedTechIcons.web && groupedTechIcons.web.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6">Web</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {groupedTechIcons.web.map((icon) => (
                    <div key={icon._id} className="flex flex-col items-center gap-2">
                      <div className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all">
                        <Image
                          src={urlFor(icon.icon).width(100).height(100).url()}
                          alt={icon.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-black text-center">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DevOps */}
            {groupedTechIcons.devops && groupedTechIcons.devops.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6">DevOps</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {groupedTechIcons.devops.map((icon) => (
                    <div key={icon._id} className="flex flex-col items-center gap-2">
                      <div className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all">
                        <Image
                          src={urlFor(icon.icon).width(100).height(100).url()}
                          alt={icon.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-black text-center">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Database */}
            {groupedTechIcons.database && groupedTechIcons.database.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6">Database</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {groupedTechIcons.database.map((icon) => (
                    <div key={icon._id} className="flex flex-col items-center gap-2">
                      <div className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all">
                        <Image
                          src={urlFor(icon.icon).width(100).height(100).url()}
                          alt={icon.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-black text-center">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile development */}
            {groupedTechIcons.mobile && groupedTechIcons.mobile.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6">Mobile development</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {groupedTechIcons.mobile.map((icon) => (
                    <div key={icon._id} className="flex flex-col items-center gap-2">
                      <div className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all">
                        <Image
                          src={urlFor(icon.icon).width(100).height(100).url()}
                          alt={icon.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-black text-center">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cloud technologies */}
            {groupedTechIcons.cloud && groupedTechIcons.cloud.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Cloud technologies</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {groupedTechIcons.cloud.map((icon) => (
                    <div key={icon._id} className="flex flex-col items-center gap-2">
                      <div className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all">
                        <Image
                          src={urlFor(icon.icon).width(100).height(100).url()}
                          alt={icon.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-black text-center">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                title: 'Public Presence',
                description: 'We run a YouTube channel and a Telegram blog',
                icons: ['youtube', 'telegram']
              },
              {
                number: '02',
                title: 'Transparency',
                description: 'Clear processes and regular updates on project progress',
                icons: []
              },
              {
                number: '03',
                title: 'Experience',
                description: '5+ years in blockchain development',
                icons: []
              },
              {
                number: '04',
                title: 'Quality',
                description: 'Code reviews and comprehensive testing',
                icons: []
              },
              {
                number: '05',
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
              <div className="w-full h-full bg-linear-to-br from-[#4F46E5]/20 to-[#6366F1]/20 rounded-2xl flex items-center justify-center">
                <span className="text-[#9CA3AF] text-sm">3D Geometric Shape Placeholder</span>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="space-y-4 mb-12">
            {services.map((service) => (
              <ServiceRow key={service._id} service={service} />
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-slate-800/50 border border-gray-800 rounded-lg p-6 mb-8">
            <p className="text-white text-lg italic mb-4">
              &quot;You don&apos;t overpay, the cost is fixed at the start and remains unchanged throughout the project.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#4F46E5] to-[#6366F1]"></div>
              <div>
                <p className="text-white font-bold">Ruslan</p>
                <p className="text-[#9CA3AF] text-sm">Project Manager</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button 
              className="px-10 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
                boxShadow: '0 6px 20px rgba(79, 70, 229, 0.5)'
              }}
            >
              Discuss your project
            </button>
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
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Development stages</h2>
            
            {/* Decorative Code Icons (Top Right) */}
            <div className="hidden lg:flex gap-4">
              <div className="w-16 h-16 bg-[#4F46E5]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#4F46E5] text-2xl font-bold">&lt;/&gt;</span>
              </div>
              <div className="w-16 h-16 bg-[#4F46E5]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#4F46E5] text-2xl font-bold">&lt;/&gt;</span>
              </div>
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
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Partners</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {/* Partner Logo Placeholders */}
            {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5'].map((partner, index) => (
              <div key={index} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="w-32 h-16 bg-slate-800 rounded flex items-center justify-center">
                  <span className="text-[#9CA3AF] text-xs">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(180deg, #000810 0%, #010509 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Form Card */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black mb-6">Any questions left?</h3>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                  />
                </div>

                <div>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] text-gray-700"
                  >
                    <option>Choose Messenger for Contact</option>
                    <option>Telegram</option>
                    <option>WhatsApp</option>
                    <option>Email</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                  ></textarea>
                </div>

                {/* reCAPTCHA Placeholder */}
                <div className="bg-gray-100 border border-gray-300 rounded p-4 flex items-center justify-center h-20">
                  <span className="text-gray-500 text-sm">reCAPTCHA</span>
                </div>

                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="agreement"
                    className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5]"
                  />
                  <label htmlFor="agreement" className="text-gray-700 text-sm">
                    I agree to the processing of personal data
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    background: 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
                    boxShadow: '0 6px 20px rgba(79, 70, 229, 0.5)'
                  }}
                >
                  Send
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info Card */}
            <div 
              className="rounded-2xl p-8 flex flex-col justify-between"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
            >
              <div>
                <p className="text-blue-200 text-sm mb-4">Contacts</p>
                <h3 className="text-4xl font-bold text-white mb-8">HELLO@AXIOMICA.IO</h3>
                
                <div className="space-y-4">
                  <a href="https://t.me/axiomica" className="text-blue-200 hover:text-white transition-colors">
                    Telegram: @axiomica
                  </a>
                  <p className="text-blue-200">
                    Address: Dubai, UAE
                  </p>
                </div>
              </div>

              {/* Tablet Image Placeholder */}
              <div className="mt-8 relative h-64 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-blue-800/30 flex items-center justify-center">
                  <span className="text-blue-200 text-sm">Tablet Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

