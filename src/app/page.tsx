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

  const badges = ["Front End", "Back End", "Full Stack", "UI/UX", "DevOps"];

  return (
    <main className="flex h-screen justify-center items-center flex-row w-full lg:px-28  px-4 gap-4 relative dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute inset-0 -z-10 h-full w-full dark:hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      <UnderConstruction />
    </main>
    // <ScrollArea className="flex h-screen justify-center items-center flex-row w-full   gap-10 relative dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    //   <div className="flex justify-center items-center flex-col md:flex-row w-full    gap-10 md:gap-4">
    //     <div className="flex flex-col w-full h-screen  justify-center items-start  ">
    //       <div className="flex flex-col  w-full  h-full justify-center items-start px-10 md:px-28 py-44">
    //         <div className="flex flex-col  gap-3 w-full ">
    //           <div className="text-4xl font-bold leading-normal tracking-wide">
    //             Abel Shibabaw
    //           </div>
    //           <div className="text-lg font-medium leading-loose tracking-wide">
    //             From Design to Code.
    //           </div>
    //           <div className="flex flex-row flex-wrap items-center w-full justify-center md:justify-start gap-2">
    //             {badges.map((badge, index) => (
    //               <BorderButton
    //                 borderRadius="1rem"
    //                 key={index}
    //                 className="bg-white dark:bg-black text-black dark:text-white  border-neutral-200 dark:border-slate-800"
    //               >
    //                 <div className="m-1 text-xs">{badge}</div>
    //               </BorderButton>
    //             ))}
    //           </div>
    //          <HeroCard/>
    //           <div className="text-gray-400  leading-relaxed tracking-wide">
    //             I build pixel-perfect, engaging, and accessible digital
    //             experiences.
    //           </div>
    //           <div className="flex gap-6 mt-6 justify-self-end">
    //             {socials.map((social, index) => (
    //               <Link
    //                 key={index}
    //                 className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
    //                 href={social.href}
    //                 target="_blank"
    //               >
    //                 <social.icon className="h-6 w-6 lg:h-6 lg:w-6" />
    //               </Link>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <StickyScroll />
    //   </div>
    //   <Spotlight className="-top-20 left-10 md:left-60 md:-top-20" />
    //   <div className="absolute top-4 right-10 flex gap-2 items-center z-50">
    //     <ProfileActionToggle
    //       toggleState={darkMode}
    //       handleOnToggle={(toggleState: boolean) =>
    //         setDarkMode(() => toggleState)
    //       }
    //     />
    //   </div>
    //   <div className="absolute inset-0 -z-10 h-full w-full dark:hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    // </ScrollArea>
  );
}
