"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { experience, projects, sections } from "../../utils/objects/setions";
import { ExternalLink, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderButton } from "@/components/ui/moving-border";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const StickyScroll = () => {
  return (
    <ScrollArea className="w-full h-screen ">
      <div className="h-screen md:pr-10 md:pt-20 w-full   md:flex md:flex-col">
        <div className="lg:flex  flex-col gap-10 py-10    w-full">
          <div className="flex flex-col gap-4  w-full z-50 ">
            {sections.map((section, index) => (
              <div className="w-full" key={index}>
                <div className="pl-4 mt-10 text-gray-400  leading-relaxed tracking-wide">
                  {section.content}
                </div>
              </div>
            ))}

            <div className="sticky top-0  px-6 py-4 backdrop-blur-3xl z-40 font-bold leading-snug tracking-wider">
              EXPERIENCE
            </div>

            <div className="flex flex-col gap-4">
              {experience.map((data, index) => {
                return (
                  <div
                    className="cursor-pointer group  flex flex-row gap-4 items-start w-full hover hover:bg-gray-300/20  transition-all hover:border backdrop-blur-4xl hover:rounded-2xl py-6 px-4 md:px-10 "
                    key={index}
                  >
                    <div className="w-1/3 text-primary/60 group-hover:text-primary">
                      {data.timeline}
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <div className="fle flex-col justify-between w-full gap-2 relative">
                        <div className="text-xl font-bold text-primary/60 group-hover:text-primary">
                          {data.title}
                        </div>
                        <div className="text-xs text-primary/60 group-hover:text-primary">
                          {data.location}
                        </div>
                        <div className="text-sm text-primary/60 group-hover:text-primary">
                          {data.project}
                        </div>
                        <p className="line-clamp-3 flex flex-col w-full text-sm text-primary/60 group-hover:text-primary ">
                          {data.content}
                        </p>
                        <div className="flex flex-row flex-wrap gap-2">
                          {data.techstack.map((value, index) => (
                            <BorderButton
                              borderRadius="1rem"
                              key={index}
                              className="bg-white dark:bg-black text-black dark:text-white  border-neutral-200 dark:border-slate-800 group-hover:font-semibold"
                            >
                              <div className="m-1 text-xs">{value}</div>
                            </BorderButton>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Button className="w-fit flex gap-2 flex-row text-xl mx-auto my-10">
            View Full Resume <MoveUpRight />
          </Button>
          <div className="sticky top-0  px-6 py-4 backdrop-blur-3xl z-40 font-bold leading-snug tracking-wider">
            PROJECTS
          </div>
          <div className="flex flex-col gap-4">
            {projects.map((data, index) => {
              return (
                <div
                  className="cursor-pointer group  flex flex-col gap-4 items-start w-full hover hover:bg-gray-300/20  transition-all hover:border backdrop-blur-4xl hover:rounded-2xl py-6 px-4 md:px-10 "
                  key={index}
                >
                  <div
                    className={`gap-6 items-start w-full ${
                      index % 2 === 1
                        ? "flex md:flex-row flex-col"
                        : "flex md:flex-row-reverse flex-col"
                    }`}
                  >
                    <Image
                      src={data.image}
                      alt={data.title}
                      width="500"
                      height="500"
                      className="border border-green-500 w-full h-60"
                    />
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-xl font-bold">{data.title}</p>
                      <p className="line-clamp-3 text-sm">{data.content}</p>
                      <div className="flex flex-row gap-4 items-center">
                        link
                        <ExternalLink className="h-5 w-5" />
                      </div>
                      <div className="flex flex-row flex-wrap gap-2">
                        {data.techStacks.map((value, index) => (
                          <BorderButton
                            borderRadius="1rem"
                            key={index}
                            className="bg-white dark:bg-black text-black dark:text-white  border-neutral-200 dark:border-slate-800 group-hover:font-semibold"
                          >
                            <div className="m-1 text-xs">{value}</div>
                          </BorderButton>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Button className="w-fit flex gap-2 flex-row text-xl mx-auto my-10">
            Project Achieves
            <MoveUpRight />
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};