import React from "react";
import { aboutEntries } from "../data";

const Footer = () => (
  <footer className="bg-gray-800 md:sticky top-0 z-10 scroll-smooth scroll-smooth">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a
        href="https://github.com/chioranionutcatalin/portofolino"
        target="_blank"
        className="title-font font-medium text-white mb-4 md:mb-0 mr-1"
      >
        <i>© Copyright && powered by portofolino</i>
      </a>
      <span className="title-font font-medium text-white mb-4 md:mb-0">
        {`x ${aboutEntries.name}`}
      </span>
    </div>
  </footer>
);
export default Footer;