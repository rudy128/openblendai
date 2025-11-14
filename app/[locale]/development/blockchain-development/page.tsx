import { client, SERVICES_QUERY, TESTIMONIALS_QUERY, PROJECTS_QUERY } from '@/lib/sanity';
import { Service, Testimonial, Project } from '@/types/sanity';
import BlockchainDevelopmentClient from './BlockchainDevelopmentClient';

export default async function BlockchainDevelopmentPage() {
  // Fetch all data from Sanity
  const services: Service[] = await client.fetch(SERVICES_QUERY);
  const testimonials: Testimonial[] = await client.fetch(TESTIMONIALS_QUERY);
  const projects: Project[] = await client.fetch(PROJECTS_QUERY);

  return (
    <BlockchainDevelopmentClient
      services={services}
      testimonials={testimonials}
      projects={projects}
    />
  );
}
