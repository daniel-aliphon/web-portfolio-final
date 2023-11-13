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
    href: "https://drive.google.com/file/d/1ynLsNnVaKPlu0s6PAWl1OyThTN-DjTJs/view?usp=drive_link",
    name: "RESUME",
    alt: "Resume Nav Link",
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
import { SmallText } from "../components/SmallText";
import { Underline } from "../components/Underline";
export const projects = [
  {
    name: "E-commerce Store-Front ",
    thumbnail: projectImages.projectImage1,
    description: (
      <SmallText>
        A <Underline> UI-focused </Underline>
        unbranded store-front created using mainly
        <Underline> ReactJS </Underline> and
        <Underline> Shadcn UI </Underline>. Minor NextJS usage for the
        dark/light theme handling. Carousels and sliders are a huge
        characteritic of this project implemented via
        <Underline> SplideJS </Underline> (slider component library).
      </SmallText>
    ),
    // shadcn, carousels api, creativeness, experimeental, e-commerce, nextjs theme selection, store front, semi-modern design layouts ui (a collection of reusable and customizable components built with RadixUI on-top of TailwindCSS)
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
    description: (
      <SmallText>
        A <Underline>UX focused</Underline> landing page of the popular (and my
        favourite) footwear brand - Nike. Created mainly using standard{" "}
        <Underline>ReactJS</Underline> and custom components styled via{" "}
        <Underline>TailwindCSS</Underline>. Color theme choice is stored locally
        (color-theme data persists even through cache clearing).
      </SmallText>
    ),
    // colorful, landing page, copy brand, personal fabourite, ui/ux design, customisation, responsive, local storage theme
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
    description: (
      <SmallText>
        My personal project/web-dev portfolio created from scratch using mainly{" "}
        <Underline>ReactJS</Underline> and custom components styled via{" "}
        <Underline>Tailwind-CSS</Underline>. Contact form functions using{" "}
        <Underline>EmailJS - API</Underline> , pseudo internal-CMS
        (main/index.ts).
      </SmallText>
    ),
    // 5th try, hero to body transition, floating icons, index.ts pseudo database, keyframes, animation, contact form, emailjs api, custom components with ts, ts config,
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
    demoUrl: "",
    sourceCodeUrl: "https://github.com/daniel-aliphon/web-portfolio-final",
    excludeViewBtn: true,
  },
  {
    name: "Sticky Notes Application",
    thumbnail: projectImages.projectImage4,
    description: (
      <SmallText>
        A simplistic 'sticky notes' application created from scratch using
        mainly <Underline> ReactJS</Underline>, styled via{" "}
        <Underline>standard CSS</Underline> and{" "}
        <Underline>TailwindCSS</Underline>. Much more{" "}
        <Underline>javascript heavy</Underline> as compared to my other mostly
        design focused projects. Use of <Underline>React Hooks</Underline> and{" "}
        <Underline> prop drilling</Underline> is very prominent in this project.
      </SmallText>
    ),
    // js/tech focused opposed to ui/ux, local storage, search bar, filter, customisation, responsive layout
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
