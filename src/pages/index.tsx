import { ref, get, child } from "firebase/database";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { Navigation } from "@src/components/Navigation";
import { NavigationProvider } from "@src/contexts/NavigationContext";
import { db } from "@src/firebase";
import { Content } from "@src/sections/Content";
import { Header } from "@src/sections/Header";
import { Repository, Project, Skill } from "@src/types";
import { getStoredImage, notEmpty } from "@src/util";

const fetchRepository = async (name: string): Promise<Repository> => {
  const response = await fetch(
    `https://api.github.com/repos/logankuzyk/${name}`
  );
  if (!response.ok) {
    throw new Error("Failed to retrieve GitHub data - " + response.statusText);
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
  const projects = (
    await Promise.all(
      projectsNoRepos.map(async (project) => {
        try {
          const repo = await fetchRepository(project.repoName);

          if (!project.image) {
            return {
              ...project,
              repo,
            };
          } else {
            return {
              ...project,
              repo,
              image: await getStoredImage(
                "images/projects/" + project.repoName + "/" + project.image
              ),
            };
          }
        } catch {
          // TODO: make repo property optional,
          // so the projects will still be displayed if GitHub can't be reached.
          return undefined;
        }
      })
    )
  ).filter(notEmpty) as Project[];

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
  return (
    <NavigationProvider>
      <Navigation />
      <Header />
      <Content projectsData={projects} skillsData={skills} />
    </NavigationProvider>
  );
}
