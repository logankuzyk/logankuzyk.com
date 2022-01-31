import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";

import { NavigationProvider } from "./NavigationContext";
import { theme } from "./theme";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Landing/Header";
import { Content } from "./components/Content/Content";

export const App: React.FC = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <NavigationProvider>
          <Navigation />
          <Header />
          <Content />
        </NavigationProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
