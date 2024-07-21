"use client";

import classNames from "classnames";
import { Button } from "flowbite-react";
import React, { useEffect, useCallback, useState } from "react";
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={classNames(
        "transition-all duration-200 ease-in-out fixed py-4 px-8 w-screen z-10",
        {
          "bg-transparent": isAboveImage,
          "shadow-md bg-nord-bg2": !isAboveImage,
        }
      )}
      ref={navigation}
    >
      <div
        className={classNames(
          "flex flex-row items-center justify-between w-full text-xl font-semibold",
          {
            "text-transparent": isAboveImage,
          }
        )}
      >
        <button
          aria-controls="drawer"
          className={classNames({
            "text-nord-6": isAboveImage,
          })}
          data-drawer-target="drawer"
          data-drawer-toggle="drawer"
          type="button"
        >
          <Menu />
        </button>
        <span className="transition-all duration-200 ease-in-out">
          Logan Kuzyk
        </span>
      </div>

      <div
        aria-labelledby="drawer-label"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-80 bg-nord-bg0 border-r border-nord-bg2 shadow-md"
        id="drawer"
      >
        <h5
          className="inline-flex items-center mb-4 text-base font-semibold"
          id="drawer-label"
        >
          Navigation
        </h5>
        <button
          aria-controls="drawer"
          className="rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center transition-all duration-200 ease-in-out bg-nord-bg0 hover:bg-nord-bg1 hover:shadow-lg hover:border hover:border-nord-bg2"
          data-drawer-hide="drawer"
          type="button"
        >
          <X />
        </button>
        <Button
          className="mb-4 w-full"
          color="nord"
          onClick={() => scrollTo("projects")}
        >
          Projects
        </Button>
        <Button
          className="mb-4 w-full"
          color="nord"
          onClick={() => scrollTo("skills")}
        >
          Skills
        </Button>
        <Button
          className="mb-4 w-full"
          color="nord"
          onClick={() => scrollTo("connect")}
        >
          Contact
        </Button>
      </div>
    </div>
  );
};
