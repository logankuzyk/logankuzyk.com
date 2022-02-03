import React from "react";
import { Flex } from "@chakra-ui/react";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export const Link: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Flex
        borderRadius="full"
        bg="gray.200"
        padding={2}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        gap={2}
      >
        {children}
      </Flex>
    </a>
  );
};
