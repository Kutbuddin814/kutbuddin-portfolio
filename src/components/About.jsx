import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="section-header">
        <p className="section-kicker">Overview</p>
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="section-body">
        <p className="lead">
          I am a BCA final-year student from Goa with a strong foundation in web
          technologies. I enjoy building clean, user-friendly applications and
          improving them through thoughtful design and clear structure.
        </p>
      </div>
    </motion.section>
  );
}
