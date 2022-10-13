import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { aboutEntries } from '../data';
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 scroll-smooth scroll-smooth">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            {`<${aboutEntries.name}/>`}
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
        <a
          href="https://github.com/chioranionutcatalin"
          target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <SiGithub className="w-4 h-4 ml-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/ionut-chioran-54a25a73/"
          target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <SiLinkedin className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
