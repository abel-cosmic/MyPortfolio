"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
// import { UnderConstruction } from "@/components/underconstruction"
import { StickyScroll } from "@/layout/card-stacks";
import ProfileActionToggle from "@/components/toogle/profile-action-toggle";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme, theme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  console.log(theme);
  const toggleTheme = () => {
    if (darkMode) setTheme("dark");
    else setTheme("light");
  };
  const configTheme = () => {
    if (theme == "dark") setDarkMode(true);
    if (theme == "light") setDarkMode(false);
  };
  useEffect(toggleTheme, [darkMode]);
  useEffect(configTheme, []);

  return (
    <main className="flex h-screen justify-center items-center flex-col w-full   gap-4 relative dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Spotlight className="-top-20 left-10 md:left-60 md:-top-20" />
      <div className="absolute top-4 right-10 flex gap-2 items-center z-50">
        <ProfileActionToggle
          toggleState={darkMode}
          handleOnToggle={(toggleState: boolean) =>
            setDarkMode(() => toggleState)
          }
        />
      </div>
      <StickyScroll />
      <div className="absolute inset-0 -z-10 h-full w-full dark:hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    </main>
  );
}
