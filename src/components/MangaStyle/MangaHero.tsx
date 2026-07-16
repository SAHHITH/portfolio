"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function MangaHero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  const smoothX = useSpring(mouseX, { stiffness: 1000, damping: 50 })
  const smoothY = useSpring(mouseY, { stiffness: 1000, damping: 50 })

  const rotateX = useTransform(smoothY, [-windowSize.height / 2, windowSize.height / 2], [5, -5])
  const rotateY = useTransform(smoothX, [-windowSize.width / 2, windowSize.width / 2], [-5, 5])
  const titleX = useTransform(smoothX, [-windowSize.width / 2, windowSize.width / 2], [-15, 15])
  const titleY = useTransform(smoothY, [-windowSize.height / 2, windowSize.height / 2], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent) => {
    // Throttle if needed, but framer-motion motion values are performant.
    mouseX.set(e.clientX - windowSize.width / 2)
    mouseY.set(e.clientY - windowSize.height / 2)
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[83vh] flex flex-col justify-start md:justify-center overflow-hidden bg-white text-black font-inter border-[7px] border-black m-2 md:m-2 perspective-[1000px]"
    >

      {/* HALFTONE TEXTURE */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#000 1.5px, transparent 0)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="relative z-20 w-full px-8 md:px-24 pt-12 md:pt-0">

        {/* HERO CONTENT */}
        <div className="max-w-5xl space-y-8">

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ x: titleX, y: titleY }}
          >
            <h1 
              className="text-7xl md:text-[11rem] font-bebas leading-[0.82] tracking-tighter italic bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-600 to-black bg-[length:200%_auto] animate-sweep"
              style={{ textShadow: "10px 10px 20px rgba(0,0,0,0.15), 2px 2px 0px rgba(0,0,0,0.8)" }}
            >
              G <br />
              SHAHITH
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-5"
          >

            {/* ROLE */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -5, rotate: 0 }}
              className="inline-block bg-black text-white px-6 py-3 text-lg md:text-xl font-bold uppercase tracking-tight rotate-[-1deg] shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[8px_8px_15px_rgba(0,0,0,0.4)] cursor-default"
            >
              AI Engineer & Full Stack Developer
            </motion.div>

            {/* DESCRIPTION */}
            <div className="max-w-2xl space-y-4">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-black/75 tracking-tight">
                Building intelligent AI-powered applications, scalable full-stack web platforms, automation systems, and modern software solutions using Machine Learning, Generative AI, FastAPI, React, Next.js, Python, and cloud technologies.
              </p>

              {/* METRICS */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "AI Engineer",
                  "Full Stack",
                  "Gen AI",
                  "FastAPI",
                  "Next.js",
                  "React",
                  "Python",
                  "Machine Learning",
                  "Automation",
                  "Cloud",
                ].map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
                    className="border-2 border-black px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.18em] hover:border-gray-500 hover:text-gray-800 transition-colors cursor-default bg-white"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* LOCATION */}
              <p className="text-xs font-black tracking-[0.25em] uppercase text-black/40 pt-2">
                Based in Chennai, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CHARACTER IMAGE */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[40%] z-10 pointer-events-none flex items-center justify-end py-12 pr-6 md:pr-12 lg:pr-16">
        <motion.div
          style={{ rotateX, rotateY, z: 50 }}
          className="relative flex items-center justify-end w-full h-full transform-style-3d"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1, rotate: [0, 2, 0] }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
            }}
            whileHover={{ scale: 1.03 }}
            className="relative flex items-center justify-end w-full h-full drop-shadow-2xl"
          >
            {/* INK SPLASH */}
            <Image
              src="/images/splash.png"
              className="absolute right-10 w-[150%] max-w-none opacity-20 scale-x-[-1] translate-x-1/4"
              alt="Splash effect"
              width={800}
              height={800}
            />

            {/* MAIN IMAGE */}
            <Image
              src="/images/sketch-portrait-white.jpg"
              alt="G Shahith portrait"
              className="relative z-20 w-[90%] md:w-[85%] h-full object-contain object-right select-none mix-blend-multiply"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 65%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 65%, transparent 100%)'
              }}
              width={800}
              height={800}
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-10 z-30 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="[writing-mode:vertical-lr] font-black text-[10px] tracking-[0.5em] uppercase opacity-40">
            Explore Work
          </span>

          <div className="w-[2px] h-20 bg-gradient-to-b from-black to-transparent" />
        </div>
      </div>
    </section>
  )
}