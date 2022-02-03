import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import { Skill } from "../../types";
import { Card } from "../../components/Card";

export const SkillCard: React.FC<Skill> = ({ title, description, image }) => {
  return (
    <Card>
      <Flex
        flexDirection="row"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        gap={4}
      >
        {image ? <Image src={image} width={50} /> : <></>}
        <Flex flexDirection="column" gap={2}>
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          {/* <Text>{description}</Text> */}
        </Flex>
      </Flex>
    </Card>
  );
};
