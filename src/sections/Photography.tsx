import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

import { Card } from "@src/components/Card";
import { UnsplashPhoto, UnsplashProfile, UnsplashStatistics } from "@src/types";

interface PhotographyProps {
  unsplashStats: UnsplashStatistics;
  unsplashPhotos: UnsplashPhoto[];
  unsplashProfile: UnsplashProfile;
}

export const Photography: React.FC<PhotographyProps> = ({
  unsplashPhotos,
  unsplashStats,
}) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-6">
        <p>
          {`I use my Unsplash page to share some of my favourite photos that I've
        taken. So far, my photos have `}
          <b>{unsplashStats.views.total}</b> views and{" "}
          <b>{unsplashStats.downloads.total}</b> downloads in total!
        </p>
        <p>
          Here are my 10 most recent photos! Click on an image to view or
          download it from Unsplash.
        </p>
      </div>
      <Card>
        <div className="flex justify-center max-w-full">
          <Carousel indicators={false} slide={false}>
            {unsplashPhotos.map((photo) => {
              const height = 640;
              const aspectRatio = photo.width / photo.height;
              const width = height * aspectRatio;

              return (
                <div
                  className="flex relative h-full w-full justify-center items-center"
                  key={photo.id}
                >
                  <div className="relative flex">
                    <Image
                      alt={photo.alt_description}
                      blurDataURL={photo.urls.thumb}
                      className="flex"
                      height={height}
                      src={photo.urls.regular}
                      width={width}
                    />
                    <div className="flex flex-col absolute h-full w-full text-transparent hover:text-nord-6 hover:bg-black/20 transition-all duration-200 ease-in-out items-center justify-end p-4">
                      <p className="flex text-lg font-semibold">
                        {photo.description}
                      </p>
                      <a className="underline" href={photo.links.html}>
                        View on Unsplash →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </Card>
    </div>
  );
};
