import { Heading } from "../../components/Heading";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../main";

export const Projects = () => {
  return (
    <div
      id="Projects"
      className="space-y-20">
      <Heading>Projects</Heading>
      {projects.map((project, i) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          thumbnail={project.thumbnail}
          description={project.description}
          techIcons={project.techIcons}
          i={i}
        />
      ))}
    </div>
  );
};
