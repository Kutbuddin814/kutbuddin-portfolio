import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/Loader.css';

const Loader = ({ onFinished }) => {
  const containerRef = useRef(null);
  const lightLeakRef = useRef(null);
  const coreFlashRef = useRef(null);
  const [statusText, setStatusText] = useState('SYSTEM_BOOT // SECURE_MODE');
  const [isCracked, setIsCracked] = useState(false);

  // 1. Ambient screen glitch loop on load
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (!isCracked && containerRef.current) {
        gsap.to(containerRef.current, {
          filter: `hue-rotate(${Math.random() * 20}deg) brightness(${1 + Math.random() * 0.15})`,
          duration: 0.05,
          yoyo: true,
          repeat: 1
        });
      }
    }, 1500);

    return () => clearInterval(glitchInterval);
  }, [isCracked]);

  // 2. Automatically trigger the blast sequence after 1.5 seconds
  useEffect(() => {
    const autoTimer = setTimeout(() => {
      handleScreenImpact();
    }, 1500); // Adjust this delay (in ms) to control how long it stays before exploding

    return () => clearTimeout(autoTimer);
  }, []);

  const handleScreenImpact = () => {
    setIsCracked(true);
    setStatusText('CRITICAL_OVERLOAD // SHIELD_BREACH');

    const tl = gsap.timeline({
      onComplete: () => {
        if (onFinished) onFinished();
      }
    });

    const shards = containerRef.current.querySelectorAll('.crack-shard');
    const lightningPaths = containerRef.current.querySelectorAll('.vector-fracture-line');

    // 1. IMPACT TRIGGER: Massive screen shake & flash
    tl.to(containerRef.current, {
      x: 'random(-15, 15)',
      y: 'random(-15, 15)',
      repeat: 8,
      yoyo: true,
      duration: 0.03,
      ease: 'none'
    })
    .to('.glass-shatter-matrix', { opacity: 1, duration: 0.01 }, '<')
    .to(coreFlashRef.current, { opacity: 1, scale: 2, duration: 0.05 }, '<')
    .to(coreFlashRef.current, { opacity: 0, duration: 0.4 })

    // 2. LIGHT BLEED: Energy flows through the custom vector pathways
    .fromTo(lightningPaths, 
      { strokeDashoffset: 1000 }, 
      { strokeDashoffset: 0, duration: 1.2, ease: 'power2.out' }, 
      '<=0.1'
    )
    .to(lightLeakRef.current, {
      opacity: 1,
      scale: 1.5,
      duration: 1.8,
      ease: 'sine.inOut'
    }, '<')
    .to(shards, {
      boxShadow: 'inset 0 0 40px rgba(0, 255, 234, 0.5)',
      duration: 1
    }, '<')

    // 3. PRESSURE WARP: Shards begin to separate in 3D depth space
    .to(shards, {
      z: 60,
      rotationX: 'random(-8, 8)',
      rotationY: 'random(-8, 8)',
      stagger: 0.03,
      duration: 1,
      ease: 'power1.inOut'
    })

    // 4. TOTAL REVEAL EXPLOSION: Shards blast outward towards the camera lens
    .to(lightLeakRef.current, {
      scale: 6,
      filter: 'blur(0px)',
      backgroundColor: '#ffffff',
      duration: 0.4,
      ease: 'power4.in'
    }, 'blast')
    .to(shards, {
      opacity: 0,
      z: 600,
      scale: 1.6,
      x: 'random(-600, 600)',
      y: 'random(-600, 600)',
      rotationZ: 'random(-90, 90)',
      duration: 0.7,
      ease: 'power3.in',
      stagger: 0.01
    }, 'blast')
    .to('.cyber-hud-elements', { opacity: 0, scale: 0.9, duration: 0.3 }, 'blast')

    // 5. CLEANUP HANDOFF
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.4
    });
  };

  return (
    <div 
      ref={containerRef} 
      className={`cracked-viewport-layer ${isCracked ? 'active-breach' : ''}`}
    >
      {/* Absolute Core Plasma Light */}
      <div ref={lightLeakRef} className="energy-light-leak"></div>
      <div ref={coreFlashRef} className="impact-core-flash"></div>

      {/* Cyberpunk HUD Interface Overlay */}
      <div className="cyber-hud-elements">
        <div className="hud-header-scan">CORE_MONITOR // NODE_09</div>
        <div className="hud-fault-text">{statusText}</div>
      </div>

      {/* 3D Vector Geometric Glass Matrix */}
      <div className="glass-shatter-matrix">
        
        {/* Neon Vector Crack Pathways */}
        <svg className="vector-fracture-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path className="vector-fracture-line" d="M50,50 L0,20 M50,50 L100,10 M50,50 L15,100 M50,50 L85,100 M50,50 L100,55 M50,50 L0,60" strokeDasharray="1000" />
        </svg>

        {/* Individual 3D Transform Shards */}
        <div className="crack-shard shard-1"></div>
        <div className="crack-shard shard-2"></div>
        <div className="crack-shard shard-3"></div>
        <div className="crack-shard shard-4"></div>
        <div className="crack-shard shard-5"></div>
        <div className="crack-shard shard-6"></div>
      </div>
    </div>
  );
};

export default Loader;