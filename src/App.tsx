import React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";

import { Navigation } from "./components/Navigation";
import { Content } from "./components/Content";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      flexShrink={0}
      maxWidth={"100vw"}
    >
      <Navigation />
      <Content />
    </Box>
  </ChakraProvider>
);
