import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import Image from "next/image";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  image?: string;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  image,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-0.5 bg-border group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background shadow-sm" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div>
            {image ? (
              <Image
                src={image}
                alt={company}
                width={40}
                height={40}
                className="rounded-lg object-cover shadow-sm ring-1 ring-border"
              />
            ) : (
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shadow-sm">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
            )}
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} className="text-xs font-medium">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences: {
    title: string;
    image?: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
  }[] = [
    {
      title: "Software Engineer",
      image: "/companies/trident.jpg",
      company: "Trident Technologies",
      period: "Apr 2024 - Present",
      description:
        "Designed and developed ERP system for a University College to manage classes, examinations, registration and school fees, increasing student interactivity by 65%. Built content management systems and landing pages using modern tech stack. Implemented CI/CD pipelines and microservices architecture deployed on Kubernetes.",
      technologies: [
        "Nextjs",
        "NestJS",
        "MongoDB",
        "CassandraDB",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "TailwindCSS",
        "ShadcnUI",
        "TanstackQuery",
        "ERP",
        "Microservices",
      ],
    },
    {
      title: "Full Stack Engineer",
      image: "/companies/agoraedu.jpg",
      company: "Agora",
      period: "Jun 2025 - Sep 2025",
      description:
        "Worked on part-time projects building full-stack web solutions with modern JavaScript frameworks. Collaborated remotely with cross-functional teams to design and deliver scalable application. the application is named lussia that helps",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
      ],
    },
    {
      title: "Fullstack Engineer",
      image: "/companies/nucleusinstitute.jpg",
      company: "Nucleus Institute Corp",
      period: "Feb 2025 - May 2025",
      description:
        "Worked with a talented team creating an automation studio for pipelines, vector databases, chat interfaces with documents, and synthetic data generation. Utilized an in-house fine-tuned AI model to enable users to leverage the platform for their own needs. Developed medical assessment web app, meal planner, and Eido movie/music recommendation system.",
      technologies: [
        "Next.js",
        "NestJS",
        "Apollo GraphQL",
        "Express.js",
        "TailwindCSS",
        "TypeScript",
        "React Native",
        "AI/ML",
      ],
    },
    {
      title: "Full Stack Developer",
      image: "/companies/yeabfuture.jpg",
      company: "Yeab Future",
      period: "Aug 2024 - Dec 2024",
      description:
        "Developed an Event Management System using multitenant architecture to create dashboards for event holders and manage their employees. Implemented features including voucher generation for purchased tickets via email, payment integration with Pespal and bank transfers, and support for event add-ons, activities, and location types.",
      technologies: [
        "Next.js",
        "Express.js",
        "TypeScript",
        "Shadcn",
        "CI/CD",
        "PM2",
        "Digital Ocean",
      ],
    },
    {
      title: "Software Engineer",
      image: "/companies/peacetechnologies.jpg",
      company: "Peace Technology Ethiopia",
      period: "Nov 2023 - May 2024",
      description:
        "Established robust client-server communication and addressed security issues for optimized and secure dashboard. Developed Ethiochef E-commerce Web Dashboard using NextJS with TypeScript and Shadcn UI. Maintained backend API using ExpressJS and handled payment gateway integrations. Contributed to collaborative problem-solving and regular code reviews.",
      technologies: [
        "Next.js",
        "Express.js",
        "TypeScript",
        "Shadcn",
        "TailwindCSS",
        "CI/CD",
        "Cpanel",
      ],
    },
    {
      title: "Software Engineer",
      image: "/companies/mss.jpg",
      company: "Micro Sun & Solutions PLC",
      period: "Aug 2023 - May 2024",
      description:
        "Accelerated the development of Digital Mekato e-commerce platform by 45% through smart systems management. Implemented user-friendly features ensuring seamless shopping experience. Utilized ShadcnUI for enhanced website appearance and performance. The platform displays and sells local Ethiopian items using Chapa payment gateway.",
      technologies: [
        "React.js",
        "TypeScript",
        "Shadcn",
        "TailwindCSS",
        "CI/CD",
        "Cpanel",
      ],
    },
    {
      title: "Frontend Web Developer (Intern)",
      image: "/companies/codesoftinfotech_logo.jpg",
      company: "CODESOFT INFOTECH",
      period: "Aug 2023 - Sep 2023",
      description:
        "Built responsive web pages during an internship using HTML, CSS, and JavaScript. Worked with MongoDB to manage data and learned modern frontend development practices.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Web Applications",
      ],
    },
    {
      title: "Student Parliament President",
      image: "/companies/hope.jpg",
      company: "Hope Enterprise University College",
      period: "Oct 2021 - Nov 2023",
      description:
        "Led the student parliament as Vice President for three semesters and President for one semester, enhancing student life and facilitating effective communication with university administration. Demonstrated commitment to personal and professional growth through adaptive leadership while successfully managing academic commitments and leadership responsibilities.",
      technologies: [
        "Leadership",
        "Communication",
        "Organization",
        "Team Management",
      ],
    },
  ];
  return (
    <section id="experience" className="relative py-20 px-6 bg-background">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Experience</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
