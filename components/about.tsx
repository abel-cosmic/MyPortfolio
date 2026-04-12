"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "20+", label: "Projects delivered" },
  { value: "8+", label: "Companies worked with" },
  { value: "∞", label: "Lines of code written" },
];

const About = () => {
  const { push } = useRouter();

  return (
    <section id="about" className="relative py-24 px-6 bg-background">
      <div className="max-w-screen-md mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px flex-1 bg-border max-w-[3rem]" />
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About Me
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <ProfileImage className="w-52 h-52 md:w-60 md:h-60" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Journey from{" "}
              <span className="text-primary">Code</span> to Impact
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              A dedicated Full-stack Software Engineer passionate about turning complex problems into scalable,
              elegant solutions. From steering student parliament to developing advanced AI-powered automation
              tools and modern e-commerce platforms, I thrive at the intersection of technology and tangible impact.
              I engineer resilient microservices, craft intuitive interfaces with modern ecosystems,
              and occasionally take home wins at hackathons along the way.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              Currently driving digital transformation as a Fullstack Engineer at{" "}
              <span className="text-foreground font-medium">Safaricom Telecommunication PLC</span>,
              building robust enterprise infrastructure that powers connection. Let&apos;s build something remarkable
              together.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <Button
                onClick={() =>
                  push(
                    "https://drive.google.com/file/d/15c9n9088TWLZ_IaRW7ykweaSZjHlZjyL/view?usp=sharing"
                  )
                }
                className="rounded-full shadow-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-border hover:bg-accent"
                onClick={() => push("mailto:abelshibabaw03@gmail.com")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Say Hello
              </Button>
            </div>
          </div>
        </div>

        {/* Stats row — Claude.ai profile stat strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border bg-border">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 py-6 px-4 bg-card hover:bg-accent/50 transition-colors"
            >
              <span
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {value}
              </span>
              <span className="text-xs text-muted-foreground text-center leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "relative rounded-2xl overflow-hidden shadow-md ring-1 ring-border",
      className
    )}
    {...props}
  >
    <Image
      src="/profile.jpg"
      alt="Abel Shibabaw — Full Stack Developer"
      className="object-cover transition-transform duration-500 hover:scale-105"
      fill
    />
  </div>
);

export default About;
