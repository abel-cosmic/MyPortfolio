"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { experience, projects, sections } from "../../utils/objects/setions";
import { ExternalLink, Link, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderButton } from "@/components/ui/moving-border";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const ExperienceSection = () => {
  return (
    <div className="w-full h-screen ">
      <div className="flex flex-col items-center gap-4  w-full z-50 py-10 ">
        <div className="sticky top-0 px-6 py-2  z-40 font-light text-center text-3xl leading-snug tracking-wider  backdrop-blur-2xl w-full">
          My Experience
        </div>
        <div className="flex flex-col gap-4 lg:gap-0 md:gap-10  w-full lg:pr-2 lg:pl-1 items-center">
          {experience.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex  gap-4 items-start flex-row-reverse md:items-center  px-6 w-full ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse "
                } `}
              >
                <div className="flex flex-col gap-2 backdrop-blur-3xl bg-primary/5 h-full max-w-[35rem] pl-6 py-10">
                  <div className="text-sm font-light tracking-wider">
                    {data.title}
                  </div>
                  <div className="text-[10px] tracking-wider ">
                    {data.timeline}
                  </div>
                  <div className="text-xs font-light tracking-wider">
                    {data.location}
                  </div>
                  <div className="text-xs font-extralight tracking-wider line-clamp-3">
                    {data.content}
                  </div>
                </div>
                <div
                  className={`flex  items-center gap-4 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <BorderButton
                    borderRadius="4rem"
                    className="p-3 md:p-6 text-primary dark:bg-transparent  dark:border-white border-slate-200 bg-white rounded-full"
                  >
                    {data.icon}
                  </BorderButton>
                  <div className="backdrop-blur-3xl bg-primary/5 p-2 max-md:hidden text-[10px] tracking-wider ">
                    {data.timeline}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Button className="w-fit flex gap-2 flex-row ">
          View Full Resume <Link className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
