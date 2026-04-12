import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

