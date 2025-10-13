"use client";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden bg-background">
      <AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.4}
        duration={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md space-y-8">
        <Badge className="rounded-full border-none shadow-sm">
          <Zap className="text-white" />
          Fullstack Engineer
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight text-foreground">
          Building Tomorrow&apos;s Digital Solutions, Today
        </h1>
        <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
          I&apos;m Abel Shibabaw, a passionate Fullstack Developer specializing in
          enterprise-grade web applications and AI-powered solutions. From
          crafting sophisticated ERP systems that serve thousands of students to
          building intelligent automation platforms with cutting-edge AI, I
          transform complex challenges into elegant digital experience
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition-all  rounded-full animate-bounce"
          >
            <Link
              href="#projects"
              className="flex flex-row gap-2 justify-center items-center"
            >
              View My Work <CircleArrowDown className="ml-2 !h-5.5 !w-5.5 " />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
