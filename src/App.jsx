import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Loader from "./components/Loader"; // 1. Import the new Loader component
import "./styles/globals.css";
import "./styles/App.css";

export default function App() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true); // 2. Add loading state

  return (
    <div className={dark ? "app dark" : "app"}>
      {/* 3. Render the loader overlay if loading is true */}
      {loading && <Loader onFinished={() => setLoading(false)} />}

      {/* The rest of your portfolio stays intact */}
      <button 
        className="dark-toggle" 
        onClick={() => setDark(!dark)}
        aria-label="Toggle dark mode"
        style={{ zIndex: 10 }} // Ensures toggle button stays clickable after loading
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      <main>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}