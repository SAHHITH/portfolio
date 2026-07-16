"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { certificates, Certificate } from "@/data/certificates";

const CertificateCard = ({ title, issuer, issueDate, credentialId, skills, image, slug, index = 0 }: Certificate & { index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    className="h-full"
  >
    <Link href={`/certificates/${slug}`} className="block h-full outline-none focus:outline-none">
      <motion.div 
        whileHover={{ 
          y: -5, 
          boxShadow: "0px 20px 30px rgba(0,0,0,0.3)", 
          borderColor: "rgba(255,0,0,0.5)",
          transition: { duration: 0.15, ease: "easeOut" }
        }}
        className="relative border-[3px] md:border-[4px] border-black bg-white p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300 flex flex-col h-full transform-style-3d perspective-1000 group"
      >
        {/* IMAGE PANEL */}
        <div className="relative w-full aspect-video bg-black border-b-[3px] md:border-b-[4px] border-black overflow-hidden mb-5 md:mb-6">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity z-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 0)', backgroundSize: '8px 8px' }} />
          
          {/* Certificate Logo */}
          <div className="absolute inset-0 w-full h-full bg-zinc-900 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-500 p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={image} 
              alt={`${issuer} Logo`} 
              className="max-w-[60%] max-h-[60%] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML += `<span class="text-white/50 font-black tracking-widest text-lg md:text-xl uppercase p-4 text-center">${issuer}</span>`;
              }}
            />
          </div>
          
          <div className="absolute top-0 right-0 w-8 md:w-12 h-8 md:h-12 bg-white skew-x-[45deg] translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 z-30" />
        </div>

        {/* HEADER */}
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-3 md:mb-4 overflow-hidden">
              <motion.h3 className="font-bebas text-3xl md:text-4xl text-black leading-none uppercase tracking-tighter group-hover:italic transition-all group-hover:underline decoration-red-600 underline-offset-4 line-clamp-2 group-hover:-translate-y-1">
                {title}
              </motion.h3>
            </div>
            
            {/* DESCRIPTION / DETAILS */}
            <div className="flex flex-col gap-1 mb-5 md:mb-6 border-l-2 border-black pl-3">
              <p className="text-xs md:text-sm font-bold leading-tight text-black/80">
                {issuer}
              </p>
              <p className="text-[10px] font-bold text-black/50 uppercase">
                Issued: {issueDate}
              </p>
              {skills && (
                <p className="text-[10px] font-bold text-black/60 mt-1">
                  Skills: {skills}
                </p>
              )}
              {credentialId && (
                <p className="text-[9px] font-mono text-black/40 mt-1">
                  ID: {credentialId}
                </p>
              )}
            </div>
          </div>

          {/* VIEW BUTTON */}
          <div className="flex items-center justify-between pt-4 border-t border-black/10 mt-auto overflow-hidden">
            <span className="inline-flex items-center gap-2 font-black text-[10px] tracking-[0.2em] uppercase text-black group-hover:text-red-600 transition-all duration-300 group-hover:-translate-y-[3px] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] cursor-pointer">
              VIEW DETAILS <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  </motion.div>
);

export default function MangaCertificates() {
  return (
    <section id="certificates" className="relative max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-32 mb-24 md:mb-40 overflow-x-hidden scroll-mt-24">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 md:mb-16">
        <div>
          <div className="text-white/40 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-2">
            CERTIFIED // PROFESSIONAL DEVELOPMENT
          </div>
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-bebas text-5xl sm:text-7xl md:text-9xl text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] leading-none italic uppercase"
          >
            CERTIFICATES
          </motion.h2>
        </div>
        <div className="h-[2px] w-full md:flex-grow bg-black/10 mb-2 md:mb-4 relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute top-0 left-0 h-full bg-red-600/50" 
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {certificates.map((cert, idx) => (
          <CertificateCard key={idx} index={idx} {...cert} />
        ))}
      </div>

      {/* FOOTER DETAIL */}
      <div className="mt-8 md:mt-12 flex justify-end">
        <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-black/30">
          <Terminal size={12} /> Access_System_Logs // V.03
        </div>
      </div>
    </section>
  );
}
