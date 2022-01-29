import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

import bg from "../assets/images/bg.jpg";
import me from "../assets/images/me.jpg";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      height={480}
      overflow="hidden"
    >
      {/* Image container */}
      <Flex
        position="relative"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        top={0}
      >
        {/* Background image */}
        <Image
          display="block"
          src={bg}
          alt="View from Black Tusk in Garibaldi Provincial park."
          objectFit="cover"
          objectPosition="50%"
        />
        {/* Overlay */}
        <Flex
          width="100%"
          height="100%"
          position="absolute"
          // alignContent="center"
          justifyContent="center"
          flexDirection="column"
          bg="rgba(0, 0, 0, 0.4)"
        >
          <Flex
            width="auto"
            marginTop="auto"
            alignItems="center"
            flexDirection="column"
          >
            <Image
              display="flex"
              src={me}
              alt="Logan with two thumbs up in front of a Saturn V rocket."
              borderRadius="full"
              htmlWidth="20%"
              htmlHeight="20%"
            />
            <Text display="flex">Computer Science Student</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
