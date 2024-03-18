import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../utils/providers/theme";
import {Toaster} from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abel Shibabaw's Portfolio",
  description:
    "Explore the innovative and dynamic world of Abel Shibabaw, a passionate software developer specializing in front-end technologies and UI/UX design. Discover projects that blend functionality with aesthetics, powered by the latest tech stacks.",
  keywords:
    "Abel Shibabaw, Software Developer, Front-end Developer, UI/UX Design, React Developer, Next.js, Portfolio,Back-end Developer,Computer Science",
  authors: [{ name: "Abel Shibabaw" }],
  viewport: "width=device-width, initial-scale=1.0",
  // Remove the 'charset' property
  themeColor: "hsl(var(---background))", // You can set this to any color that represents your personal brand or leave it as a dark shade.
  // Remove the 'language' property
  robots: "index, follow", // This tells search engines that your website should be indexed and followed.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />

      </body>
    </html>
  );
}
