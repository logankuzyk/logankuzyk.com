import React, { useCallback, useRef } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import { theme } from "./theme";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

export const App = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleViewMore = useCallback(() => {
    console.log(contentRef.current);
    if (contentRef && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Header handleViewMore={handleViewMore} />
      <Flex ref={contentRef}>
        <Content />
      </Flex>
    </ChakraProvider>
  );
};
