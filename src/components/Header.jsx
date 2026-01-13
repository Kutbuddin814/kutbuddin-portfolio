import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="hero">
      {/* Animated background blobs */}
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

      {/* Main content */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Kutbuddin Shaikh
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Aspiring Software Developer
      </motion.p>

      <motion.p
        className="tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Passionate about learning, building, and improving modern web-based applications.
      </motion.p>

      <motion.div
        className="buttons"
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
    </header>
  );
}
