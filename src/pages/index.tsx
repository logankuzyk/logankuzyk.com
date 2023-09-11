import { Content } from "@src/components/Content";
import { Header } from "@src/components/Header";
import { Navigation } from "@src/components/Navigation";
import { NavigationProvider } from "@src/contexts/NavigationContext";
import { Repository, Project, Skill } from "@src/types";
import { db, storage } from "@src/firebase";
import { initFlowbite } from "flowbite";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import { ref, get, child } from "firebase/database";
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
  repositories: Repository[];
  projects: Project[];
  skills: Skill[];
}> = async () => {
  const dbRef = ref(db);

  const projectsSnapshot = await get(child(dbRef, "projects"));
  const projects = projectsSnapshot.val() as Project[];

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

  const repositories = await Promise.all(
    projects.map((project) => fetchRepository(project.repoName))
  );
  // get projects from firebase
  // get repositories from github
  // get skills from firebase

  return { props: { repositories, projects, skills } };
};

export default function Home({
  repositories,
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
