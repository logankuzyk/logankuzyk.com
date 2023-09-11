import Image from "next/image";
import React from "react";
import { Star } from "react-feather";
import GitHubButton from "react-github-btn";

import { Project } from "@src/types";

import { Card } from "./Card";
import { Chip } from "./Chip";

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  mainTech,
  image,
  repo,
}) => {
  const repoStars = repo.stargazers_count;
  const repoLink = repo.html_url || "";

  return (
    <Card>
      <div className="flex flex-row justify-center flex-wrap">
        {image && (
          <Image
            alt={`Project image for ${title}`}
            className="w-full"
            height="360"
            src={image}
            width="360"
          />
        )}
      </div>
      <div className="flex flex-row items-center gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <Star className="w-6 h-6 text-yellow-300" />
        <p className="text-xl">{repoStars}</p>
      </div>
      <div className="flex flex-row items-center flex-wrap gap-2">
        {mainTech.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>
      <p>{description}</p>
      <div className="flex items-center">
        <div>
          <GitHubButton href={repoLink}>Repository</GitHubButton>
        </div>
      </div>
    </Card>
  );
};
