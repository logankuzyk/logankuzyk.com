import React, { useMemo } from "react";

import { Project } from "../../types";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "shareddit",
        description:
          "A web application to generate PNG images from reddit submissions and comment threads.",
        repoName: "shareddit",
        link: "https://shareddit.com",
      },
    ],
    []
  );

  return (
    <>
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </>
  );
};
