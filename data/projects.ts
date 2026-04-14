import projectsData from "./projects.json";

export interface ProjectProps {
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsSection = {
  label: projectsData.sectionLabel,
  heading: projectsData.heading,
  description: projectsData.description,
  viewAllLabel: projectsData.viewAllLabel,
} as const;

export const projects: ProjectProps[] = projectsData.projects;
