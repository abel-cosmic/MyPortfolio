"use client";
import Link from "next/link";
import { Logo } from "./navbar/logo";
import { GithubLogo, LinkedIn, Telegram } from "./icons";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const Footer = () => {
  return (
    <footer className="relative">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-40"
        )}
      />
      <div className="relative max-w-screen-md mx-auto">
        {/* Main footer content with Claude.ai styling */}
        <div className="py-12 px-6">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo centered */}
            <div className="flex justify-center">
              <Logo />
            </div>

            {/* Navigation links with Claude.ai spacing */}
            <nav className="flex flex-wrap justify-center gap-8">
              {footerLinks.map(({ title, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {title}
                  {/* Subtle underline effect like Claude.ai */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom section with Claude.ai layout */}
        <div className="py-6 px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright - left side like Claude.ai */}
            <span className="text-sm text-muted-foreground order-2 sm:order-1">
              &copy; {new Date().getFullYear()} Abel Shibabaw. All rights
              reserved.
            </span>

            {/* Social links - right side like Claude.ai */}
            <div className="flex items-center gap-4 order-1 sm:order-2">
              <Link
                href="https://github.com/abel-cosmic"
                target="_blank"
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
              >
                <GithubLogo className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/abelshibabaw"
                target="_blank"
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
              >
                <LinkedIn className="h-4 w-4" />
              </Link>
              <Link
                href="https://telegram.me/abel_cosmic"
                target="_blank"
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
              >
                <Telegram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
