import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      text: "HTML, CSS, JavaScript, React.js",
    },
    {
      title: "Backend Development",
      text: "Node.js, MongoDB, MySQL",
    },
    {
      title: "Programming Languages",
      text: "Python",
    },
    {
      title: "Tools and Version Control",
      text: "Git, GitHub",
    },
  ];

  return (
    <section className="section light">
      <div className="section-header">
        <p className="section-kicker">Capabilities</p>
        <h2 className="section-title">Skills</h2>
      </div>

      <div className="grid">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="glass-card skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
