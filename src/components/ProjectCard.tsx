import React from "react";
import GitHubButton from "react-github-btn";
import Image from "next/image";

// import { useRepository } from "../hooks/useRepository";
import { Project } from "@src/types";
import { Card } from "./Card";
import { Chip } from "./Chip";
import { Spinner } from "flowbite-react";

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  repoName,
  mainTech,
  link,
  image,
}) => {
  // const repo = useRepository(repoName);

  // if (repo.isLoading) {
  //   return <Spinner />;
  // } else {
  //   const repoStars = repo.data?.stargazers_count;
  //   const repoLink = repo.data?.html_url || "";

  return (
    <Card>
      <div className="flex flex-row justify-center flex-wrap">
        {/* {image ? (
          <Image
            alt={`Project image for ${title}`}
            src={image}
            width={360}
            className="w-full"
          />
        ) : (
          <></>
        )} */}
      </div>
      <div className="flex flex-row items-center gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
        {/* <StarIcon className="w-6 h-6 text-yellow-300" /> */}
        {/* <p className="text-xl">{repoStars}</p> */}
      </div>
      <div className="flex flex-row items-center flex-wrap gap-2">
        {mainTech.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>
      <p>{description}</p>
      <div className="flex items-center">
        <div>
          {/* <GitHubButton href={repoLink}>Repository</GitHubButton> */}
        </div>
      </div>
    </Card>
  );
};
// };
