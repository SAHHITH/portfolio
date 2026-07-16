"use client";

import { projects } from "@/data/projects";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";

export default function SingleProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const project = projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-950 px-4 md:px-6 py-12 md:py-24 text-stone-100 font-inter overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        <button 
          onClick={() => {
            router.push("/#projects");
          }}
          className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-100 transition-colors font-black uppercase text-[10px] tracking-widest border border-stone-800 px-4 py-2 hover:border-stone-500"
        >
          <ArrowLeft size={14} /> Back to Projects
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center group"
        >
          {/* IMAGE PANEL */}
          <motion.div 
            initial={{ scale: 1.2, opacity: 0, x: -100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 relative order-1"
          >
            <div className="absolute -inset-2 md:-inset-4 border-1 border-stone-800 rotate-[-1.5deg] group-hover:rotate-0 transition-transform duration-500" />
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video border-[2px] md:border-[8px] border-stone-100 bg-stone-900 overflow-hidden shadow-[20px_20px_0px_rgba(255,255,255,0.02)] transform-style-3d perspective-1000"
            >
              <Image
                src={project.images[0]}
                className="object-cover w-full h-full opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                alt={project.name}
                fill
              />
            </motion.div>
          </motion.div>

          {/* TEXT PANEL */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-5 space-y-6 md:space-y-8 order-2"
          >
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-bebas text-5xl md:text-7xl leading-none tracking-tighter uppercase italic text-stone-100"
              >
                {project.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-stone-500"
              >
                Category: {project.category}
              </motion.p>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-xl font-medium leading-tight text-stone-400 border-l-4 border-stone-800 pl-4 italic"
            >
              {project.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2"
            >
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  className="border border-stone-700 text-stone-300 text-[8px] md:text-[10px] font-black px-2 py-1 uppercase tracking-tighter hover:bg-stone-100 hover:text-stone-950 transition-colors"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="pt-6 border-t border-stone-800/50"
            >
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 text-stone-600">
                Core_Focus // <span className="text-stone-100 italic">{project.focus}</span>
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-4 font-bebas text-2xl md:text-2xl text-stone-100 hover:italic hover:pl-4 transition-all group/link"
              >
                OPEN_GITHUB → <span className="group-hover/link:translate-x-2 transition-transform text-red-900">→</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.article>
      </div>
    </main>
  );
}
