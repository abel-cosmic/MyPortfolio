import { GraduationCap, Award } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AwardCard } from "@/components/cards/award-card";
import { EducationCard } from "@/components/cards/education-card";
import educationData from "@/data/education.json";

const {
  educationColumnLabel,
  awardsColumnLabel,
  education: educationDetails,
  awards: awardsDetails,
} = educationData;

const Education = () => {
  return (
    <section id="education" className="relative py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-screen-md mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <FadeIn direction="up">
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px flex-1 bg-border max-w-[3rem]" />
                <span
                  className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <GraduationCap className="h-4 w-4" />
                  {educationColumnLabel}
                </span>
              </div>
            </FadeIn>

            <div className="space-y-8">
              {educationDetails.map((edu, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <EducationCard education={edu} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Awards Column */}
          <div>
            <FadeIn direction="up" delay={0.2}>
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px flex-1 bg-border max-w-[3rem]" />
                <span
                  className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <Award className="h-4 w-4" />
                  {awardsColumnLabel}
                </span>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {awardsDetails.map((award, idx) => (
                <FadeIn key={idx} direction="left" delay={0.2 + idx * 0.1}>
                  <AwardCard award={award} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
