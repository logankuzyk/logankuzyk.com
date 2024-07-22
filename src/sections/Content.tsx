import React from "react";

import { Section } from "../components/Section";
import { useNavigationContext } from "../contexts/NavigationContext";

import { AboutMe } from "./AboutMe";
import { Archive } from "./Archive";
import { Connect } from "./Connect";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Photography } from "./Photography";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function Content() {
  const {
    refs: {
      projects,
      skills,
      connect,
      photography,
      about_me,
      archive,
      experience,
    },
  } = useNavigationContext();

  return (
    <div className="flex flex-col items-left justify-center gap-y-4 p-16 max-w-full">
      <Section ref={about_me}>
        <h1 className="text-3xl font-bold">About Me</h1>
        <AboutMe />
      </Section>
      <Section ref={projects}>
        <h1 className="text-3xl font-bold">Projects</h1>
        <Projects />
      </Section>
      <Section ref={experience}>
        <h1 className="text-3xl font-bold">Experience</h1>
        <Experience />
      </Section>
      <Section ref={skills}>
        <h1 className="text-3xl font-bold">Skills</h1>
        <Skills />
      </Section>
      <Section ref={photography}>
        <h1 className="text-3xl font-bold">Photography</h1>
        <Photography />
      </Section>
      <Section ref={archive}>
        <h1 className="text-3xl font-bold">Archive</h1>
        <Archive />
      </Section>
      <Section ref={connect}>
        <h1 className="text-3xl font-bold">Connect</h1>
        <Connect />
      </Section>
      <Footer />
    </div>
  );
}
