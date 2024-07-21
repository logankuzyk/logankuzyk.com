"use client";

import React from "react";
import { ChevronDown } from "react-feather";

import { useNavigationContext } from "@src/contexts/NavigationContext";

import { BackgroundImage } from "./BackgroundImage";

interface BackgroundProps {
  children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  const { scrollToContent } = useNavigationContext();

  return (
    <div className="flex items-center justify-center relative overflow-hidden shadow-xl">
      {/* Image container */}
      <div className="relative flex flex-col justify-center items-center top-0 h-screen w-screen">
        {/* Background image */}
        <BackgroundImage />
        {/* Overlay */}
        <div className="absolute w-full h-full flex flex-col justify-center">
          {/* Content container */}
          <div className="flex items-center justify-center flex-row flex-wrap-reverse">
            {children}
          </div>
          <button
            className="absolute flex self-center bottom-4 transition-all hover:brightness-90 active:brightness-75 text-nord-6 duration-200 ease-in-out"
            onClick={scrollToContent}
          >
            <ChevronDown size="36" />
          </button>
        </div>
      </div>
    </div>
  );
};
