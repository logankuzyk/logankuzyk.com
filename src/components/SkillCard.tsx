import Image from "next/image";
import React from "react";

import { Skill } from "@src/types";

import { Card } from "./Card";

export const SkillCard: React.FC<Skill> = ({ title, description, image }) => {
  return (
    <Card>
      <div className="flex flex-row justify-center flex-wrap items-center gap-4">
        {image && (
          <Image
            alt={`Image for ${title}`}
            height="50"
            src={image}
            width="50"
          />
        )}
        <div className="flex flex-col gap-2">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
};
