import React, { useEffect, useCallback, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useNavigationContext } from "./NavigationContext";

export const Navigation: React.FC = () => {
  const iconHeight = 48;
  const {
    refs: { navigation },
    scrollTo,
  } = useNavigationContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAboveImage, setIsAboveImage] = useState<boolean>(true);
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const height = navigation?.current?.clientHeight || 0;

    if (scrollPosition + height >= window.innerHeight) {
      setIsAboveImage(false);
    } else {
      setIsAboveImage(true);
    }
  }, [navigation]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Flex
      ref={navigation}
      transition="all 0.5s ease"
      position="fixed"
      padding={4}
      width="100vw"
      bg={isAboveImage ? "rgba(0,0,0,0)" : "gray.100"}
      zIndex={1}
      boxShadow={isAboveImage ? "" : "md"}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <IconButton
          display="flex"
          _hover={{ color: isAboveImage ? "gray.300" : "gray.700" }}
          _active={{ color: isAboveImage ? "gray.500" : "gray.500" }}
          onClick={onOpen}
          variant="ghost"
          color={isAboveImage ? "gray.100" : "gray.900"}
          aria-label="Open drawer"
          icon={<HamburgerIcon fontSize={iconHeight} />}
          zIndex={2}
        />
        <Text
          display="flex"
          color={isAboveImage ? "rgba(0,0,0,0)" : "gray.900"}
          fontSize="xl"
          fontWeight="semibold"
        >
          Logan Kuzyk
        </Text>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <Button marginBottom={4} onClick={() => scrollTo("projects")}>
              Projects
            </Button>
            <Button marginBottom={4} onClick={() => scrollTo("experience")}>
              Experience
            </Button>
            <Button marginBottom={4} onClick={() => scrollTo("skills")}>
              Skills
            </Button>
            <Button marginBottom={4} onClick={() => scrollTo("connect")}>
              Contact
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
