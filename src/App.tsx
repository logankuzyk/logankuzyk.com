import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import { theme } from "./theme";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navigation />
    <Header />
    <Content />
  </ChakraProvider>
);
