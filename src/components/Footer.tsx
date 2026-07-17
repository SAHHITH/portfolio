"use client";

import { Download, Github, Linkedin, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Footer = () => (
  <footer id="contact" className="relative bg-white pt-24 pb-12 overflow-hidden border-t-[12px] border-black scroll-mt-24">
    
    {/* CURSED ENERGY OVERLAY (Ink Bleeds & Halftones) */}
    <div className="absolute inset-0 z-0 pointer-events-none">
       {/* Rough ink texture in the corner */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 bg-[url('/images/splash.png')] bg-contain bg-no-repeat rotate-90 scale-150" />
      {/* Heavy halftone screen */}
      <div className="absolute inset-0 opacity-[0.04]" 
           style={{ backgroundImage: `radial-gradient(#000 2px, transparent 0)`, backgroundSize: '10px 10px' }} />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="grid md:grid-cols-12 gap-8 items-end">
        
        {/* PANEL 1: THE TITLE (Aggressive JJK Logo Style) */}
        <div className="md:col-span-7 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-black text-white text-[10px] font-black tracking-[0.5em] px-3 py-1 mb-2"
          >
            CONTACT // COLLABORATION
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-bebas text-7xl md:text-[6rem] lg:text-[7.5rem] leading-[0.8] tracking-tighter italic text-black uppercase flex flex-col md:flex-row md:items-end gap-4 md:gap-8"
          >
            <Image src="/images/sg-logo.jpeg" alt="SG Logo" width={128} height={128} className="w-24 h-24 md:w-32 md:h-32 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
            <div>
              G <br />
              <span className="relative">
                SHAHITH
                {/* Scratchy "Pen Strike" under the name */}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-black skew-x-[-20deg]" />
              </span>
            </div>
          </motion.h2>
        </div>

        {/* PANEL 2: THE DATA (Technical Stats) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-5 flex flex-col gap-6 border-b-[6px] border-black pb-4 relative z-20"
        >
           <div className="space-y-1">
             <p className="font-black text-[10px] uppercase tracking-widest text-black/70 flex items-center gap-2">
               <Zap size={10} fill="black" /> LLM Systems · RAG · Real-Time Workflows
             </p>
             <p className="font-bold text-lg text-black leading-tight uppercase">
               Building AI systems for automation, retrieval, and intelligent workflows.
             </p>
           </div>
           
           <div className="flex gap-4">
             <motion.a 
               whileHover={{ scale: 1.1, rotate: 12, boxShadow: "0px 0px 15px rgba(255,0,0,0.5)", borderColor: "rgba(255,0,0,0.5)" }}
               href="https://github.com/SAHHITH" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="p-2 border-2 border-black text-black/70 hover:bg-black hover:text-white transition-colors duration-300"
             >
               <Github size={20} />
             </motion.a>
             <motion.a 
               whileHover={{ scale: 1.1, rotate: -12, boxShadow: "0px 0px 15px rgba(255,0,0,0.5)", borderColor: "rgba(255,0,0,0.5)" }}
               href="https://www.linkedin.com/in/shahith-gilbert-379bb1333" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="p-2 border-2 border-black text-black/70 hover:bg-black hover:text-white transition-colors duration-300"
             >
               <Linkedin size={20} />
             </motion.a>
           </div>
        </motion.div>
      </div>

      {/* PANEL 3: THE ACTION (The "Black Flash" Resume Button) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-20 flex flex-col md:flex-row justify-between items-center gap-12"
      >
        <div className="flex flex-col gap-1">
          <span className="font-black text-xs uppercase tracking-[0.4em] text-black">Inquiries</span>
          <a href="mailto:shahithgilbert42@gmail.com" className="text-2xl md:text-4xl font-bebas text-black hover:italic transition-all">
            shahithgilbert42@gmail.com
          </a>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotateX: 10 }}
          href="/G_Shahith_Resume.pdf"
          download="G_Shahith_Resume.pdf"
          className="group relative px-12 py-6 bg-black text-white font-bebas text-3xl tracking-widest italic overflow-hidden transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transform-style-3d"
        >
          {/* Movement Lines Effect inside button */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity">
            <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#fff_5px,#fff_10px)]" />
          </div>
          
          <span className="relative z-10 flex items-center gap-4 group-hover:text-red-500 transition-colors">
             DOWNLOAD RESUME <Download size={24} strokeWidth={3} className="group-hover:translate-y-1 transition-transform" />
          </span>
        </motion.a>
      </motion.div>

      {/* THE FOOTNOTE */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-24 pt-4 border-t-2 border-black flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-black/70"
      >
        <span>CHENNAI // INDIA</span>
        <span className="text-black">© 2026 G SHAHITH</span>
        <div className="flex gap-4">
        </div>
      </motion.div>
    </div>
  </footer>
);