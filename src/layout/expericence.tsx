"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { experience, projects, sections } from "../../utils/objects/setions";
import { ExternalLink, Link, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderButton } from "@/components/ui/moving-border";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const ExperienceSection = () => {
  return (
    <div className="w-full h-screen ">
      <div className="flex flex-col items-center gap-4  w-full z-50 ">
        <div className="sticky top-0  px-6 py-4  z-40 font-light text-center text-3xl leading-snug tracking-wider">
          My Experience
        </div>
        <div className="flex flex-col gap-4">
          {experience.map((data, index) => {
            return (
              <div className=" p-4 flex flex-row gap-4 items-center">
                <div className="p-3 border-2 border-white rounded-full">
                  {data.icon}
                </div>
                <div className="flex flex-col gap-2 backdrop-blur-3xl">
                  <div className="text-sm font-bold">{data.title}</div>
                  <div className="text-xs font-semibold">{data.location}</div>
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
