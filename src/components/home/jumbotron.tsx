import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/core";
import RobotSVG from "../../assets/robot.svg";
import styled from "styled-components";
import { customTheme } from "../../theme";

const StyledRobot = styled(RobotSVG)`
  height: 90%;
  width: 50%;
`;

export const Jumbotron = () => {
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
            background={customTheme.colors.primary}
            textTransform="uppercase"
            borderRadius={0}
            mr={3}
            _hover={{ bg: customTheme.colors.secondary }}
          >
            Join Us
          </Button>
          <Button
            padding="8px 32px"
            background={customTheme.colors.transparent}
            border="1px solid"
            borderColor={customTheme.colors.primary}
            borderRadius={0}
            textTransform="uppercase"
            _hover={{ bg: customTheme.colors.secondary }}
          >
            Github
          </Button>
        </Flex>
      </Box>
      <StyledRobot />
    </Flex>
  );
};
