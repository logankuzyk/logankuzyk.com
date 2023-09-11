import React from "react";

import { useNavigationContext } from "../contexts/NavigationContext";
import { Project, Skill } from "@src/types";

import { Connect } from "./Connect";
import { Footer } from "./Footer";
import { Projects } from "./Projects";
import { Section } from "./Section";
import { Skills } from "./Skills";


interface ContentProps {
  projectsData: Project[];
  skillsData: Skill[];
}

export const Content: React.FC<ContentProps> = ({
  projectsData,
  skillsData,
}) => {
  const {
    refs: { projects, skills, connect },
  } = useNavigationContext();

  return (
    <div className="flex flex-col items-left justify-center gap-y-4 p-16">
      <Section>
        <h1 ref={projects}>Projects</h1>
        <Projects projects={projectsData} />
      </Section>
      <Section>
        <h1 ref={skills}>Skills</h1>
        <Skills skills={skillsData} />
      </Section>
      <Section>
        <h1 ref={connect}>Connect</h1>
        <Connect />
      </Section>
      <Footer />
    </div>
  );
};
