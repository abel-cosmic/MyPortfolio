"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { UnderConstruction } from "@/components/underconstruction";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center flex-row w-full px-28 gap-4 relative dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute inset-0 -z-10 h-full w-full dark:hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      <UnderConstruction />
    </main>
  );
}
