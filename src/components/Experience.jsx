import React from "react";
import { handleButtonMouseMove } from "../utils/trackMouse";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-section-root">
      <div className="section-header">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Internship</h2>
      </div>

      {/* Embedded same premium shimmer mechanics & glass frameworks */}
      <div className="experience-card shimmer-card">
        <div className="card-inner">
          <div className="experience-split-layout">
            
            <div className="experience-info">
              <div className="experience-header-row">
                <div>
                  <h3 className="experience-title">Lenovo LEAP Next Gen AI Intern</h3>
                  <p className="experience-date">June 2025 - July 2025</p>
                </div>
                <div className="experience-meta-colored">
                  <span className="tag-custom-0">AI & Web Development</span>
                </div>
              </div>

              <p className="experience-description-intro">
                Key Contributions &amp; Engineering Achievements:
              </p>

              <ul className="experience-list">
                <li>Built an AI-powered health assistant web application.</li>
                <li>Integrated a conversational chatbot layout alongside dynamic disease prediction models.</li>
                <li>Applied end-to-end full stack deployment pipelines across cloud providers.</li>
              </ul>
            </div>

            {/* Structured action wrapper inheriting your global custom button tracking layout */}
            <div className="project-action-wrapper">
              <div className="project-actions-row">
                <a
                  href="/certificate-Web-Development.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  onMouseMove={handleButtonMouseMove}
                >
                  <span>Web Dev Certificate</span>
                </a>
                <a
                  href="/certificate-Artificial-Intelligence.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary-outline"
                  onMouseMove={handleButtonMouseMove}
                >
                  <span>AI Certificate</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}