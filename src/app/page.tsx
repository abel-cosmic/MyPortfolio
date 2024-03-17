"use client";
import { Spotlight } from "@/components/ui/spotlight";
// import { UnderConstruction } from "@/components/underconstruction";
import { ExperienceSection } from "@/layout/expericence";
import ProfileActionToggle from "@/components/toogle/profile-action-toggle";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Hero from "@/layout/home/hero";
import FloatingNavBar from "@/layout/home/floating-nav-bar";
import { menus, skillIcons } from "../../utils/objects/setions";
import { ScrollArea } from "@/components/ui/scroll-area";
import SkillsSection from "@/layout/home/skills";
import { EducationSection } from "@/layout/education";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { Contact } from "@/components/contact";
import dynamic from "next/dynamic";
import {GoSun,GoMoon} from "react-icons/go";
const Home = () => {
  const { setTheme, theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(() => theme === "dark");

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  // Listen for system theme changes
  useEffect(() => {
    setTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode, setTheme]);

  return (
    <ScrollArea className="relative h-screen  dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute inset-0 -z-10 h-full w-full dark:hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      {/* <UnderConstruction /> */}
      <Hero />
      <SkillsSection skillIcons={skillIcons} />
      <ExperienceSection />
      <Button className="w-fit flex gap-2 flex-row mx-auto my-10 ">
        View Full Resume <Link className="w-4 h-4" />
      </Button>
      <EducationSection />
      <Spotlight className="-top-20 left-10 md:left-60 md:-top-20" />
      <div className="fixed top-6 right-6 flex gap-2 items-center z-50">
        <Button onClick={toggleTheme} variant={"outline"} size={"menuicon"} className="flex items-center justify-center p-3 bg-white dark:bg-black rounded-full">
          {isDarkMode ? <GoSun className="w-6 h-6 text-primary" /> : <GoMoon className="text-primary w-6 h-6" />}
        </Button>
      </div>
      <FloatingNavBar menus={menus} />
      <Contact />
    </ScrollArea>
  );
};
export default dynamic(() => Promise.resolve(Home), { ssr: false });
