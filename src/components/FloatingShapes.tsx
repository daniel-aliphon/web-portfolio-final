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

export const FloatingShapes = ({ color }: { color: string }) => {
  // Rest of the code...
  const shapes = [
    {
      name: "html",
      icon: htmlIcon,
      description: "HTML5",
      left: "left-[0%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-0",
    },
    {
      name: "figma",
      icon: figmaIcon,
      description: "FIGMA",
      left: "left-[22.5%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-0",
    },
    {
      name: "javascript",
      icon: javascriptIcon,
      description: "JAVASCRIPT",
      left: "left-[45%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-0",
    },
    {
      name: "css3",
      icon: cssIcon,
      description: "CSS3",
      left: "left-[67.5%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-0",
    },

    {
      name: "typescript",
      icon: typescriptIcon,
      description: "TYPESCRIPT",
      left: "left-[90%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-0",
    },
  ];
  const shapes2 = [
    {
      name: "react",
      icon: reactIcon,
      description: "REACT",
      left: "left-[0%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "tailwind",
      icon: tailwindIcon,
      description: "TAILWIND-CSS",
      left: "left-[22.5%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "bootstrap",
      icon: bootstrapIcon,
      description: "BOOTSTRAP",
      left: "left-[45%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "vitejs",
      icon: viteIcon,
      description: "VITE",
      left: "left-[67.5%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-8500",
    },
    {
      name: "npm",
      icon: npmIcon,
      description: "NPM",
      left: "left-[90%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-8500",
    },
  ];
  const shapes3 = [
    {
      name: "git",
      icon: gitIcon,
      description: "GIT-VERSION CONTROL",
      left: "left-[0%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-16500",
    },
    {
      name: "github",
      icon: githubIcon,
      description: "GITHUB",
      left: "left-[22.5%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-clockwise",
      animationDelay: "animation-delay-16500",
    },
    {
      name: "node",
      icon: nodeIcon,
      description: "NODE",
      left: "left-[45%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-16500",
    },
    {
      name: "vs-code",
      icon: vsCodeIcon,
      description: "VISUAL STUDIO CODE",
      left: "left-[67.5%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-16500",
    },
    {
      name: "chrome-dev-tools",
      icon: chromeDevToolsIcon,
      description: "CHROME DEV TOOLS",
      left: "left-[90%]",
      width: "w-[10%]",
      height: "h-[20%]",
      animation: "animate-float-anti_clockwise",
      animationDelay: "animation-delay-16500",
    },
  ];
  return (
    <div>
      <div className="grid absolute left-0 -bottom-[21vh] w-full grid-cols-5 place-items-center place-content-center">
        {shapes.map((shape) => (
          <img
            className={` animate-float-clockwise w-[10vw] h-[10vw] ${shape.animationDelay}`}
            src={shape.icon}
            alt={shape.name}
          />
        ))}
      </div>
      <div className="grid absolute left-0  -bottom-[21vh] w-full grid-cols-5 place-items-center place-content-center">
        {shapes2.map((shape) => (
          <img
            className={` animate-float-clockwise w-[10vw] h-[10vw] ${shape.animationDelay}`}
            src={shape.icon}
            alt={shape.name}
          />
        ))}
      </div>
      <div className="grid absolute left-0  -bottom-[21vh] w-full grid-cols-5 place-items-center place-content-center">
        {shapes3.map((shape) => (
          <img
            className={` animate-float-clockwise w-[10vw] h-[10vw] ${shape.animationDelay}`}
            src={shape.icon}
            alt={shape.name}
          />
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
  //     {shapes.map((shape) => (
  //       <div
  //         key={shape.name}
  //         className={`absolute grid place-content-center text-sm list-none -bottom-[200px] bg-transparent ${shape.animation} ${shape.width} ${shape.height} ${shape.left} ${shape.animationDelay}`}>
  //         <img src={shape.icon} />
  //       </div>
  //     ))}
  //     {/* <li
  //       className={`absolute flex list-nones animate-float-clockwise ${color} -bottom-[130px] w-[70px] h-[70px] leading-none line items-start flex-col justify-between left-[10%] animation-delay-18000 text-dark-text/70 text-xl p-[2px]`}>
  //       <span>CSS </span> IS<span>AWESOME</span>
  //     </li> */}
  //   </div>
  // );
};
