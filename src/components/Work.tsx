import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";
import ProjectModal from "./ProjectModal.tsx";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    // Disable pinning on mobile to allow scrolling
    if (window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Refresh ScrollTrigger after layout settles
    ScrollTrigger.refresh();

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCardClick = (project: typeof config.projects[0]) => {
    if (project.id === 1) {
      setIsModalOpen(true);
    } else if (project.id === 2) {
      window.open("https://aqua-cast-nu.vercel.app", "_blank");
    } else if (project.id === 3) {
      window.open("https://cyan-carbon-track-flow.base44.app", "_blank");
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <p className="work-subtitle">
          A collection of projects that showcase my passion for Artificial Intelligence, Machine Learning, and Full-Stack Development.
        </p>
        <div className="work-flex">
          {config.projects.slice(0, 3).map((project, index) => (
            <div 
              className="work-box hover-lift" 
              key={project.id} 
              onClick={() => handleCardClick(project)}
              style={{ cursor: "pointer" }}
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                
                <h4 className="work-section-title">Technology Stack</h4>
                <div className="work-badges">
                  {project.technologies.split(", ").map((tech, i) => (
                    <span key={i} className="work-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
          {/* See All Works Button */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all of my projects and creations</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                See All Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ProjectModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Work;
// touched
