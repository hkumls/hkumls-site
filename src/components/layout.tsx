import React from "react";
import { Flex, Link as ChakraLink, Text } from "@chakra-ui/core";
import styled from "styled-components";
import { customTheme } from "../theme";
import { Link as GatsbyLink } from "gatsby";

const NavLink = styled(ChakraLink)<{ route: string }>`
  padding-right: 8px;
  color: ${({ route }) =>
    window.location.pathname.split("/", 2)[1] == route
      ? customTheme.colors.selectedNavColor
      : "white"};
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Flex p={8} justifyContent="space-between">
        <GatsbyLink to="">
          <Text>HKUMLS</Text>
        </GatsbyLink>
        <div>
          <GatsbyLink to="#about">
            <NavLink route="about">About</NavLink>
          </GatsbyLink>
          <GatsbyLink to="#events">
            <NavLink route="events">Events</NavLink>
          </GatsbyLink>
          <GatsbyLink to="#contact">
            <NavLink route="contact">Contact</NavLink>
          </GatsbyLink>
          <GatsbyLink to="/team">
            <NavLink route="team">Team</NavLink>
          </GatsbyLink>
        </div>
      </Flex>
      <Flex flexDirection="column" p={8}>
        {children}
      </Flex>
    </div>
  );
};
