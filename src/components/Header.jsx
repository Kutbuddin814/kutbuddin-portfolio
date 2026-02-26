import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="hero">
      <motion.div
        className="blob blob1"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob blob2"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-inner">
        <motion.span
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio 2026
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kutbuddin Shaikh
        </motion.h1>

        

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Focused on crafting modern, reliable web apps with clean UX and clear value.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a href="#project" className="btn">
            View Project
          </a>
          <a href="#resume" className="btn outline">
            View Resume
          </a>
        </motion.div>

        <div className="hero-badges">
          <span>Open to internships</span>
          <span>Goa, India</span>
          <span>Full stack basics</span>
        </div>
      </div>
    </header>
  );
}
