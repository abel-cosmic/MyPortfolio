import Goku from "@/components/ui/goku";
import { ThemeProvider } from "@/components/ui/theme-provider";
import StructuredData from "@/components/structured-data";
import type { Metadata, Viewport } from "next";
import { Lora, Poppins } from "next/font/google";
import Navbar from "@/components/navbar";

import "./globals.css";
import TargetCursor from "@/components/ui/target-cursor";
import Footer from "@/components/footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Abel Shibabaw - Senior Full Stack Developer",
  description:
    "Expert Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable web applications with 5+ years of experience in enterprise and startup environments.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Ethiopia Developer",
    "Remote Developer",
    "Freelance Developer",
    "Portfolio",
    "Web Development",
    "Modern Web Technologies",
    "MERN Stack",
    "Software Engineer",
  ],
  authors: [
    { name: "Abel Shibabaw", url: "https://abels-porfolio.vercel.app" },
  ],
  creator: "Abel Shibabaw",
  publisher: "Abel Shibabaw",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://abels-porfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Abel Shibabaw - Senior Full Stack Developer | React, Next.js, TypeScript Expert",
    description:
      "Expert Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable web applications with 5+ years of experience.",
    url: "https://abels-porfolio.vercel.app",
    siteName: "Abel Shibabaw Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abel Shibabaw - Senior Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Ethiopia",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Abel Shibabaw - Senior Full Stack Developer | React, Next.js, TypeScript Expert",
    description:
      "Expert Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable web applications with 5+ years of experience.",
    images: ["/og-image.png"],
    creator: "@abel_cosmic",
    site: "@abel_cosmic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  category: "Technology",
  classification: "Software Engineering",
  referrer: "strict-origin-when-cross-origin",
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={
        {
          "--font-heading": `${poppins.style.fontFamily}, ui-sans-serif, system-ui, sans-serif`,
          "--font-sans": `${lora.style.fontFamily}, ui-serif, Georgia, serif`,
        } as React.CSSProperties
      }
    >
      <body
        className={`${lora.variable} ${poppins.variable} antialiased`}
      >
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <StructuredData />
          <Navbar />
          <main>{children}</main>
          <Goku />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

