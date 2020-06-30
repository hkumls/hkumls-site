import React from "react";
import { Flex, Heading, Text, Box, useDisclosure } from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";
import { FiMenu } from "react-icons/fi";

import { routes } from "./routes";
import { MobileMenu } from "./mobileMenu";

export const NavItem = ({ text, id, locationHash, isSection }) => (
  <GatsbyLink to={isSection ? `/#${id}` : `/${id}`} key={id}>
    <Text
      color={locationHash === `#${id}` ? "selectedNavColor" : "white"}
      pr={5}
    >
      {text}
    </Text>
  </GatsbyLink>
);

export const Header: React.FC<{ location: any }> = ({ location }) => {
  const disclosure = useDisclosure();

  return (
    <Flex
      as="nav"
      p={[4, 6]}
      justifyContent="space-between"
      alignItems="center"
    >
      <GatsbyLink to="/">
        <Heading>HKUMLS</Heading>
      </GatsbyLink>
      <Flex display={["none", "flex"]}>
        {routes.map(route => (
          <NavItem
            id={route.id}
            text={route.text}
            locationHash={location.hash}
            key={route.id}
            isSection={route.section}
          ></NavItem>
        ))}
      </Flex>
      <Box
        as={FiMenu}
        size="32px"
        cursor="pointer"
        display={["flex", "none"]}
        onClick={disclosure.onOpen}
      />
      <MobileMenu disclosure={disclosure} location={location} />
    </Flex>
  );
};
