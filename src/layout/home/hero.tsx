import { SkillsBadge } from "@/components/badges/SkillBadge";
import { SubTitle } from "./Subtitle";
import { Button } from "@/components/ui/button";
import { badges, sentence } from "../../../utils/objects/setions";
import { TextGenerateEffect } from "@/components/acertinity/text-generator";
import { ThreeDCardDemo } from "@/components/card/3d-card";
import { socials } from "../../../utils/objects/socials";
import Link from "next/link";
import { BorderButton } from "@/components/ui/moving-border";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex justify-center w-full h-screen items-center bg-transparent max-md:h-full ">
      <div className="flex flex-col md:flex-row md:items-center w-full md:gap-10  md:px-10">
        <div className="flex flex-col w-full gap-10 py-32 md:items-start">
          <TextGenerateEffect
            words={sentence}
            className="text-center text-3xl md:text-left md:text-5xl "
            width="w-2/3 max-md:w-full max-md:text-sm"
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
            {badges.map((skill, index) => (
              <BorderButton
                key={index}
                className="bg-primary text-white dark:text-black px-2 py-1 text-xs rounded-full"
              >
                {skill}
              </BorderButton>
            ))}
          </div>
          <div className="flex flex-row gap-4 w-full md:pr-6 md:px-0 px-6">
            <Button className="w-full rounded-full py-6 flex flex-row gap-2 text-md">
              GitHub <FaGithub className="w-6 m-0 h-6" />
            </Button>
            <Button
              className="w-full rounded-full py-6 flex flex-row gap-2 text-md"
              variant={"outline"}
            >
              LinkedIn <FaLinkedin className="w-6 m-0 h-6" />
            </Button>
          </div>
        </div>
        <div className="px-8 md:px-0 w-[60rem] hidden lg:flex h-fit  ">
          <ThreeDCardDemo />
        </div>
      </div>
    </div>
  );
};
export default Hero;
