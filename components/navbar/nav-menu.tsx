"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

interface NavMenuProps extends NavigationMenuProps {
  onLinkClick?: () => void;
}

const navLinks = [
  { title: "About", href: "/#about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Blogs", href: "/blogs" },
  { title: "Contact", href: "/#footer" },
];

const navLinkClass =
  "relative inline-flex h-12 w-full items-center px-4 py-2 text-base font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/5 rounded-xl group";

export const NavMenu = ({ className, onLinkClick, ...props }: NavMenuProps) => (
  <NavigationMenu
    className={cn("data-[orientation=vertical]:items-start w-full max-w-none", className)}
    {...props}
  >
    <NavigationMenuList className="gap-1 space-x-0 w-full data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navLinks.map(({ title, href }) => (
        <NavigationMenuItem key={title} className="w-full md:w-auto mt-1 md:mt-0">
          <NavigationMenuLink asChild>
            <Link 
              href={href} 
              className={cn(
                navLinkClass, 
                "md:h-10 md:w-auto md:text-sm md:justify-center md:rounded-md",
                "data-[orientation=vertical]:justify-start"
              )} 
              onClick={onLinkClick}
            >
              {title}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
