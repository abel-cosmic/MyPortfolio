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
      className={`rounded-xl border-2 border-primary/20 bg-gray-300/20 backdrop-blur-4xl text-black dark:text-white shadow-sm  flex flex-col justify-center items-start  gap-8 mx-auto group cursor-pointer p-6 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="flex flex-col gap-4 md:w-1/2 w-full">
        <h1 className="leading-snug text-xl font-bold tracking-wider">
          {title}
        </h1>
        <ul className="flex flex-row gap-1 flex-wrap tracking-tight leading-relaxed">
          {techStack.map((tech, index) => (
            <BorderButton key={tech}>
              <div className={`p-1 px-4 text-xs bg-background rounded-full dark:text-primary text-white`}>{tech}</div>
            </BorderButton>
          ))}
        </ul>

        <p className="w-fit max-md:hidden  text-wrap tracking-wider duration-500  dark:text-white  text-sm transition-all ease-linear">
          {description}
        </p>
        <div className="flex flex-row gap-4 mt-4 mx-auto md:mx-0">
          {link && (
            <Link
              href={link}
              target="_blank"
              className="flex flex-row w-fit py-3 text-xs px-6 rounded-lg  gap-2 items-center bg-primary text-white dark:text-background"
            >
              Live Preview
              <FaExternalLinkAlt className="text-white dark:text-background" />
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:w-1/2 w-full items-center justify-center ">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="w-full md:w-[40rem] h-full md:h-96 object-contain"
          />
          <div className="w-full md:hidden ">
            <p className="w-fit -left-6 -right-6  line-clamp-4  text-wrap tracking-wider duration-500 max-md:absolute max-md:-bottom-6 bg-primary/10 backdrop-blur-2xl dark:text-black  p-4 text-xs group-hover:flex hidden transition-all ease-linear">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
