"use client";
import { ProjectProps } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { GithubLogo } from "../icons";

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const src = image || "/placeholder.svg";

  const preview = (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted/40 transition-[box-shadow] duration-500 ease-out group-hover:shadow-[0_16px_40px_-12px_rgba(31,30,29,0.15)] dark:group-hover:shadow-[0_20px_48px_-16px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 flex items-start justify-center px-2 pt-2 pb-3 sm:px-3 sm:pt-3 sm:pb-4">
        <div className="relative h-full w-full min-h-0">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="group flex h-full flex-col gap-5 rounded-2xl border border-border bg-card/25 p-4 sm:p-5 md:flex-row md:gap-8 md:items-stretch md:p-6 transition-colors duration-300 hover:border-primary/30"
      >
        <div className="w-full shrink-0 md:w-[46%] md:max-w-md">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="cursor-target block w-full cursor-zoom-in outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl overflow-hidden text-left"
            aria-label={`Enlarge screenshot: ${title}`}
          >
            {preview}
          </button>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-3">
          <div>
            <h3
              className="text-lg font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary md:text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3 md:line-clamp-4">
              {description}
            </p>
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground/90">
            {technologies.slice(0, 6).join(" · ")}
            {technologies.length > 6 ? ` · +${technologies.length - 6}` : ""}
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 transition-colors hover:underline"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live demo
                <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                <GithubLogo className="h-3.5 w-3.5" />
                Code
              </a>
            )}
          </div>
        </div>
      </motion.article>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="w-[min(96vw,1200px)] max-h-[90dvh] p-0 gap-0 border-border">
          <div className="border-b border-border/80 px-4 py-3 pr-14 sm:px-5">
            <DialogTitle
              className="text-left text-base font-semibold leading-snug text-foreground sm:text-lg"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </DialogTitle>
          </div>
          <div className="h-[min(75dvh,820px)] w-full min-h-[200px] bg-muted/30 p-3 sm:p-5">
            <div className="relative h-full w-full min-h-0">
              <Image
                src={src}
                alt={`${title} — full screenshot`}
                fill
                sizes="(max-width: 1200px) 96vw, 1200px"
                className="object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
