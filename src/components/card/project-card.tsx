import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { BorderButton } from "../ui/moving-border";
import { useState } from "react";
const ProjectCard = ({
  title,
  description,
  image,
  link,
  techStack,
  index,
}: {
  title: string;
  index: number;
  description: string;
  image: string;
  link?: string;
  techStack: string[];
}) => {
  return (
    <div
      className={`rounded-xl border-2 border-primary/20 dark:bg-white/40 bg-white backdrop-blur-4xl text-black dark:text-white shadow-sm  flex flex-col justify-center items-start  gap-8 mx-auto group cursor-pointer p-6 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="flex flex-col gap-4 md:w-1/3 w-full">
        <h1 className="leading-snug text-xl font-bold tracking-wider">
          {title}
        </h1>
        <ul className="flex flex-row gap-1 flex-wrap tracking-tight leading-relaxed">
          {techStack.map((tech, index) => (
            <BorderButton key={tech}>
              <div className={`p-1 px-4 text-xs bg-black dark:bg-background dark:text-white  rounded-full dark:text-primary text-black`}>{tech}</div>
            </BorderButton>
          ))}
        </ul>
        <div className="flex flex-row gap-4 mt-4 mx-auto md:mx-0">
          {link && (
            <Link
              href={link}
              target="_blank"
              className="flex flex-row hover:scale-105 active:scale-95 transition-all ease-linear w-fit py-3 text-xs px-6 rounded-lg  gap-2 items-center dark:bg-white dark:text-black bg-black text-white border border-primary/10"
            >
              Live Preview
              <FaExternalLinkAlt className="text-white dark:text-black" />
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:w-4/5 w-full items-center justify-center ">
        <div className="relative group">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className={`w-full md:w-[50rem] h-full md:h-96 object-contain  ease-linear transition-all ${index%2===0 ? "group-hover:-rotate-6 ":"group-hover:rotate-6 "}`}
          />
          <div className="w-full  md:hidden">
            <p className="w-fit -left-6 -right-6  line-clamp-4  text-wrap tracking-wider duration-500 max-md:absolute max-md:-bottom-6 bg-primary/10 backdrop-blur-2xl dark:text-black  p-4 text-xs group-hover:flex hidden transition-all ease-linear">
              {description}
            </p>
          </div>
          <div className={`w-full max-md:hidden ${index%2===0 ? "group-hover:mt-4 ":"group-hover:mt-4"}`}>
            <p className="w-fit rounded-t-2xl -left-6 -right-6  bottom-0 line-clamp-4  text-wrap tracking-wider duration-500 absolute  bg-primary/10 backdrop-blur-2xl dark:text-black  p-4 text-xs flex  transition-all ease-linear">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
