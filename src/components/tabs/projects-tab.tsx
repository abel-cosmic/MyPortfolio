"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BackEnd from "../projects/back-end";
import FrontEnd from "../projects/font-end";
import FullStack from "../projects/full-stack";
import UiUx from "../projects/ui";

export function TabsDemo() {
  return (
    <Tabs defaultValue="ui" className="w-full mx-auto">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="ui">
            <div>UI/UX</div>
        </TabsTrigger>
        <TabsTrigger value="front">
            <div>Front-End</div>
        </TabsTrigger>
        <TabsTrigger value="back">
            <div>Back-End</div>
        </TabsTrigger>
        <TabsTrigger value="full">
            <div>Full-Stack</div> 
        </TabsTrigger>
      </TabsList>
      <TabsContent value="ui">
        <UiUx/>
      </TabsContent>
      <TabsContent value="front">
        <FrontEnd/>
      </TabsContent>
      <TabsContent value="back">
        <BackEnd/>
      </TabsContent>
      <TabsContent value="full">
        <FullStack/>
      </TabsContent>
    </Tabs>
  );
}
