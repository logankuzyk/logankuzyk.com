import React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";

import { ProjectCard } from "./ProjectCard";
import { projects } from "../../assets/data/projects";

export const Projects: React.FC = () => {
  return (
    <Flex>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={6} flexWrap="wrap">
        {projects.map((project) => (
          <ProjectCard key={project.repoName} {...project} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
