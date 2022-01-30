import React, { useEffect, useCallback, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useNavigationContext } from "../NavigationContext";

export const Navigation: React.FC = () => {
  const iconHeight = 48;
  const { scrollTo } = useNavigationContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAboveImage, setIsAboveImage] = useState<boolean>(true);
  const handleScroll = useCallback(() => {
    if (window.scrollY >= window.innerHeight) {
      setIsAboveImage(false);
    } else {
      setIsAboveImage(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Box position="fixed" zIndex={1} padding={4}>
      <IconButton
        _hover={{ color: isAboveImage ? "gray.300" : "gray.700" }}
        _active={{ color: isAboveImage ? "gray.500" : "gray.500" }}
        onClick={onOpen}
        variant="ghost"
        color={isAboveImage ? "gray.100" : "gray.900"}
        aria-label="Open drawer"
        icon={<HamburgerIcon fontSize={iconHeight} />}
      />
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
    </Box>
  );
};
