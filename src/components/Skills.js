import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skillsEntries } from "../data";
import * as SiIcons from "react-icons/si";

export default function Skills() {
  const { skills = null, skillsDescription = null} = skillsEntries;
  const SkillSectionIcon = SiIcons["SiKnowledgebase"];
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto scroll-smooth">
        <div className="text-center mb-20">
        <SkillSectionIcon className="w-10 inline-block mb-4 text-3xl"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills, Tools &amp; Technologies
          </h1>
          {skillsDescription && 
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {skillsDescription}
          </p>}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills && Object.entries(skills).map((skillRepresentation, index) => {
            //TO.DO: Extract logic into smaller component
            const SkillIcon = SiIcons[skillRepresentation[0]];
            const skillIconClass ='bg-yellow m-2 text-2xl';  
            return (
              <div key={`row-${index}-${skillRepresentation[1]}`} className="p-2 sm:w-1/3 w-full">
                <div className="bg-black rounded flex p-4 h-full items-center">  
                  {SkillIcon != undefined && <SkillIcon className={skillIconClass}/>}
                  <span className="title-font font-medium text-white m-2 text-2xl" >
                    {skillRepresentation[1]}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
