import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 20 }
    },
  };

  return (
    <section id="about" className="about-section-root">
      <div className="section-header">
        <p className="section-kicker">Overview</p>
        <h2 className="section-title">About Me</h2>
      </div>

      <motion.div 
        className="about-bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Main Strategic Overview Card */}
        <motion.div 
          className="clean-border-card bento-card card-main"
          variants={cardVariants}
          whileHover={{ y: -4 }}
        >
          <div className="card-inner">
            <div className="bento-badge">🚀 PARADIGM</div>
            <p className="lead">
              A recent Bachelor of Computer Applications (BCA) graduate from Goa focused on crafting modern, reliable full-stack web applications with clean UX and clear architectural value.
            </p>
          </div>
        </motion.div>

        {/* Core Focus Sub-Card */}
        <motion.div 
          className="clean-border-card bento-card card-sub"
          variants={cardVariants}
          whileHover={{ y: -4 }}
        >
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <span className="bento-icon">⚡</span>
            </div>
            <h3 className="bento-heading">Go faster</h3>
            <p className="bento-desc">
              Crafting accessible, reliable full-stack web architectures with absolute performance optimizations.
            </p>
          </div>
        </motion.div>

        {/* Location Sub-Card */}
        <motion.div 
          className="clean-border-card bento-card card-sub"
          variants={cardVariants}
          whileHover={{ y: -4 }}
        >
          <div className="card-inner">
            <div className="bento-icon-wrapper">
              <span className="bento-icon">📍</span>
            </div>
            <h3 className="bento-heading">Based In</h3>
            <p className="bento-desc">
              Operating out of Goa, India. Open to collaborating on high-impact local and remote opportunities.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}