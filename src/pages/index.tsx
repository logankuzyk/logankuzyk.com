import { ref, get, child } from "firebase/database";
import { initFlowbite } from "flowbite";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect } from "react";

import { Content } from "@src/components/Content";
import { Header } from "@src/components/Header";
import { Navigation } from "@src/components/Navigation";
import { NavigationProvider } from "@src/contexts/NavigationContext";
import { db } from "@src/firebase";
import { Repository, Project, Skill } from "@src/types";
import { getStoredImage } from "@src/util";

const fetchRepository = async (name: string): Promise<Repository> => {
  const response = await fetch(
    `https://api.github.com/repos/logankuzyk/${name}`
  );
  if (!response.ok) {
    throw new Error("Failed to contact GitHub API");
  }
  return response.json();
};

export const getStaticProps: GetStaticProps<{
  projects: Project[];
  skills: Skill[];
}> = async () => {
  const dbRef = ref(db);

  const projectsSnapshot = await get(child(dbRef, "projects"));
  const projectsNoRepos = projectsSnapshot.val() as Omit<Project, "repo">[];
  const projects = (await Promise.all(
    projectsNoRepos.map(async (project) => ({
      ...project,
      repo: await fetchRepository(project.repoName),
    }))
  )) as Project[];

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

  return { props: { projects, skills } };
};

export default function Home({
  projects,
  skills,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => initFlowbite(), []);

  return (
    <NavigationProvider>
      <Navigation />
      <Header />
      <Content projectsData={projects} skillsData={skills} />
    </NavigationProvider>
  );
}
