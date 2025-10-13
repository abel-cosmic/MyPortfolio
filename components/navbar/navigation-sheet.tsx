import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-6 px-6 bg-background border-border">
        <div className="flex flex-col space-y-6">
          <Logo />
          <NavMenu orientation="vertical" className="w-full" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
