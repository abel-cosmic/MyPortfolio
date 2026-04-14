"use client";

import { useState, useMemo } from "react";
import { projects, ProjectProps } from "@/data/projects";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/project-card";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const catSet = new Set<string>();
    projects.forEach((p) => catSet.add(p.category));
    return ["All", ...Array.from(catSet).sort()];
  }, []);

  const groupedProjects = useMemo(() => {
    const filtered = activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

    const groups: Record<string, ProjectProps[]> = {};
    
    // Sort projects within groups (could be by year if we had it, but let's keep original order)
    filtered.forEach((p) => {
      const groupKey = p.category;
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(p);
    });

    return groups;
  }, [activeCategory]);

  const groupKeys = useMemo(() => Object.keys(groupedProjects).sort(), [groupedProjects]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-background">
      <div className="max-w-screen-md mx-auto">
        <FadeIn direction="up">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            A complete collection of the applications and systems I&apos;ve
            built, organized by domain and architecture.
          </p>
        </FadeIn>

        {/* Filter */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-16">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={`rounded-full transition-all ${
                  activeCategory === cat
                    ? "shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setActiveCategory(cat)}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-20">
          {groupKeys.length > 0 ? (
            groupKeys.map((category) => (
              <div key={category} className="space-y-8">
                {activeCategory === "All" && (
                  <FadeIn direction="up">
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="text-xl font-bold text-foreground/80 shrink-0">
                        {category}
                      </h2>
                      <div className="h-px w-full bg-border/60" />
                    </div>
                  </FadeIn>
                )}
                
                <FadeInStagger className="flex flex-col gap-12 md:gap-14 lg:gap-16">
                  {groupedProjects[category].map((project, i) => (
                    <FadeIn
                      key={project.title + i}
                      delay={0.05}
                      direction="up"
                      className="h-full"
                    >
                      <ProjectCard {...project} />
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-center py-10 w-full">
              No projects found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
