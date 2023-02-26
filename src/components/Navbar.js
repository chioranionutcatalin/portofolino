import React from "react";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { DownloadIcon } from "@heroicons/react/solid";
import { aboutEntries, sectionIsVisible, headerInfoRight } from "../data";

export default function Navbar() {
  const navItems = Object.keys(sectionIsVisible);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 scroll-smooth scroll-smooth">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            {`<${aboutEntries.name}/>`}
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          {navItems.map((item) => {
            const show = sectionIsVisible[item] && item !== "navigation";
            return (
              show && (
                <a
                  href={`#${item}`}
                  className="mr-5 hover:text-white capitalize"
                >
                  {item}
                </a>
              )
            );
          })}
        </nav>

        {headerInfoRight.github.show && (
          <a
            href={headerInfoRight.github.link}
            target="_blank"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            <SiGithub className="w-4 h-4 ml-1" />
          </a>
        )}
        {headerInfoRight.linkdin.show && (
          <a
            href={headerInfoRight.linkdin.link}
            target="_blank"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            <SiLinkedin className="w-4 h-4 ml-1" />
          </a>
        )}
        {headerInfoRight.mail.show && (
          <a
            href={headerInfoRight.mail.link}
            target="_blank"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            <SiGmail className="w-4 h-4 ml-1" />
          </a>
        )}
        {headerInfoRight.googleDriveCvDownload.show && (
          <a
            href={headerInfoRight.googleDriveCvDownload.link}
            target="_blank"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            CV
            <DownloadIcon className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </header>
  );
}
