import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <button className="dark-toggle" onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>

      <Header />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Resume />
      <Contact />
    </div>
  );
}
