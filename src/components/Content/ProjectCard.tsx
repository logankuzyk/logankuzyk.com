import React from "react";
import { Flex, Text, Spinner, Image } from "@chakra-ui/react";

import { useRepository } from "../../hooks/useRepository";
import { Project } from "../../types";
import { Chip } from "./Chip";

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  repoName,
  mainTech,
  link,
  image,
}) => {
  const repo = useRepository(repoName);

  if (repo.isLoading) {
    return <Spinner />;
  } else if (repo.data) {
    return (
      <Flex
        flexDirection="row"
        borderRadius={8}
        borderColor="gray.200"
        borderWidth={1}
        padding={6}
        boxShadow="lg"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Flex flexDirection="column">
          <Flex
            flexDirection="row"
            justifyContent="center"
            marginBottom={2}
            flexWrap="wrap"
          >
            {image ? <Image src={image} width={360} /> : <></>}
          </Flex>
          <Flex
            flexDirection="row"
            alignItems="center"
            marginBottom={2}
            flexWrap="wrap"
          >
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            {mainTech.map((tech) => (
              <Chip>{tech}</Chip>
            ))}
          </Flex>
          <Text>{description}</Text>
        </Flex>
      </Flex>
    );
  } else {
    //error
    return <></>;
  }
};
