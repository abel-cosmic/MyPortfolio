"use client";
import { ProjectProps } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "../icons";
import { Button } from "../ui/button";

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-target group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xs hover:shadow-[0_0_25px_rgba(var(--primary),0.2)] hover:border-primary/50 h-full"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-muted flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Tech overlay on hover */}
        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap gap-1.5 content-end p-3">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium bg-white/20 text-white rounded-full px-2 py-0.5 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 5 && (
            <span className="text-[10px] font-medium bg-white/20 text-white rounded-full px-2 py-0.5 backdrop-blur-sm">
              +{technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        <h3
          className="text-base font-semibold text-card-foreground leading-snug group-hover:text-primary transition-colors duration-300"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          {liveUrl && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-1 rounded-full text-xs hover:shadow-[0_0_15px_rgba(var(--primary),0.4)] transition-all"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 rounded-full text-xs border-border hover:border-primary/50 transition-all"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1.5 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
