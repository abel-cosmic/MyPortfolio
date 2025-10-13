"use client";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toogle";
import { NavMenu } from "./nav-menu";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-4 inset-x-4 h-14 bg-background/70 rounded-xl border border-border backdrop-blur-lg max-w-screen-md mx-auto shadow-sm">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Logo />

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          <NavMenu className="hidden md:block" />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
