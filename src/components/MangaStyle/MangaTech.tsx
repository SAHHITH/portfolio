"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const SKILL_DATA = [
  {
    id: "fullstack",
    label: "FULL STACK",
    sub: "DEVELOPMENT // WEB & MOBILE",
    tools: [
      { name: "React", img: "/tech-icons/react.svg" },
      { name: "Next.js", img: "/tech-icons/nextjs.svg" },
      { name: "TypeScript", img: "/tech-icons/typescript.svg" },
      { name: "JavaScript", img: "/tech-icons/javascript.svg" },
      { name: "Node.js", img: "/tech-icons/nodejs.svg" },
      { name: "Express.js", img: "/tech-icons/expressjs.svg" },
      { name: "FastAPI", img: "/tech-icons/fastapi.svg" },
      { name: "MongoDB", img: "/tech-icons/mongodb.svg" },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Firebase", img: "/tech-icons/firebase.svg" },
      { name: "Tailwind CSS", img: "/tech-icons/tailwindcss.svg" },
      { name: "Git & GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
    ],
    description: "Building scalable, responsive, and production-ready web and mobile applications from frontend development to backend APIs, databases, authentication, deployment, and cloud infrastructure."
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    sub: "ARTIFICIAL INTELLIGENCE // GENERATIVE AI",
    tools: [
      { name: "Python", img: "/tech-icons/python.svg" },
      { name: "PyTorch", img: "/tech-icons/pytorch.svg" },
      { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-learn", img: "/tech-icons/scikit-learn.svg" },
      { name: "OpenAI API", img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
      { name: "LangChain", img: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "LangGraph", img: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "RAG", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg" },
      { name: "Hugging Face", img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "Pandas", img: "/tech-icons/pandas.svg" },
      { name: "NumPy", img: "/tech-icons/numpy.svg" },
      { name: "OpenCV", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" }
    ],
    description: "Designing intelligent AI systems using machine learning, deep learning, large language models, retrieval-augmented generation, computer vision, and modern AI frameworks to solve real-world problems."
  },
  {
    id: "devops-cloud",
    label: "DEVOPS & CLOUD",
    sub: "DEPLOYMENT // INFRASTRUCTURE",
    tools: [
      { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "AWS", img: "/tech-icons/aws.svg" },
      { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      { name: "Microsoft Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Netlify", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
      { name: "Render", img: "https://intellyx.com/wp-content/uploads/2019/08/Render-cloud-logo.png" },
      { name: "GitHub Actions", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "Nginx", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
      { name: "REST APIs", img: "/tech-icons/fastapi.svg" },
      { name: "JWT Auth", img: "https://img.icons8.com/color/48/000000/json-web-token.png" }
    ],
    description: "Deploying scalable AI and full-stack applications using modern cloud platforms, containerization, CI/CD pipelines, API management, monitoring, and production infrastructure."
  }
]

export default function TechTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 bg-white font-inter overflow-hidden">
      
      {/* SECTION TITLE: Scaled for mobile viewports */}
      <div className="mb-8 flex flex-col items-start border-l-[8px] md:border-l-[12px] border-black pl-5 md:pl-8">
        <h2 className="text-5xl sm:text-6xl md:text-[8rem] font-bebas leading-[0.8] tracking-tighter italic uppercase text-black">
          TECH <br className="md:hidden" />
          <span className="text-transparent [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:1.5px_black]">STACK</span>
        </h2>
      </div>

      {/* 1. RESPONSIVE TAB SELECTOR: Vertical on mobile, Horizontal on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[3px] md:border-[4px] border-black relative z-10">
        {SKILL_DATA.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`relative py-4 md:h-23 overflow-hidden transition-all duration-300 border-black border-b-[3px] md:border-b-0 md:border-r-[4px] last:border-b-0 last:border-r-0 ${
              activeTab === idx ? "bg-black text-white" : "bg-white text-black hover:bg-gray-50"
            }`}
          >
            {/* Diagonal background accent hidden on smallest screens to keep text clear */}
            <div className="hidden sm:block absolute inset-0 z-0 opacity-10 pointer-events-none border-r-[1px] border-black skew-x-[-15deg]" />
            <div className="relative z-10 flex flex-col items-start px-6 md:px-8 justify-center h-full text-left">
              <span className="text-[8px] md:text-[10px] font-black tracking-widest uppercase opacity-60 italic">{tab.sub}</span>
              <h3 className="font-bebas text-2xl md:text-4xl tracking-tighter uppercase italic">{tab.label}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* 2. CONTENT PANEL */}
      <div className="relative border-x-[3px] border-b-[3px] md:border-x-[4px] md:border-b-[4px] border-black p-5 md:p-8 min-h-[500px] md:min-h-[450px] bg-white shadow-[10px_10px_0px_rgba(0,0,0,0.05)] md:shadow-[20px_20px_0px_rgba(0,0,0,0.05)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col md:grid md:grid-cols-12 gap-8"
          >
            {/* TEXT SIDE */}
            <div className="md:col-span-5 space-y-4">
              <div className="inline-block border-2 border-black px-2 md:px-3 py-1 text-[8px] md:text-[10px] font-black text-black/80 uppercase tracking-widest">
                Operational Registry // 0{activeTab + 1}
              </div>
              <h4 className="text-2xl sm:text-3xl md:text-5xl font-black leading-[1.1] text-black tracking-tighter uppercase">
                {SKILL_DATA[activeTab].description}
              </h4>
              <p className="text-[10px] md:text-sm font-medium text-black/60 uppercase pt-4 border-t-2 border-black/10 leading-relaxed">
                Utilizing a versatile arsenal for <span className="text-black font-black italic underline decoration-2 underline-offset-4 uppercase">AI & Full Stack</span> enterprise solutions.
              </p>
            </div>

            {/* TOOLS GRID: 2 columns on all screens, but adjusted heights */}
            <div className="md:col-span-7 grid grid-cols-2 gap-2 md:gap-3">
              {SKILL_DATA[activeTab].tools.map((tool, i) => (
                <motion.div 
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10, 
                    rotateX: 8, 
                    rotateY: -8, 
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.4), 0px 0px 20px rgba(255,0,0,0.3)",
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                  className="relative h-20 sm:h-24 md:h-32 border-[2px] md:border-[3px] border-black overflow-hidden group cursor-crosshair bg-white transform-style-3d perspective-1000 z-10 hover:z-50"
                >
                  {/* Background Tech Image: More padding on mobile */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3 + (i % 3), ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full z-0"
                  >
                    <Image 
                      src={tool.img} 
                      alt={tool.name}
                      fill
                      unoptimized
                      className="absolute inset-0 w-full h-full object-contain p-4 md:p-6 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
                    />
                  </motion.div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-2 md:p-4 z-10 bg-white/40 group-hover:bg-black/90 transition-colors duration-300 transform-style-3d">
                    <span className="font-bebas text-lg md:text-3xl tracking-tight text-black group-hover:text-white transition-colors group-hover:translate-z-10">
                      {tool.name}
                    </span>
                  </div>
                  
                  {/* Black Flash Accent */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Branding Detail: Hidden on mobile to reduce clutter */}
        <div className="hidden md:flex absolute bottom-6 left-8 items-center gap-4 opacity-10">
          <span className="text-[10px] font-black tracking-[0.4em] text-black uppercase">
            Systems // 2026 // G Shahith
          </span>
          <div className="w-12 h-[2px] bg-black" />
        </div>
      </div>
    </section>
  )
}