import React from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';

const languageList = [
  'HTML & CSS3',
  'Javascript (Vanilla, ES6+)',
  'Typescript',
  'Styling (TailwindCSS, Styled Components)',
  'Node.js & Express',
  'SQL (MySQL, PostgreSQL)',
  'MongoDB (Mongoose)',
  'Front-end Tools (React, Redux, Next)',
  'Deployment Tools (Firebase, Heroku)'
];

const listlinks = [
  {
    text: 'About',
    href: '#about',
  },
  {
    text: 'Projects',
    href: '#projects',
  },
  {
    text: 'Contact',
    href: '#contact',
  }
];

const data = [
  {
    href: 'https://www.linkedin.com/in/alexanderhjlee',
    icon: <FaLinkedin className = 'socials' aria-label = 'Linked In'/>
  },
  {
    href: 'https://github.com/acerslee',
    icon: <FaGithub className = 'socials' aria-label = 'Github'/>
  },
  {
    href: 'mailto:ahjlee712@gmail.com',
    icon: <FaEnvelope className = 'socials' aria-label = 'Email'/>
  }
];

//these projects will be within the projects page
// const otherProjects = [
//   {
//     id: 1,
//     heading: 'Github Repo Dashboard',
//     tools: ['React-  ', 'Node.js-  ', 'Express-  ','Github Repo API'],
//     link: 'https://github.com/acerslee/github-repo'
//   }
// ];

export {
  languageList,
  listlinks,
  data
  // otherProjects,
};
