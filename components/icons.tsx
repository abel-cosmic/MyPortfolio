import { Github, Linkedin, Send, type LucideProps } from "lucide-react";
import { SVGProps } from "react";

/**
 * Icons library using Lucide React for consistency.
 * Custom icons are designed to match Lucide's aesthetic.
 */

export const GithubLogo = Github;
export const LinkedIn = Linkedin;
export const Telegram = Send;

export const UpworkLogo = (props: LucideProps) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 8v4a2 2 0 1 0 4 0v-4" />
    <path d="M16 8v5a2 2 0 1 1-4 0v-1" />
  </svg>
);
