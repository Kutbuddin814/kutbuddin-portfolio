import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I am a BCA final-year student from Goa with a strong foundation in programming
        and web technologies. I enjoy building clean, user-friendly applications.
      </p>
    </motion.section>
  );
}
