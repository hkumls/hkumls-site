import React, { useState } from "react";
import { Flex, Heading, Text, Box, useDisclosure } from "@chakra-ui/core";
import { Link as GatsbyLink } from "gatsby";
import { FiMenu } from "react-icons/fi";

import { routes } from "./routes";
import { MobileMenu } from "./mobileMenu";

export const NavItem = ({ text, id, location, isSection, updateLocation }) => (
  <GatsbyLink
    to={isSection ? `/#${id}` : `/${id}`}
    key={id}
    onClick={() => updateLocation(window.location.href)}
  >
    <Text color={location.endsWith(id) ? "selectedNavColor" : "white"} pr={5}>
      {text}
    </Text>
  </GatsbyLink>
);

export const Header: React.FC<{ location: any }> = ({ location }) => {
  const [curLocation, setCurLocation] = useState(location.href);
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
            location={curLocation}
            key={route.id}
            isSection={route.section}
            updateLocation={setCurLocation}
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
