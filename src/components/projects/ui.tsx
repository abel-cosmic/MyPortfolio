"use client";

import ProjectCard from "../card/project-card";

const UiUx = () => {
  const Uiprojects = [
    {
      image: "/projects/Frame 1618873118.png",
      title: "Prepmaster Figma Design",
      description:
        "The Prepmaster Figma Design project developed a tailored UI/UX for an educational platform, focusing on user needs and seamless interaction. Utilizing Figma's latest tools,Me and my team created an intuitive, accessible, and visually appealing interface across all screens, culminating in an interactive prototype that enhances stakeholder engagement and user experience. This effort reflects a dedication to innovative, user-centered design catering to both learners and educators.",
      techStacks: ["Figma", "UI/UX", "Design"],
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-fit md:p-10 mx-auto border border-red-500 items-center justify-center">
      {Uiprojects.map((projects, index) => (
        <ProjectCard
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
