"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import footerData from "@/data/footer.json";
import { GithubLogo, LinkedIn, Telegram, UpworkLogo } from "../icons";
import Link from "next/link";

const { socialLinks: socialLinksRaw } = footerData;
const socialIconMap: Record<string, any> = {
  github: GithubLogo,
  linkedin: LinkedIn,
  telegram: Telegram,
  upwork: UpworkLogo,
};

const socialLinksData = socialLinksRaw.map((s) => ({
  ...s,
  icon: socialIconMap[s.icon],
}));

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full border-border/50 bg-background backdrop-blur-sm hover:bg-accent h-10 w-10">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] sm:w-[350px] p-0 border-l border-border/40 flex flex-col bg-card backdrop-blur-xl">
        <div className="pt-8 px-8 pb-6 border-b border-border/10">
          <Logo />
        </div>

        <div className="flex-1 px-4 py-8 overflow-y-auto">
          <NavMenu orientation="vertical" className="w-full" onLinkClick={() => setOpen(false)} />
        </div>

        <div className="p-8 border-t border-border/10 bg-muted/30">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Connect
          </p>
          <div className="flex items-center gap-4">
            {socialLinksData.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c88665] text-white shadow-lg shadow-[#c88665]/10 hover:scale-105 transition-transform"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
