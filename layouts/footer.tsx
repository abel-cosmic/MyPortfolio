"use client";
import Link from "next/link";
import { Logo } from "../components/navbar/logo";
import { GithubLogo, LinkedIn, Telegram, UpworkLogo } from "../components/icons";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import footerData from "@/data/footer.json";
import type { ComponentType, SVGProps } from "react";

const {
  cta,
  contact,
  footerLinks,
  socialLinks: socialLinksRaw,
  copyrightTemplate,
} = footerData;

const socialIconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GithubLogo,
  linkedin: LinkedIn,
  telegram: Telegram,
  upwork: UpworkLogo,
};

const socialLinks = socialLinksRaw.map((s) => ({
  ...s,
  icon: socialIconMap[s.icon],
}));

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative z-[1] border-t border-border bg-card overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-screen-md mx-auto px-4 md:px-6">
        {/* Main CTA Section */}
        <div className="py-12 md:py-20 border-b border-border/50">
          <FadeInStagger className="flex flex-col md:flex-row gap-12 md:items-end justify-between">
            <FadeInItem className="max-w-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                {cta.eyebrow}
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {cta.headlineBefore}
                <span className="text-primary italic">
                  {cta.headlineHighlight}
                </span>
                {cta.headlineAfter}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cta.body}
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col gap-4">
              <div className="space-y-4">
                <div className="group">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {contact.email.label}
                  </p>
                  <a
                    href={contact.email.href}
                    className="cursor-target text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 decoration-primary/30 underline-offset-4 hover:underline"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {contact.email.address}
                  </a>
                </div>

                <div className="group">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {contact.phone.label}
                  </p>
                  <a
                    href={contact.phone.href}
                    className="cursor-target text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 decoration-primary/30 underline-offset-4 hover:underline"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {contact.phone.display}
                  </a>
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>

        {/* Navigation & Socials */}
        <div className="py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <FadeIn direction="right">
              <Logo />
            </FadeIn>

            <FadeInStagger className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <FadeInItem key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="cursor-target group relative flex h-14 w-14 items-center justify-center rounded-[22px] transition-all duration-500"
                  >
                    {/* Inner circular background with clay color */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c88665] text-white  transition-all duration-500 group-hover:scale-110 ">
                      <Icon className="h-5 w-5" />
                    </div>
                  </Link>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {footerLinks.map(({ title, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="cursor-target text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  {title}
                </Link>
              ))}
            </nav>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
              {copyrightTemplate.replace(
                "{{year}}",
                String(new Date().getFullYear()),
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
