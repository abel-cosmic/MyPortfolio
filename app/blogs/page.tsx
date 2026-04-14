"use client";

import { useMemo, useState } from "react";
import { blogPosts, blogsPage, BlogPostProps } from "@/data/blogs";
import { BlogPostCard } from "@/components/cards/blog-post-card";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const catSet = new Set<string>();
    blogPosts.forEach((p) => catSet.add(p.category));
    return ["All", ...Array.from(catSet).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const groupedByYear = useMemo(() => {
    const groups: Record<string, BlogPostProps[]> = {};
    filtered.forEach((post) => {
      const year = new Date(post.publishedAt).getFullYear().toString();
      if (!groups[year]) groups[year] = [];
      groups[year].push(post);
    });
    return groups;
  }, [filtered]);

  const sortedYears = useMemo(() => 
    Object.keys(groupedByYear).sort((a, b) => b.localeCompare(a))
  , [groupedByYear]);

  return (
    <div className="min-h-screen bg-background px-6 pb-24 pt-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn direction="up">
          <h1
            className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {blogsPage.title}
          </h1>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
            {blogsPage.description}
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="mb-16 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className={`rounded-full transition-all ${
                  activeCategory === cat
                    ? "shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setActiveCategory(cat)}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-20">
          {sortedYears.length > 0 ? (
            sortedYears.map((year) => (
              <div key={year} className="space-y-8">
                <FadeIn direction="up">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-foreground/80">{year}</h2>
                    <div className="h-px flex-1 bg-border/60" />
                  </div>
                </FadeIn>

                <FadeInStagger className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
                  {groupedByYear[year].map((post, i) => (
                    <FadeIn
                      key={`${post.title}-${post.publishedAt}-${i}`}
                      delay={0.05}
                      direction="up"
                      className="h-full min-w-0"
                    >
                      <BlogPostCard {...post} />
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </div>
            ))
          ) : (
            <p className="w-full py-10 text-center text-muted-foreground">
              No posts for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
