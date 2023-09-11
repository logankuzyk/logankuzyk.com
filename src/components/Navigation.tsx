"use client";

import React, { useEffect, useCallback, useState } from "react";
import classNames from "classnames";
import { Button } from "flowbite-react";
import { Menu, X } from "react-feather";

import { useNavigationContext } from "../contexts/NavigationContext";

export const Navigation: React.FC = () => {
  const {
    refs: { navigation },
    scrollTo,
  } = useNavigationContext();
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
  console.log({ isAboveImage });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={navigation}
      className={`transition-all duration-500 ease-in-out fixed p-4 w-screen ${
        isAboveImage ? "bg-transparent" : "bg-gray-100 shadow-md"
      } z-10`}
    >
      <div
        className={classNames(
          "flex flex-row items-center justify-between w-full text-xl font-semibold",
          {
            "text-transparent": isAboveImage,
            "text-gray-900": !isAboveImage,
          }
        )}
      >
        <button
          className={classNames({ "text-gray-100": isAboveImage })}
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-toggle="drawer-example"
          aria-controls="drawer-example"
        >
          <Menu />
        </button>
        <span>Logan Kuzyk</span>
      </div>

      {/* <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <Button marginBottom={4} onClick={() => scrollTo("projects")}>
              Projects
            </Button>
            <Button marginBottom={4} onClick={() => scrollTo("skills")}>
              Skills
            </Button>
            <Button marginBottom={4} onClick={() => scrollTo("connect")}>
              Contact
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}

      {/* <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        data-drawer-target="drawer-example"
        data-drawer-toggle="drawer-example"
        aria-controls="drawer-example"
        onClick={toggleDrawer}
      >
        Show drawer
      </button> */}

      <div
        id="drawer-example"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          Navigation
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <X />
        </button>
        <Button className="mb-4 w-full" onClick={() => scrollTo("projects")}>
          Projects
        </Button>
        <Button className="mb-4 w-full" onClick={() => scrollTo("skills")}>
          Skills
        </Button>
        <Button className="mb-4 w-full" onClick={() => scrollTo("connect")}>
          Contact
        </Button>
      </div>
    </div>
  );
};
