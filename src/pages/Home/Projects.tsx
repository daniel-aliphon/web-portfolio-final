import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../main";

export const Projects = () => {
  return (
    <div
      id="Projects"
      className="space-y-20">
      <h1 className="text-6xl font-bold text-primary max-md:text-5xl max-sm:text-4xl">
        Projects
      </h1>
      {projects.map((project, i) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          description={project.description}
          thumbnailUrl={project.thumbnailUrl}
          techIcons={project.techIcons}
          i={i}
        />
      ))}
    </div>
  );
};
