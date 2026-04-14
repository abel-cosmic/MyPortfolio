"use client";
import { ProjectProps } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "../icons";
import { Button } from "../ui/button";

export const FeaturedProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  priority,
}: ProjectProps) => {
  return (
    <motion.article
      initial={false}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-target group relative"
    >
        <div
          className="overflow-hidden rounded-3xl border border-border bg-card/40  transition-[box-shadow,border-color,transform] duration-500 md:rounded-[1.75rem] group-hover:border-primary/35 group-hover:shadow-[0_28px_64px_-12px_rgba(var(--primary),0.22)] dark:group-hover:shadow-[0_32px_72px_-16px_rgba(0,0,0,0.65)]"
      >
        <div className="p-5 sm:p-6 md:p-8 lg:p-10">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary md:mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured
          </p>

          {/* Preview inside the card */}
          <div className="relative overflow-hidden ">
            <div className="relative aspect-[16/10] w-full md:aspect-[2/1]">
              <div className="absolute inset-0 flex items-start justify-center ">
                <div className="relative h-full w-full min-h-0">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, min(768px, 90vw)"
                    className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-8 md:mt-8 md:grid-cols-12 md:gap-10 md:items-start lg:mt-10">
            <div className="md:col-span-7">
              <h3
                className="text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                {description}
              </p>
            </div>

            <aside className="flex flex-col gap-6 md:col-span-5 md:border-l md:border-border/60 md:pl-10">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/90">
                  Stack
                </p>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {technologies.join(" · ")}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {liveUrl && (
                  <Button
                    asChild
                    className="rounded-full shadow-md hover:shadow-[0_0_24px_rgba(var(--primary),0.35)]"
                  >
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live demo
                    </a>
                  </Button>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    <GithubLogo className="h-4 w-4" />
                    Source
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
