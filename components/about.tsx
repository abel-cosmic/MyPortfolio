"use client";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";
import { DownloadCV } from "./ui/download-resume";

const stats = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 8, suffix: "+", label: "Companies worked with" },
  { value: 0, suffix: "∞", label: "Lines of code written" },
];

const About = () => {
  const { push } = useRouter(); 

  return (
    <section id="about" className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start text-center md:text-left">

          {/* Profile Image Column */}
          <FadeIn direction="right" className="flex-shrink-0 relative group">
            <div className="absolute -inset-2 bg-primary/10 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />
            <ProfileImage className="w-48 h-48 md:w-56 md:h-56 shadow-2xl relative z-10" />

            {/* Corner badge - subtle indicator */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center shadow-lg z-20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
            </div>
          </FadeIn>

          {/* Content Column */}
          <div className="flex-1 pt-2">
            <FadeInStagger className="space-y-6">
              <FadeInItem>
                <div className="inline-flex items-center gap-3 mb-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">About Me</span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  The Journey from <span className="text-primary italic">Code</span> to Impact
                </h2>
              </FadeInItem>

              <FadeInItem className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  A dedicated Full-stack Software Engineer passionate about turning complex problems into scalable,
                  elegant solutions. I thrive at the intersection of technology and tangible impact.
                </p>
                <p>
                  Currently driving digital transformation as a Fullstack Engineer at{" "}
                  <span className="text-foreground font-semibold px-1 py-0.5 bg-accent rounded">Safaricom Telecommunication PLC</span>,
                  building robust enterprise infrastructure that powers connection.
                </p>
              </FadeInItem>

              <FadeInItem className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                {/* Resume Folder CTA - Unified from Hero */}
                <DownloadCV title="Download CV" />

                <Button
                  variant="outline"
                  className="h-11 rounded-full border-border hover:bg-accent hover:border-primary/50 transition-all duration-300 px-6"
                  onClick={() => {
                    const footer = document.getElementById('footer');
                    footer?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </FadeInItem>
            </FadeInStagger>
          </div>
        </div>

        {/* Stats strip - kept exactly as original content */}
        <FadeIn direction="up" delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border bg-border shadow-sm">
            {stats.map(({ value, suffix, label }) => (
              <div
                key={label}
                className="flex cursor-target flex-col items-center justify-center gap-1 py-8 px-4 bg-card hover:bg-primary/5 transition-colors duration-300"
              >
                <span
                  className="text-2xl md:text-3xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {label === "Lines of code written" ? (
                    <span>∞</span>
                  ) : (
                    <Counter value={value as number} suffix={suffix} />
                  )}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest text-center font-bold">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
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
      "relative rounded-[2rem] overflow-hidden ring-4 ring-background shadow-2xl",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
    <Image
      src="/profile.jpg"
      alt="Abel Shibabaw — Full Stack Developer"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      fill
      priority
      sizes="(max-width: 768px) 192px, 224px"
    />
  </div>
);

export default About;
