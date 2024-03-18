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
    },
    {
      image: "/projects/Frame 1618873116.png",
      title: "Prepmaster Web App",
      description:
        "An E-learning SAAS aiming to help students are universtiees get prepared for thier upcoming exams. This app has more than 100+ endpoints and also contains an admin dashboard for admins to manage their items.",
      link: "https://prep-master-vite.vercel.app/",
      techStacks: [
        "Nextjs",
        "Tailwindcss",
        "Shadcn UI",
        "Express",
        "Prisma",
        "Mysql",
      ],
    },
    {
      image: "/projects/Frame 1618873115.png",
      title: "Ethiochef Admin Side Web App",
      description:
        "Within the Ethiochef Admin Side Web App, the dashboard features endpoints designed to perform CRUD (Create, Read, Update, Delete) operations seamlessly. Leveraging technologies such as React.js, Tailwind CSS, and Shadcn UI, users can efficiently manage their data with ease. These endpoints facilitate the creation, retrieval, updating, and deletion of content, ensuring a smooth and intuitive user experience",
      link: "https://admin.ethiochef.com",
      techStacks: [
        "React",
        "Tailwindcss",
        "Shadcn UI",
        "Express",
        "Prisma",
        "Mysql",
      ],
    },
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
