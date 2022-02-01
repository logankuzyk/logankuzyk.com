import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface ChipProps {
  children: string;
}

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <Flex
      borderRadius="full"
      bg="gray.200"
      padding={2}
      justifyContent="center"
      alignItems="center"
      marginLeft={2}
    >
      <Text color="gray.700" fontSize="xs">
        {children}
      </Text>
    </Flex>
  );
};
