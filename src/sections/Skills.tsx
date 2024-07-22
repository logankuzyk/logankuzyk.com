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
      My projects, work experience, and coursework have helped me build a wide
      range of technical skills. Here you can find most of the technologies I
      {"'"}ve become comfortable with and the projects where I used them.
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
}
