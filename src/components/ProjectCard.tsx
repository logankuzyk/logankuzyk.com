import { Button } from "flowbite-react";
import React from "react";
import { GitHub } from "react-feather";

import { Project } from "@src/types";

import { Card } from "./Card";
import { Chip } from "./Chip";

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  mainTech,
  repo,
}) => {
  const repoLink = repo.html_url || "";

  return (
    <Card>
      <div className="flex flex-row items-center gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="flex flex-row items-center flex-wrap gap-2">
        {mainTech.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>
      <p>{description}</p>
      <div className="flex items-center">
        <Button color="nord">
          <a className="flex items-center" href={repoLink} target="blank">
            <GitHub className="w-4 h-4 mr-2" />
            <span>View on GitHub</span>
          </a>
        </Button>
      </div>
    </Card>
  );
};
