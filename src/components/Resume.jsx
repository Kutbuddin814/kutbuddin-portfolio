import React, { useState } from "react";
import "./Resume.css";

export default function Resume() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="resume" className="section">
      <div className="section-header">
        <p className="section-kicker">Credentials</p>
        <h2 className="section-title">CV</h2>
      </div>

      <div className="resume-container">
        <img
          src="/Kutbuddin_Shaikh_CV.png"
          alt="Kutbuddin Shaikh CV"
          className="resume-image"
          onClick={() => setShowResume(true)}
        />
      </div>

      <div className="resume-buttons">
        <a
          href="/Kutbuddin_Shaikh_CV.pdf"
          download
          className="btn"
        >
          Download CV
        </a>
      </div>

      {showResume && (
        <div
          className="image-modal"
          onClick={() => setShowResume(false)}
        >
          <button
            className="close-modal"
            onClick={() => setShowResume(false)}
          >
            ✕
          </button>

          <img
            src="/Kutbuddin_Shaikh_CV.png"
            alt="CV Preview"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}