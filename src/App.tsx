import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { NavigationProvider } from "./NavigationContext";
import { theme } from "./theme";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <NavigationProvider>
      <Navigation />
      <Header />
      <Content />
    </NavigationProvider>
  </ChakraProvider>
);
