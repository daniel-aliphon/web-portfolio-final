import { ArrowRight } from "lucide-react";
import { Heading } from "../../components/Heading";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../main";
import { SmallText } from "../../components/SmallText";
import { Underline } from "../../components/Underline";

export const Projects = () => {
  return (
    <div>
      <Heading>Projects</Heading>
      <SmallText className="mb-7">
        <SmallText>View my most esteemed projects below. </SmallText>
        <a
          href="https://github.com/daniel-aliphon?tab=repositories"
          target="_blank">
          <Underline>See All Project Repositories in Github</Underline>
          <ArrowRight className="ml-4 inline" />
        </a>
      </SmallText>
      <div
        id="Projects"
        className="flex flex-col gap-40">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            thumbnail={project.thumbnail}
            description={project.description}
            techIcons={project.techIcons}
            i={i}
            demoUrl={project.demoUrl}
            souceCodeUrl={project.sourceCodeUrl}
            excludesViewBtn={project.excludeViewBtn}
          />
        ))}
      </div>
    </div>
  );
};
