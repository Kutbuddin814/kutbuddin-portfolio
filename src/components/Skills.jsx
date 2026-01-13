import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { title: "Programming", text: "C, C++, Java, Python" },
    { title: "Web Development", text: "HTML, CSS, JavaScript, React, Node.js, PHP" },
    { title: "Tools & Database", text: "MySQL, GitHub, VS Code, Streamlit" }
  ];

  return (
    <section className="section light">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
