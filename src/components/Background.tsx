import React from "react";
import { Flex } from "@chakra-ui/react";

import { BackgroundImage } from "./BackgroundImage";

interface BackgroundProps {
  children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <Flex alignContent="center" justifyContent="center" overflow="hidden">
      {/* Image container */}
      <Flex
        position="relative"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        top={0}
        height="100vh"
      >
        {/* Background image */}
        <BackgroundImage />
        {/* Overlay */}
        <Flex
          width="100%"
          height="100%"
          position="absolute"
          justifyContent="center"
          flexDirection="column"
          bg="rgba(0, 0, 0, 0.4)"
        >
          {/* Content container */}
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            flexWrap="wrap-reverse"
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
