import React from "react";
import { Flex } from "@chakra-ui/react";

export const Card: React.FC = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      rowGap={2}
      borderRadius={8}
      borderColor="gray.200"
      borderWidth={1}
      padding={6}
      boxShadow="lg"
      flexWrap="wrap"
    >
      {children}
    </Flex>
  );
};
