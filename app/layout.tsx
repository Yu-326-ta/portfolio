import type { Metadata } from "next";
import { Orbitron, Rajdhani, Aldrich } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
});

const aldrich = Aldrich({ 
  subsets: ["latin"],
  variable: "--font-aldrich",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Yuta Yoshinaga - Portfolio",
  description: "Personal portfolio of Yuta Yoshinaga, a software engineer specializing in backend development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${aldrich.variable}`}>
      <body className="font-secondary">
        {children}
        <Analytics />
      </body>
    </html>
  );
}