"use client";
import { Button } from "@/components/ui/button";
import { FadeInItem, FadeInStagger } from "@/components/ui/fade-in";
import { Spotlight } from "@/components/ui/spotlight";
import heroData from "@/data/hero.json";
import { CircleArrowDown } from "lucide-react";
import Link from "next/link";
import { DownloadCV } from "../components/ui/download-resume";
import RotatingText from "../components/ui/RotatingText";

const {
  availabilityChip,
  rotatingWords,
  headline,
  subcopyParts,
  primaryCta,
  resumeCtaTitle,
} = heroData;

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 md:px-6 pt-20 pb-12 md:pt-32 md:pb-16">
      {/* Aceternity Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--primary)"
      />

      {/* Main content - Wrapped in Stagger */}
      <FadeInStagger className="relative z-[1] flex flex-col items-center text-center gap-6 max-w-4xl w-full">
        {/* Availability chip */}
        <FadeInItem>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-xs hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-shadow">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {availabilityChip}
          </span>
        </FadeInItem>

        {/* Headline */}
        <FadeInItem>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.25] tracking-tight text-foreground flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-y-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="whitespace-nowrap">{headline.line1}</span>
            <RotatingText
              texts={rotatingWords}
              mainClassName="px-2 sm:px-2 md:px-4 bg-primary text-white overflow-hidden py-0.5 sm:py-1 md:py-1.5 justify-center rounded-xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            <span>{headline.line2Suffix}</span>
          </h1>
        </FadeInItem>

        {/* Sub-copy */}
        <FadeInItem>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {subcopyParts.map((part, i) =>
              part.emphasis ? (
                <span key={i} className="font-semibold text-foreground">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </p>
        </FadeInItem>

        {/* CTAs */}
        <FadeInItem className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:justify-center items-center">
          <Button
            size="lg"
            className="rounded-full shadow-md hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-300 w-full sm:w-auto"
            asChild
          >
            <Link
              href={primaryCta.href}
              className="flex items-center justify-center gap-2"
            >
              {primaryCta.label} <CircleArrowDown className="h-4 w-4" />
            </Link>
          </Button>

          {/* Resume Folder CTA */}
          <DownloadCV title={resumeCtaTitle} />
        </FadeInItem>
      </FadeInStagger>
    </div>
  );
};

export default Hero;
