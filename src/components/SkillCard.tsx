import React from "react";
import Image from "next/image";

import { Skill } from "@src/types";
import { Card } from "./Card";

export const SkillCard: React.FC<Skill> = ({ title, description, image }) => {
  return (
    <Card>
      <div className="flex flex-row justify-center flex-wrap items-center gap-4">
        {image && (
          <Image
            alt={`Image for ${title}`}
            src={image}
            width={50}
            height={50}
          />
        )}
        <div className="flex flex-col gap-2">
          <h2>{title}</h2>
          {/* <Text>{description}</Text> */}
        </div>
      </div>
    </Card>
  );
};
