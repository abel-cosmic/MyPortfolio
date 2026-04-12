import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Abel Shibabaw - Full Stack Developer",
  description: "A comprehensive collection of applications, engineering tools, and systems built using React, Next.js, TypeScript, and various backend technologies.",
  openGraph: {
    title: "Projects Portfolio - Abel Shibabaw",
    description: "Explorer my technical projects and software engineering work.",
    url: "https://abels-porfolio.vercel.app/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
