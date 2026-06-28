import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";
import { useState } from "react";
import ProjectModal from "../components/ProjectModal.tsx";

const MyWorks = () => {
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
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <div 
            className="myworks-card hover-lift" 
            key={project.id} 
            data-cursor="disable"
            onClick={() => handleCardClick(project)}
            style={{ cursor: "pointer" }}
          >
            <div className="myworks-card-number">0{index + 1}</div>
            <div className="myworks-card-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              <div className="myworks-card-tech">
                {project.technologies.split(", ").map((tech, i) => (
                  <span key={i} className="work-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <ProjectModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default MyWorks;
