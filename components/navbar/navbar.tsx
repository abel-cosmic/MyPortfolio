"use client";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toogle";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-4 inset-x-4 h-14 max-w-screen-md mx-auto">
      {/* Glass pill — Claude.ai style */}
      <div className="h-full flex items-center justify-between px-4 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-xl shadow-sm">
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
    </nav>
  );
};

export default Navbar;
