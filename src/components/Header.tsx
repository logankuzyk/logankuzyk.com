import Image from "next/image";
import React from "react";

import { Background } from "./Background";

export const Header: React.FC = () => {
  return (
    <Background>
      <div className="flex flex-col p-12 text-center">
        <h1 className="text-6xl text-nord-5 font-semibold [text-shadow:_var(--nord-2)_2px_2px]">
          Logan Kuzyk
        </h1>
        <p className="text-2xl text-nord-5 text-shadow [text-shadow:_var(--nord-2)_2px_2px]">
          Computer Science Student
        </p>
      </div>
      <div className="flex">
        <Image
          alt="Logan's GitHub profile picture."
          className="rounded-full"
          height="144"
          src="https://github.com/logankuzyk.png"
          width="144"
        />
      </div>
    </Background>
  );
};
