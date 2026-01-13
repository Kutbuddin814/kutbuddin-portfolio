import React from "react";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.section id="project" className="section light"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2>Featured Project</h2>
      <motion.div className="glass-card" whileHover={{ scale: 1.05 }}>
        <h3>DualCare – Health Assistant</h3>
        <p>
          A web-based health assistant designed to support users with
          mental and physical health-related interactions.
        </p>
        <a
          href="https://mindeaseapp-eci77dyhuyvtrafwf8vwso.streamlit.app/"
          target="_blank"
          className="btn"
        >
          Live Demo
        </a>
      </motion.div>
    </motion.section>
  );
}
