"use client";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { push } = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-28 pb-16 md:pt-32">
      {/* Subtle warm grid */}
      <AnimatedGridPattern
        numSquares={80}
        maxOpacity={0.12}
        duration={2}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />

      {/* Main content */}
      <div className="relative z-[1] flex flex-col items-center text-center gap-6 max-w-2xl w-full">

        {/* Availability chip */}
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-xs">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for new projects
        </span>

        {/* Headline — comma kept outside gradient span */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Building Tomorrow&apos;s{" "}
          <br className="hidden sm:block" />
          <span
            style={{
              background: "linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital Solutions
          </span>
          , Today
        </h1>

        {/* Sub-copy */}
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
          I&apos;m{" "}
          <span className="font-semibold text-foreground">Abel Shibabaw</span>, a Fullstack
          Software Engineer specialising in enterprise-grade web applications and AI-powered solutions.
          From engineering digital channels for telecommunications to architecting advanced AI
          automation platforms and scalable ERP systems — I turn complex technical challenges into
          elegant, impactful digital experiences.
        </p>

        {/* CTAs — stacked on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:justify-center">
          <Button
            size="lg"
            className="rounded-full shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto"
            asChild
          >
            <Link href="#projects" className="flex items-center justify-center gap-2">
              View My Work <CircleArrowDown className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-border hover:bg-accent transition-colors w-full sm:w-auto"
            onClick={() =>
              push(
                "https://drive.google.com/file/d/15c9n9088TWLZ_IaRW7ykweaSZjHlZjyL/view?usp=sharing"
              )
            }
          >
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
