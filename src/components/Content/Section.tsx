import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

export const Section: React.FC<FlexProps> = ({ children }) => {
  return (
    <Flex marginBottom={12} flexDirection="column" rowGap={6}>
      {children}
    </Flex>
  );
};
