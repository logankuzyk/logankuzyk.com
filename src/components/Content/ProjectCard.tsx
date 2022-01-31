import React from "react";
import { Flex, Text, Spinner } from "@chakra-ui/react";

import { useRepository } from "../../hooks/useRepository";
import { Project } from "../../types";

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  repoName,
  link,
}) => {
  const repo = useRepository(repoName);

  if (repo.isLoading) {
    return <Spinner />;
  } else if (repo.data) {
    const { topics } = repo.data;
    console.log(repo.data.languages_url);

    return (
      <Flex
        flexDirection="row"
        borderRadius={8}
        borderColor="gray.200"
        borderWidth={2}
        padding={6}
        boxShadow="lg"
      >
        <Flex flexDirection="column">
          <Text fontSize="xl">{title}</Text>
          <Text>{description}</Text>
        </Flex>
        <Flex flexDirection="column">
          {topics.map((topic) => (
            <Text>{topic}</Text>
          ))}
        </Flex>
      </Flex>
    );
  } else {
    //error
    return <></>;
  }
};
