"use client";
import { useState, useEffect } from "react";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toogle";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold can be small to react quickly
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed z-50 inset-x-4 mx-auto transition-all duration-300 ease-in-out",
        isScrolled
          ? "top-10 h-14 max-w-screen-sm"
          : "top-8 h-16 max-w-screen-md"
      )}
    >
      {/* Glass pill — Claude.ai style */}
      <div className="h-full flex items-center justify-between px-4 rounded-full border border-border/60 bg-background/80 backdrop-blur-xl shadow-sm">
        <Logo />

        {/* Desktop links */}
        <NavMenu className="hidden md:flex" />

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          {/* Mobile menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
