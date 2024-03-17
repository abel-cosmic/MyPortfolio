"use client";

import ProjectCard from "../card/project-card";

const FullStack = () => {
  const FullProjects = [
    {
      image: "/projects/Frame 1618873111.png",
      title: "Ethiochef Client Side Web App",
      description:
        "For more than 200k users, the meal recipe online app seamlessly combined various technology and payment options. CI/CD pipelines accelerated releases by 40%, while Redis back-end improvements increased speed by 60%. The design made it possible for subscriptions to be customized, while the usage of React and Shadcn UI enhanced user engagement by 30%.",
      link: "https://ethiochef.com",
      techStacks: [
        "Nextjs",
        "Tailwindcss",
        "Shadcn UI",
        "Express",
        "Prisma",
        "Mysql",
      ],
    }
  ];

  return (
    <div className="md:w-2/3 w-full flex flex-col gap-10">
      {FullProjects.map((projects, index) => (
        <ProjectCard
          index={index}
          key={index}
          link={projects.link}
          title={projects.title}
          description={projects.description}
          image={projects.image}
          techStack={projects.techStacks}
        />
      ))}
    </div>
  );
};
export default FullStack;
