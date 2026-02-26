import React from "react";
import resumeImage from "../../public/kutbuddin_shaikh_Resume.png";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-header">
        <p className="section-kicker">Credentials</p>
        <h2 className="section-title">Resume</h2>
      </div>

      <div className="resume-container">
        <img
          src={resumeImage}
          alt="Kutbuddin Shaikh Resume"
          className="resume-image"
        />
      </div>

      <div className="resume-buttons">
        <a href={resumeImage} download="Kutbuddin_Shaikh_Resume.png" className="btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}
