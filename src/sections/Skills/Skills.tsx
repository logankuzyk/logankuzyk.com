import React from "react";
import { Flex } from "@chakra-ui/react";

import { SkillCard } from "./SkillCard";
import { skills } from "../../assets/data/skills";

export const Skills: React.FC = () => {
  return (
    <Flex flexDirection="row" flexWrap="wrap" alignItems="center" gap={6}>
      {skills.map((skill) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </Flex>
  );
};
