import { Calendar } from "lucide-react";

export type AwardCardData = {
  title: string;
  date: string;
  description: string;
};

type AwardCardProps = {
  award: AwardCardData;
};

export function AwardCard({ award }: AwardCardProps) {
  return (
    <div className="cursor-target relative pl-6 border-l-2 border-border pb-6 last:pb-0 group hover:border-primary/50 transition-colors duration-300">
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
  );
}
