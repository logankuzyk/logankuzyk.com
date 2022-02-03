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
      {
        title: "Gecko for reddit",
        description:
          "A cross-platform reddit client written in React Native with a focus on efficient and logical navigation.",
        repoName: "gecko-for-reddit",
        mainTech: ["React Native", "TypeScript", "React Query"],
      },
      {
        title: "Discord Assignment Reminder Bot",
        description:
          "A Discord bot designed for the UVic Engineering & Computer Science server, to keep track of important dates for each course.",
        mainTech: ["Node.js", "Discord.js"],
        repoName: "discord-reminder-bot",
      },
    ],

    []
  );

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
