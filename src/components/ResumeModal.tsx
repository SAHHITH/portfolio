import "./styles/ResumeModal.css";

import { MdClose, MdDownload, MdOpenInNew } from "react-icons/md";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { config } from "../config";

interface Props {
  onClose: () => void;
}

const ResumeModal = ({ onClose }: Props) => {
  const [isClosing, setIsClosing] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  
  const resumeUrl = config.contact.resume;
  const isImage = resumeUrl.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;

  console.log("ResumeModal Mounted");
  console.log("Resume URL:", resumeUrl);
  console.log("Loading Resume...");

  useEffect(() => {
    // Check if the resume file actually exists
    fetch(resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) {
          console.error("Resume file not found at:", resumeUrl);
          setIsNotFound(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching resume:", err);
        setIframeError(true);
      });
  }, [resumeUrl]);



  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 400); // Wait for exit animation to complete
  };

  useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div
      className={`resume-modal-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`resume-modal-content ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <div className="resume-modal-title">
            <h2>Resume</h2>
          </div>
          <div className="resume-modal-actions">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-action-btn"
              title="Open in New Tab"
              data-cursor="disable"
            >
              <MdOpenInNew />
              <span>Open</span>
            </a>
            <a
              href={resumeUrl}
              download="G_Shahith_Resume.pdf"
              className="resume-action-btn"
              title="Download Resume"
              data-cursor="disable"
            >
              <MdDownload />
              <span>Download</span>
            </a>
            <button
              className="resume-action-btn resume-close-btn"
              onClick={handleClose}
              data-cursor="disable"
              title="Close"
            >
              <MdClose />
              <span>Close</span>
            </button>
          </div>
        </div>

        <div className="resume-modal-body">
          {isNotFound ? (
            <div className="resume-error-fallback" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '1.2rem' }}>
              Resume not found.
            </div>
          ) : isImage ? (
            <img
              src={resumeUrl}
              alt="Resume"
              className="resume-image"
              onError={() => {
                console.error("Image failed to load");
                setIframeError(true);
              }}
            />
          ) : (
            <>
              {iframeError ? (
                <div className="resume-error-fallback" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', gap: '20px' }}>
                  <p>Unable to preview the resume.</p>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-action-btn" data-cursor="disable">
                      <MdOpenInNew /> <span>Open Resume</span>
                    </a>
                    <a href={resumeUrl} download="G_Shahith_Resume.pdf" className="resume-action-btn" data-cursor="disable">
                      <MdDownload /> <span>Download Resume</span>
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src={resumeUrl}
                  title="Resume"
                  width="100%"
                  height="100%"
                  onError={() => {
                    console.error("Iframe failed to load");
                    setIframeError(true);
                  }}
                  style={{
                      border: "none",
                      width: "100%",
                      height: "100%"
                  }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ResumeModal;
