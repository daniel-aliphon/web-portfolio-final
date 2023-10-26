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
} from "../../assets/icons";
//
export const TechIcons = () => {
  const icons = [
    {
      name: "html",
      icon: htmlIcon,
      description: "HTML5",
    },
    {
      name: "css3",
      icon: cssIcon,
      description: "CSS3",
    },

    {
      name: "javascript",
      icon: javascriptIcon,
      description: "JAVASCRIPT",
    },

    {
      name: "typescript",
      icon: typescriptIcon,
      description: "TYPESCRIPT",
    },

    {
      name: "react",
      icon: reactIcon,
      description: "REACT",
    },
    {
      name: "figma",
      icon: figmaIcon,
      description: "FIGMA",
    },
    {
      name: "tailwind",
      icon: tailwindIcon,
      description: "TAILWIND-CSS",
    },
    {
      name: "bootstrap",
      icon: bootstrapIcon,
      description: "BOOTSTRAP",
    },

    {
      name: "chrome-dev-tools",
      icon: chromeDevToolsIcon,
      description: "CHROME DEV TOOLS",
    },
    {
      name: "vitejs",
      icon: viteIcon,
      description: "VITE",
    },
    {
      name: "vs-code",
      icon: vsCodeIcon,
      description: "VISUAL STUDIO CODE",
    },
    {
      name: "git",
      icon: gitIcon,
      description: "GIT-VERSION CONTROL",
    },
    {
      name: "github",
      icon: githubIcon,
      description: "GITHUB",
    },
    {
      name: "node",
      icon: nodeIcon,
      description: "NODE.JS",
    },

    {
      name: "npm",
      icon: npmIcon,
      description: "NODE PACKAGE MANAGER",
    },
  ];
  return (
    <>
      <div>
        <h1 className="mb-12 text-6xl font-bold text-primary max-md:text-5xl max-sm:text-4xl">
          Tech
        </h1>

        <div className="maxlg grid grid-cols-5 gap-[5vw] max-sm:grid-cols-3">
          {icons.map((icon) => (
            <div
              placeholder={icon.description}
              key={icon.name}
              className="relative grid place-items-center rounded-lg bg-dark-foreground shadow-xl transition-all before:absolute before:bottom-[90%] before:left-1/2 before:z-10 before:-translate-x-1/2 before:whitespace-nowrap before:rounded-lg before:bg-[#00000090] before:px-3 before:py-2 before:opacity-0 before:duration-700 before:content-[attr(placeholder)] hover:shadow-background/5 hover:before:opacity-100">
              <img
                className="rounded-lg transition-all duration-300 hover:scale-125"
                src={icon.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
