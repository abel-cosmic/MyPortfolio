import Image from "next/image";
import NextLink from "next/link";
import { Calendar } from "lucide-react";
import { Badge } from "../ui/badge";

export interface ExperienceItemProps {
  index?: number;
  /** Set when this item is not a direct `:last-child` (e.g. wrapped in FadeIn). */
  isLast?: boolean;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  image?: string;
  location?: string;
  type?: string;
  link?: string;
}

export const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  image,
  location,
  type,
  isLast = false,
  link,
}: ExperienceItemProps) => {
  const companyLink =
    link != null && link !== ""
      ? {
          href: link,
          ...(link.startsWith("http://") || link.startsWith("https://")
            ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
            : {}),
        }
      : null;

  const employerLinkClassName =
    "group/employer flex min-w-0 items-start gap-3 rounded-lg -m-1 p-1 outline-offset-2 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card";

  return (
    <div
      className={`cursor-target relative pl-6 border-l-2 border-border group hover:border-primary/50 transition-colors duration-300 ${
        isLast ? "pb-0" : "pb-6"
      }`}
    >
      <span className="absolute left-[-5px] top-6 h-2 w-2 rounded-full bg-primary ring-4 ring-background group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(var(--primary),0.8)]" />

      <div className="-mt-1 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
        <div className="mb-3">
          {companyLink ? (
            <NextLink {...companyLink} className={employerLinkClassName}>
              {image ? (
                <Image
                  src={image}
                  alt=""
                  width={40}
                  height={40}
                  className="shrink-0 rounded-full object-cover ring-1 ring-border"
                  aria-hidden
                />
              ) : (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-border">
                  <span
                    className="text-sm font-bold uppercase text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                    aria-hidden
                  >
                    {company.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3
                  className="text-lg font-bold leading-tight text-foreground transition-colors group-hover/employer:text-primary group-hover:text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {company}
                </h3>
                <p
                  className="text-sm font-medium leading-snug text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </p>
              </div>
            </NextLink>
          ) : (
            <div className="flex items-start gap-3">
              {image ? (
                <Image
                  src={image}
                  alt={company}
                  width={40}
                  height={40}
                  className="shrink-0 rounded-full object-cover ring-1 ring-border"
                />
              ) : (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-border">
                  <span
                    className="text-sm font-bold uppercase text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {company.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3
                  className="text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {company}
                </h3>
                <p
                  className="text-sm font-medium leading-snug text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-3">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3 shrink-0" />
            {period}
          </span>
          {location ? <span>{location}</span> : null}
          {type ? (
            <span className="text-primary-foreground bg-primary/80 px-2 py-0.5 rounded-md shadow-sm font-medium">
              {type}
            </span>
          ) : null}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-medium rounded-full px-2.5 py-0.5 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
