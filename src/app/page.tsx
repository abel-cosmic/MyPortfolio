"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { UnderConstruction } from "@/components/underconstruction";
import { StickyScroll } from "@/layout/card-stacks";
import Link from "next/link";
import { socials } from "../../utils/objects/socials";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProfileActionToggle from "@/components/toogle/profile-action-toggle";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BorderButton } from "@/components/ui/moving-border";
import HeroCard from "@/components/card/hero";
import Hero from "@/layout/home/hero";
import { badges } from "../../utils/objects/setions";

export default function Home() {
  const { setTheme, theme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleTheme = () => {
    if (darkMode) setTheme("dark");
    else setTheme("light");
  };
  const configTheme = () => {
    if (theme == "dark") setDarkMode(!darkMode);
    if (theme == "light") setDarkMode(darkMode);
  };
  useEffect(toggleTheme, [darkMode]);
  useEffect(configTheme, []);

  return (
    <div className="relative dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute inset-0 -z-10 h-full w-full dark:hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      {/* <UnderConstruction /> */}
      <Hero />
      <StickyScroll />
      <Spotlight className="-top-20 left-10 md:left-60 md:-top-20" />
      <div className="fixed top-4 right-10 flex gap-2 items-center z-50">
        <ProfileActionToggle
          toggleState={darkMode}
          handleOnToggle={(toggleState: boolean) =>
            setDarkMode(() => toggleState)
          }
        />
      </div>
    </div>
  );
}
