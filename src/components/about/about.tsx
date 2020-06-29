import React, { FunctionComponent } from "react";
import { Flex, Text, Button } from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";

const descriptionContent =
  "The HKU Machine Learning Society is a group of student developers at The University of Hong Kong collaborating on a number of Machine Learning projects. We go from collecting raw data to developing polished applications that can make a remarkable impact in society. If you are interested in Machine Learning or Software, do not hesitate to join us!";

export const About: FunctionComponent = () => {
  return (
    <Flex
      align="center"
      mt={[4, 8, 12, 16]}
      p={[4, 6, 8, 10]}
      direction="column"
      textAlign="center"
      id="about"
    >
      <Text fontSize="3xl" as="b" p={5}>
        About
      </Text>
      <Text fontSize={["l", "l", "xl", "xl"]}> {descriptionContent} </Text>

      <Flex pt={2}>
        <Button
          padding="8px 32px"
          backgroundColor="primary"
          textTransform="uppercase"
          borderRadius={0}
          mr={3}
          _hover={{ backgroundColor: "secondary" }}
        >
          Join Us
        </Button>
        <GatsbyLink to="/team">
          <Button
            padding="8px 32px"
            backgroundColor="primary"
            textTransform="uppercase"
            borderRadius={0}
            mr={3}
            _hover={{ backgroundColor: "secondary" }}
          >
            The Team
          </Button>
        </GatsbyLink>
      </Flex>
    </Flex>
  );
};
