import React, {useState, useEffect} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import {sectionIsVisible, aboutEntries} from "./data";

export default function App() {
  document.title = `<${aboutEntries.name}/>`
  const [count, setCount] = useState(0);

  useEffect(() => (
    document.title = `<${aboutEntries.name}/>`
  ), []);
  
  return (
    <main className="text-gray-400 bg-gray-900 body-font scroll-smooth">
      {sectionIsVisible.navigation && <Navbar />}
      {sectionIsVisible.about && <About />}
      {sectionIsVisible.projects && <Projects />}
      {sectionIsVisible.skills && <Skills />}
      {sectionIsVisible.testimonials &&<Testimonials />}
      {sectionIsVisible.contact && <Contact />}
    </main>
  );
}
