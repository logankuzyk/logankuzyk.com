import Image from "next/image";
import React from "react";

import { Background } from "./Background";

export const Header: React.FC = () => {
  return (
    <Background>
      <div className="flex flex-col p-12 text-center">
        <h1 className="text-6xl text-gray-100 font-semibold text-shadow">
          Logan Kuzyk
        </h1>
        <p className="text-2xl text-gray-200 text-shadow">
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
