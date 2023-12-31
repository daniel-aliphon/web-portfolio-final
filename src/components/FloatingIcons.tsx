import {
  bootstrapIcon,
  cssIcon,
  figmaIcon,
  gitIcon,
  githubIcon,
  htmlIcon,
  javascriptIcon,
  nodeIcon,
  npmIcon,
  reactIcon,
  tailwindIcon,
  typescriptIcon,
  viteIcon,
  vsCodeIcon,
  chromeDevToolsIcon,
} from "../assets/icons";

export const FloatingIcons = () => {
  const iconsRow1 = [
    {
      name: "html icon",
      icon: htmlIcon,
      description: "HTML5",
      left: "left-[0%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-none",
    },
    {
      name: "figma icon",
      icon: figmaIcon,
      description: "FIGMA",
      left: "left-[17.5%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-none",
    },
    {
      name: "javascript icon",
      icon: javascriptIcon,
      description: "JAVASCRIPT",
      left: "left-[40%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-none",
    },
    {
      name: "css3 icon",
      icon: cssIcon,
      description: "CSS3",
      left: "left-[62.5%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-none",
    },

    {
      name: "typescript icon",
      icon: typescriptIcon,
      description: "TYPESCRIPT",
      left: "left-[85%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-none",
    },

    {
      name: "react icon",
      icon: reactIcon,
      description: "REACT",
      left: "left-[0%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "tailwind icon",
      icon: tailwindIcon,
      description: "TAILWIND-CSS",
      left: "left-[17.5%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "bootstrap icon",
      icon: bootstrapIcon,
      description: "BOOTSTRAP",
      left: "left-[40%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "vitejs icon",
      icon: viteIcon,
      description: "VITE",
      left: "left-[62.5%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "npm icon",
      icon: npmIcon,
      description: "NPM",
      left: "left-[85%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-8500",
    },

    {
      name: "git icon",
      icon: gitIcon,
      description: "GIT-VERSION CONTROL",
      left: "left-[0%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-17000",
    },
    {
      name: "github icon",
      icon: githubIcon,
      description: "GITHUB",
      left: "left-[17.5%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-17000",
    },
    {
      name: "node icon",
      icon: nodeIcon,
      description: "NODE",
      left: "left-[40%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-17000",
    },
    {
      name: "vs-code icon",
      icon: vsCodeIcon,
      description: "VISUAL STUDIO CODE",
      left: "left-[62.5%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-17000",
    },
    {
      name: "chrome-dev-tools icon",
      icon: chromeDevToolsIcon,
      description: "CHROME DEV TOOLS",
      left: "left-[85%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-17000",
    },
  ];
  return (
    <div>
      {iconsRow1.map((icon) => (
        <img
          key={icon.name}
          src={icon.icon}
          alt={icon.name}
          className={`max-md:hidden h-[15vw] w-[15vw] absolute -bottom-[15vw] ${icon.animation} ${icon.animationDelay} ${icon.left}`}
        />
      ))}
    </div>
  );
};
