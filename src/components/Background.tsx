import React, { useMemo } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { BackgroundImage } from "./BackgroundImage";

interface BackgroundProps {
  children: React.ReactNode;
  handleViewMore: () => void;
}

export const Background: React.FC<BackgroundProps> = ({
  children,
  handleViewMore,
}) => {
  const height = useMemo(() => window.innerHeight, []);

  return (
    <Flex
      alignContent="center"
      boxShadow="xl"
      position="relative"
      justifyContent="center"
      overflow="hidden"
      marginBottom={8}
    >
      {/* Image container */}
      <Flex
        position="relative"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        top={0}
        height={height}
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
          bg="rgba(0, 0, 0, 0.5)"
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
          <Button
            position="absolute"
            display="flex"
            alignSelf="center"
            variant="ghost"
            bottom={4}
            _hover={{ color: "gray.300" }}
            _active={{ color: "gray.500" }}
            color={"gray.100"}
            onClick={handleViewMore}
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text>View more</Text>
              <ChevronDownIcon />
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
