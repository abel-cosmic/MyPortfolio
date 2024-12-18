"use client";
import { SubTitle } from "./Subtitle";
import { Button } from "@/components/ui/button";
import { sentence, skills } from "../../../utils/objects/setions";
import { TextGenerateEffect } from "@/components/acertinity/text-generator";
import { ThreeDCardDemo } from "@/components/card/3d-card";
import { BorderButton } from "@/components/ui/moving-border";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex justify-center w-full h-screen  items-center bg-transparent max-md:h-full "
    >
      <div className="flex flex-col md:flex-row md:items-center justify-evenly w-full md:gap-10 px-10  md:px-4 ">
        <div className="flex flex-col w-full md:w-2/3 gap-10 py-44  md:items-start">
          <TextGenerateEffect
            words={sentence}
            className="text-center text-[30px]  md:text-5xl  md:text-left "
            width=" w-full max-md:text-sm"
          />

          <SubTitle />
          {/* <div className="flex gap-6 px-4 self-center md:self-start">
            {socials.map((social, index) => (
              <Link
                key={index}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                href={social.href}
                target="_blank"
              >
                <social.icon className="h-6 w-6 lg:h-8 lg:w-8" />
              </Link>
            ))}
          </div> */}
          <div className="flex flex-row  gap-2 flex-wrap w-full items-center md:items-start md:justify-start justify-center">
            {skills.map((skill, index) => (
              <BorderButton
                key={index}
                className="bg-primary text-white dark:text-black px-2 py-1 text-xs rounded-full flex flex-row gap-2 items-center"
              >
                {skill.icon}
                {skill.name}
              </BorderButton>
            ))}
          </div>
          <div className="flex flex-row gap-4  w-full md:pr-6 md:px-0 px-6">
            <Link
              href="https://github.com/abel-cosmic"
              target="_blank"
              className=" flex flex-row w-full md:w-1/3"
            >
              <Button className=" rounded-full py-6 flex flex-row gap-2 text-md">
                GitHub <FaGithub className="w-6 m-0 h-6" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abel-shibabaw-4b3b6125a/"
              target="_blank"
              className=" flex flex-row w-full md:w-1/3"
            >
              <Button
                className="rounded-full py-6 flex flex-row gap-2 text-md"
                variant={"outline"}
              >
                {" "}
                LinkedIn <FaLinkedin className="w-6 m-0 h-6" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-8 md:px-0 w-2/3  hidden lg:flex h-fit">
          <ThreeDCardDemo />
        </div>
      </div>
    </div>
  );
};
export default Hero;
