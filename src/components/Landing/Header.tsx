import React, { useCallback } from "react";
import { Image, Text, Flex } from "@chakra-ui/react";

import { useNavigationContext } from "../../NavigationContext";
import { Background } from "./Background";

export const Header: React.FC = () => {
  const { scrollTo } = useNavigationContext();
  const handleViewMore = useCallback(() => {
    scrollTo("content");
  }, [scrollTo]);

  return (
    <Background handleViewMore={handleViewMore}>
      <Flex flexDirection="column" padding={12} textAlign="center">
        <Text
          fontSize="6xl"
          color="gray.100"
          textShadow="0px 1px 1px black"
          fontWeight="semibold"
        >
          Logan Kuzyk
        </Text>
        <Text fontSize="2xl" color="gray.200" textShadow="0px 1px 1px black">
          Computer Science Student
        </Text>
      </Flex>
      <Flex>
        <Image
          src="https://github.com/logankuzyk.png"
          alt="Logan's GitHub profile picture."
          borderRadius="full"
          htmlWidth={144}
        />
      </Flex>
    </Background>
  );
};
