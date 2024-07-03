import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

import { Card } from "@src/components/Card";
import { UnsplashPhoto, UnsplashStatistics } from "@src/types";

// const fetchUnsplashProfile = async (): Promise<UnsplashProfile> => {
//   const response = await fetch(
//     `https://api.unsplash.com/users/logankuzyk?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&stats=true`
//   );
//   if (!response.ok) {
//     throw new Error(
//       "Failed to retrieve Unsplash profile - " + response.statusText
//     );
//   }
//   return response.json();
// };

const fetchUnsplashPhotos = async (): Promise<UnsplashPhoto[]> => {
  const response = await fetch(
    `https://api.unsplash.com/users/logankuzyk/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&stats=true`
  );
  if (!response.ok) {
    throw new Error(
      "Failed to retrieve Unsplash photos - " + response.statusText
    );
  }
  return response.json();
};

const fetchUnsplashStatistics = async (): Promise<UnsplashStatistics> => {
  const response = await fetch(
    `https://api.unsplash.com/users/logankuzyk/statistics?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
  );
  if (!response.ok) {
    throw new Error(
      "Failed to retrieve Unsplash photos - " + response.statusText
    );
  }
  return response.json();
};

export async function Photography() {
  // const unsplashProfile = await fetchUnsplashProfile();
  const unsplashPhotos = await fetchUnsplashPhotos();
  const unsplashStats = await fetchUnsplashStatistics();

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
                      <a
                        className="underline"
                        href={photo.links.html}
                        target="blank"
                      >
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
}
