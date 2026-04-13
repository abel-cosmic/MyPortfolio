import { MarqueeRow } from "@/components/cards/marquee";
import { FadeIn } from "@/components/ui/fade-in";
import skillsData from "@/data/skills.json";

const { sectionLabel, heading, description, skills } = skillsData;

const firstRow = skills.slice(0, 7);
const secondRow = skills.slice(7, 14);
const thirdRow = skills.slice(14, 21);
const fourthRow = skills.slice(21);

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 px-4 md:px-6 bg-background overflow-hidden"
    >
      <div className="max-w-screen-md mx-auto">
        {/* Section label */}
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 bg-border max-w-[3rem]" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {sectionLabel}
            </span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn direction="up" delay={0.1}>
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {heading}
            </h2>
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
              {description}
            </p>
          </div>
        </FadeIn>

        {/* Infinite Marquee Grid container */}
        <FadeIn direction="up" delay={0.2} className="relative">
          <div
            className="relative flex flex-col w-full group"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <MarqueeRow items={firstRow} />
            <MarqueeRow items={secondRow} reverse />
            <MarqueeRow items={thirdRow} />
            <MarqueeRow items={fourthRow} reverse />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;
