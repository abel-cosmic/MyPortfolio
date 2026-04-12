"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xs hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-muted flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Tech overlay on hover */}
        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap gap-1.5 content-end p-3">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium bg-white/20 text-white rounded-full px-2 py-0.5 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 5 && (
            <span className="text-[10px] font-medium bg-white/20 text-white rounded-full px-2 py-0.5 backdrop-blur-sm">
              +{technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        <h3
          className="text-base font-semibold text-card-foreground leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          {liveUrl && (
            <Button variant="default" size="sm" asChild className="flex-1 rounded-full text-xs">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1 rounded-full text-xs border-border">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1.5 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const projects: ProjectCardProps[] = [
  {
    title: "Hope Enterprise University College — CMS",
    description:
      "Redesigned and implemented the HEUC website using PayloadCMS. Highlights HEUC's vision, mission, objectives, and latest updates with an intuitive interface built on ShadcnUI + TailwindCSS.",
    image: "/projects/heuc.png",
    technologies: ["Next.js", "TypeScript", "PayloadCMS", "PostgreSQL", "TailwindCSS", "ShadcnUI"],
    liveUrl: "https://www.heuc.edu.et/",
  },
  {
    title: "Sion Football Academy Website",
    description:
      "Official website showcasing the Academy's mission, training programs, gallery, team, and contact info — designed to attract players, partners, and supporters.",
    image: "/projects/sion-academy.png",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel", "GoDaddy", "Resend"],
    liveUrl: "https://www.sionfootballacademy.pro",
  },
  {
    title: "Nucleus Institute",
    description:
      "Automation studio for pipelines, vector databases, chat interfaces and synthetic data generation powered by an in-house fine-tuned AI model.",
    image: "/projects/nucleusinsititute.png",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "NestJS", "Apollo GraphQL", "Express.js"],
    liveUrl: "https://nucleusinstitute.com/",
  },
  {
    title: "Ethiochef — Recipe Management System",
    description:
      "Meal recipe app for 200k+ users with CI/CD pipelines (40% faster releases), Redis optimisations (60% speed boost), and Chapa/ETSwitch payment integrations.",
    image: "/projects/ethiochef.png",
    technologies: ["Next.js", "TypeScript", "ExpressJS", "MySQL", "TailwindCSS", "ShadcnUI", "Redis"],
    liveUrl: "https://www.ethiochef.com/",
  },
  {
    title: "Digital Merkato",
    description:
      "Admin dashboard with full CRUD operations for an Ethiopian e-commerce platform. Leverages React.js, Tailwind CSS, and Shadcn UI for smooth data management.",
    image: "/projects/digitalmerkato.webp",
    technologies: ["ReactJS", "TypeScript", "TailwindCSS", "Laravel", "ShadcnUI"],
    liveUrl: "https://digitalmerkato.co/",
  },
  {
    title: "Chains Charity",
    description:
      "A React-based charity website to mobilise support for breaking the cycle of poverty. Features localisation in both Amharic and English.",
    image: "/projects/chainscharity.webp",
    technologies: ["ReactJS", "TypeScript", "TailwindCSS"],
    liveUrl: "https://chains-charity.vercel.app/",
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;
  const totalPages = Math.ceil(projects.length / perPage);
  const current = projects.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <section id="projects" className="relative py-24 px-6 bg-background">
      <div className="max-w-screen-md mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px flex-1 bg-border max-w-[3rem]" />
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Projects
          </span>
        </div>

        {/* Header row */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Featured Work
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Some of my best projects and technical achievements.
            </p>
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-xs text-muted-foreground tabular-nums px-1">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {current.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
