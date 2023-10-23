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
} from "../assets";

export const FloatingIcons = () => {
  // Rest of the code...
  const iconsRow1 = [
    {
      name: "html",
      icon: htmlIcon,
      description: "HTML5",
      left: "left-[0%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-none",
    },
    {
      name: "figma",
      icon: figmaIcon,
      description: "FIGMA",
      left: "left-[17.5%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-none",
    },
    {
      name: "javascript",
      icon: javascriptIcon,
      description: "JAVASCRIPT",
      left: "left-[40%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-none",
    },
    {
      name: "css3",
      icon: cssIcon,
      description: "CSS3",
      left: "left-[62.5%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-none",
    },

    {
      name: "typescript",
      icon: typescriptIcon,
      description: "TYPESCRIPT",
      left: "left-[85%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-none",
    },

    {
      name: "react",
      icon: reactIcon,
      description: "REACT",
      left: "left-[0%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "tailwind",
      icon: tailwindIcon,
      description: "TAILWIND-CSS",
      left: "left-[17.5%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "bootstrap",
      icon: bootstrapIcon,
      description: "BOOTSTRAP",
      left: "left-[40%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "vitejs",
      icon: viteIcon,
      description: "VITE",
      left: "left-[62.5%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "npm",
      icon: npmIcon,
      description: "NPM",
      left: "left-[85%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-8500",
    },

    {
      name: "git",
      icon: gitIcon,
      description: "GIT-VERSION CONTROL",
      left: "left-[0%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-17000",
    },
    {
      name: "github",
      icon: githubIcon,
      description: "GITHUB",
      left: "left-[17.5%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-17000",
    },
    {
      name: "node",
      icon: nodeIcon,
      description: "NODE",
      left: "left-[40%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-17000",
    },
    {
      name: "vs-code",
      icon: vsCodeIcon,
      description: "VISUAL STUDIO CODE",
      left: "left-[62.5%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-17000",
    },
    {
      name: "chrome-dev-tools",
      icon: chromeDevToolsIcon,
      description: "CHROME DEV TOOLS",
      left: "left-[85%]",
      width: "w-[15vw]",
      height: "h-[15vw]",
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
          className={`max-md:hidden absolute -bottom-[15vw] ${icon.animation} ${icon.animationDelay} ${icon.width} ${icon.height} ${icon.left}`}
        />
      ))}
    </div>
  );
};
