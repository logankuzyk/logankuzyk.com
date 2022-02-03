import React from "react";
import { Flex, Text, Spinner, Image } from "@chakra-ui/react";
import GitHubButton from "react-github-btn";
import { StarIcon } from "@chakra-ui/icons";

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
  } else {
    const repoStars = repo.data?.stargazers_count;
    const repoLink = repo.data?.html_url || "";

    return (
      <Flex
        flexDirection="row"
        borderRadius={8}
        borderColor="gray.200"
        borderWidth={1}
        padding={6}
        boxShadow="lg"
        flexWrap="wrap"
      >
        <Flex flexDirection="column" rowGap={2}>
          <Flex flexDirection="row" justifyContent="center" flexWrap="wrap">
            {image ? <Image src={image} width={360} /> : <></>}
          </Flex>
          <Flex flexDirection="row" alignItems="center" gap={2}>
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            <StarIcon color="yellow.300" />
            <Text fontSize="xl">{repoStars}</Text>
          </Flex>
          <Flex flexDirection="row" alignItems="center" flexWrap="wrap" gap={2}>
            {mainTech.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </Flex>
          <Text>{description}</Text>
          <Flex flexDirection="row" alignItems="center">
            <Flex>
              <GitHubButton href={repoLink}>Repository</GitHubButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
};
