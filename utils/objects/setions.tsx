import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Database,
  DatabaseBackup,
  FolderKanban,
  Home,
  LampDesk,
  PanelsTopLeft,
  SmartphoneNfc,
  Webhook,
} from "lucide-react";
import { Figma, Paintbrush2 } from "lucide-react";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";

export const experience = [
  {
    title: " Student Parliament President",
    icon: <FolderKanban className="w-4 h-4 md:w-10 md:h-10" />,
    location: "Hope Enterprise University | volunteer",
    timeline: "Oct 21 - 2023",
    content: `In a previous role, I served as Vice President for three semesters and as President for one semester, leading the student parliament to improve student life and enhance communication with the university administration. I showed a commitment to personal and professional growth through adaptive leadership, successfully balancing academic commitments with leadership responsibilities, and fostering a collaborative environment.`,
  },
  {
    title: "Software Engineer",
    icon: <Webhook className="w-4 h-4 md:w-10 md:h-10" />,
    location: "Micro Sun and Solutions | remote ",
    timeline: "Aug 30 - Present",
    content: `I have  developed an online store was significantly accelerated by 45% by implementing smart systems for managing technical aspects and integrating user-friendly features to ensure a seamless shopping experience. Additionally, the Shadcn toolkit was employed to boost the website's appearance and performance, enhancing the overall digital presence of the Digital Mekato Website`,
  },
  {
    title: "Software Engineer ",
    icon: <Database className="w-4 h-4 md:w-10 md:h-10" />,
    location: "Peace Technology | remote",
    timeline: "Jan 30 - Present",
    content: `  A secure and optimized e-commerce web dashboard was developed by me , featuring robust client-server communication with enhanced security measures. The  dashboard that I made was created using React with TypeScript, and incorporated the Shadcn UI Component library for improved user interface elements. The project emphasized collaborative problem-solving and involved regular code reviews to maintain high-quality code standards. This work contributed to the Ethiochef Admin Website`,
  },
];
export const sections = [
  {
    content: (
      <p className="my-20">
        <b className="text-primary">Abel Shibabaw</b>, a software engineer from{" "}
        <b className="text-primary">Addis Ababa</b>, with{" "}
        <b className="text-primary">3+ years</b> experience. Specializing in{" "}
        <b className="text-primary">full-stack</b> development, passionate about
        innovative solutions. Let's create impactful technology together.
      </p>
    ),
  },
];

export const projects = [
  {
    image: "",
    title: "Ethiochef Client Side & Admin Dashboard",
    content:
      "The food recipe web app integrated diverse tech and multiple payment methods for 200k+ users. Back-end optimization with Redis achieved a 60% performance boost, and CI/CD pipelines accelerated releases by 40%. The architecture supported customizable subscriptions, and React with Shadcn UI improved user engagement by 30%.The food recipe web app integrated diverse tech and multiple payment methods for 200k+ users. Back-end optimization with Redis achieved a 60% performance boost, and CI/CD pipelines accelerated releases by 40%. The architecture supported customizable subscriptions, and React with Shadcn UI improved user engagement by 30%.",
    link: "https://ethiochef.com",
    techStacks: [
      "Front End",
      "Back end",
      "Nextjs",
      "Tailwindcss",
      "Shadcn UI",
      "Express",
      "Prisma",
      "Mysql",
    ],
  },
  {
    image: "",
    title: "Digital Merkato Client Side & Admin Dashboard",
    content:
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
  {
    image: "",
    title: "Shewa-Mart Client Side & Admin Dashboard",
    content:
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
    image: "",
    title: "Edu Bus Admin Dashboard",
    content:
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
    image: "",
    title: "Edu Bus Mobile App",
    content:
      "Edu Bus ensures safe and efficient school transportation, providing real-time tracking and financial tools for schools, parents, and car providers. Parents receive immediate feedback and secure payments, car providers benefit from streamlined navigation, and schools gain control through a dedicated dashboard. Overall, Edu Bus enhances the school transportation experience for all stakeholders.",
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

export const badges = ["Front End", "Back End", "Full Stack", "UI/UX"];
export const sentence = "From Design to Code with Abel Shibabaw";
export const menus = [
  {
    icons: <Home className="w-4 h-4" />,
    tip: "Home",
    link: "home",
  },
  {
    icons: <DatabaseBackup className="w-4 h-4 text-primary" />,
    tip: "About",
    link: "about",
  },
  {
    icons: <PanelsTopLeft className="w-4 h-4 text-primary" />,
    tip: "Project",
    link: "projects",
  },
  {
    icons: <LampDesk className="w-4 h-4 text-primary" />,
    tip: "Skills",
    link: "skills",
  },
  {
    icons: <SmartphoneNfc className="w-4 h-4 text-primary" />,
    tip: "Contact",
    link: "contact",
  },
];

import clang from "/public/icons/c.svg";
import cpp from "/public/icons/cpp.svg";
import css from "/public/icons/css.svg";
import dart from "/public/icons/dart.svg";
import docker from "/public/icons/docker.svg";
import express from "/public/icons/expressjs-dark.svg";
import figma from "/public/icons/figma-dark.svg";
import flutter from "/public/icons/flutter.svg";
import git from "/public/icons/git.svg";
import github from "/public/icons/github-square.svg";
import html from "/public/icons/html.svg";
import java from "/public/icons/java-dark.svg";
import javascript from "/public/icons/javascript.svg";
import kubernetes from "/public/icons/kubernetes.svg";
import laravel from "/public/icons/laravel-dark.svg";
import linux from "/public/icons/linux-dark.svg";
import mongo from "/public/icons/mongodb.svg";
import mysql from "/public/icons/mysql-dark.svg";
import netlify from "/public/icons/netlify-dark.svg";
import nextjs from "/public/icons/nextjs-dark.svg";
import node from "/public/icons/nodejs-dark.svg";
import php from "/public/icons/php-dark.svg";
import postgresql from "/public/icons/postgresql-dark.svg";
import python from "/public/icons/python-dark.svg";
import react from "/public/icons/react-dark.svg";
import spring from "/public/icons/spring-dark.svg";
import springboot from "/public/icons/springboot.svg";
import tailwindcss from "/public/icons/tailwindcss-dark.svg";
import typescript from "/public/icons/typescript.svg";
import vercel from "/public/icons/vercel-dark.svg";

export const skills = [
  {
    name: "FullStack",
    style: "bg-gradient-to-b from-gray-700 to-gray-900  text-white",
    icon: <LampDesk className="w-4 h-4" />,
  },
  {
    name: "FrontEnd",
    style: "bg-gradient-to-b from-gray-700 to-gray-900  text-white",
    icon: <Paintbrush2 className="w-4 h-4" />,
  },
  {
    name: "Backend",
    style: "bg-gradient-to-b from-gray-700 to-gray-900 text-white",
    icon: <DatabaseBackup className="w-4 h-4" />,
  },
  {
    name: "UI/UX",
    style: "bg-gradient-to-b from-gray-700 to-gray-900 text-white",
    icon: <Figma className="w-4 h-4" />,
  },
];
const iconMappings = [
  { id: 1, name: "C", icon: clang },
  { id: 2, name: "C++", icon: cpp },
  { id: 3, name: "CSS", icon: css },
  { id: 4, name: "Dart", icon: dart },
  { id: 5, name: "Docker", icon: docker },
  { id: 6, name: "Express.js", icon: express },
  { id: 7, name: "Figma", icon: figma },
  { id: 8, name: "Flutter", icon: flutter },
  { id: 9, name: "Git", icon: git },
  { id: 10, name: "GitHub", icon: github },
  { id: 11, name: "HTML", icon: html },
  { id: 12, name: "Java", icon: java },
  { id: 13, name: "JavaScript", icon: javascript },
  { id: 14, name: "Kubernetes", icon: kubernetes },
  { id: 15, name: "Laravel", icon: laravel },
  { id: 16, name: "Linux", icon: linux },
  { id: 17, name: "MongoDB", icon: mongo },
  { id: 18, name: "MySQL", icon: mysql },
  { id: 19, name: "Netlify", icon: netlify },
  { id: 20, name: "Next.js", icon: nextjs },
  { id: 21, name: "Node.js", icon: node },
  { id: 22, name: "PHP", icon: php },
  { id: 23, name: "PostgreSQL", icon: postgresql },
  { id: 24, name: "Python", icon: python },
  { id: 25, name: "React", icon: react },
  { id: 26, name: "Spring", icon: spring },
  { id: 27, name: "Spring Boot", icon: springboot },
  { id: 28, name: "Tailwind CSS", icon: tailwindcss },
  { id: 29, name: "TypeScript", icon: typescript },
  { id: 30, name: "Vercel", icon: vercel },
];

export const skillIcons = iconMappings.map(({ id, name, icon }) => ({
  id,
  name,
  icon: (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-none rounded-2xl">
          <Image
            key={id}
            src={icon}
            alt={`${name} Icon`}
            className="border border-white/20 bg-slate-400/40 w-10 h-10 rounded-2xl"
          />
        </TooltipTrigger>
        <TooltipContent>{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}));

export const attraction = [
  "better ",
  "modern ",
  "awesome ",
  "Dynamic ",
  "Interactive ",
];
