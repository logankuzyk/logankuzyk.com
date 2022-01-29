import React from "react";
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { Content } from "./components/Content";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Flex flexDirection="column" paddingX={400}>
      <Content />
    </Flex>
  </ChakraProvider>
);
