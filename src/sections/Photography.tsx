import React from "react";

import { UnsplashPhoto, UnsplashProfile, UnsplashStatistics } from "@src/types";

interface PhotographyProps {
  unsplashStats: UnsplashStatistics;
  unsplashPhotos: UnsplashPhoto[];
  unsplashProfile: UnsplashProfile;
}

export const Photography: React.FC<PhotographyProps> = () =>
  //   {
  //   unsplashPhotos,
  //   unsplashProfile,
  //   unsplashStats,
  //   }
  {
    return (
      <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* {projects.map((project) => (
          <ProjectCard key={project.repoName} {...project} />
        ))} */}
        </div>
      </div>
    );
  };
