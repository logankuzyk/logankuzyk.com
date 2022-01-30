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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  const iconHeight = 48;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAboveImage, setIsAboveImage] = useState<boolean>(true);
  const handleScroll = useCallback(() => {
    if (window.scrollY - iconHeight >= window.innerHeight) {
      setIsAboveImage(false);
    } else {
      setIsAboveImage(true);
    }
  }, [window.scrollY, window.innerHeight, iconHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

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
          <DrawerBody>
            <Text>Projects</Text>
            <Text>Experience</Text>
            <Text>Skills</Text>
            <Text>Contact</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
