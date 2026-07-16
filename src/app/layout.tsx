import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { FooterWrapper } from "@/components/FooterWrapper";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "G Shahith | AI & Systems Engineer",
  description: "Portfolio of G Shahith. Specializing in AI Automation, Market Intelligence, and Systems Engineering.",
  keywords: ["G Shahith", "Automation", "Lead Scraping", "Python AI", "Chennai Software Engineer", "Portfolio"],
  openGraph: {
    title: "G Shahith | AI & Systems Engineer",
    description: "Systems Engineer specializing in high-stakes automation and AI.",
    url: "https://opsora.in",
    images: [{ url: "/images/manga-pfp.png" }],
  },
};


import { PremiumEffects } from "@/components/PremiumEffects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PremiumEffects>
          <Navbar />

          <main className="flex-1">
            {children} <Analytics /> <SpeedInsights />
          </main>

          <FooterWrapper />
        </PremiumEffects>
      </body>
    </html>
  );
}
