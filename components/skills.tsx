import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

const skills = [
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "Nuxt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" },
  { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
];

const firstRow = skills.slice(0, 7);
const secondRow = skills.slice(7, 14);
const thirdRow = skills.slice(14, 21);
const fourthRow = skills.slice(21);

const MarqueeRow = ({ items, reverse = false }: { items: typeof skills; reverse?: boolean }) => {
  return (
    <div
      className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused] whitespace-nowrap gap-4 px-4 items-center mb-4 last:mb-0`}
    >
      {[...items, ...items, ...items, ...items].map((skill, index) => (
        <div
          key={index}
          className="cursor-target flex items-center gap-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm px-5 py-3 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] hover:bg-card transition-all duration-300 group"
        >
          <Image
            src={skill.icon}
            alt={`${skill.name} icon`}
            width={24}
            height={24}
            className="w-6 h-6 object-contain filter drop-shadow-sm dark:brightness-150 group-hover:scale-110 transition-transform duration-300"
          />
          <span
            className="text-sm font-semibold text-foreground whitespace-nowrap group-hover:text-primary transition-colors duration-300"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 md:py-24 px-4 md:px-6 bg-background overflow-hidden">
      <div className="max-w-screen-md mx-auto">
        {/* Section label */}
        <FadeIn direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 bg-border max-w-[3rem]" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Technical Skills
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
              Tools & Technologies
            </h2>
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
              A curated set of technologies I use to build reliable, scalable, and modern digital
              products.
            </p>
          </div>
        </FadeIn>

        {/* Infinite Marquee Grid container */}
        <FadeIn direction="up" delay={0.2} className="relative">
          <div
            className="relative flex flex-col w-full group"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
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
