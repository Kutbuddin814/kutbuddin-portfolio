import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { handleButtonMouseMove } from "../utils/trackMouse";
import "../styles/Resume.css";

export default function Resume() {
  const [showResume, setShowResume] = useState(false);

  // 1. Dynamic Motion Hooks for handling premium 3D Hover Tilt Effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map coordinates to subtle degrees of rotational transformation
  const rotateX = useTransform(mouseY, [-180, 180], [12, -12]);
  const rotateY = useTransform(mouseX, [-180, 180], [-12, 12]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const width = card.width;
    const height = card.height;
    
    // Find relative coordinates from center position point (0,0)
    const relativeX = e.clientX - card.left - width / 2;
    const relativeY = e.clientY - card.top - height / 2;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    // Return smooth animation transitions back to original baseline resting state
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="resume" className="resume-section-root">
      <div className="section-header">
        <p className="section-kicker">Credentials</p>
        <h2 className="section-title">Curriculum Vitae</h2>
      </div>

      <div className="resume-3d-perspective-wrapper">
        <motion.div
          className="resume-interactive-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setShowResume(true)}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {/* Internal Shimmer Surface Masking */}
          <div className="resume-card-glare" />
          
          <img
            src="/Kutbuddin_Shaikh_CV.png"
            alt="Kutbuddin Shaikh CV Preview Link"
            className="resume-image"
          />

          {/* Action indicator badge translating along Z-axis */}
          <div className="resume-hover-overlay">
            <span className="overlay-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              Quick View
            </span>
          </div>
        </motion.div>
      </div>

      <div className="resume-buttons">
        <a 
          href="/Kutbuddin_Shaikh_CV.pdf" 
          download 
          className="btn"
          onMouseMove={handleButtonMouseMove}
        >
          <span>Download Hardcopy PDF</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </a>
      </div>

      {/* Modern Elastic Full Viewport Scale Overlay */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
          >
            <button className="close-modal" onClick={() => setShowResume(false)} aria-label="Close overlay">
              ✕
            </button>
            <motion.img
              src="/Kutbuddin_Shaikh_CV.png"
              alt="Complete verified CV preview frame"
              className="modal-image resume-modal-target"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}