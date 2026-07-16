"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function OpsoraCTA() {
  return (
    <section className="my-20 border-2 border-stone-100 bg-stone-100 p-8 md:p-12 relative overflow-hidden">
      {/* Halftone texture flipped to dark dots on light BG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 0)`, backgroundSize: '10px 10px' }} />
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-black tracking-[0.4em] text-stone-500 uppercase italic">
            Active_Consultancy // Opsora.in
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl text-stone-950 leading-none uppercase italic">
            SCALE YOUR <span className="text-transparent [-webkit-text-stroke:1px_#0c0a09]">OPERATIONS</span>
          </h2>
          <p className="text-stone-600 font-bold text-xs uppercase tracking-widest">
            Visit Opsora for production-grade automation and enterprise solutions.
          </p>
        </div>

        <motion.a
          href="https://opsora.in"
          target="_blank"
          whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95, rotateX: 15 }}
          className="flex items-center gap-4 bg-stone-950 text-stone-100 px-10 py-5 font-bebas text-3xl italic tracking-tighter group transition-all shadow-[8px_8px_0px_#999] transform-style-3d perspective-1000"
        >
          VISIT_OPSORA <ExternalLink size={24} className="group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </motion.a>
      </div>
    </section>
  );
}