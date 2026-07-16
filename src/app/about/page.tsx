"use client";

import React from "react";
import { motion } from "framer-motion";
import OpsoraCTA from "@/components/OpsoraCTA";
import Image from "next/image";

type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Product & Interfaces",
    description: "Building clear, usable interfaces that expose complex systems without hiding important details.",
    skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "APIs & Systems",
    description: "Designing backend systems that are predictable, debuggable, and easy to extend.",
    skills: ["FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "AI & Decision Logic",
    description: "Working with data and models where correctness, interpretability, and constraints matter.",
    skills: ["Python", "Pandas", "PyTorch", "Scikit-learn", "RAG"],
  },
  {
    title: "Infra & Delivery",
    description: "Shipping end-to-end with reproducibility and long-term maintenance in mind.",
    skills: ["AWS", "Docker", "Git", "Firebase", "GitHub Actions"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-6 py-12 font-inter selection:bg-black selection:text-white overflow-x-hidden">
      {/* BACKGROUND TEXTURE */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1.5px, transparent 0)`,
          backgroundSize: "10px 10px",
        }}
      />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* HEADER PANEL - The "Classification" Card */}
        <header className="mb-12 md:mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center border-[4px] md:border-[6px] border-black p-6 md:p-8 bg-white shadow-[8px_8px_0px_black] md:shadow-[12px_12px_0px_black]">
          {/* PROFILE IMAGE */}
          <div className="md:col-span-4 relative group max-w-[280px] md:max-w-none mx-auto w-full">
            <div className="absolute -inset-2 border-2 border-black rotate-[-3deg] group-hover:rotate-0 transition-transform" />
            <div className="relative overflow-hidden border-[4px] border-black bg-gray-100">
              <Image
                src="/images/me.png"
                alt="G Shahith"
                fill
                className="w-full aspect-square object-cover grayscale brightness-90 contrast-125 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="md:col-span-8 space-y-4 md:space-y-6">
            <div className="inline-block bg-black text-white px-3 py-1 text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] uppercase">
              {"AI SYSTEMS // AUTOMATION // ENGINEERING"}
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bebas italic leading-[0.9] tracking-tighter uppercase">
              AI{" "}
              <span className="text-transparent [-webkit-text-stroke:1px_black]">
                SYSTEMS
              </span>{" "}
              ENGINEER
            </h1>

            <div className="space-y-3 md:space-y-4 border-l-[3px] md:border-l-[4px] border-black pl-4 md:pl-6">
              <p className="text-base sm:text-lg md:text-xl font-black leading-tight uppercase tracking-tighter">
                Reducing human effort through automation and decision-grounded intelligence.
              </p>
              <p className="text-sm md:text-lg text-black/70 leading-relaxed max-w-2xl font-medium">
                I am most interested in problems where decisions matter, data is imperfect, and systems must explain themselves.
              </p>
            </div>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT - Philosophy & Focus */}
          <aside className="lg:col-span-5 space-y-10 md:space-y-12">
            <div className="relative border-2 border-black p-5 md:p-6 bg-gray-50/50">
              <h2 className="font-bebas text-3xl md:text-4xl mb-3 md:mb-4 italic tracking-tight">
                HOW I THINK
              </h2>
              <p className="text-sm md:text-base text-black/80 font-medium leading-relaxed italic">
                &quot;Correctness before cleverness. Constraints before scale.
                Correctness before cleverness. Constraints before scale. Systems should be observable, debuggable, and explainable. &quot;
              </p>
              <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-black skew-x-[45deg] translate-x-3 md:translate-x-4 -translate-y-3 md:-translate-y-4" />
            </div>

            <div className="space-y-6">
              <h2 className="font-bebas text-2xl md:text-3xl tracking-widest text-black flex items-center gap-4">
                <div className="h-1 flex-grow bg-black" /> CURRENT_FOCUS
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 font-black uppercase text-[10px] md:text-xs tracking-widest group">
                  <span className="text-red-600">[01]</span>
                  <a
                    href="https://linkedin.com/company/opsora-in"
                    target="_blank"
                    className="hover:underline"
                  >
                    Building automation systems and workflow infrastructure.
                  </a>
                </li>
                <li className="flex items-start gap-4 font-black uppercase text-[10px] md:text-xs tracking-widest">
                  <span className="text-red-600">[02]</span>
                  Developing Custom Lead Generation & Mail Automation Engines
                </li>
                <li className="flex items-start gap-4 font-black uppercase text-[10px] md:text-xs tracking-widest">
                  <span className="text-red-600">[03]</span>
                  Open for Specialized Collaboration & High-Impact Freelance Roles
                </li>
              </ul>
            </div>

            <div className="pt-6 md:pt-8 border-t-[3px] md:border-t-4 border-black">
              <h2 className="font-bebas text-2xl md:text-3xl mb-1 md:mb-2 italic">BACKGROUND</h2>
              <p className="text-black/70 font-black uppercase text-[10px] md:text-xs leading-loose tracking-tight">
                MCA student (2024–26) @ Techno Main Salt Lake. <br />
                Focused on building practical AI systems with real-world applications.
              </p>
            </div>
          </aside>

          {/* RIGHT - Techniques (Skills) */}
          <section className="lg:col-span-7 space-y-12 md:space-y-16">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="group">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-bebas text-4xl md:text-5xl tracking-tighter group-hover:italic transition-all uppercase">
                    {group.title.split(" ")[0]}{" "}
                    <span className="text-transparent [-webkit-text-stroke:1px_black]">
                      {group.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-black/60 font-black uppercase tracking-tight mb-6 max-w-xl border-l-2 border-black/20 pl-4">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                      className="px-3 md:px-4 py-1 md:py-1.5 border-2 border-black font-black uppercase text-[9px] md:text-[10px] tracking-widest cursor-crosshair transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* FOOTER CTA */}
        <footer className="mt-20 md:mt-32 border-t-[6px] md:border-t-[8px] border-black pt-10 md:pt-12 pb-16 md:pb-20">
          <OpsoraCTA />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-[1.1] italic">
                If you&apos;re working on a problem where correctness matters,
                I&apos;m open to a conversation.
              </p>
            </div>

            <motion.a
              href="/contact"
              className="w-full md:w-auto text-center relative px-8 md:px-12 py-5 md:py-6 bg-black text-white font-bebas text-3xl md:text-4xl italic tracking-widest group overflow-hidden"
            >
              <span className="relative z-10">GET_IN_TOUCH →</span>
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </motion.a>
          </div>
        </footer>
        
      </motion.section>
    </main>
  );
}