import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";
import "./layout.css";

export const NavItem = ({ text, id, locationHash }) => (
  <GatsbyLink to={`#${id}`} key={id}>
    <Text
      color={locationHash === `#${id}` ? "selectedNavColor" : "white"}
      pr={5}
    >
      {text}
    </Text>
  </GatsbyLink>
);

export const Layout: React.FC<{ children: React.ReactNode; location: any }> = ({
  children,
  location,
}) => {
  const routes = [
    {
      id: "about",
      text: "About",
    },
    {
      id: "events",
      text: "Events",
    },
    {
      id: "team",
      text: "Team",
    },
    {
      id: "contact",
      text: "Contact",
    },
  ];
  return (
    <>
      <Flex as="nav" p={8} alignItems="center">
        <Box flex="1 1 auto">
          <GatsbyLink to="">
            <Heading>HKUMLS</Heading>
          </GatsbyLink>
        </Box>
        {routes.map(route => (
          <NavItem
            id={route.id}
            text={route.text}
            locationHash={location.hash}
            key={route.id}
          ></NavItem>
        ))}
      </Flex>
      <Box as="main" flexDirection="column" p={8}>
        {children}
      </Box>
    </>
  );
};
