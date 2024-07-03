import { get, ref, child } from "firebase/database";
import React from "react";

import { ProjectCard } from "@src/components/ProjectCard";
import { db } from "@src/firebase";
import { Project, Repository } from "@src/types";
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

const fetchProjects = async (): Promise<Project[]> => {
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

  return projects;
};

export async function Projects() {
  const projects = await fetchProjects();

  return (
    <div className="flex">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.repoName} {...project} />
        ))}
      </div>
    </div>
  );
}
