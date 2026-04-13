"use client";

import { useMemo, useState } from "react";
import { blogPosts, blogsPage } from "@/data/blogs";
import { BlogPostCard } from "@/components/cards/blog-post-card";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export default function BlogsPage() {
  const [activeTopic, setActiveTopic] = useState<string>("All");

  const topics = useMemo(() => {
    const set = new Set<string>();
    blogPosts.forEach((p) => p.topics.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (activeTopic === "All") return blogPosts;
    return blogPosts.filter((p) => p.topics.includes(activeTopic));
  }, [activeTopic]);

  return (
    <div className="min-h-screen bg-background px-6 pb-24 pt-32">
      <div className="mx-auto max-w-3xl">
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
          <div className="mb-12 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <Button
                key={topic}
                variant={activeTopic === topic ? "default" : "outline"}
                className={`rounded-full transition-all ${activeTopic === topic ? "shadow-[0_0_15px_rgba(var(--primary),0.4)]" : "border-border hover:border-primary/50"}`}
                onClick={() => setActiveTopic(topic)}
                size="sm"
              >
                {topic}
              </Button>
            ))}
          </div>
        </FadeIn>

        {filtered.length > 0 ? (
          <FadeInStagger className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            {filtered.map((post, i) => (
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
        ) : (
          <p className="w-full py-10 text-center text-muted-foreground">
            No posts for this topic.
          </p>
        )}
      </div>
    </div>
  );
}
