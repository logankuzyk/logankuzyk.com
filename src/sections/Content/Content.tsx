import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";

import { useNavigationContext } from "../../components/NavigationContext";
import { Section } from "./Section";
import { Projects } from "../Projects/Projects";

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
        <Heading ref={experience}>Experience</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          semper ornare metus non ultrices. Sed nisl lorem, varius nec blandit
          nec, sagittis sit amet nunc. Suspendisse potenti. Aenean cursus nisi a
          laoreet tincidunt. Nulla tempus eget justo viverra facilisis. Maecenas
          vehicula feugiat elit, molestie semper nisi tempor pellentesque. Ut
          accumsan hendrerit interdum. Aenean lacus nunc, tempor interdum
          hendrerit id, convallis vitae ex. Mauris sit amet purus consectetur,
          tempus est in, cursus mi. Nunc sed dui a velit tempus rutrum. Nullam
        </Text>
      </Section>
      <Section>
        <Heading ref={skills}>Skills</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          semper ornare metus non ultrices. Sed nisl lorem, varius nec blandit
          nec, sagittis sit amet nunc. Suspendisse potenti. Aenean cursus nisi a
          laoreet tincidunt. Nulla tempus eget justo viverra facilisis. Maecenas
          vehicula feugiat elit, molestie semper nisi tempor pellentesque. Ut
          accumsan hendrerit interdum. Aenean lacus nunc, tempor interdum
          hendrerit id, convallis vitae ex. Mauris sit amet purus consectetur,
          tempus est in, cursus mi. Nunc sed dui a velit tempus rutrum. Nullam
        </Text>
      </Section>
      <Section>
        <Heading ref={connect}>Connect</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          semper ornare metus non ultrices. Sed nisl lorem, varius nec blandit
          nec, sagittis sit amet nunc. Suspendisse potenti. Aenean cursus nisi a
          laoreet tincidunt. Nulla tempus eget justo viverra facilisis. Maecenas
          vehicula feugiat elit, molestie semper nisi tempor pellentesque. Ut
          accumsan hendrerit interdum. Aenean lacus nunc, tempor interdum
          hendrerit id, convallis vitae ex. Mauris sit amet purus consectetur,
          tempus est in, cursus mi. Nunc sed dui a velit tempus rutrum. Nullam
        </Text>
      </Section>
    </Flex>
  );
};
