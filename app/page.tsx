import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { FloatingNav } from "@/components/ui/floating-nav";

export default function Home() {
  return (
    <div className="relative">
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
