import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { handleButtonMouseMove } from "../utils/trackMouse";
import "../styles/Header.css";

export default function Header() {
  const badges = [
    { label: "Open to internships", icon: "💼" },
    { label: "Goa, India", icon: "📍" },
    { label: "Full stack basics", icon: "🚀" },
  ];

  const mouseX = useMotionValue(Infinity);
  const [isMobile, setIsMobile] = useState(false);

  // Safely manage screen dimension states
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initialize on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="hero">
      {/* Background Ambient Blobs */}
      <motion.div
        className="blob blob1"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob blob2"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-inner">
        <div className="hero-heading-wrapper">
          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio 2026
          </motion.span>

          <motion.h1
            className="hero-title shine-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kutbuddin Shaikh
          </motion.h1>
        </div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Focused on crafting modern, reliable web apps with clean UX and clear value.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a 
            href="#project" 
            className="btn" 
            onMouseMove={handleButtonMouseMove}
          >
            <span>View Projects</span>
          </a>
          <a 
            href="#resume" 
            className="btn outline" 
            onMouseMove={handleButtonMouseMove}
          >
            <span>View Curriculum Vitae</span>
          </a>
        </motion.div>

        {/* Outer Dock Wrapper */}
        <div 
          className="macro-dock-wrapper"
          onMouseMove={(e) => !isMobile && mouseX.set(e.pageX)}
          onMouseLeave={() => !isMobile && mouseX.set(Infinity)}
        >
          <motion.div 
            className="macro-dock-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {badges.map((badge, idx) => (
              <DockIcon key={idx} mouseX={mouseX} badge={badge} isMobile={isMobile} />
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  );
}

function DockIcon({ mouseX, badge, isMobile }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    if (isMobile) return 0;
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [48, 72, 48]);

  const width = useSpring(widthTransform, { damping: 14, stiffness: 220, mass: 0.08 });
  const height = useSpring(heightTransform, { damping: 14, stiffness: 220, mass: 0.08 });

  // Mobile layout bypasses the motion inline spring sizes entirely
  if (isMobile) {
    return (
      <div className="dock-item-wrapper-mobile">
        <div className="dock-icon-circle">
          <span className="dock-tooltip">{badge.label}</span>
          <span className="dock-emoji-glyph">{badge.icon}</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      className="dock-item-wrapper"
    >
      <span className="dock-tooltip">{badge.label}</span>
      <div className="dock-icon-circle">
        <span className="dock-emoji-glyph">{badge.icon}</span>
      </div>
    </motion.div>
  );
}