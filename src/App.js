import React, { useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import { sectionIsVisible, aboutEntries } from "./data";

export default function App() {
 
  useEffect(() => (document.title = `<${aboutEntries.name}/>`), []);

  const { navigation, about, projects, skills, testimonials } =
    sectionIsVisible;
  return (
    <React.Fragment>
      <main className="text-gray-400 bg-gray-900 body-font scroll-smooth">
        {navigation && <Navbar />}
        {about && <About />}
        {projects && <Projects />}
        {skills && <Skills />}
        {testimonials && <Testimonials />}
      </main>
      <Footer/>
    </React.Fragment>
  );
}
