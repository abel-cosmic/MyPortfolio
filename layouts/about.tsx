"use client";
import ProfileImage from "@/components/cards/profile-image";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/ui/fade-in";
import aboutData from "@/data/about.json";
import { Mail } from "lucide-react";
import { DownloadCV } from "../components/ui/download-resume";

type AboutParagraph =
  | string
  | { before: string; company: string; after: string };

type AboutStat = {
  value: number;
  suffix: string;
  label: string;
  displayInfinity?: boolean;
};

const { profile, badge, headline, paragraphs, stats } = aboutData as {
  profile: { imageSrc: string; imageAlt: string };
  badge: string;
  headline: { before: string; highlight: string; after: string };
  paragraphs: AboutParagraph[];
  stats: AboutStat[];
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 px-4 md:px-6 bg-background overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start text-center md:text-left">
          {/* Profile Image Column */}
          <FadeIn direction="right" className="flex-shrink-0 relative group">
            <div className="absolute -inset-2 bg-primary/10 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />
            <ProfileImage
              src={profile.imageSrc}
              alt={profile.imageAlt}
              className="w-48 h-48 md:w-56 md:h-56 shadow-2xl relative z-10"
            />

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
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {badge}
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.2]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {headline.before}
                  <span className="text-primary italic">
                    {headline.highlight}
                  </span>
                  {headline.after}
                </h2>
              </FadeInItem>

              <FadeInItem className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                {paragraphs.map((p, idx) =>
                  typeof p === "string" ? (
                    <p key={idx}>{p}</p>
                  ) : (
                    <p key={idx}>
                      {p.before}
                      <span className="text-foreground font-semibold px-1 py-0.5 bg-accent rounded">
                        {p.company}
                      </span>
                      {p.after}
                    </p>
                  ),
                )}
              </FadeInItem>

              <FadeInItem className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                {/* Resume Folder CTA - Unified from Hero */}
                <DownloadCV title="Download CV" />

                <Button
                  variant="outline"
                  className="h-11 rounded-full border-border hover:bg-accent hover:border-primary/50 transition-all duration-300 px-6"
                  onClick={() => {
                    const footer = document.getElementById("footer");
                    footer?.scrollIntoView({ behavior: "smooth" });
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
            {stats.map(({ value, suffix, label, displayInfinity }) => (
              <div
                key={label}
                className="flex cursor-target flex-col items-center justify-center gap-1 py-8 px-4 bg-card hover:bg-primary/5 transition-colors duration-300"
              >
                <span
                  className="text-2xl md:text-3xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {displayInfinity ? (
                    <span>∞</span>
                  ) : (
                    <Counter value={value} suffix={suffix} />
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

export default About;
