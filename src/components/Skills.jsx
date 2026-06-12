import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Skills.css";

export default function Skills() {
  const techSkills = [
    { title: "Frontend Development", text: "HTML, CSS, JavaScript, React.js" },
    { title: "Backend Development", text: "Node.js, MongoDB, MySQL" },
    { title: "Mobile App Development", text: "Flutter, Dart" },
    { title: "Programming Languages", text: "Python, JavaScript" },
    { title: "Tools & Version Control", text: "Git, GitHub, VS Code" },
  ];

  const softSkills = [
    { title: "Problem-Solving", text: "Analytical thinking, debugging, and systematic troubleshooting." },
    { title: "Communication", text: "Clear written and verbal technical reporting and documentation." },
    { title: "Teamwork", text: "Agile collaboration, pair programming, and cross-functional synergy." },
  ];

  return (
    <section className="skills-section-modern">
      <div className="skills-header-container">
        <span className="skills-kicker-badge">Capabilities</span>
        <h2 className="skills-main-title">Skills Matrix</h2>
      </div>

      <div className="matrix-split-grid">
        <SkillHoverColumn
          id="tech"
          title="Technical Core"
          subtitle="Engineering & Architecture"
          skills={techSkills}
          accentColor="#6366f1"
        />

        <SkillHoverColumn
          id="soft"
          title="Interpersonal Core"
          subtitle="Collaboration & Strategy"
          skills={softSkills}
          accentColor="#10b981"
        />
      </div>
    </section>
  );
}

function SkillHoverColumn({ title, subtitle, skills, accentColor, id }) {
  // Mobile fallback state
  const [isMobileTapOpen, setIsMobileTapOpen] = useState(false);

  return (
    <div
      className={`matrix-column-deck ${isMobileTapOpen ? "mobile-forced-open" : ""}`}
      onClick={() => setIsMobileTapOpen(!isMobileTapOpen)}
    >
      {/* Master Core Card */}
      <div
        className="matrix-master-card"
        style={{ "--accent-clr": accentColor }}
      >
        <div className="master-card-glow" />
        <div className="master-card-info">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="master-interactive-trigger">
          <span className="trigger-status-text desktop-only">HOVER TO VIEW</span>
          <span className="trigger-status-text mobile-only">
            {isMobileTapOpen ? "TAP TO CLOSE" : "TAP TO VIEW"}
          </span>
          <div className="trigger-plus-icon">
            {/* On mobile, use state to switch characters; desktop relies on the CSS rotation */}
            <span className="mobile-only">{isMobileTapOpen ? "×" : "+"}</span>
            <span className="desktop-only">+</span>
          </div>
        </div>
      </div>

      {/* Dropdown deck */}
      <div className="matrix-cards-drop-zone">
        <div className="drop-zone-layout">
          {skills.map((skill, index) => (
            <motion.div
              key={`${id}-${index}`}
              className="matrix-sub-card"
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="sub-card-header">
                <h4>{skill.title}</h4>
              </div>
              <p className="sub-card-description">{skill.text}</p>

              <div className="metric-bar-track">
                <motion.div
                  className="metric-bar-fill"
                  style={{ backgroundColor: accentColor }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}