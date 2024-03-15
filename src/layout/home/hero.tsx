import { SkillsBadge } from "@/components/badges/SkillBadge";
import { SubTitle } from "./Subtitle";
import { Button } from "@/components/ui/button";
import { badges, sentence } from "../../../utils/objects/setions";
import { TextGenerateEffect } from "@/components/acertinity/text-generator";
import { ThreeDCardDemo } from "@/components/card/3d-card";
import { socials } from "../../../utils/objects/socials";
import Link from "next/link";
import { BorderButton } from "@/components/ui/moving-border";

const Hero = () => {
  return (
    <div className="flex justify-center w-full h-screen items-center bg-transparent max-md:h-full">
      <div className="flex flex-col md:flex-row mx-auto w-full justify-between gap-0 md:px-10">
        <div className="flex flex-col w-full gap-10 my-40 md:items-start">
          <TextGenerateEffect
            words={sentence}
            className="text-center text-3xl md:text-left md:text-5xl "
            width="w-2/3 max-md:w-full max-md:text-sm"
          />
          <div className="flex flex-row  gap-2 flex-wrap w-full items-center md:items-start md:justify-start justify-center">
            {badges.map((skill, index) => (
              <BorderButton
                key={index}
                className="bg-primary text-white dark:text-black px-4 py-2 text-xs rounded-full"
              >
                {skill}
              </BorderButton>
            ))}
          </div>
          <SubTitle />
          <div className="flex gap-6 px-4 self-center md:self-start">
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
          <div className="flex flex-row gap-4 w-full md:pr-6 md:px-0 px-6">
            <Button className="w-full">Contact Me</Button>
            <Button className="w-full" variant={"secondary"}>My Resume</Button>
          </div>
        </div>
        <div className="px-8 md:px-0 w-full hidden md:flex">
          <ThreeDCardDemo />
        </div>
      </div>
    </div>
  );
};
export default Hero;
