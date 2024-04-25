"use client";

import ProjectCard from "../card/project-card";

const BackEnd = () => {
  const BackProjects = [
    {
      image: "/projects/Frame 1618873111.png",
      title: "Ethiochef Backend",
      description:
        "Designed and built both frontend and backend for a recipie app with 200,000+ users. This app has more 170+ endpoints and major payment getway integrations like Chapa, ET-Switch, Abysinnia Bank, Telebirr, and more.",
      link: "https://ethiochef.com",
      techStacks: ["Front End", "Back end", "Express", "Prisma", "Mysql"],
    },
    {
      image: "/projects/Frame 1618873116.png",
      title: "PrepMaster (Backend In Development)",
      description:
        "An E-learning SAAS aiming to help students are universtiees get prepared for thier upcoming exams. This app has more than 100+ endpoints and also contains an admin dashboard for admins to manage their items.",
      link: "https://prep-master-vite.vercel.app/",
      techStacks: ["Laravel", "PostgreSQL"],
    },
    {
      image: "/projects/APIEthiopiclingo.webp",
      title: "EthiopicLingo Backend",
      description:
        "Shewa-Mart is an e-commerce platform that used CI/CD pipelines to optimize its development process, resulting in a 45% speed increase and the integration of Chapa for enhanced financial functions. The platform used Zustand and React for advanced state management and reusable components, with an emphasis on the user experience. Improvements to the architecture led to a significant 75% gain in system efficiency, and a flexible business dashboard helped to cut project development time by 50%.",
      link: "https:/ethiopiclingo.com",
      techStacks: [
        "Fastify",
        "MySQL",
        "Swagger",
        "NodeJS",
        "Redis",
        "BullMQ",
        "Firebase",
        "Nodemailer",
      ],
    },
  ];
  return (
    <div className="md:w-2/3 w-full flex flex-col gap-10">
      {BackProjects.map((projects, index) => (
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
export default BackEnd;
