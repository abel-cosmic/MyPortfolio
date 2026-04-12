"use client";

import Link from "next/link";
import { Briefcase, Code } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingNav = () => {
  return (
    <>
      {/* Floating Scroll Navigation - Left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 top-[65%] md:top-1/2 -translate-y-1/2 z-50 flex"
      >
        <Link
          href="#experience"
          className="cursor-target flex items-center justify-center p-2 md:p-3 md:pr-5 bg-card/60 md:bg-card/80 backdrop-blur-md border border-border/50 md:border-border border-l-0 rounded-r-xl md:rounded-r-2xl shadow-sm md:shadow-[0_0_15px_rgba(var(--primary),0.1)] hover:bg-card hover:pr-4 md:opacity-100 opacity-60 hover:opacity-100 transition-all duration-300 group overflow-hidden flex-row scale-90 md:scale-100 origin-left"
          aria-label="Scroll to Experience"
        >
          <Briefcase className="mr-2 w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
          <span
            className="w-0 opacity-0 md:w-auto md:opacity-100 group-hover:w-auto group-hover:opacity-100 group-hover:ml-2 md:ml-3 overflow-hidden text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Experience
          </span>
        </Link>
      </motion.div>

      {/* Floating Scroll Navigation - Right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed right-0 top-[65%] md:top-1/2 -translate-y-1/2 z-50 flex"
      >
        <Link
          href="#projects"
          className="cursor-target flex items-center justify-center p-2 md:p-3 md:pl-5 bg-card/60 md:bg-card/80 backdrop-blur-md border border-border/50 md:border-border border-r-0 rounded-l-xl md:rounded-l-2xl shadow-sm md:shadow-[0_0_15px_rgba(var(--primary),0.1)] hover:bg-card hover:pl-4 md:opacity-100 opacity-60 hover:opacity-100 transition-all duration-300 group overflow-hidden flex-row-reverse scale-90 md:scale-100 origin-right"
          aria-label="Scroll to Projects"
        >
          <Code className="mr-2 w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
          <span
            className="w-0 opacity-0 md:w-auto md:opacity-100 group-hover:w-auto group-hover:opacity-100 group-hover:mr-2 md:mr-3 overflow-hidden text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Projects
          </span>
        </Link>
      </motion.div>
    </>
  );
};
