import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import "../styles/Contact.css";

export default function Contact() {
  const contactMethods = [
    { 
      label: "Email", 
      value: "kutbuddinshaikh814@gmail.com", 
      href: "mailto:kutbuddinshaikh814@gmail.com", 
      icon: "✉️",
      target: "_self"
    },
    { 
      label: "Phone", 
      value: "+91 9175869470", 
      href: "tel:+919175869470", 
      icon: "📱",
      target: "_self"
    },
    { 
      label: "GitHub", 
      value: "github.com/Kutbuddin814", 
      href: "https://github.com/Kutbuddin814", 
      icon: "💻",
      target: "_blank"
    },
  ];

  const mouseX = useMotionValue(Infinity);

  return (
    <section id="contact" className="contact-section-root">
      <div className="section-header">
        <p className="section-kicker">Get in touch</p>
        <h2 className="section-title">Contact Matrix</h2>
      </div>

      {/* Dock Mouse Tracking Zone Wrapper */}
      <div 
        className="contact-dock-zone"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <div className="contact-grid-deck">
          {contactMethods.map((method, idx) => (
            <ContactDockCard 
              key={idx} 
              mouseX={mouseX} 
              method={method} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactDockCard({ mouseX, method }) {
  const ref = useRef(null);

  // Measure center-relative physical coordinate distance from cursor pointer
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Structural dynamic transformations: Scale expands smoothly from 1.0 up to 1.08
  const scaleTransform = useTransform(distance, [-150, 0, 150], [1, 1.08, 1]);
  const opacityTransform = useTransform(distance, [-150, -75, 0, 75, 150], [0.9, 0.95, 1, 0.95, 0.9]);

  const scale = useSpring(scaleTransform, { damping: 20, stiffness: 280, mass: 0.08 });
  const opacity = useSpring(opacityTransform, { damping: 20, stiffness: 280, mass: 0.08 });

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="shimmer-card contact-dock-card"
      whileHover={{ y: -6, zIndex: 10 }}
    >
      <div className="card-inner">
        <div className="card-dock-glow" />
        
        {/* Icon Hub node matching squircle configurations */}
        <div className="contact-avatar-icon">
          <span className="contact-emoji-glyph">{method.icon}</span>
        </div>

        <div className="contact-details-box">
          <p className="contact-label">{method.label}</p>
          <a 
            className="contact-link" 
            href={method.href} 
            target={method.target}
            rel="noopener noreferrer"
          >
            {method.value}
          </a>
        </div>
      </div>
    </motion.div>
  );
}