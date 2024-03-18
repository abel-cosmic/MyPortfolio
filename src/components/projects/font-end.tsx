"use client";

import ProjectCard from "../card/project-card";

const FrontEnd = () => {
  const FullProjects = [
    {
      image: "/projects/Frame 1618873112.png",
      title: "Digital Merkato Admin Side Web App",
      description:
        "Within the DigitalMerkato Admin Side Web App, the dashboard features endpoints designed to perform CRUD (Create, Read, Update, Delete) operations seamlessly. Leveraging technologies such as React.js, Tailwind CSS, and Shadcn UI, users can efficiently manage their data with ease. These endpoints facilitate the creation, retrieval, updating, and deletion of content, ensuring a smooth and intuitive user experience",
      link: "https://admin.digitalmerkato.co",
      techStacks: [
        "Front End",
        "Reactjs",
        "Tailwindcss",
        "Shadcn UI",
        "Zustand",
        "React Query",
      ],
    },
    {
      image: "/projects/Frame 1618873120.png",
      title: "Shewa-Mart Client Side & Admin Dashboard",
      description:
        "Shewa-Mart is an e-commerce platform that used CI/CD pipelines to optimize its development process, resulting in a 45% speed increase and the integration of Chapa for enhanced financial functions. The platform used Zustand and React for advanced state management and reusable components, with an emphasis on the user experience. Improvements to the architecture led to a significant 75% gain in system efficiency, and a flexible business dashboard helped to cut project development time by 50%.",
      link: "https://shewa-mart.com",
      techStacks: [
        "Front End",
        "Reactjs",
        "Tailwindcss",
        "Shadcn UI",
        "Zustand",
        "React Query",
      ],
    },
    {
      image: "/projects/Frame 1618873113.png",
      title: "Edu Bus Admin Dashboard",
      description:
        "Edu Bus ensures safe and efficient school transportation, providing real-time tracking and financial tools for schools, parents, and car providers. Parents receive immediate feedback and secure payments, car providers benefit from streamlined navigation, and schools gain control through a dedicated dashboard. Overall, Edu Bus enhances the school transportation experience for all stakeholders.",
      link: "https://education-bus-system-admin.vercel.app/",
      techStacks: [
        "Front End",
        "Reactjs",
        "Tailwindcss",
        "Shadcn UI",
        "Zustand",
        "React Query",
      ],
    },
    {
      image: "/projects/Frame 1618873114.png",
      title: "Digital Merkato Client Side Web App",
      description:
        "Digital Merkato, an E-commerce, streamlined development with CI/CD pipelines, boosting speed by 45%, and integrated payment methods like Chapa for enhanced financial capabilities. Prioritizing user experience, the platform utilized React and Zustand for reusable components and advanced state management. Architectural improvements led to a 75% increase in system efficiency, and a versatile company dashboard reduced project development time by 50%.",
      link: "https://digitalmerkato.co",
      techStacks: [
        "Front End",
        "Reactjs",
        "Tailwindcss",
        "Shadcn UI",
        "Zustand",
        "React Query",
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
export default FrontEnd;
