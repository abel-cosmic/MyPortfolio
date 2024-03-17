import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { BorderButton } from "../ui/moving-border";
const ProjectCard = ({
  title,
  description,
  image,
  link,
  githublink,
  techStack,
  index,
}: {
  title: string;
  index?: number;
  description: string;
  image: string;
  link?: string;
  githublink?: string;
  techStack: string[];
}) => {
  return (
    <div
      className={`rounded-xl  bg-gray-300/20 backdrop-blur-4xl text-black dark:text-white shadow-sm  flex flex-col justify-center items-start md:flex-row gap-4 group cursor-pointer border border-red-500 `}
    >
      <div className="flex flex-col gap-4 md:w-1/2 border border-red-500">
        <h1 className="leading-snug text-2xl font-bold tracking-wider">
          {title}
        </h1>
        <ul className="flex flex-row gap-3 flex-wrap tracking-tight leading-relaxed">
          {techStack.map((tech) => (
            <BorderButton className="p-1 px-4 text-xs" key={tech}>
              {tech}
            </BorderButton>
          ))}
        </ul>

        <p className="w-fit max-md:hidden   text-wrap tracking-wider duration-500  dark:text-white  text-sm transition-all ease-linear">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-4 w-1/2 border border-red-500">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="w-2/3 h-fit object-contain border border-red-500"
          />
          <div className="w-full md:hidden border border-red-500">
            <p className="w-fit left-0 right-0  text-wrap tracking-wider duration-500 max-md:absolute max-md:-bottom-10 bg-primary/10 backdrop-blur-2xl dark:text-black  p-4 text-xs group-hover:flex hidden transition-all ease-linear">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          {link && (
            <Link
              href={link}
              target="_blank"
              className="flex flex-row w-fit py-3 text-xs px-6 rounded-lg  gap-2 items-center bg-primary text-white dark:text-background"
            >
              <FaExternalLinkAlt className="text-white dark:text-background" />
              Live Preview
            </Link>
          )}
          {githublink && (
            <Link
              href={githublink}
              target="_blank"
              className="flex flex-row w-fit py-3 text-sm px-8 rounded-lg  gap-2 items-center bg-white dark:bg-background text-primary"
            >
              <FaGithub className="text-primary " />
              Github
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
