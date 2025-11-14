import { client, PROJECTS_QUERY } from '@/lib/sanity';
import { Project } from '@/types/sanity';
import ProjectsClient from './ProjectsClient';

export default async function ProjectsSection() {
  // Fetch all projects from Sanity (not just featured ones)
  const projects: Project[] = await client.fetch(PROJECTS_QUERY);

  return <ProjectsClient projects={projects} />;
}
