import React from "react";

import { Section } from "../components/Section";
import { useNavigationContext } from "../contexts/NavigationContext";
import {
  Project,
  Skill,
  UnsplashPhoto,
  UnsplashProfile,
  UnsplashStatistics,
} from "@src/types";

import { Connect } from "./Connect";
import { Footer } from "./Footer";
import { Photography } from "./Photography";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

interface ContentProps {
  projectsData: Project[];
  skillsData: Skill[];
  unsplashStats: UnsplashStatistics;
  unsplashPhotos: UnsplashPhoto[];
  unsplashProfile: UnsplashProfile;
}

export const Content: React.FC<ContentProps> = ({
  projectsData,
  skillsData,
  unsplashPhotos,
  unsplashProfile,
  unsplashStats,
}) => {
  const {
    refs: { projects, skills, connect },
  } = useNavigationContext();

  return (
    <div className="flex flex-col items-left justify-center gap-y-4 p-16">
      <Section>
        <h1 className="text-3xl font-bold" ref={projects}>
          Projects
        </h1>
        <Projects projects={projectsData} />
      </Section>
      <Section>
        <h1 className="text-3xl font-bold" ref={skills}>
          Skills
        </h1>
        <Skills skills={skillsData} />
      </Section>
      <Section>
        <h1 className="text-3xl font-bold" ref={skills}>
          Photography
        </h1>
        <Photography
          unsplashPhotos={unsplashPhotos}
          unsplashProfile={unsplashProfile}
          unsplashStats={unsplashStats}
        />
      </Section>
      <Section>
        <h1 className="text-3xl font-bold" ref={connect}>
          Connect
        </h1>
        <Connect />
      </Section>
      <Footer />
    </div>
  );
};
