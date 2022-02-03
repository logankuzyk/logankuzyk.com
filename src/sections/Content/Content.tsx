import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import { useNavigationContext } from "../../components/NavigationContext";
import { Section } from "./Section";
import { Projects } from "../Projects/Projects";
import { Footer } from "./Footer";
import { Skills } from "../Skills/Skills";
import { Connect } from "../Connect/Connect";

export const Content: React.FC = () => {
  const {
    refs: { projects, experience, skills, connect },
  } = useNavigationContext();

  return (
    <Flex
      alignItems="left"
      justifyContent="center"
      flexDirection="column"
      rowGap={4}
      padding={[18, 18, 18, 20]}
    >
      <Section>
        <Heading ref={projects}>Projects</Heading>
        <Projects />
      </Section>
      <Section>
        <Heading ref={skills}>Skills</Heading>
        <Skills />
      </Section>
      <Section>
        <Heading ref={connect}>Connect</Heading>
        <Connect />
      </Section>
      <Footer />
    </Flex>
  );
};
