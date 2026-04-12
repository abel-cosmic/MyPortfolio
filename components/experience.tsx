import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import experiencesData from "@/data/experiences.json";
import { FadeIn } from "@/components/ui/fade-in";

export interface ExperienceItemProps {
  index: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  image?: string;
  location?: string;
  type?: string;
}

export const ExperienceItem = ({
  index,
  title,
  company,
  period,
  description,
  technologies,
  image,
}: ExperienceItemProps) => {
  return (
    <FadeIn delay={0.1} direction="up" className="group relative flex gap-6 pb-10 last:pb-0 w-full">
      {/* Left column: number + timeline */}
      <div className=" flex flex-col items-center cursor-target">
        {/* Numbered circle */}
        <div
          className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow-xs z-10 transition-transform group-hover:scale-110 duration-300"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-xs font-bold text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        {/* Vertical line */}
        <div className="mt-2 flex-1 w-px bg-border group-last:hidden group-hover:bg-primary/30 transition-colors duration-300" />
      </div>

      {/* Right: card */}
      <div className="cursor-target flex-1 rounded-2xl border border-border bg-card p-5 mb-2 shadow-sm hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] hover:border-primary/50 transition-all duration-500">
        {/* Company row */}
        <div className="flex items-center gap-3 mb-3">
          {image ? (
            <Image
              src={image}
              alt={company}
              width={36}
              height={36}
              className="rounded-full object-cover ring-1 ring-border flex-shrink-0"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 ring-1 ring-border">
              <span className="text-primary text-xs font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                {company.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary duration-300" style={{ fontFamily: "var(--font-heading)" }}>
              {company}
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{period}</span>
            </div>
          </div>
        </div>

        {/* Role title */}
        <h3
          className="text-base font-semibold text-foreground mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-medium rounded-full px-2.5 py-0.5 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export interface Experience {
  title: string;
  image?: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  location?: string;
  type?: string;
}

export const experiences: Experience[] = experiencesData as Experience[];

const Experience = () => {
  const topExperiences = experiences.slice(0, 3);

  return (
    <section id="experience" className="relative py-24 px-6 bg-background">
      <div className="max-w-screen-md mx-auto">

        {/* Section label */}
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 bg-border max-w-[3rem]" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Experience
            </span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Professional Journey
              </h2>
              <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
                A timeline of my professional growth and key achievements across companies and roles.
              </p>
            </div>

            <Button variant="ghost" asChild className="group text-foreground hover:text-primary self-start md:self-end">
              <Link href="/experience">
                View All Experience
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {topExperiences.map((exp, i) => (
            <ExperienceItem key={i} index={i} {...exp} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" asChild className="w-full sm:w-auto rounded-full">
            <Link href="/experience">
              View All Experience
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
