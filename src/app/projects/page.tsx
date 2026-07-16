"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

interface ProjectCardProps {
  title: string;
  id: string;
  desc: string;
  tech: string[];
  image: string;
}

const ProjectCard = ({ title, id, desc, tech, image }: ProjectCardProps) => (
  <Link href={`/projects/${id}`} className="block group">
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative border-[3px] md:border-[4px] border-black bg-white p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-none group-hover:translate-x-[3px] md:group-hover:translate-x-[4px] group-hover:translate-y-[3px] md:group-hover:translate-y-[4px]"
    >
      <div className="relative w-full aspect-video bg-gray-50 border-b-[3px] md:border-b-[4px] border-black overflow-hidden mb-5 md:mb-6">
        <div className="absolute inset-0 opacity-5 md:opacity-10 group-hover:opacity-20 transition-opacity z-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 0)', backgroundSize: '8px 8px' }} />
        <Image 
          src={image} 
          alt={`${title} Preview`}
          fill
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-0 right-0 w-8 md:w-12 h-8 md:h-12 bg-black skew-x-[45deg] translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 z-30" />
      </div>
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div>
          <h3 className="font-bebas text-3xl md:text-4xl text-black leading-none uppercase tracking-tighter group-hover:italic transition-all group-hover:underline decoration-red-600 underline-offset-4">
            {title}
          </h3>
        </div>
        <ExternalLink size={18} className="text-black group-hover:rotate-12 transition-transform" />
      </div>
      <p className="text-xs md:text-sm font-bold leading-tight text-black/80 mb-5 md:mb-6 line-clamp-2 border-l-2 border-black pl-3">
        {desc}
      </p>
      <div className="flex flex-wrap gap-1.5 md:gap-2 pt-4 border-t border-black/10">
        {tech.map((t: string) => (
          <span key={t} className="text-[8px] md:text-[9px] font-black uppercase tracking-tighter md:tracking-widest bg-black text-white px-1.5 md:px-2 py-0.5 skew-x-[-10deg]">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  </Link>
);

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-stone-950 px-4 md:px-6 py-12 md:py-24 text-stone-100 font-inter overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <header className="relative z-10 max-w-7xl mx-auto mb-16 md:mb-32 border-l-[8px] md:border-l-[12px] border-stone-100 pl-5 md:pl-8">
        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-bebas leading-[0.85] md:leading-[0.8] tracking-tighter italic uppercase">
          PROJECT <br />
          <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4] md:[-webkit-text-stroke:2px_#f5f5f4]">
            ARCHIVES
          </span>
        </h1>
        <p className="text-stone-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mt-4 md:mt-6 text-[9px] md:text-xs italic">
          AI Systems // Automation // Research Projects
        </p>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              id={project.id}
              desc={project.description}
              tech={project.tech}
              image={project.images[0]}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
