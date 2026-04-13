import { ExperienceItem } from "@/components/cards/experience-card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import experiencesData from "@/data/experiences.json";
import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

export interface Experience {
  title: string;
  image?: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  location?: string;
  type?: string;
  link?: string;
}

export const experiences: Experience[] = experiencesData as Experience[];

const experienceSectionCopy = {
  sectionLabel: "Experience",
  heading: "Professional Journey",
  description:
    "A timeline of my professional growth and key achievements across companies and roles.",
  viewAllLabel: "View All Experience",
} as const;

const Experience = () => {
  const topExperiences = experiences.slice(0, 3);

  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 px-4 md:px-6 bg-background"
    >
      <div className="max-w-screen-md mx-auto">
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 bg-border max-w-[3rem]" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Briefcase className="h-4 w-4 shrink-0" />
              {experienceSectionCopy.sectionLabel}
            </span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {experienceSectionCopy.heading}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed">
                {experienceSectionCopy.description}
              </p>
            </div>

            <Button
              variant="ghost"
              asChild
              className="group text-foreground hover:text-primary self-start md:self-end shrink-0 hidden md:inline-flex"
            >
              <Link href="/experience">
                {experienceSectionCopy.viewAllLabel}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {topExperiences.map((exp, i) => (
            <FadeIn
              key={`${exp.company}-${exp.title}-${i}`}
              direction="up"
              delay={i * 0.1}
            >
              <ExperienceItem
                {...exp}
                isLast={i === topExperiences.length - 1}
              />
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto rounded-full"
          >
            <Link href="/experience">{experienceSectionCopy.viewAllLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
