import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '@/lib/sanity';
import { Project } from '@/types/sanity';
import { ArrowLeft, Contact, ExternalLink } from 'lucide-react';
import ContactFormSection from '@/app/components/ContactFormSection';

// GROQ query to fetch a single project with all details
const PROJECT_DETAIL_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description,
  mainImage,
  websiteUrl,
  liveUrl,
  technologies,
  "galleryImages": galleryImages[]{
    "url": asset->url,
    alt
  },
  task,
  result,
  developmentTime,
  "stack": stack[]->{
    name,
    "iconUrl": icon.asset->url
  },
  category->{
    title,
    glowColor
  },
  categoryLegacy
}`;

// GROQ query to get all project slugs for static generation
const ALL_SLUGS_QUERY = `*[_type == "project" && defined(slug.current)]{
  "slug": slug.current
}`;

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await client.fetch<{ slug: string }[]>(ALL_SLUGS_QUERY);
  const locales = ['en', 'fr'];
  
  return projects.flatMap((project) =>
    locales.map((locale) => ({
      locale,
      slug: project.slug,
    }))
  );
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  
  const project = await client.fetch<Project>(PROJECT_DETAIL_QUERY, {
    slug: slug,
  });

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const loc = locale as 'en' | 'fr';
  const title = project.title?.[loc] || project.title?.en || 'Project';
  const description = project.description?.[loc] || project.description?.en || '';

  return {
    title: `${title} | OpenBlend AI`,
    description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  
  const project = await client.fetch<Project>(PROJECT_DETAIL_QUERY, {
    slug: slug,
  });

  if (!project) {
    notFound();
  }

  const loc = locale as 'en' | 'fr';
  const title = project.title?.[loc] || project.title?.en || 'Project';
  const description = project.description?.[loc] || project.description?.en || '';
  const task = project.task?.[loc] || project.task?.en || '';
  const result = project.result?.[loc] || project.result?.en || '';
  
  // Use websiteUrl if available, otherwise fall back to liveUrl
  const projectUrl = project.websiteUrl || project.liveUrl;
  
  // Use stack if available, otherwise fall back to technologies array
  const hasTechStack = project.stack && project.stack.length > 0;
  const hasTechnologies = project.technologies && project.technologies.length > 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Back to cases link */}
      <div className="container mx-auto px-6 pt-8 lg:pt-12">
        <Link
          href={`/${loc}/cases`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to cases
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Image - Gallery or Main Image */}
          {project.galleryImages && project.galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {project.galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-9/16 lg:aspect-3/4">
                  <Image
                    src={image.url}
                    alt={image.alt || `${title} screenshot ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ) : project.mainImage ? (
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
              <Image
                src={urlFor(project.mainImage).width(1200).height(675).url()}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
          ) : null}

          {/* Title with URL Icon */}
          <div className="flex items-start gap-4 mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-white flex-1">
              {title}
            </h1>
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
                aria-label="Visit website"
              >
                <ExternalLink className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:text-blue-400 transition-colors" />
              </a>
            )}
          </div>

          {/* Technology Stack */}
          {(hasTechStack || hasTechnologies) && (
            <div className="mb-8">
              {/* If we have stack with icons */}
              {hasTechStack && (
                <div className="flex flex-wrap gap-6">
                  {project.stack!.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 lg:w-14 lg:h-14 relative">
                        <Image
                          src={tech.iconUrl}
                          alt={tech.name}
                          fill
                          className="object-contain filter grayscale brightness-200"
                          sizes="56px"
                        />
                      </div>
                      <span className="text-xs text-slate-400 text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Fallback: If no stack, show technologies as text badges */}
              {!hasTechStack && hasTechnologies && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies!.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-800 text-slate-200 text-sm rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Task and Result Cards */}
          {(task || result) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Task Card */}
              {task && (
                <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Task</h2>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                    {task}
                  </p>
                  {project.developmentTime && (
                    <div className="mt-6">
                      <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                        {project.developmentTime}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Result Card */}
              {result && (
                <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Result</h2>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                    {result}
                  </p>
                </div>
              )}
            </div>
          )}

          <ContactFormSection />          
        </div>
      </div>
    </div>
  );
}
