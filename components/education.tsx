import { GraduationCap, Award, Calendar } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const educationDetails = [
  {
    institution: "Hope Enterprise University College",
    degree: "Bachelor of Science, Computer Science",
    detail: "GPA: >= 3.8",
  },
  {
    institution: "Neway Challenge Academy",
    degree: "High School",
    detail: "",
  },
];

const awardsDetails = [
  {
    title: "Certificate of Appreciation for Bright Ethiopia Hackathon",
    date: "March 8, 2024",
    description:
      "Participated in a 24-hour hackathon, showcasing exceptional problem-solving skills in a high-pressure environment. Contributed to the development of a digital product addressing a real-life challenge.",
  },
  {
    title: "Hope Enterprise University College First Coding Competition",
    date: "May 16, 2023",
    description:
      "Secured 1st place in the ICT Club's first-ever coding competition, demonstrating exceptional coding skills, creative problem-solving abilities, and innovation in developing a cutting-edge solution. The winning project reflected a deep understanding of industry best practices and emerging technologies.",
  },
  {
    title: "Certificate of Appreciation in Kibur College Hackathon Competition",
    date: "February 21, 2023",
    description:
      "Recognized for outstanding performance, earning 3rd place in a 24-hour competition. Demonstrated exceptional problem-solving skills and teamwork.",
  },
];

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
                  Education
                </span>
              </div>
            </FadeIn>

            <div className="space-y-8">
              {educationDetails.map((edu, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div
                    className="cursor-target rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] transition-all duration-300 group"
                  >
                    <h3
                      className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-2">
                      {edu.degree}
                    </p>
                    {edu.detail && (
                      <p className="text-sm text-primary-foreground bg-primary/80 inline-flex px-2 py-1 rounded-md shadow-sm">
                        {edu.detail}
                      </p>
                    )}
                  </div>
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
                  Certificates & Awards
                </span>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {awardsDetails.map((award, idx) => (
                <FadeIn key={idx} direction="left" delay={0.2 + idx * 0.1}>
                  <div
                    className="cursor-target relative pl-6 border-l-2 border-border pb-6 last:pb-0 group hover:border-primary/50 transition-colors duration-300"
                  >
                    {/* Timeline dot */}
                    <span className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-background group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(var(--primary),0.8)]" />

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      <span>{award.date}</span>
                    </div>
                    <h3
                      className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
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
