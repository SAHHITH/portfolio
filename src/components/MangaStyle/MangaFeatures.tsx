"use client";

import { ExternalLink, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  id: string;
  desc: string;
  tech: string[];
  image: string; 
}

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const ProjectCard = ({ title, id, desc, tech, image, index }: ProjectCardProps & { index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 1000, damping: 50 });
  const mouseYSpring = useSpring(y, { stiffness: 1000, damping: 50 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="transform-style-3d perspective-1000"
    >
      <Link href={`/projects/${id}`} className="block group">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          whileHover={{ z: 20, boxShadow: "0px 20px 30px rgba(0,0,0,0.3)", borderColor: "rgba(255,0,0,0.5)" }}
          className="relative border-[3px] md:border-[4px] border-black bg-white p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300 transform-style-3d"
        >
          {/* PROJECT IMAGE PANEL */}
          <div className="relative w-full aspect-video bg-gray-50 border-b-[3px] md:border-b-[4px] border-black overflow-hidden mb-5 md:mb-6">
            <div className="absolute inset-0 opacity-5 md:opacity-10 group-hover:opacity-20 transition-opacity z-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 0)', backgroundSize: '8px 8px' }} />
            
            <motion.div className="w-full h-full" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
              <Image 
                src={image} 
                alt={`${title} Preview`}
                fill
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            
            <div className="absolute top-0 right-0 w-8 md:w-12 h-8 md:h-12 bg-black skew-x-[45deg] translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 z-30" />
          </div>

          {/* HEADER */}
          <div className="flex justify-between items-start mb-3 md:mb-4 overflow-hidden">
            <motion.div className="group-hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-bebas text-3xl md:text-4xl text-black leading-none uppercase tracking-tighter group-hover:italic transition-all group-hover:underline decoration-red-600 underline-offset-4">
                {title}
              </h3>
            </motion.div>
            <ExternalLink size={18} className="text-black group-hover:rotate-12 transition-transform" />
          </div>

          {/* DESCRIPTION */}
          <p className="text-xs md:text-sm font-bold leading-tight text-black/80 mb-5 md:mb-6 line-clamp-2 border-l-2 border-black pl-3">
            {desc}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 pt-4 border-t border-black/10">
            {tech.map((t, i) => (
              <motion.span 
                key={t} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-[8px] md:text-[9px] font-black uppercase tracking-tighter md:tracking-widest bg-black text-white px-1.5 md:px-2 py-0.5 skew-x-[-10deg]"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-32 mb-24 md:mb-40 overflow-x-hidden scroll-mt-24">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 md:mb-16">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-bebas text-5xl sm:text-7xl md:text-9xl text-white/60 leading-none italic uppercase "
        >
          ACTIVE <br /> <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">PROJECTS</span>
        </motion.h2>
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
        <ProjectCard
          index={0}
          title="METAHUMAN CHAT BOT"
          id="metahuman-chat-bot"
          image="/images/metahuman.png"
          desc="An AI-powered conversational digital human developed using Unreal Engine 5, MetaHuman Creator, and OpenAI. The system enables realistic human-like conversations through natural language processing, voice interaction, facial animation, and intelligent AI responses for immersive user experiences."
          tech={["Unreal Engine 5", "MetaHuman Creator", "OpenAI", "FastAPI"]}
        />

        <ProjectCard
          index={1}
          title="AQUACAST"
          id="aquacast"
          image="/images/aquacast.png"
          desc="An AI-powered marine weather and fishing intelligence platform designed to help fishermen with live weather forecasting, fishing zone prediction, GPS navigation, emergency SOS alerts, offline maps, satellite synchronization, and real-time ocean monitoring for safer and smarter fishing."
          tech={["React", "FastAPI", "Mapbox", "AI", "Weather APIs"]}
        />

        <ProjectCard
          index={2}
          title="CARBONTRACK AI"
          id="carbontrack-ai"
          image="/images/carbontrack.png"
          desc="A full-stack sustainability platform that tracks carbon emissions, visualizes environmental impact, provides AI-powered sustainability insights, rewards eco-friendly activities through challenges and achievements, and encourages greener living with an interactive analytics dashboard."
          tech={["Next.js", "Node.js", "MongoDB", "AI"]}
        />
      </div>

      {/* FOOTER DETAIL */}
      <div className="mt-8 md:mt-12 flex justify-end">
        <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-black/30">
          <Terminal size={12} /> Access_System_Logs // V.02
        </div>
      </div>
    </section>
  );
}