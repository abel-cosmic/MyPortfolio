"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { socials } from "../../utils/objects/socials";
import {sections} from "../../utils/objects/setions";

export const StickyScroll = () => {
  return (
    <ScrollArea className="flex flex-row gap-4 justify-start items-center h-[30000px] w-full  ">
      <div className="flex flex-col gap-32 w-full  h-full ">
        <div className="flex flex-col  w-full pl-10 py-20">
          <div className="text-4xl font-bold leading-normal tracking-wide">
            Abel Shibabaw
          </div>
          <div className="text-lg font-medium leading-loose tracking-wide">
            Senior Frontend Engineer
          </div>
          <div className="text-gray-400  leading-relaxed tracking-wide">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </div>
          <div className="h-60 hidden"></div>
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
        <div className="flex flex-col  w-full relative ">
          {sections.map((section, index) => (
            <div className="w-full" key={index}>
              <div className="sticky top-0 right-0 left-0 px-6 py-4 mr-4 backdrop-blur-3xl z-40 font-bold leading-snug tracking-wider">
                {section.title}
              </div>
              <div className="pl-4 mt-10 text-gray-400  leading-relaxed tracking-wide">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollArea className="lg:flex flex-col gap-2 w-full h-full pr-20 hidden">
        <div className="flex flex-col gap-2 w-full ">
          <div className="text-5xl font-bold leading-loose tracking-wide">
            Abel Shibabaw
          </div>
          <div className="text-xl font-medium leading-loose tracking-wide">
            Senior Frontend Engineer
          </div>
          <div className="text-gray-400 text-sm leading-relaxed tracking-wide">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </div>
        </div>
      </ScrollArea>
    </ScrollArea>
  );
};
