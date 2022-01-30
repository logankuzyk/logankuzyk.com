import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";

import { useNavigationContext } from "../NavigationContext";
import { Section } from "./Section";

export const Content: React.FC = () => {
  const {
    refs: { content, projects, experience, skills, connect },
  } = useNavigationContext();

  return (
    <Flex
      ref={content}
      alignItems="left"
      justifyContent="center"
      flexDirection="column"
    >
      <Section>
        <Heading ref={projects}>Projects</Heading>
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
