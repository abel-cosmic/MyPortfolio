"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sections } from "../../utils/objects/setions";

export const StickyScroll = () => {
  return (
    <div className="w-full">
      <ScrollArea className="h-screen md:pr-10 md:pt-20 w-full hidden md:flex md:flex-col">
        <div className="lg:flex  flex-col gap-2 w-full">
          <div className="flex flex-col  w-full  ">
            {sections.map((section, index) => (
              <div className="w-full" key={index}>
                <div className="sticky top-0  px-6 py-4 backdrop-blur-3xl z-40 font-bold leading-snug tracking-wider">
                  {section.title}
                </div>
                <div className="pl-4 mt-10 text-gray-400  leading-relaxed tracking-wide">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
      <div className="h-screen w-full flex md:hidden  md:flex-col">
        <div className="lg:flex  flex-col gap-2 w-full">
          <div className="flex flex-col  w-full  ">
            {sections.map((section, index) => (
              <div className="w-full" key={index}>
                <div className="sticky top-0  px-6 py-4 backdrop-blur-3xl z-40 font-bold leading-snug tracking-wider">
                  {section.title}
                </div>
                <div className="pl-4 mt-10 text-gray-400  leading-relaxed tracking-wide">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
