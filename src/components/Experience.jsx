import React from "react";

export default function Experience() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Internship</h2>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Lenovo LEAP Next Gen AI Intern</h3>
            <p className="muted">June 2025 - July 2025</p>
          </div>
          <span className="pill">AI and Full Stack</span>
        </div>

        <ul className="experience-list">
          <li>Built an AI-powered health assistant web application.</li>
          <li>Integrated a chatbot and disease prediction model.</li>
          <li>Applied full stack development concepts using modern tools.</li>
        </ul>
      </div>
    </section>
  );
}
