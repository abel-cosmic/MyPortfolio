"use client";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" aria-label="Abel Shibabaw — Home" className="cursor-target">
    <span
      className="text-xl font-bold tracking-tight text-foreground select-none"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      Abel
      <span className="text-primary">.</span>
    </span>
  </Link>
);
