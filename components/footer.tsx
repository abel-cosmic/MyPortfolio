"use client";
import Link from "next/link";
import { Logo } from "./navbar/logo";
import { GithubLogo, LinkedIn, Telegram } from "./icons";

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
    <footer id="footer" className="border-t border-border bg-card">
      <div className="max-w-screen-md mx-auto px-6">

        {/* CTA block */}
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
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Say Hello →
          </a>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + nav */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Logo />
            <nav className="flex flex-wrap justify-center gap-5">
              {footerLinks.map(({ title, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
              >
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pb-6 text-center">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Abel Shibabaw. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
