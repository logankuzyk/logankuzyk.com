import React, { useMemo } from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";

import { Project } from "../../types";
import { ProjectCard } from "./ProjectCard";
import sharedditMacbook from "../../assets/images/shareddit/shareddit-macbook.png";

export const Projects: React.FC = () => {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "shareddit",
        description:
          "A web application to generate PNG images from reddit submissions and comment threads. First launched in Summer 2020, the project has improved greatly since its first iteration.",
        repoName: "shareddit",
        link: "https://shareddit.com",
        mainTech: ["React", "TypeScript", "Express.js", "Nginx"],
        image: sharedditMacbook,
      },
    ],
    []
  );

  return (
    <Flex>
      <SimpleGrid columns={2}>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
