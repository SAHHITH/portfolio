"use client";

import { useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export function PremiumEffects({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("SYSTEM INITIALIZING...");
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [phase, setPhase] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isMoving = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animateRing = () => {
      if (isMoving) {
        // Less smoothing for faster response (0.4 instead of 0.15)
        ringX += (mouseX - ringX) * 0.4;
        ringY += (mouseY - ringY) * 0.4;
        if (cursorRing) {
          cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        }
      }
      requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    requestAnimationFrame(animateRing);

    // Hover effects
    const interactiveElements = document.querySelectorAll("a, button, img, .project-card, input, textarea");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorRing) cursorRing.classList.add("cursor-hover");
        if (el.tagName.toLowerCase() === "img") {
          if (cursorRing) cursorRing.classList.add("cursor-img-hover");
        }
      });
      el.addEventListener("mouseleave", () => {
        if (cursorRing) {
          cursorRing.classList.remove("cursor-hover");
          cursorRing.classList.remove("cursor-img-hover");
        }
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [loading]);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoading(false);
      return;
    }

    // Loading sequence
    const runSequence = async () => {
      // SYSTEM INITIALIZING
      await new Promise((r) => setTimeout(r, 600));
      setPhase(1);

      // Loading AI Models
      for (let i = 0; i <= 100; i += 5) {
        setProgress1(i);
        await new Promise((r) => setTimeout(r, 30));
      }
      
      setPhase(2);
      
      // Loading Portfolio
      for (let i = 0; i <= 100; i += 5) {
        setProgress2(i);
        await new Promise((r) => setTimeout(r, 30));
      }

      setPhase(3);
      setLoadingText("Authenticating...");
      await new Promise((r) => setTimeout(r, 600));

      setPhase(4);
      await new Promise((r) => setTimeout(r, 800));

      setLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    };

    runSequence();
  }, []);

  return (
    <>
      <div id="cursor-dot" className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block" />
      <div id="cursor-ring" className="fixed top-0 left-0 w-8 h-8 border border-black/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 mix-blend-difference hidden md:block" />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-white z-[9997] origin-left mix-blend-difference"
        style={{ scaleX }}
        id="scroll-progress"
      />

      {/* AI Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-black rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center font-mono text-white overflow-hidden"
          >
            {/* Animated dot grid background */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
                animation: "drift 20s linear infinite",
              }}
            />
            {/* AI Ambient effects placeholder */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/images/splash.png')] bg-cover bg-center animate-pulse rotate-90 mix-blend-screen" />

            <div className="relative z-10 w-full max-w-md px-6 text-sm sm:text-base space-y-6">
              {phase >= 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {phase === 0 ? "SYSTEM INITIALIZING..." : "SYSTEM INITIALIZED"}
                </motion.div>
              )}
              
              {phase >= 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between items-center">
                  <span>Loading AI Models</span>
                  <div className="flex-1 mx-4 bg-white/20 h-4 rounded overflow-hidden">
                    <div className="bg-white h-full" style={{ width: `${progress1}%` }} />
                  </div>
                  <span>{progress1}%</span>
                </motion.div>
              )}

              {phase >= 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between items-center">
                  <span>Loading Portfolio</span>
                  <div className="flex-1 mx-4 bg-white/20 h-4 rounded overflow-hidden">
                    <div className="bg-white h-full" style={{ width: `${progress2}%` }} />
                  </div>
                  <span>{progress2}%</span>
                </motion.div>
              )}

              {phase >= 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-400">
                  {loadingText}
                </motion.div>
              )}

              {phase >= 4 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl sm:text-2xl mt-8 font-bold text-center tracking-widest text-white">
                  Welcome, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">G SHAHITH</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: loading ? 0 : 1, filter: loading ? "blur(10px)" : "blur(0px)" }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
      <style jsx global>{`
        body { cursor: none; }
        #cursor-dot, #cursor-ring {
          will-change: transform;
        }
        .cursor-hover { transform: scale(1.5); background-color: rgba(255, 255, 255, 0.1); border-color: white; mix-blend-mode: difference; }
        .cursor-img-hover { transform: scale(2); border-radius: 4px; }
        @keyframes drift { from { background-position: 0 0; } to { background-position: -60px -60px; } }
      `}</style>
    </>
  );
}
