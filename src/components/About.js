import React from "react";
import { aboutEntries } from "../data";

export default function About() {
  const { name, aboutDescription, aboutMotto } = aboutEntries;
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center scroll-smooth">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm {name}.
          </h1>
          {aboutMotto && (
            <h3 className="title-font sm:text-2xl text-xl mb-2 font-medium text-white">
              {aboutMotto}
            </h3>
          )}
          {aboutDescription && (
            <p className="mb-8 leading-relaxed">{aboutDescription}</p>
          )}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
