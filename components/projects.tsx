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
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-foreground/10 backdrop-blur-md shadow-sm transition-all hover:shadow-lg hover:border-primary hover:-translate-y-1 ease-linear duration-300">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <Image
          src={image ? image : "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4 space-y-2">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="flex-1 leading-relaxed text-xs">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              className="text-xs font-medium"
              variant={"secondary"}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const projects: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  }[] = [
    {
      title: "Hope Enterprise University College - CMS",
      description:
        "Redesigned and implemented the Hope Enterprise University College website using PayloadCMS. The site highlights HEUC's vision, mission, objectives, values, and latest updates, providing an intuitive interface for prospective students and partners. Built with ShadcnUI and TailwindCSS for a modern, responsive experience.",
      image: "/projects/heuc.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "PayloadCMS",
        "PostgreSQL",
        "Tailwindcss",
        "ShadcnUI",
      ],
      liveUrl: "https://www.heuc.edu.et/",
    },
    {
      title: "Sion Football Academy Website",
      description:
        "Official website of Sion Football Academy showcasing its mission, training programs, gallery, team details, and contact information. Designed to attract new players, partners, and supporters.",
      image: "/projects/sion-academy.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
        "GoDaddy",
        "Resend",
      ],
      liveUrl: "https://www.sionfootballacademy.pro",
    },
    {
      title: "Nucleus Institute",
      description:
        "I had the opportunity to work with one of the greatest teams in creating an automation studio for pipelines, vector databases, chat interfaces with documents, synthetic data generation, and more. We used our own in-house AI model, which was fine-tuned and extensively trained, allowing users to leverage the platform for their own needs. Nucleus is teaching me a lot about how to use AI to its fullest potential and how we can harness its power across different applications.",
      image: "/projects/nucleusinsititute.png",
      technologies: [
        "Nextjs",
        "TypeScript",
        "TailwindCSS",
        "NestJS",
        "Apollo GraphQL",
        "Nextjs",
        "TypeScript",
        "TailwindCSS",
        "Express.js",
        "NestJS",
      ],
      liveUrl: "https://nucleusinstitute.com/",
    },
    {
      title: "Ethiochef - Recipe Management System",
      description:
        "For more than 200k users, the meal recipe online app seamlessly combined various technology and payment options. CI/CD pipelines accelerated releases by 40%, while Redis back-end improvements increased speed by 60%. The design made it possible for subscriptions to be customized, while the usage of React and Shadcn UI enhanced user engagement by 30%.",
      image: "/projects/ethiochef.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "ExpressJS",
        "MySQL",
        "Tailwindcss",
        "ShadcnUI",
        "Redis",
        "Chapa",
        "ETSwitch",
      ],
      liveUrl: "https://www.ethiochef.com/",
    },
    {
      title: "Digital Merkato",
      description:
        "Within the DigitalMerkato Admin Side Web App, the dashboard features endpoints designed to perform CRUD (Create, Read, Update, Delete) operations seamlessly. Leveraging technologies such as React.js, Tailwind CSS, and Shadcn UI, users can efficiently manage their data with ease. These endpoints facilitate the creation, retrieval, updating, and deletion of content, ensuring a smooth and intuitive user experience.",
      image: "/projects/digitalmerkato.webp",
      technologies: [
        "ReactJS",
        "TypeScript",
        "TailwindCSS",
        "Laravel",
        "ShadcnUI",
      ],
      liveUrl: "https://digitalmerkato.co/",
    },
    {
      title: "Chains Charity",
      description:
        "Chains Charity is a React-based website designed to mobilize support for breaking the cycle of poverty. Inspired by Bootstrap templates, it offers a seamless user experience. With localization in both Amharic and English, it ensures accessibility and inclusivity for a diverse audience, inviting users to join the mission and make a positive impact.",
      image: "/projects/chainscharity.webp",
      technologies: ["ReactJS", "TypeScript", "TailwindCSS"],
      liveUrl: "https://chains-charity.vercel.app/",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section id="projects" className="relative py-20 px-6 bg-background">
      <div className="max-w-screen-md mx-auto">
        {/* Header with Pagination */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <Badge className="mb-4">Projects</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Showcasing some of my best projects and technical achievements
            </p>
          </div>

          {/* Compact Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2 pt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                disabled={currentPage === 1}
                className="h-9 w-9"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-muted text-sm font-medium">
                <span className="text-foreground">{currentPage}</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-muted-foreground">{totalPages}</span>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="h-9 w-9"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
