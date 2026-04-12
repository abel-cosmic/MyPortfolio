import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience | Abel Shibabaw - Full Stack Developer",
  description: "A chronological timeline of my professional growth, technical roles, and impact across various companies and industries.",
  openGraph: {
    title: "Experience Timeline - Abel Shibabaw",
    description: "Detailed professional background and technical career path.",
    url: "https://abels-porfolio.vercel.app/experience",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
