import blogsData from "./blogs.json";

export interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  linkedinUrl: string;
  topics: string[];
}

export const blogsPage = {
  title: blogsData.pageTitle as string,
  description: blogsData.pageDescription as string,
} as const;

export const blogPosts: BlogPostProps[] = blogsData.posts;
