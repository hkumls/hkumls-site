import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/core";
import RobotSVG from "../../assets/robot.svg";
import styled from "styled-components";
import { customTheme } from "../../theme";

const StyledRobot = styled(RobotSVG)`
  height: 90%;
  width: 50%;
`;

const StyledButton = styled(Button)<{ onlyBorder?: boolean }>`
  padding: 8px 32px;
  background: ${props =>
    !props.onlyBorder
      ? customTheme.colors.primary
      : customTheme.colors.transparent};
  border: ${props => props.onlyBorder && "1px solid"};
  border-color: ${props => props.onlyBorder && customTheme.colors.primary};
  text-transform: uppercase;
  border-radius: 0;
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
          <StyledButton mr={3} _hover={{ bg: customTheme.colors.secondary }}>
            Join Us
          </StyledButton>
          <StyledButton
            _hover={{ bg: customTheme.colors.secondary }}
            onlyBorder
          >
            Github
          </StyledButton>
        </Flex>
      </Box>
      <StyledRobot />
    </Flex>
  );
};
