"use client";
import Link from "next/link";
import { Logo } from "./navbar/logo";
import { GithubLogo, LinkedIn, Telegram } from "./icons";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";

const footerLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
];



const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abel-cosmic",
    icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abel-shibabaw-4b3b6125a/",
    icon: LinkedIn,
  },
  {
    label: "Telegram",
    href: "https://telegram.me/abel_cosmic",
    icon: Telegram,
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-border bg-card/50 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-screen-md mx-auto px-4 md:px-6">
        {/* Main CTA Section */}
        <div className="py-12 md:py-20 border-b border-border/50">
          <FadeInStagger className="flex flex-col md:flex-row gap-12 md:items-end justify-between">
            <FadeInItem className="max-w-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                Let&apos;s Connect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Ready to bring your next <span className="text-primary italic">vision</span> to life?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I&apos;m currently open to new opportunities and collaborations. 
                Whether you have a specific project or just want to chat, feel free to reach out.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col gap-4">
              <div className="space-y-4">
                <div className="group">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:abelshibabaw291@gmail.com" 
                    className="cursor-target text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 decoration-primary/30 underline-offset-4 hover:underline"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    abelshibabaw291@gmail.com
                  </a>
                </div>
                
                <div className="group">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                  <a 
                    href="tel:+251913174185" 
                    className="cursor-target text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 decoration-primary/30 underline-offset-4 hover:underline"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    +251 913 174 185
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

            <FadeInStagger className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <FadeInItem key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="cursor-target h-10 w-10 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
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
              © {new Date().getFullYear()} Abel Shibabaw — Crafted with Passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
