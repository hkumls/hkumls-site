import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { globalHistory } from "@reach/router";

const Nav = styled(Text)<{ route: string }>`
  color: "white";
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
        <Flex>
          <GatsbyLink to="#about">
            <Nav pr={2} route="about">
              About
            </Nav>
          </GatsbyLink>
          <GatsbyLink to="#events">
            <Nav pr={2} route="events">
              Events
            </Nav>
          </GatsbyLink>
          <GatsbyLink to="#contact">
            <Nav pr={2} route="contact">
              Contact
            </Nav>
          </GatsbyLink>
          <GatsbyLink to="/team">
            <Nav pr={2} route="team">
              Team
            </Nav>
          </GatsbyLink>
        </Flex>
      </Flex>
      <Flex flexDirection="column" p={8}>
        {children}
      </Flex>
    </div>
  );
};
