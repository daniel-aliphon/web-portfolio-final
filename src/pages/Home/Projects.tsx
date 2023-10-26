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
  return (
    <div
      id="Projects"
      className="space-y-20">
      <h1 className="text-6xl font-bold text-primary max-md:text-5xl max-sm:text-4xl">
        Projects
      </h1>

      <div className="flex justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col">
        <div className="h-96 w-full rounded-lg bg-[url('../assets/images/project1.png')] bg-cover bg-center bg-no-repeat p-7 outline outline-primary"></div>
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
      </div>

      <div className="flex justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col md:flex-row-reverse">
        <div className="h-96 w-full rounded-lg bg-[url('../assets/images/project2.png')] bg-cover bg-center bg-no-repeat p-7 outline outline-primary"></div>
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
      </div>
      <div className="flex justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col">
        <div className="h-96 w-full rounded-lg bg-[url('../assets/images/project3.png')] bg-cover bg-center bg-no-repeat p-7 outline outline-primary"></div>
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
      </div>

      <div className="flex justify-between gap-7 rounded-lg bg-dark-foreground max-md:flex-col md:flex-row-reverse">
        <div className="h-96 w-full rounded-lg bg-[url('../assets/images/project4.png')] bg-cover bg-center bg-no-repeat p-7 outline outline-primary"></div>
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
      </div>
    </div>
  );
};
