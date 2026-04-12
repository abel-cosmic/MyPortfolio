"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectProps, projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo } from "./icons";

// The original ProjectCard is exported for use in the /projects page
export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-target group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xs hover:shadow-[0_0_25px_rgba(var(--primary),0.2)] hover:border-primary/50 h-full"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-muted flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
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
          className="text-base font-semibold text-card-foreground leading-snug group-hover:text-primary transition-colors duration-300"
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
            <Button variant="default" size="sm" asChild className="flex-1 rounded-full text-xs hover:shadow-[0_0_15px_rgba(var(--primary),0.4)] transition-all">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1 rounded-full text-xs border-border hover:border-primary/50 transition-all">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1.5 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-target group flex flex-col md:flex-row overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500"
    >
      {/* Image Side */}
      <div className="relative h-64 md:h-auto md:w-[45%] overflow-hidden bg-muted flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content Side */}
      <div className="flex flex-col flex-1 p-6 md:p-8 justify-center">
        <h3
          className="text-xl md:text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>

        <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
          {description}
        </p>

        {/* Technologies Grid */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {liveUrl && (
            <Button asChild className="rounded-full hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all px-6">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" asChild className="rounded-full border-border hover:border-primary/50 hover:bg-primary/5 transition-all px-6">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-2 h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // Only display the top 3 projects on the home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 px-6 ">
      <div className="max-w-screen-md mx-auto">
        {/* Section label */}
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 bg-border max-w-[3rem]" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Projects
            </span>
          </div>
        </FadeIn>

        {/* Header row */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Featured Work
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                Some of my best projects and technical achievements.
              </p>
            </div>

            <Button variant="ghost" asChild className="group text-foreground hover:text-primary self-start md:self-end">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Featured Projects Vertical List */}
        <div className="flex flex-col gap-8">
          {featuredProjects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <FeaturedProjectCard {...project} />
            </FadeIn>
          ))}
        </div>

        {/* Mobile View All Button (shows only below projects on very small screens) */}
        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" asChild className="w-full sm:w-auto rounded-full">
            <Link href="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
