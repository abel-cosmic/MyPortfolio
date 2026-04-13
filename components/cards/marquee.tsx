"use client";
import Image from "next/image";
import skillsData from "@/data/skills.json";

const { skills } = skillsData;

export const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: typeof skills;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex w-max ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } hover:[animation-play-state:paused] whitespace-nowrap gap-4 px-4 items-center mb-4 last:mb-0`}
    >
      {[...items, ...items, ...items, ...items].map((skill, index) => (
        <div
          key={index}
          className="cursor-target flex items-center gap-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm px-5 py-3  transition-all duration-300 group"
        >
          <Image
            src={skill.icon}
            alt={`${skill.name} icon`}
            width={24}
            height={24}
            className="w-6 h-6 object-contain filter drop-shadow-sm dark:brightness-150"
          />
          <span
            className="text-sm font-semibold text-foreground whitespace-nowrap"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};
