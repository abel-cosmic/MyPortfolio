import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title:
    "Abel Shibabaw - Senior Full Stack Developer | React, Next.js, TypeScript Expert",
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
  authors: [{ name: "Abel Shibabaw", url: "https://abelshibabaw.com" }],
  creator: "Abel Shibabaw",
  publisher: "Abel Shibabaw",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://abelshibabaw.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Abel Shibabaw - Senior Full Stack Developer | React, Next.js, TypeScript Expert",
    description:
      "Expert Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable web applications with 5+ years of experience.",
    url: "https://abelshibabaw.com",
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
  category: "Technology",
  classification: "Business",
  referrer: "strict-origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
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
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Abel Shibabaw Portfolio",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abel Shibabaw",
      jobTitle: "Senior Full Stack Developer",
      url: "https://abelshibabaw.com",
      sameAs: [
        "https://github.com/abel-cosmic",
        "https://linkedin.com/in/abelshibabaw",
        "https://telegram.me/abel_cosmic",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "Ethiopia",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Full Stack Development",
        "Web Development",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <main>{children}</main>
          <div className="fixed bottom-4 right-0 z-0 max-md:hidden">
            <Image
              src="/anime/goku.png"
              alt="Anime touch"
              width={240}
              height={240}
              className="transition-opacity duration-300"
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
