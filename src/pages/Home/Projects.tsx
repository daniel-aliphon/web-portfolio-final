import { Code2, Eye } from "lucide-react";
import {
  chromeDevToolsIcon,
  cssIcon,
  htmlIcon,
  nodeIcon,
  npmIcon,
  reactIcon,
  tailwindIcon,
  typescriptIcon,
  viteIcon,
} from "../../assets/icons";

export const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      thumbnailUrl: "url('../assets/images/project1.png')",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore beatae, facere cumque perspiciatis saepe, quisquam cupiditate nostrum enim aut quia, eaque placeat! Vel fugit sunt atque, rem numquam deserunt",
      techIcons: [
        chromeDevToolsIcon,
        cssIcon,
        htmlIcon,
        nodeIcon,
        npmIcon,
        reactIcon,
        tailwindIcon,
        typescriptIcon,
        viteIcon,
      ],
    },
    {
      name: "Project 2",
      thumbnailUrl: "url('../assets/images/project2.png')",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore beatae, facere cumque perspiciatis saepe, quisquam cupiditate nostrum enim aut quia, eaque placeat! Vel fugit sunt atque, rem numquam deserunt",
      techIcons: [
        chromeDevToolsIcon,
        cssIcon,
        htmlIcon,
        nodeIcon,
        npmIcon,
        reactIcon,
        tailwindIcon,
        typescriptIcon,
        viteIcon,
      ],
    },
    {
      name: "Project 3",
      thumbnailUrl: "url('../assets/images/project3.png')",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore beatae, facere cumque perspiciatis saepe, quisquam cupiditate nostrum enim aut quia, eaque placeat! Vel fugit sunt atque, rem numquam deserunt",
      techIcons: [
        chromeDevToolsIcon,
        cssIcon,
        htmlIcon,
        nodeIcon,
        npmIcon,
        reactIcon,
        tailwindIcon,
        typescriptIcon,
        viteIcon,
      ],
    },
    {
      name: "Project 4",
      thumbnailUrl: "url('../assets/images/project4.png')",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore beatae, facere cumque perspiciatis saepe, quisquam cupiditate nostrum enim aut quia, eaque placeat! Vel fugit sunt atque, rem numquam deserunt",
      techIcons: [
        chromeDevToolsIcon,
        cssIcon,
        htmlIcon,
        nodeIcon,
        npmIcon,
        reactIcon,
        tailwindIcon,
        typescriptIcon,
        viteIcon,
      ],
    },
  ];

  return (
    <div
      id="Projects"
      className="space-y-20">
      <h1 className="text-6xl font-bold text-primary max-md:text-5xl max-sm:text-4xl">
        Projects
      </h1>

      {projects.map((project, i) => (
        <div
          key={project.name}
          className={`flex ${
            i % 2 === 0 ? "flex-row-reverse" : ""
          } justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col max-md:gap-0 max-sm:gap-2`}>
          <div className="flex w-full flex-col justify-between pb-7 max-md:p-0 lg:pb-0">
            <div
              className={`w-full rounded-lg bg-[${project.thumbnailUrl}] bg-cover bg-center bg-no-repeat p-7 outline outline-primary h-full max-lg:h-60  max-md:h-96 max-sm:h-52`}></div>
            <div className="flex gap-7 text-primary max-md:hidden lg:hidden">
              <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 duration-300 hover:bg-primary hover:text-dark-text">
                View Live Demo <Eye />
              </button>
              <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 transition-all duration-300 hover:bg-primary hover:text-dark-text">
                View Source Code <Code2 />
              </button>
            </div>
          </div>

          <div
            className={`flex h-full w-full flex-col justify-between rounded-lg p-7 max-md:gap-7 max-sm:p-2 md:gap-7 ${
              i % 2 === 0 ? "md:pr-0" : " md:pl-0"
            }`}>
            <h1 className="text-3xl">{project.name}</h1>
            <p>{project.description}</p>

            <div className="max-sm:h-36">
              <p className="mb-3">Tools/Tech Used</p>
              <div className="flex h-12 justify-between max-sm:grid max-sm:grid-cols-5 max-sm:gap-y-1">
                {project.techIcons.map((techIcon) => (
                  <img
                    key={techIcon}
                    className="h-12 w-12"
                    src={techIcon}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-7 text-primary max-lg:hidden max-md:flex max-sm:flex-col">
              <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 duration-300 hover:bg-primary hover:text-dark-text">
                View Live Demo <Eye />
              </button>
              <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 transition-all duration-300 hover:bg-primary hover:text-dark-text">
                View Source Code <Code2 />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* project 1 */}

      {/* <div className="flex justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col">
        <div className="w-full rounded-lg bg-[url('../assets/images/project1.png')] bg-cover bg-center bg-no-repeat p-7 outline outline-primary max-md:h-96 max-sm:h-36"></div>
        <div className="flex h-full w-full flex-col justify-between rounded-lg p-7 max-md:gap-7 md:gap-7 md:pl-0">
          <h1 className="text-3xl">Project 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            tempore beatae, facere cumque perspiciatis saepe, quisquam
            cupiditate nostrum enim aut quia, eaque placeat! Vel fugit sunt
            atque, rem numquam deserunt.
          </p>
          <div>
            <p className="mb-3">Tools/Tech Used</p>
            <div className="flex h-12 justify-between">
              <img src={htmlIcon} />
              <img src={cssIcon} />
              <img src={typescriptIcon} />
              <img
                className="w-12"
                src={tailwindIcon}
              />
              <img src={reactIcon} />
              <img src={viteIcon} />
              <img src={chromeDevToolsIcon} />
              <img src={nodeIcon} />
              <img src={npmIcon} />
            </div>
          </div>

          <div className="flex gap-7 text-primary">
            <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 duration-300 hover:bg-primary hover:text-dark-text">
              View Live Demo <Eye />
            </button>
            <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 transition-all duration-300 hover:bg-primary hover:text-dark-text">
              View Source Code <Code2 />
            </button>
          </div>
        </div>
      </div> */}

      {/* project 2 */}

      {/* <div className="flex justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col md:flex-row-reverse">
        <div className="w-full rounded-lg bg-[url('../assets/images/project2.png')] bg-cover bg-center bg-no-repeat p-7 outline outline-primary max-md:h-96 max-sm:h-36"></div>
        <div className="flex h-full w-full flex-col justify-between rounded-lg p-7 max-md:gap-7 md:gap-7 md:pr-0">
          <h1 className="text-3xl">Project 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            tempore beatae, facere cumque perspiciatis saepe, quisquam
            cupiditate nostrum enim aut quia, eaque placeat! Vel fugit sunt
            atque, rem numquam deserunt.
          </p>
          <div>
            <p className="mb-3">Tools/Tech Used</p>
            <div className="flex h-12 justify-between">
              <img src={htmlIcon} />
              <img src={cssIcon} />
              <img src={typescriptIcon} />
              <img
                className="w-12"
                src={tailwindIcon}
              />
              <img src={reactIcon} />
              <img src={viteIcon} />
              <img src={chromeDevToolsIcon} />
              <img src={nodeIcon} />
              <img src={npmIcon} />
            </div>
          </div>

          <div className="flex gap-7 text-primary">
            <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 duration-300 hover:bg-primary hover:text-dark-text">
              View Live Demo <Eye />
            </button>
            <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 transition-all duration-300 hover:bg-primary hover:text-dark-text">
              View Source Code <Code2 />
            </button>
          </div>
        </div>
      </div> */}

      {/* project 3 */}
      {/* 
      <div className="flex justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col">
        <div className="w-full rounded-lg bg-[url('../assets/images/project3.png')] bg-cover bg-center bg-no-repeat p-7 outline outline-primary max-md:h-96 max-sm:h-36"></div>
        <div className="flex h-full w-full flex-col justify-between rounded-lg p-7 max-md:gap-7 md:gap-7 md:pl-0">
          <h1 className="text-3xl">Project 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            tempore beatae, facere cumque perspiciatis saepe, quisquam
            cupiditate nostrum enim aut quia, eaque placeat! Vel fugit sunt
            atque, rem numquam deserunt.
          </p>
          <div>
            <p className="mb-3">Tools/Tech Used</p>
            <div className="flex h-12 justify-between">
              <img src={htmlIcon} />
              <img src={cssIcon} />
              <img src={typescriptIcon} />
              <img
                className="w-12"
                src={tailwindIcon}
              />
              <img src={reactIcon} />
              <img src={viteIcon} />
              <img src={chromeDevToolsIcon} />
              <img src={nodeIcon} />
              <img src={npmIcon} />
            </div>
          </div>

          <div className="flex gap-7 text-primary">
            <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 duration-300 hover:bg-primary hover:text-dark-text">
              View Live Demo <Eye />
            </button>
            <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 transition-all duration-300 hover:bg-primary hover:text-dark-text">
              View Source Code <Code2 />
            </button>
          </div>
        </div>
      </div> */}

      {/* project 4 */}

      {/* <div className="flex justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col md:flex-row-reverse">
        <div className="w-full rounded-lg bg-[url('../assets/images/project4.png')] bg-cover bg-center bg-no-repeat p-7 outline outline-primary max-md:h-96 max-sm:h-36"></div>
        <div className="flex h-full w-full flex-col justify-between rounded-lg p-7 max-md:gap-7 md:gap-7 md:pr-0">
          <h1 className="text-3xl">Project 4</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            tempore beatae, facere cumque perspiciatis saepe, quisquam
            cupiditate nostrum enim aut quia, eaque placeat! Vel fugit sunt
            atque, rem numquam deserunt.
          </p>
          <div>
            <p className="mb-3">Tools/Tech Used</p>
            <div className="flex h-12 justify-between">
              <img src={htmlIcon} />
              <img src={cssIcon} />
              <img src={typescriptIcon} />
              <img
                className="w-12"
                src={tailwindIcon}
              />
              <img src={reactIcon} />
              <img src={viteIcon} />
              <img src={chromeDevToolsIcon} />
              <img src={nodeIcon} />
              <img src={npmIcon} />
            </div>
          </div>

          <div className="flex gap-7 text-primary">
            <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 duration-300 hover:bg-primary hover:text-dark-text">
              View Live Demo <Eye />
            </button>
            <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 transition-all duration-300 hover:bg-primary hover:text-dark-text">
              View Source Code <Code2 />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};
