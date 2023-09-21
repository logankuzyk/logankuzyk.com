import React from "react";

import { ProjectCard } from "@src/components/ProjectCard";
import { Project } from "@src/types";

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="flex">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.repoName} {...project} />
        ))}
      </div>
    </div>
  );
};
