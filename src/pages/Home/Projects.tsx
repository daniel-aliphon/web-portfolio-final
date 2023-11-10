import { ArrowRight } from "lucide-react";
import { Heading } from "../../components/Heading";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../main";
import { SmallText } from "../../components/SmallText";
import { Underline } from "../../components/Underline";

export const Projects = () => {
  return (
    <div
      id="Projects"
      className="scroll-pt-96">
      <Heading>Projects</Heading>
      <SmallText className="mb-12">
        Presented below are projects I've undertaken, serving as tangible
        demonstrations of my competencies and overall experience in design & web
        development.{" "}
        <a
          href="https://github.com/daniel-aliphon?tab=repositories"
          target="_blank">
          <Underline>See All Project Repositories in Github</Underline>
          <ArrowRight className="inline" />
        </a>
      </SmallText>

      <div className="flex flex-col gap-40">
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
