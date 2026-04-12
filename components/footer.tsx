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
    <footer id="footer" className="border-t border-border bg-card overflow-hidden">
      <div className="max-w-screen-md mx-auto px-6">

        {/* CTA block */}
        <FadeIn direction="up">
          <div className="py-16 flex flex-col items-center text-center gap-6 border-b border-border">
            <span
              className="text-xs font-semibold uppercase tracking-widest text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let's Connect
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-sm leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s build something{" "}
              <span className="text-primary">remarkable</span> together
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Whether it&apos;s a new product, a complex backend, or just a conversation — my inbox
              is always open.
            </p>
            <a
              href="mailto:abelshibabaw03@gmail.com"
              className="cursor-target inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] transition-all duration-300 shadow-sm"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Say Hello →
            </a>
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <FadeInStagger className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + nav */}
          <FadeInItem direction="up" className="flex flex-col sm:flex-row items-center gap-6">
            <Logo />
            <nav className="flex flex-wrap justify-center gap-5">
              {footerLinks.map(({ title, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="cursor-target text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {title}
                </Link>
              ))}
            </nav>
          </FadeInItem>

          {/* Socials */}
          <FadeInStagger className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <FadeInItem key={label} direction="up">
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="cursor-target h-9 w-9 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </FadeInStagger>

        {/* Copyright */}
        <FadeIn direction="up" delay={0.3}>
          <div className="pb-6 text-center">
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Abel Shibabaw. All rights reserved.
            </span>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
