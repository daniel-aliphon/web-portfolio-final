// GLOBAL IMPORTS

import { icons } from "../assets/icons";

// LINKS

export const navLinks = [
  {
    href: "#About",
    name: "ABOUT",
    alt: "About Me Nav Link",
  },
  {
    href: "#Projects",
    name: "PROJECTS",
    alt: "Projects Nav Link",
  },
  {
    href: "#Contact",
    name: "CONTACT",
    alt: "Contact Nav Link",
  },
  {
    href: "#Resume",
    name: "RESUME",
    alt: "Resume Nav Link",
  },

  {
    href: "#Blog",
    name: "BLOG",
    alt: "Blog post Nav Link",
  },
];

// TECH

export const techIcons = [
  {
    name: "html",
    icon: icons.htmlIcon,
    description: "HTML5",
  },
  {
    name: "css3",
    icon: icons.cssIcon,
    description: "CSS3",
  },

  {
    name: "javascript",
    icon: icons.javascriptIcon,
    description: "JAVASCRIPT",
  },

  {
    name: "typescript",
    icon: icons.typescriptIcon,
    description: "TYPESCRIPT",
  },

  {
    name: "react",
    icon: icons.reactIcon,
    description: "REACT",
  },
  {
    name: "figma",
    icon: icons.figmaIcon,
    description: "FIGMA",
  },
  {
    name: "tailwind",
    icon: icons.tailwindIcon,
    description: "TAILWIND-CSS",
  },
  {
    name: "bootstrap",
    icon: icons.bootstrapIcon,
    description: "BOOTSTRAP",
  },

  {
    name: "chrome-dev-tools",
    icon: icons.chromeDevToolsIcon,
    description: "CHROME DEV TOOLS",
  },
  {
    name: "vitejs",
    icon: icons.viteIcon,
    description: "VITE",
  },
  {
    name: "vs-code",
    icon: icons.vsCodeIcon,
    description: "VISUAL STUDIO CODE",
  },
  {
    name: "git",
    icon: icons.gitIcon,
    description: "GIT-VERSION CONTROL",
  },
  {
    name: "github",
    icon: icons.githubIcon,
    description: "GITHUB",
  },
  {
    name: "node",
    icon: icons.nodeIcon,
    description: "NODE.JS",
  },

  {
    name: "npm",
    icon: icons.npmIcon,
    description: "NODE PACKAGE MANAGER",
  },
];

// PROJECTS

import { projectImages } from "../assets/images";
export const projects = [
  {
    name: "E-commerce Store-Front ",
    thumbnail: projectImages.projectImage1,
    description:
      "shadcn, carousels api, creativeness, experimeental, e-commerce, nextjs theme selection, store front, semi-modern design",
    techIcons: [
      icons.htmlIcon,
      icons.cssIcon,
      icons.typescriptIcon,
      icons.shadcnIcon,
      icons.reactIcon,
      icons.nextjsIcon,
      icons.tailwindIcon,
      icons.nodeIcon,
      icons.chromeDevToolsIcon,
      icons.viteIcon,
    ],
    demoUrl: "https://daniel-aliphon.github.io/E-Commerce-Store-Front/",
    sourceCodeUrl:
      "https://github.com/daniel-aliphon/E-Commerce-Store-Front/tree/main/src",
  },
  {
    name: "Nike Landing Page ",
    thumbnail: projectImages.projectImage2,
    description:
      "colorful, landing page, copy brand, personal fabourite, ui/ux design, customisation, responsive, local storage theme",
    techIcons: [
      icons.htmlIcon,
      icons.cssIcon,
      icons.typescriptIcon,
      icons.reactIcon,
      icons.tailwindIcon,
      icons.nodeIcon,
      icons.npmIcon,
      icons.chromeDevToolsIcon,
      icons.viteIcon,
    ],
    demoUrl: "https://daniel-aliphon.github.io/nike-main-page-project/",
    sourceCodeUrl:
      "https://github.com/daniel-aliphon/nike-main-page-project/tree/main/src",
  },
  {
    name: "Personal Web Portfolio",
    thumbnail: projectImages.projectImage3,
    description:
      "5th try, hero to body transition, floating icons, index.ts pseudo database, keyframes, animation, contact form, emailjs api, custom components with ts, ts config, ",
    techIcons: [
      icons.htmlIcon,
      icons.cssIcon,
      icons.typescriptIcon,
      icons.reactIcon,
      icons.tailwindIcon,
      icons.nodeIcon,
      icons.npmIcon,
      icons.figmaIcon,
      icons.chromeDevToolsIcon,
      icons.viteIcon,
    ],
    demoUrl: "https://daniel-aliphon.github.io/E-Commerce-Store-Front/",
    sourceCodeUrl:
      "https://github.com/daniel-aliphon/E-Commerce-Store-Front/tree/main/src",
  },
  {
    name: "Sticky Notes Application",
    thumbnail: projectImages.projectImage4,
    description:
      "js/tech focused opposed to ui/ux, local storage, search bar, filter, customisation, responsive layout",
    techIcons: [
      icons.htmlIcon,
      icons.cssIcon,
      icons.typescriptIcon,
      icons.javascriptIcon,
      icons.reactIcon,
      icons.nodeIcon,
      icons.npmIcon,
      icons.chromeDevToolsIcon,
      icons.viteIcon,
    ],
    demoUrl: "https://daniel-aliphon.github.io/notes-react-app/",
    sourceCodeUrl:
      "https://github.com/daniel-aliphon/notes-react-app/tree/main/src",
  },
];
