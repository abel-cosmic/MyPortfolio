"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/projects";
import { projects } from "@/data/projects";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const [activeTech, setActiveTech] = useState<string>("All");

  const technologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(p => p.technologies.forEach(t => techSet.add(t)));
    return ["All", ...Array.from(techSet).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTech === "All") return projects;
    return projects.filter(p => p.technologies.includes(activeTech));
  }, [activeTech]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-background">
      <div className="max-w-screen-lg mx-auto">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            A complete collection of the applications and systems I've built, exploring different architectures and technologies.
          </p>
        </FadeIn>

        {/* Filter */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {technologies.map((tech) => (
              <Button
                key={tech}
                variant={activeTech === tech ? "default" : "outline"}
                className={`rounded-full transition-all ${activeTech === tech ? "shadow-[0_0_15px_rgba(var(--primary),0.4)]" : "border-border hover:border-primary/50"}`}
                onClick={() => setActiveTech(tech)}
                size="sm"
              >
                {tech}
              </Button>
            ))}
          </div>
        </FadeIn>

        {filteredProjects.length > 0 ? (
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, i) => (
                <FadeIn key={project.title + i} delay={0.05} direction="up" className="h-full">
                  <ProjectCard {...project} />
                </FadeIn>
            ))}
          </FadeInStagger>
        ) : (
          <p className="text-muted-foreground text-center py-10 w-full">No projects found for this technology.</p>
        )}
      </div>
    </div>
  );
}
