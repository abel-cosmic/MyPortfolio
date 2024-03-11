"use client";
import { Spotlight } from "@/components/ui/spotlight";
// import { UnderConstruction } from "@/components/underconstruction"
import { StickyScroll } from "@/layout/card-stacks";
import Link from "next/link";
import { socials } from "../../utils/objects/socials";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProfileActionToggle from "@/components/toogle/profile-action-toggle";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
    <ScrollArea className="flex h-screen justify-center items-center flex-row w-full   gap-10 relative dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="flex justify-center items-center flex-col md:flex-row w-full   gap-10">
        <div className="flex flex-col w-full h-screen  justify-center items-start  ">
          <div className="flex flex-col  w-full  h-full justify-center items-start px-10 py-44">
            <div className="flex flex-col  w-full ">
              <div className="text-4xl font-bold leading-normal tracking-wide">
                Abel Shibabaw
              </div>
              <div className="text-lg font-medium leading-loose tracking-wide">
                Senior Frontend Engineer
              </div>
              <div className="text-gray-400  leading-relaxed tracking-wide">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </div>
            </div>
            <div className="flex gap-6 mt-6 justify-self-end">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                  href={social.href}
                  target="_blank"
                >
                  <social.icon className="h-6 w-6 lg:h-6 lg:w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <StickyScroll />
      </div>
      <Spotlight className="-top-20 left-10 md:left-60 md:-top-20" />
      <div className="absolute top-4 right-10 flex gap-2 items-center z-50">
        <ProfileActionToggle
          toggleState={darkMode}
          handleOnToggle={(toggleState: boolean) =>
            setDarkMode(() => toggleState)
          }
        />
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full dark:hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    </ScrollArea>
  );
}
