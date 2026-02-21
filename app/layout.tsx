import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "900"],
});

export const metadata: Metadata = {
  title: "Manan Gupta | Portfolio",
  description:
    "Full-stack engineer building digital architecture at the intersection of performance and aesthetics.",
};

import BackgroundEffects from "./components/BackgroundEffects";
import Header from "./components/Header";
import TechMarquee from "./components/TechMarquee";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${playfairDisplay.variable} antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white font-display overflow-x-hidden`}
      >
        <div className="relative min-h-screen flex flex-col">
          <BackgroundEffects />
          <Header />
          <TechMarquee />
          <main className="flex-1 w-full relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
