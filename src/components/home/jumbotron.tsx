import React from "react";
import { Flex, Box, Text, Button, useTheme } from "@chakra-ui/core";
import RobotSVG from "../../assets/robot.svg";
import styled from "styled-components";

const StyledRobot = styled(RobotSVG)`
  height: 90%;
  width: 50%;
`;

export const Jumbotron = () => {
  const customTheme = useTheme();
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Box>
        <Text fontSize="3xl" as="b">
          HKU Machine Learning Society
        </Text>
        <Text fontSize="lg">Analyse. Design. Build.</Text>
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
          <Button
            padding="8px 32px"
            background={customTheme.colors.transparent}
            border="1px solid"
            borderColor="primary"
            borderRadius={0}
            textTransform="uppercase"
            _hover={{ backgroundColor: "secondary" }}
          >
            Github
          </Button>
        </Flex>
      </Box>
      <StyledRobot />
    </Flex>
  );
};
