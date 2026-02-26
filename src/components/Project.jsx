import React from "react";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.section
      id="project"
      className="section light"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="section-header">
        <p className="section-kicker">Featured</p>
        <h2 className="section-title">Project</h2>
      </div>

      <motion.div className="glass-card project-card" whileHover={{ scale: 1.02 }}>
        <div className="project-content">
          <div>
            <h3>DualCare - Health Assistant</h3>
            <p className="muted">
              A web-based health assistant designed to support users with mental
              and physical health-related interactions.
            </p>
            <div className="project-meta">
              <span>Streamlit</span>
              <span>ML Model</span>
              <span>Chatbot</span>
            </div>
          </div>

          <div className="project-actions">
            <a
              href="https://mindeaseapp-eci77dyhuyvtrafwf8vwso.streamlit.app/"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
