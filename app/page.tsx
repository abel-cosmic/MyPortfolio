import About from "@/layouts/about";
import Education from "@/layouts/education";
import Experience from "@/layouts/experience";
import Hero from "@/layouts/hero";
import Projects from "@/layouts/projects";
import Skills from "@/layouts/skills";
import { FloatingNav } from "@/components/ui/floating-nav";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-16 md:gap-0">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <FloatingNav />
    </div>
  );
}
