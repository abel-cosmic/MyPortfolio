import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Abel Shibabaw - Full Stack Developer",
  description:
    "Articles and updates from LinkedIn — thoughts on engineering, projects, and the industry.",
  openGraph: {
    title: "Writing — Abel Shibabaw",
    description: "LinkedIn posts and writing collected in one place.",
    url: "https://abels-porfolio.vercel.app/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
