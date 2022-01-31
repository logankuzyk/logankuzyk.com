import React, { useMemo } from "react";
import { Image, Flex } from "@chakra-ui/react";

import tusk from "../../assets/images/tusk.jpg";
import creek from "../../assets/images/creek.jpg";
import elk from "../../assets/images/elk.jpg";
import meadow from "../../assets/images/meadow.jpg";
import strath from "../../assets/images/strath.jpg";
import summer from "../../assets/images/summer.jpg";
import sombrio from "../../assets/images/sombrio.jpg";
import capescott from "../../assets/images/capescott.jpg";

type ImageMetadata = {
  description: string;
  src: string;
};

export const BackgroundImage: React.FC = () => {
  const metadata = useMemo((): ImageMetadata[] => {
    return [
      {
        description: "View from Black Tusk in Garibaldi Provincial park.",
        src: tusk,
      },
      {
        description: "A nice morning looking into a valley near Lake Cowichan.",
        src: creek,
      },
      {
        description: "A peaceful morning, fishing from a kayak on Elk Lake.",
        src: elk,
      },
      {
        description:
          "One of the many surge channels on the coast between Nel's Bight and Cape Scott.",
        src: capescott,
      },
      {
        description:
          "Marble Meadows in Strathcona Park on a beautiful sunny day.",
        src: meadow,
      },
      {
        description:
          "Snowy mountains catching the sun on a perfect day in Stratchona Park, view from Mt. Albert Edward.",
        src: strath,
      },
      {
        description: "A tree glowing in the warm light of a summer evening.",
        src: summer,
      },
      {
        description:
          "A fun rock to climb, but not at high tide. Sombrio beach.",
        src: sombrio,
      },
    ];
  }, []);
  const image = useMemo(
    () => metadata[Math.floor(Math.random() * metadata.length)],
    [metadata]
  );

  return (
    <Flex width="100vw" height="100vh">
      <Image
        src={image.src}
        alt={image.description}
        display="block"
        objectFit="cover"
        objectPosition="50% 50%"
        width="100%"
      />
    </Flex>
  );
};
