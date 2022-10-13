//N.B: This project is extended from https://lubbil.ngontinh24.com/article/how-to-build-a-portfolio-website-with-react

export const projects = [
  {
    title: "React Reserve",
    subtitle: "MERN Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-1.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-2.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "DevChat",
    subtitle: "React and Firebase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-3.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-4.gif",
    link: "https://reactbootcamp.com",
  },
];


export const testimonialsEntries = {
  testimonials: [
    {
      quote:
        "I worked with Ionut coordinating him at Redsharp and at this me he showed a strong conceptual and practical knowledge about SAP Fiori, SAP UI5 and JavaScript language development. He is obstinate, focused, time result and self-driven person. He knows how to work as a team and of course he is a very nice person.",
      image: "https://imgs.search.brave.com/-INoClalifNFBc3znEGQ4mEvwPaChilDatCYJweCXf4/rs:fit:250:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/bTNYZi12RzB3clln/eWU0Q0x5TWVnQUFB/QSZwaWQ9QXBp",
      name: "Franklin Ayres",
      role: "SAP Hana Solution Architect",
    }
  ],
  testimonialsDescription: 'In my journey I collaborated with a lot of people, I always tried to develop myself and learn as much as I could from everybody.'

};


 

//N.B: url to library: https://react-icons.github.io/react-icons/icons?name=si 
//TO.DO : change the pair order: skill -> icon.
 const skills = {
  //si icon name": skill
  SiTypescript: "Typescript",
  SiReact: "React",
  SiJavascript: "Javascript",
  SiCypress: "Cypress",
  SiNodedotjs: 'Nodejs',
  SiStyledcomponents: "Styled components",
  SiAmazonaws: "AWS services",
  SiDialogflow: "Dialog Flow",
  SiApachecordova: "Cordova",
  SiMongodb: "Mongo db",
  SiGit: 'Git',
  SiCsswizardry: "CSS",
  SiLaravel: "Laravel",
  SiSap: "SAPUI5",
  SiTestinglibrary: "React testing library"
}

export const skillsEntries = {
  skillsDescription: 'I can perform on frontend or on backend, but I have a better eye for frontend. My expertise covers different tools and technologies that rotate around the javascript ecosystem. Main stack is React and/or Node.',
  skills
};

export const aboutEntries = {
  aboutDescription: 'I can perform on frontend or on backend, but I have a better eye for frontend. My expertise covers different tools and technologies that rotate around the javascript ecosystem. Main stack is React and/or Node.',
  name: 'Chioran Ionut',
  aboutMotto: 'I help companies to build scallable products with identity.',
  aboutDescription: "Web developer, currently working as a full stack developer but with a better eye for frontend. My stack is react and or Node"
};

//N.B: Changing this will show or hide a section in the page.
export const sectionIsVisible = {
  about: true,
  contact: true,
  navigation: true,
  projects: true,
  skills: true,
  testimonials: true
}