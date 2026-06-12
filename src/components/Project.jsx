import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { handleButtonMouseMove } from "../utils/trackMouse";
import "../styles/Project.css";

const INITIAL_PROJECTS = [
  {
    id: 1,
    title: "Susegad Supplies",
    desc: "An e-commerce platform for selling authentic Goan products, featuring a customer storefront and a dedicated administrative operational management panel.",
    tags: ["E-commerce", "Customer Portal", "Admin Dashboard"],
    layout: "desktop", 
    links: [
      { label: "Customer Site", url: "https://susegad-supplies.vercel.app/shop" },
      { label: "Admin Panel", url: "https://susegad-supplies-admin.onrender.com/admin.html" }
    ],
    images: [
      "/susegad1.png", "/susegad2.png", "/susegad3.png", "/susegad4.png", "/susegad5.png",
      "/susegad1.png", "/susegad2.png", "/susegad3.png", "/susegad4.png", "/susegad5.png"
    ]
  },
  {
    id: 2,
    title: "OIBRE - Location-Based Service Platform",
    desc: "A geospatial application where users query nearby localized utilities, apply as service providers, and calculate accurate distance variations for clean job matchmaking.",
    tags: ["Location Services", "Provider Engine", "Distance Logic"],
    layout: "desktop", 
    links: [
      { label: "Customer App", url: "https://oibre-customer-frontend.vercel.app/" },
      { label: "Provider Web", url: "https://oibre-services-provider-web-fronten.vercel.app/" },
      { label: "Registration", url: "https://oibre-service-provider-frontend.vercel.app/" }
    ],
    images: [
      "/oibre1.png", "/oibre2.png", "/oibre3.png", "/oibre4.png", "/oibre5.png",
      "/oibre1.png", "/oibre2.png", "/oibre3.png", "/oibre4.png", "/oibre5.png"
    ]
  },
  {
    id: 3,
    title: "CodeNest – Freelance Mobile App",
    desc: "A native production-grade Flutter implementation developed to elegantly package and broadcast cross-platform solutions, client testimonials, and product feature structures directly to mobile targets.",
    tags: ["Flutter", "Mobile Engineering", "Architecture"],
    layout: "mobile", 
    links: [
      { label: "Download Android APK", url: "/CodeNestv1.2.apk", download: true }
    ],
    images: [
      "/codenest-1.jpeg", "/codenest-2.jpeg", "/codenest-3.jpeg",
      "/codenest-1.jpeg", "/codenest-2.jpeg", "/codenest-3.jpeg"
    ]
  }
];

export default function Project() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  return (
    <section id="project" className="projects-section-root">
      <div className="section-header">
        <p className="section-kicker">Featured work</p>
        <h2 className="section-title">Projects</h2>
        <span className="swipe-hint">Swipe cards left or right to see more projects</span>
      </div>

      <div className="swipe-stack-container">
        <AnimatePresence>
          {projects.map((proj, idx) => (
            <ProjectCard 
              key={proj.id}
              proj={proj}
              idx={idx}
              projects={projects}
              setProjects={setProjects}
              setSelectedImage={setSelectedImage}
            />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="close-modal" onClick={() => setSelectedImage(null)} aria-label="Close modal">
              ✕
            </button>
            <motion.img
              src={selectedImage}
              alt="Expanded view preview"
              className="modal-image"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const ProjectCard = ({ proj, idx, projects, setProjects, setSelectedImage }) => {
  const x = useMotionValue(0);
  
  const rotateRaw = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-240, 0, 240], [0, 1, 0]);

  const isFront = idx === projects.length - 1;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : proj.id % 2 === 0 ? 2.5 : -2.5;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 130) {
      const remaining = projects.filter((item) => item.id !== proj.id);
      setProjects(remaining);

      if (remaining.length === 0) {
        setTimeout(() => {
          setProjects(INITIAL_PROJECTS);
        }, 400); 
      }
    }
  };

  return (
    <motion.div
      className="shimmer-card swipe-project-card"
      style={{
        x,
        opacity,
        rotate,
        zIndex: idx,
        pointerEvents: isFront ? "auto" : "none",
        boxShadow: isFront
          ? "0 35px 70px -15px rgba(0, 0, 0, 0.5), 0 15px 25px -10px rgba(0, 0, 0, 0.35)"
          : "0 6px 14px rgba(0, 0, 0, 0.2)",
      }}
      animate={{
        scale: isFront ? 1 : 0.96 - (projects.length - 1 - idx) * 0.02,
        y: isFront ? 0 : (projects.length - 1 - idx) * -10,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.65}
      onDragEnd={handleDragEnd}
    >
      {/* FIXED: Background cards visibility hidden blocks the text from bleeding over */}
      <div className="card-inner" style={{ visibility: isFront ? "visible" : "hidden" }}>
        <div className={`project-split-layout layout-${proj.layout}`}>
          
          <div className="project-info">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-description">{proj.desc}</p>
            
            <div className="project-meta-colored">
              {proj.tags.map((t, i) => (
                <span key={i} className={`tag-custom-${i}`}>
                  {t}
                </span>
              ))}
            </div>

            <div className="project-action-wrapper">
              <div className="project-actions-row">
                {proj.links.map((lnk, i) => (
                  <a 
                    key={i} 
                    href={lnk.url} 
                    download={lnk.download}
                    target={lnk.download ? undefined : "_blank"} 
                    rel="noopener noreferrer" 
                    className={`btn ${lnk.download ? 'btn-download' : ''}`}
                    onMouseMove={handleButtonMouseMove}
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    <span>{lnk.label}</span>
                    {lnk.download && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="project-visuals-carousel" onPointerDown={(e) => e.stopPropagation()}>
            <div className="carousel-view-window">
              <div className="infinite-carousel-track">
                {proj.images.map((imgSrc, index) => (
                  <div className={`mockup-frame-${proj.layout}`} key={index}>
                    {proj.layout === "desktop" && (
                      <div className="browser-header-dots">
                        <span></span><span></span><span></span>
                      </div>
                    )}
                    <img
                      src={imgSrc}
                      alt={`${proj.title} Screen ${index + 1}`}
                      onClick={() => setSelectedImage(imgSrc)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};