"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const { push } = useRouter();
  return (
    <section id="about" className="relative py-20 px-6 bg-background">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          {/* Profile Image - shown on all devices but positioned differently */}
          <div className="flex-shrink-0">
            <ProfileImage className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <Badge className="mb-4 w-fit mx-auto md:mx-0">About Me</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-foreground">
              The Journey from Code to Impact
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground ">
              <p>
                Full-stack engineer passionate about turning complex problems
                into elegant solutions. From leading student parliament to
                building AI-powered automation platforms, I thrive at the
                intersection of technology and impact. I craft scalable web
                applications with modern JavaScript ecosystems, architect
                microservices that actually work, and occasionally win
                hackathons along the way. Currently building the future at
                Trident Technologies while exploring how AI can amplify human
                potential. Let&apos;s build something remarkable together.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start ">
              <Button
                variant="outline"
                onClick={() =>
                  push(
                    "https://drive.google.com/file/d/13JndTb1xuQXAzbkD7nAwJRWSUvNHbTwL/view?usp=sharing"
                  )
                }
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "relative rounded-2xl overflow-hidden bg-accent shadow-lg ring-1 ring-border hover:shadow-xl transition-shadow",
      className
    )}
    {...props}
  >
    <Image
      src="/profile.jpg"
      alt="Abel Shibabaw - Full Stack Developer"
      className="object-cover transition-transform duration-300 hover:scale-105"
      fill
    />
  </div>
);
export default About;
