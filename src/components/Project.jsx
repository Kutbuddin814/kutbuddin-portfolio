import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Project.css";

export default function Project() {
  const [selectedImage, setSelectedImage] = useState(null);
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

      {/* Add spacing between project cards */}
      <div style={{ marginBottom: "2rem" }}></div>

      <motion.div className="glass-card project-card" whileHover={{ scale: 1.02 }}>
        <div className="project-content">
          <div>
            <h3>OIBRE - Location-Based Service Platform</h3>
            <p className="muted">
              A location-based service application where users can search for services,
              apply as service providers, and utilize distance-based calculations for
              efficient service matching.
            </p>
            <div className="project-meta">
              <span>Location-Based Services</span>
              <span>Service Provider Platform</span>
              <span>Distance Calculation</span>
            </div>
          </div>

          <div className="project-actions">
            <a
              href="https://oibre-customer-frontend.vercel.app/"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Customer App
            </a>
            <a
              href="https://oibre-services-provider-web-fronten.vercel.app/"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Service Provider Web
            </a>
            <a
              href="https://oibre-service-provider-frontend.vercel.app/"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Provider Registration
            </a>
          </div>
        </div>
      </motion.div>

      {/* Add spacing between project cards */}


      <motion.div className="glass-card project-card" whileHover={{ scale: 1.02 }}>
        <h3>CodeNest – Freelance Services Mobile App</h3>

        <p className="muted">
          A Flutter-based mobile application developed to showcase my freelance
          services, projects, skills, and portfolio. The app provides potential
          clients with an easy way to explore services and connect with me.
        </p>

        <div className="project-meta">
          <span>Flutter</span>
          <span>Mobile App</span>
          <span>Freelancing Platform</span>
        </div>

        <div className="project-actions">
          <a href="/CodeNestv1.2.apk" download className="btn">
            Download APK
          </a>
        </div>

        <div className="app-gallery">
          <img
            src="/codenest-1.jpeg"
            alt="CodeNest Home"
            onClick={() => setSelectedImage("/codenest-1.jpeg")}
          />

          <img
            src="/codenest-2.jpeg"
            alt="CodeNest Services"
            onClick={() => setSelectedImage("/codenest-2.jpeg")}
          />

          <img
            src="/codenest-3.jpeg"
            alt="CodeNest About"
            onClick={() => setSelectedImage("/codenest-3.jpeg")}
          />
        </div>
        {selectedImage && (
          <div
            className="image-modal"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Preview"
              className="modal-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}
