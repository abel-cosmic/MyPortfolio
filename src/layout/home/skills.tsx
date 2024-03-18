import IconBadge from "@/components/badges/icons-badge";
import { SkillHeader } from "@/components/text/skills";
import Marquee from "react-fast-marquee";

const SkillsSection = ({
  skillIcons,
}: {
  skillIcons: {
    id: number;
    name: string;
    icon: JSX.Element;
  }[];
}) => {
  const firstRow = skillIcons.slice(0, 10);
  const secondRow = skillIcons.slice(11, 20);
  const thirdRow = skillIcons.slice(21, 30);

  return (
    <div id="skills" className="flex flex-col items-center justify-center gap-10  w-full  py-44 bg-white dark:bg-black ">
      <SkillHeader />

      <div className="flex flex-col w-full md:px-60 gap-4">
        <Marquee direction="left" className="w-full"  >
          <div className="flex flex-row   gap-12 mx-4">
            {firstRow.map((skill) => (
              <IconBadge key={skill.id} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </Marquee>
        <Marquee direction="right" className="w-full"  >
          <div className="flex flex-row  gap-12 mx-4">
            {secondRow.map((skill) => (
              <IconBadge key={skill.id} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </Marquee>
        <Marquee direction="left" className="w-full"  >
          <div className="flex flex-row  gap-12 mx-4">
            {thirdRow.map((skill) => (
              <IconBadge key={skill.id} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
export default SkillsSection;

