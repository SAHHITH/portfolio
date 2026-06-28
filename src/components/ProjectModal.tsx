import "./styles/ProjectModal.css";
import { config } from "../config";
import { MdClose } from "react-icons/md";

interface Props {
  onClose: () => void;
}

const ProjectModal = ({ onClose }: Props) => {
  const project = config.projects[0]; // AI-Driven MetaHuman Chatbot

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} data-cursor="disable">
          <MdClose />
        </button>
        
        <div className="project-modal-header">
          <h2>{project.title}</h2>
          <p className="project-modal-category">{project.category}</p>
        </div>

        <div className="project-modal-image">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>

        <div className="project-modal-body">
          <div className="project-modal-section">
            <h3>Project Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="project-modal-section">
            <h3>Features</h3>
            <ul>
              {project.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-modal-section">
            <h3>Technology Stack</h3>
            <div className="project-modal-badges">
              {project.technologies.split(", ").map((tech, i) => (
                <span key={i} className="work-badge">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-modal-section">
            <h3>Architecture</h3>
            <p>
              The system utilizes Unreal Engine 5 for the MetaHuman frontend, connecting via WebSockets to a Python FastAPI backend. User speech is captured and processed through Speech-to-Text, sent to GPT-4 for natural language generation, and then synthesized back to audio using ElevenLabs TTS. The audio and animation data are streamed back to Unreal Engine for real-time lip-syncing and facial expressions.
            </p>
          </div>

          <div className="project-modal-section">
            <h3>Future Improvements</h3>
            <ul>
              <li>Implement memory and context retention for long-term conversations.</li>
              <li>Integrate vision capabilities for the avatar to see and react to the user.</li>
              <li>Optimize latency for near-instantaneous conversational response.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
// touched
