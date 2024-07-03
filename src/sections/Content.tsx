import React from "react";

import { Section } from "../components/Section";
import { useNavigationContext } from "../contexts/NavigationContext";

import { Connect } from "./Connect";
import { Footer } from "./Footer";
import { Photography } from "./Photography";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function Content() {
  const {
    refs: { projects, skills, connect },
  } = useNavigationContext();

  return (
    <div className="flex flex-col items-left justify-center gap-y-4 p-16 max-w-full">
      <Section>
        <h1 className="text-3xl font-bold" ref={projects}>
          Projects
        </h1>
        <Projects />
      </Section>
      <Section>
        <h1 className="text-3xl font-bold" ref={skills}>
          Skills
        </h1>
        <Skills />
      </Section>
      <Section>
        <h1 className="text-3xl font-bold" ref={skills}>
          Photography
        </h1>
        <Photography />
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
}
