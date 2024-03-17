"use client";

import ProjectCard from "../card/project-card";

const UiUx = () => {
  const Uiprojects = [
    {
      image: "/projects/Frame 1618873118.png",
      title: "Prepmaster Figma Design",
      description:
        "Using Figma's tools, the Prepmaster Figma Design project created a user-centric UI/UX for an educational platform with an easily navigable, aesthetically pleasing interface. The outcome is an interactive prototype that improves user experience and increases stakeholder engagement, showcasing a dedication to creative design for educators and students alike.",
      techStacks: ["Figma", "UI/UX", "Design"],
    },
    {
      image: "/projects/Frame 1618873119.png",
      title: "POS system Kira Grill Plus Figma Design",
      description:
        "The Point of Sail software design, created with Figma, offers an intuitive and visually appealing interface for sailors. Seamlessly blending functionality with aesthetics, this project sets a new standard in maritime software, enhancing the sailing experience for users of all levels.",
      techStacks: ["Figma", "UI/UX", "Design"],
    },
  ];
  return (
    <div className=" md:w-2/3 flex flex-col gap-10 h-fit">
      {Uiprojects.map((projects, index) => (
        <ProjectCard
          index={index}
          key={index}
          title={projects.title}
          description={projects.description}
          image={projects.image}
          techStack={projects.techStacks}
        />
      ))}
    </div>
  );
};
export default UiUx;
