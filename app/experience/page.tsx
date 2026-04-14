"use client";

import { useState, useMemo } from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ExperienceItem } from "@/components/cards/experience-card";
import { experiences, Experience } from "@/layouts/experience";

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", "Professional", "Academic"];

  const filteredExperiences = useMemo(() => {
    if (activeFilter === "All") return experiences;
    return experiences.filter((exp) => exp.roleType === activeFilter);
  }, [activeFilter]);

  const groupedByYear = useMemo(() => {
    const groups: Record<string, Experience[]> = {};
    
    filteredExperiences.forEach((exp) => {
      // Extract year from period (e.g., "Dec 2025 – Present" -> "2025")
      const yearMatch = exp.period.match(/\d{4}/);
      const year = yearMatch ? yearMatch[0] : "Other";
      
      if (!groups[year]) groups[year] = [];
      groups[year].push(exp);
    });
    
    return groups;
  }, [filteredExperiences]);

  const sortedYears = useMemo(() => 
    Object.keys(groupedByYear).sort((a, b) => {
      if (a === "Other") return 1;
      if (b === "Other") return -1;
      return parseInt(b) - parseInt(a);
    })
  , [groupedByYear]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-background">
      <div className="max-w-screen-md mx-auto">
        <FadeIn direction="up">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Professional Journey
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            A chronological timeline of my career milestones, academic leadership, and technical growth.
          </p>
        </FadeIn>

        {/* Filter */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-16">
            {filterOptions.map((option) => (
              <Button
                key={option}
                variant={activeFilter === option ? "default" : "outline"}
                className={`rounded-full transition-all ${
                  activeFilter === option
                    ? "shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setActiveFilter(option)}
                size="sm"
              >
                {option}
              </Button>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-16">
          {sortedYears.length > 0 ? (
            sortedYears.map((year) => (
              <div key={year} className="relative">
                <FadeIn direction="up">
                  <div className="sticky top-24 z-10 mb-8">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                      <span className="text-primary font-bold">{year}</span>
                    </div>
                  </div>
                </FadeIn>

                <div className="space-y-6 ml-4 border-l-2 border-border/40 pl-8">
                  <FadeInStagger>
                    {groupedByYear[year].map((exp, i) => (
                      <FadeIn
                        key={`${exp.company}-${exp.title}-${i}`}
                        direction="up"
                        delay={i * 0.05}
                      >
                        <ExperienceItem
                          {...exp}
                          isLast={i === groupedByYear[year].length - 1}
                        />
                      </FadeIn>
                    ))}
                  </FadeInStagger>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-center py-10">
              No experiences found for this filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
