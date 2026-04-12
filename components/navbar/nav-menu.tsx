import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#footer" },
];

const navLinkClass =
  "relative inline-flex h-9 w-full items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus:outline-none group";

export const NavMenu = ({ className, ...props }: NavigationMenuProps) => (
  <NavigationMenu
    className={cn("data-[orientation=vertical]:items-start", className)}
    {...props}
  >
    <NavigationMenuList className="gap-0 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navLinks.map(({ title, href }) => (
        <NavigationMenuItem key={title}>
          <NavigationMenuLink asChild>
            <Link href={href} className={navLinkClass}>
              {title}
              {/* Claude-style slide-in underline */}
              <span className="absolute bottom-1 left-3 right-3 h-px bg-primary scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
