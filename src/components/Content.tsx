import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
  return (
    <Flex
      bg="gray.100"
      alignItems="left"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading>Education</Heading>
      <Heading>Projects</Heading>
      <Heading>Work Experience</Heading>
    </Flex>
  );
};
