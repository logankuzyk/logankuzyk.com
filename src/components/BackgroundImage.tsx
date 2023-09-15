import Image from "next/image";
import React, { useMemo } from "react";

type ImageMetadata = {
  description: string;
  src: string;
};

export const BackgroundImage: React.FC = () => {
  const metadata = useMemo((): ImageMetadata[] => {
    return [
      {
        description: "View from Black Tusk in Garibaldi Provincial park.",
        src: "https://images.unsplash.com/photo-1694204755832-f12405a71f06",
      },
    ];
  }, []);
  const image = useMemo(
    () => metadata[Math.floor(Math.random() * metadata.length)],
    [metadata]
  );

  return (
    <Image
      alt={image.description}
      className="block object-cover object-center brightness-50"
      layout="fill"
      src={image.src}
    />
  );
};
