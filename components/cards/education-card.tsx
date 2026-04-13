export type EducationCardData = {
  institution: string;
  degree: string;
  detail?: string;
};

type EducationCardProps = {
  education: EducationCardData;
};

export function EducationCard({ education: edu }: EducationCardProps) {
  return (
    <div className="cursor-target rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] transition-all duration-300 group">
      <h3
        className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {edu.institution}
      </h3>
      <p className="text-sm font-medium text-primary mb-2">{edu.degree}</p>
      {edu.detail ? (
        <p className="text-sm text-primary-foreground bg-primary/80 inline-flex px-2 py-1 rounded-md shadow-sm">
          {edu.detail}
        </p>
      ) : null}
    </div>
  );
}
