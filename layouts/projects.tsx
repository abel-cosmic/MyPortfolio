"use client";
import { FeaturedProjectCard } from "@/components/cards/featured-project-card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { projects, projectsSection } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  // Only display the top 3 projects on the home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-screen-md mx-auto">
        {/* Section label */}
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 bg-border max-w-[3rem]" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {projectsSection.label}
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
                {projectsSection.heading}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                {projectsSection.description}
              </p>
            </div>

            <Button
              variant="ghost"
              asChild
              className="group text-foreground hover:text-primary self-start md:self-end"
            >
              <Link href="/projects">
                {projectsSection.viewAllLabel}
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
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto rounded-full"
          >
            <Link href="/projects">{projectsSection.viewAllLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
