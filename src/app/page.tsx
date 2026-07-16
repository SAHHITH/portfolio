"use client";

import MangaAbout from "@/components/MangaStyle/MangaAbout";
import FeaturedProjects from "@/components/MangaStyle/MangaFeatures";
import MangaHero from "@/components/MangaStyle/MangaHero";
import MangaCertificates from "@/components/MangaStyle/MangaCertificates";
import TechSection from "@/components/MangaStyle/MangaTech";

export default function Home() {
  return (
    <main className="min-h-screen ">
      {/* HERO */}
      <MangaHero />

      {/* ABOUT */}
      <MangaAbout />

      {/* PROJECTS */}
      <FeaturedProjects />

      {/* CERTIFICATES */}
      <MangaCertificates />

      {/* TECH */}
      <TechSection />

    </main>
  );
}
