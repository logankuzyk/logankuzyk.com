import React from "react";

import { Skill } from "@src/types";

import { SkillCard } from "./SkillCard";

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-6">
      {skills.map((skill) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </div>
  );
};
