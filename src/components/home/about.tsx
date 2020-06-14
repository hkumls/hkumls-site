import React, { FunctionComponent } from "react";
import { Flex, Text, Button } from "@chakra-ui/core";

const descriptionContent =
  "The HKU Machine Learning Society is a group of student developers at The University of Hong Kong collaborating on a number of Machine Learning projects. We go from collecting raw data to developing polished applications that can make a remarkable impact in society. If you are interested in Machine Learning or Software, do not hesitate to join us!";

export const About: FunctionComponent = () => {
  return (
    <Flex
      align="center"
      mt={10}
      p={10}
      direction="column"
      textAlign="center"
      id="about"
    >
      <Text fontSize="3xl" as="b" p={5}>
        About
      </Text>
      <Text fontSize="xl"> {descriptionContent} </Text>
      <Button
        backgroundColor="primary"
        _hover={{ backgroundColor: "secondary" }}
        textTransform="uppercase"
        padding="8px 32px"
        m={5}
        borderRadius={0}
        maxWidth={40}
      >
        Join Us
      </Button>
    </Flex>
  );
};
