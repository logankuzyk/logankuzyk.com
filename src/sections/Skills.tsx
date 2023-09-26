import React from "react";

import { SkillCard } from "@src/components/SkillCard";
import { Skill } from "@src/types";

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
