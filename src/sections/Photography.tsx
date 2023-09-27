import classNames from "classnames";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React, { ReactEventHandler, useState } from "react";

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
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleClickCarousel: ReactEventHandler = (event) => {
    if (event.target === event.currentTarget) {
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className="flex-col">
      <p>
        {`I use my Unsplash page to share some of my favourite photos that I've
        taken. So far, my photos have `}
        <b>{unsplashStats.views.total}</b> views and{" "}
        <b>{unsplashStats.downloads.total}</b> downloads in total!
        <a
          className="flex items-center"
          href="https://unsplash.com/@logankuzyk"
          target="blank"
        >
          Check out all my photos on Unsplash
        </a>
      </p>
      <Card>
        <div className="flex justify-center max-w-full">
          <Carousel
            className={classNames({
              "fixed top-0 right-0 bottom-0 left-0": isFullscreen,
            })}
            indicators={false}
            onClick={handleClickCarousel}
          >
            {unsplashPhotos.map((photo) => {
              const height = 640;
              const aspectRatio = photo.width / photo.height;
              const width = height * aspectRatio;

              return (
                <div
                  className="transition-all duration-200 ease-in-out hover:brightness-75"
                  key={photo.id}
                  style={{
                    position: "relative",
                    //   width,
                    //   height,
                    // height: "auto",
                    //   height,
                    //   height: photo.height,
                    //   width: "100%",
                    height,
                    width,
                  }}
                >
                  <Image
                    alt={photo.alt_description}
                    blurDataURL={photo.urls.thumb}
                    //   objectFit="cover"
                    //   objectPosition="center"
                    src={photo.urls.regular}
                    fill
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </Card>
    </div>
  );
};
