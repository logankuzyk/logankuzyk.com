import { child, get, ref } from "firebase/database";
import React from "react";

import { SkillCard } from "@src/components/SkillCard";
import { db } from "@src/firebase";
import { Skill } from "@src/types";
import { getStoredImage } from "@src/util";

const fetchSkills = async (): Promise<Skill[]> => {
  const dbRef = ref(db);

  const skillsSnapshot = await get(child(dbRef, "skills"));
  const skillsNoImages = skillsSnapshot.val() as Skill[];
  const skills = await Promise.all(
    skillsNoImages.map(async (skill) => {
      if (skill.image) {
        const image = await getStoredImage("images/skills/" + skill.image);
        return { ...skill, image };
      } else {
        return skill;
      }
    })
  );

  return skills;
};

export async function Skills() {
  const skills = await fetchSkills();

  return (
    <div className="flex flex-row flex-wrap items-center gap-6">
      {skills.map((skill) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </div>
  );
}
