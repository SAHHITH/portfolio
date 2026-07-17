"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "lucide-react"; // Added Zap for 'Energy'
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLink = (href: string) =>
    `relative transition-all duration-150 px-4 py-2 uppercase tracking-[0.2em] text-[5px] md:text-[10px] font-black group overflow-hidden ${
      pathname === href
        ? "text-white bg-black skew-x-[-12deg] scale-110 shadow-[4px_4px_0px_#ff000020]" // Subtle cursed glow
        : "text-black/70 hover:text-black hover:tracking-[0.25em]"
    }`;

  return (
    <header className="sticky top-0 z-[60] bg-white/70 backdrop-blur-md border-b-[6px] border-black transition-all duration-150">
      <nav className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        {/* Brand: JJK Title Card Style */}
        <Link
          href="/"
          className="group relative flex items-center gap-3 font-bebas leading-[0.8] tracking-tighter"
        >
          <Image src="/images/sg-logo.jpeg" alt="SG Logo" width={48} height={48} className="w-12 h-12 object-cover border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-black text-4xl group-hover:italic transition-all duration-150 italic">
                G{" "}
              </span>
            </div>
            <span className="text-transparent text-4xl [-webkit-text-stroke:1.5px_black] group-hover:text-black transition-colors duration-150">
              SHAHITH
            </span>
            {/* Decorative 'Seal' line */}
            <div className="absolute -bottom-1 left-14 w-0 h-1 bg-black group-hover:w-[calc(100%-3.5rem)] transition-all duration-150" />
          </div>
        </Link>


        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 mr-4">
            <Link href="/#projects" className={navLink("/#projects")}>
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-150 group-hover:w-full"></span>
            </Link>
            <Link href="/#certificates" className={navLink("/#certificates")}>
              Certificates
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-150 group-hover:w-full"></span>
            </Link>
            <Link href="/#about" className={navLink("/#about")}>
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-150 group-hover:w-full"></span>
            </Link>
            <Link href="/#contact" className={navLink("/#contact")}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-150 group-hover:w-full"></span>
            </Link>
          </div>

          <div className="h-6 w-[2px] bg-black rotate-[20deg]" />

          <div className="flex items-center gap-5 ml-4">
            <a
              href="https://www.linkedin.com/in/shahith-gilbert-379bb1333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:scale-125 transition-transform"
            >
              <Linkedin size={18} strokeWidth={2.5} />
            </a>
            <a
              href="https://github.com/SAHHITH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:scale-125 transition-transform"
            >
              <Github size={18} strokeWidth={2.5} />
            </a>
          </div>

          {/* Resume CTA */}
          <a
            href="/G_Shahith_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative ml-6 border-[3px] border-black bg-white px-8 py-2 text-xs font-black text-black uppercase tracking-[0.3em] 
             shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] 
             transition-all overflow-hidden group"
          >
            {/* Halftone Dot Overlay */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity"
              style={{
                backgroundImage: "radial-gradient(black 1.5px, transparent 0)",
                backgroundSize: "6px 6px",
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              RESUME{" "}
              <span className="text-[12px] opacity-40 group-hover:opacity-100 italic transition-opacity">
                [🔻]
              </span>
            </span>
          </a>
        </div>

        {/* Mobile Toggle: Rough cut */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border-2 border-black p-2 bg-black text-white"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-[2px] w-6 bg-white transition-transform ${open ? "rotate-45 translate-y-2.5" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 bg-white ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-8 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2.5" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu: 'Cursed Energy' Bleed */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 bg-black text-white z-[70] flex flex-col justify-center px-12 gap-8 overflow-hidden"
          >
            {/* Background Halftones */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(white 1.5px, transparent 0)",
                backgroundSize: "12px 12px",
              }}
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-18 right-8 text-white font-bebas text-2xl uppercase tracking-[0.5em] italic"
            >
              EXIT [×]
            </button>

            <div className="flex flex-col gap-8 relative z-10">
              {["projects", "certificates", "about", "contact"].map((item, idx) => (
                <Link
                  key={item}
                  href={`/#${item}`}
                  onClick={() => setOpen(false)}
                  className="group text-5xl font-bebas italic uppercase tracking-tighter transition-all flex items-center gap-4"
                >
                  <span className="text-sm not-italic opacity-40">
                    0 {idx + 1}
                  </span>
                  <span className="group-hover:pl-6 transition-all">
                    {item}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 space-y-5 relative z-10 border-t border-white/20 pt-8">
              <a
                href="/G_Shahith_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-black underline decoration-3 underline-offset-8 uppercase italic hover:text-gray-400"
              >
                VIEW_RESUME
              </a>
              <div className="flex mt-4 gap-8 font-bold uppercase tracking-widest text-xs">
                <a href="#" className="hover:line-through">
                  LinkedIn
                </a>
                <a href="#" className="hover:line-through">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
