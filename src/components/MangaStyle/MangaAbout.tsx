"use client"

import { motion } from "framer-motion"

export default function MangaAbout() {
  return (
    // Switched to bg-stone-950 for a deep, ink-black base
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 mt-32 mb-40 font-inter bg-stone-950 py-20 border-y border-stone-800 scroll-mt-24">

      {/* 1. THE "CURSED" GLITCH OVERLAY (Inverted for Dark Mode) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.05, 0] }}
        transition={{ duration: 0.2, repeat: 1, repeatDelay: 3 }}
        className="absolute inset-0 z-0 bg-[url('/images/splash.png')] bg-fixed pointer-events-none grayscale invert opacity-5"
      />

      <div className="relative z-10 grid md:grid-cols-12 gap-8 md:gap-16 items-start">

        {/* PANEL LEFT: High Contrast Title */}
        <div className="md:col-span-5 lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-[12px] border-stone-100 pl-6"
          >
            <h2 className="font-bebas text-7xl md:text-8xl text-stone-100 leading-[0.8] tracking-tighter italic uppercase">
              About <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4] hover:text-stone-100 transition-all duration-500 cursor-default">
                ME
              </span>
            </h2>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-stone-500">
              {"AI ENGINEERING • FULL STACK DEVELOPMENT • MODERN WEB TECHNOLOGIES"}
            </p>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[8px] bg-stone-100 skew-x-[-20deg]"
          />
        </div>

        {/* PANEL RIGHT: Muted Grey Content */}
        <div className="md:col-span-7 lg:col-span-8 space-y-12">

          {/* Mission Statement (High Vis White) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black leading-[1] tracking-tighter text-stone-100 uppercase"
          >
            <p>Building AI-powered</p>
            <span className="relative inline-block mt-2 group">
              <span className="relative z-10 group-hover:text-stone-950 transition-colors duration-300">
                FULL STACK APPLICATIONS.
              </span>
              {/* Inversion effect: fills white on hover */}
              <span className="absolute inset-0 bg-stone-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
            </span>
          </motion.div>

          {/* Categorized Focus Areas (Grey Tones) */}
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 pt-8 border-t-[4px] border-stone-800">

            {/* Sector 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <h3 className="font-bebas text-3xl tracking-tight text-stone-100 italic">
                01. AI ENGINEERING <span className="text-sm not-italic text-stone-600">{"// DEVELOPMENT"}</span>
              </h3>
              <p className="text-base font-medium leading-snug text-stone-400">
                Designing intelligent AI-powered applications using <span className="text-stone-200 font-black italic">Machine Learning, Generative AI, APIs</span>, and modern backend architectures to solve real-world problems efficiently.
              </p>
            </motion.div>

            {/* Sector 02 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="font-bebas text-3xl tracking-tight text-stone-100 italic">
                02. FULL STACK <span className="text-sm not-italic text-stone-600">{"// WEB DEVELOPMENT"}</span>
              </h3>
              <p className="text-base font-medium leading-snug text-stone-400">
                Developing responsive, scalable, and production-ready web applications using <span className="text-stone-200 font-black italic">React, Next.js, Node.js, Express, FastAPI</span>, databases, cloud services, and modern deployment workflows.
              </p>
            </motion.div>
          </div>

          {/* Status Bar (Terminal Style) */}
          <motion.div
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            className="flex items-center justify-between p-4 border-2 border-stone-800 bg-transparent group transition-all"
          >
            <div className="flex items-center gap-4">
              {/* Muted white pulse */}
              <div className="w-3 h-3 bg-stone-700 rounded-full animate-pulse shadow-[0_0_10px_rgba(120,113,108,0.3)] group-hover:bg-red-600 transition-colors" />
              <span className="text-[12px] font-black uppercase tracking-[0.3em] text-stone-500">
                {"CURRENTLY BUILDING // CHENNAI, INDIA"}
              </span>
            </div>
            {/* <span className="text-[10px] font-bold text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity uppercase">
              whatt
            </span> */}
          </motion.div>

        </div>
      </div>
    </section>
  )
}