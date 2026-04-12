"use client";

import { useState, useMemo } from "react";
import { ExperienceItem, experiences } from "@/components/experience";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = useMemo(() => {
    const types = new Set<string>();
    experiences.forEach(exp => {
      if (exp.type) types.add(exp.type);
    });
    return ["All", ...Array.from(types)];
  }, []);

  const filteredExperiences = useMemo(() => {
    if (activeFilter === "All") return experiences;
    return experiences.filter(exp => exp.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-background">
      <div className="max-w-screen-md mx-auto">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Professional Journey
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            A comprehensive list of my work history and academic leadership.
          </p>
        </FadeIn>

        {/* Filter */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {filterOptions.map((option) => (
              <Button
                key={option}
                variant={activeFilter === option ? "default" : "outline"}
                className={`rounded-full transition-all ${activeFilter === option ? "shadow-[0_0_15px_rgba(var(--primary),0.4)]" : "border-border hover:border-primary/50"}`}
                onClick={() => setActiveFilter(option)}
                size="sm"
              >
                {option}
              </Button>
            ))}
          </div>
        </FadeIn>

        <div className="relative">
           {filteredExperiences.map((exp, i) => (
              <ExperienceItem key={i} index={i} {...exp} />
           ))}
           {filteredExperiences.length === 0 && (
              <p className="text-muted-foreground text-center py-10">No experiences found for this filter.</p>
           )}
        </div>
      </div>
    </div>
  );
}
