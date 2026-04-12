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
  { title: "All Experience", href: "/experience" },
  { title: "All Projects", href: "/projects" },
  { title: "Contact", href: "/#footer" },
];

const navLinkClass =
  "relative inline-flex h-9 w-full items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus:outline-none group";

export const NavMenu = ({ className, onLinkClick, ...props }: NavMenuProps) => (
  <NavigationMenu
    className={cn("data-[orientation=vertical]:items-start w-full", className)}
    {...props}
  >
    <NavigationMenuList className="gap-0 space-x-0 w-full data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navLinks.map(({ title, href }) => (
        <NavigationMenuItem key={title} className="w-full md:w-auto mt-1 md:mt-0">
          <NavigationMenuLink asChild>
            <Link href={href} className={cn(navLinkClass, "data-[orientation=vertical]:justify-start")} onClick={onLinkClick}>
              {title}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
