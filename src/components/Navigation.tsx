import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import bg from "../assets/images/bg.jpg";
import me from "../assets/images/me.jpg";

interface NavigationProps {}
export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <Box
      display="flex"
      height={["30vh", "100vh"]}
      width={["100vw", "30vw"]}
      alignContent="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Image container */}
      <Box
        position="relative"
        display="flex"
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
          height={[null, "100%"]}
          width={["100%", null]}
        />
        {/* Overlay */}
        <Box
          width="100%"
          height="100%"
          position="absolute"
          alignContent="center"
          justifyContent="center"
          flexDirection="column"
          bg="rgba(0, 0, 0, 0.2)"
        >
          <Image
            src={me}
            alt="Logan with two thumbs up in front of a Saturn V rocket."
            borderRadius="full"
            htmlWidth="20%"
            htmlHeight="20%"
          />
          <Text>Computer Science Student</Text>
        </Box>
      </Box>
    </Box>
  );
};
