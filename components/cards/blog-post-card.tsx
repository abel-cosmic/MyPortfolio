"use client";

import { BlogPostProps } from "@/data/blogs";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function formatPublishedDate(isoDate: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
}

export const BlogPostCard = ({
  title,
  excerpt,
  image,
  publishedAt,
  linkedinUrl,
  topics,
}: BlogPostProps) => {
  return (
    <motion.article
      initial={false}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-target group relative h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 transition-[box-shadow,border-color,transform] duration-500 md:rounded-3xl group-hover:border-primary/35 group-hover:shadow-[0_28px_64px_-12px_rgba(var(--primary),0.22)] dark:group-hover:shadow-[0_32px_72px_-16px_rgba(0,0,0,0.65)]">
        <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
          <div className="mb-4 flex flex-col gap-1.5 border-b border-border/60 pb-4">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              LinkedIn
            </p>
            <time
              dateTime={publishedAt}
              className="text-xs text-muted-foreground"
            >
              {formatPublishedDate(publishedAt)}
            </time>
            <h3
              className="line-clamp-2 text-lg font-bold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h3>
            <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
              {excerpt}
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative aspect-[16/10] w-full">
              <div className="absolute inset-0 flex items-start justify-center">
                <div className="relative h-full w-full min-h-0">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 36rem"
                    className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-border/40 pt-4 lg:flex-row lg:items-end lg:justify-between lg:gap-4">
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/90">
                Topics
              </p>
              <p className="line-clamp-2 text-xs leading-snug text-foreground/90">
                {topics.join(" · ")}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-2 lg:justify-end">
              <Button
                asChild
                size="sm"
                className="rounded-full shadow-md hover:shadow-[0_0_24px_rgba(var(--primary),0.35)]"
              >
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  View on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
