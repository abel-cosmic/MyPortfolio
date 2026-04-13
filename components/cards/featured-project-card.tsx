"use client";
import { ProjectProps } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "../icons";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const FeaturedProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-target group flex flex-col md:flex-row overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500"
    >
      {/* Image Side */}
      <div className="relative h-64 md:h-auto md:w-[45%] overflow-hidden bg-muted flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content Side */}
      <div className="flex flex-col flex-1 p-6 md:p-8 justify-center">
        <h3
          className="text-xl md:text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>

        <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
          {description}
        </p>

        {/* Technologies Grid */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {liveUrl && (
            <Button
              asChild
              className="rounded-full hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all px-6"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              asChild
              className="rounded-full border-border hover:border-primary/50 hover:bg-primary/5 transition-all px-6"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-2 h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
