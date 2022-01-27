import React from "react";
import { Box } from "@chakra-ui/react";

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
  return (
    <Box
      display="flex"
      bg="gray.100"
      height="100vh"
      width={["100vw", "70vw"]}
      alignItems="center"
      justifyContent="center"
    >
      asdf
    </Box>
  );
};
