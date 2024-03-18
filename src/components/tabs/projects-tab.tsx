"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BackEnd from "../projects/back-end";
import FrontEnd from "../projects/font-end";
import FullStack from "../projects/full-stack";
import UiUx from "../projects/ui";

export function TabsDemo() {
  return (
    <div id="projects" className="flex flex-col gap-10 py-10 items-center ">
      <div className="sticky top-0 px-6 py-2  z-40 font-light text-center text-2xl leading-snug tracking-wider  backdrop-blur-2xl w-fit rounded-full">
        Featured Projects
      </div>
      <Tabs defaultValue="full" className="w-full">
        <TabsList className="grid w-full md:w-1/3 md:mx-auto grid-cols-4 gap-2 rounded-full">
          <TabsTrigger value="full">
            <div>Full-Stack</div>
          </TabsTrigger>
          <TabsTrigger value="front">
            <div>Front-End</div>
          </TabsTrigger>
          <TabsTrigger value="ui">
            <div>UI/UX</div>
          </TabsTrigger>
          <TabsTrigger value="back">
            <div>Back-End</div>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="ui"
          className="flex flex-col items-center justify-center"
        >
          <UiUx />
        </TabsContent>
        <TabsContent
          value="front"
          className="flex flex-col items-center justify-center"
        >
          <FrontEnd />
        </TabsContent>
        <TabsContent
          value="back"
          className="flex flex-col items-center justify-center"
        >
          <BackEnd />
        </TabsContent>
        <TabsContent
          value="full"
          className="flex flex-col items-center justify-center"
        >
          <FullStack />
        </TabsContent>
      </Tabs>
    </div>
  );
}
