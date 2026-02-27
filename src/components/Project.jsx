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
            <h3>Susegad Supplies</h3>
            <p className="muted">
              An e-commerce platform for selling authentic Goan products,
              featuring a customer storefront and a dedicated admin panel.
            </p>
            <div className="project-meta">
              <span>E-commerce</span>
              <span>Customer Portal</span>
              <span>Admin Dashboard</span>
            </div>
          </div>

          <div className="project-actions">
            <a
              href="https://susegad-supplies.vercel.app/shop"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Customer Site
            </a>
            <a
              href="https://susegad-supplies-admin.onrender.com/admin.html"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Admin Panel
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
