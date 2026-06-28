import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

const SocialIcons = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResumeOpen(true);
  };
  
  return (
    <div className="icons-section">
      <a className="resume-button" href="#" onClick={handleResumeClick}>
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>

      {isResumeOpen && <ResumeModal onClose={() => setIsResumeOpen(false)} />}
    </div>
  );
};

export default SocialIcons;
