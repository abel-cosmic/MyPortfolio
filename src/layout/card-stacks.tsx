"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { experience, sections } from "../../utils/objects/setions";
import { ExternalLink, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderButton } from "@/components/ui/moving-border";

export const StickyScroll = () => {
  return (
    <div className="w-full">
      <ScrollArea className="h-screen md:pr-10 md:pt-20 w-full  md:flex md:flex-col">
        <div className="lg:flex  flex-col gap-4  w-full">
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

            <div className="flex flex-col gap-10">
              {experience.map((data, index) => {
                return (
                  <div
                    className="cursor-pointer group  flex flex-row gap-4 items-start w-full hover hover:bg-white/10 dark:hover:bg-primary/10 transition-all hover:border hover:backdrop-blur-2xl hover:rounded-2xl py-6 px-4 md:px-10 "
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
                              className="bg-white dark:bg-black text-black dark:text-white  border-neutral-200 dark:border-slate-800"
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
          <Button
            variant={"link"}
            className="w-fit flex gap-2 flex-row text-xl"
          >
            View Full Resume <MoveUpRight />
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
};
