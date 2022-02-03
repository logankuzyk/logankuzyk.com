import React from "react";
import { Icon, Flex, Text } from "@chakra-ui/react";
import { FaGithub, FaGitlab, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { Link } from "./Link";

export const Connect: React.FC = () => {
  return (
    <Flex flexDirection="row" flexWrap="wrap" gap={2} fontSize="sm">
      <Link href="mailto:logan@kuzyk.net">
        <Icon as={FaEnvelope} />
        <Text>logan@kuzyk.net</Text>
      </Link>
      <Link href="https://github.com/logankuzyk">
        <Icon as={FaGithub} />
        <Text>GitHub</Text>
      </Link>
      <Link href="https://gitlab.com/logankuzyk">
        <Icon as={FaGitlab} />
        <Text>GitLab</Text>
      </Link>
      <Link href="https://www.linkedin.com/in/logan-kuzyk-90648b132/">
        <Icon as={FaLinkedin} />
        <Text>LinkedIn</Text>
      </Link>
    </Flex>
  );
};
